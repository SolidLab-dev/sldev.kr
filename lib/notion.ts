import { projects as fallbackProjects, type Project } from "@/data/projects";

const NOTION_API_BASE = "https://api.notion.com/v1";
const NOTION_VERSION = "2022-06-28";

export const PROJECTS_CACHE_TAG = "projects";
export const PROJECTS_REVALIDATE_SECONDS = 300;

interface NotionRichText {
  plain_text?: string;
}

interface NotionProperty {
  type?: string;
  title?: NotionRichText[];
  rich_text?: NotionRichText[];
  select?: { name?: string } | null;
  multi_select?: Array<{ name?: string }>;
  checkbox?: boolean;
  url?: string | null;
  number?: number | null;
}

interface NotionPage {
  id: string;
  properties: Record<string, NotionProperty>;
}

interface NotionQueryResponse {
  results: NotionPage[];
  has_more: boolean;
  next_cursor: string | null;
}

function readPlainText(prop?: NotionProperty): string {
  if (!prop) return "";
  if (prop.type === "title" && Array.isArray(prop.title)) {
    return prop.title.map((t) => t.plain_text ?? "").join("").trim();
  }
  if (prop.type === "rich_text" && Array.isArray(prop.rich_text)) {
    return prop.rich_text.map((t) => t.plain_text ?? "").join("").trim();
  }
  if (prop.type === "select") {
    return prop.select?.name?.trim() ?? "";
  }
  return "";
}

function getProperty(
  properties: Record<string, NotionProperty>,
  ...keys: string[]
): NotionProperty | undefined {
  for (const key of keys) {
    if (key in properties) return properties[key];
  }
  return undefined;
}

function parseProjectPage(
  page: NotionPage
): { project: Project; order: number } | null {
  const props = page.properties;

  const title = readPlainText(getProperty(props, "Title", "Name"));
  if (!title) return null;

  const rawCategory = getProperty(props, "Category")?.select?.name;
  const category: Project["category"] =
    rawCategory === "In Development" ? "In Development" : "Archived";

  const description = readPlainText(getProperty(props, "Description"));

  const techStack = (
    getProperty(props, "TechStack", "Tech Stack")?.multi_select ?? []
  )
    .map((item) => item.name?.trim())
    .filter((name): name is string => Boolean(name));

  const statusNote =
    readPlainText(getProperty(props, "StatusNote", "Status Note")) || undefined;

  const linkLabel =
    readPlainText(getProperty(props, "LinkLabel", "Link Label")) || "Live";
  const linkUrl = getProperty(props, "LinkURL", "Link URL")?.url?.trim();
  const githubUrl = getProperty(props, "GitHubURL", "GitHub URL")?.url?.trim();

  const links: { label: string; url: string }[] = [];
  if (linkUrl) {
    links.push({ label: linkLabel, url: linkUrl });
  }
  if (githubUrl && githubUrl !== linkUrl) {
    links.push({ label: "GitHub", url: githubUrl });
  }

  const orderProp = getProperty(props, "Order")?.number;
  const order =
    typeof orderProp === "number" && Number.isFinite(orderProp)
      ? orderProp
      : Number.MAX_SAFE_INTEGER;

  return {
    project: {
      title,
      category,
      description,
      techStack,
      ...(links.length > 0 ? { links } : {}),
      ...(statusNote ? { statusNote } : {}),
    },
    order,
  };
}

function normalizeNotionId(rawId: string): string {
  const cleaned = rawId.trim().replace(/-/g, "");
  if (cleaned.length !== 32) return rawId.trim();
  return `${cleaned.slice(0, 8)}-${cleaned.slice(8, 12)}-${cleaned.slice(
    12,
    16
  )}-${cleaned.slice(16, 20)}-${cleaned.slice(20)}`;
}

async function queryNotionDatabase(
  apiKey: string,
  databaseId: string
): Promise<NotionPage[]> {
  const normalizedId = normalizeNotionId(databaseId);
  const pages: NotionPage[] = [];
  let cursor: string | undefined;

  do {
    const response = await fetch(
      `${NOTION_API_BASE}/databases/${normalizedId}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Notion-Version": NOTION_VERSION,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filter: {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
          sorts: [
            {
              property: "Order",
              direction: "ascending",
            },
            {
              timestamp: "created_time",
              direction: "ascending",
            },
          ],
          ...(cursor ? { start_cursor: cursor } : {}),
        }),
        next: {
          revalidate: PROJECTS_REVALIDATE_SECONDS,
          tags: [PROJECTS_CACHE_TAG],
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Notion API error (${response.status}): ${errorText}`
      );
    }

    const data = (await response.json()) as NotionQueryResponse;
    pages.push(...data.results);
    cursor = data.has_more && data.next_cursor ? data.next_cursor : undefined;
  } while (cursor);

  return pages;
}

export async function getProjects(): Promise<Project[]> {
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!apiKey || !databaseId) {
    return fallbackProjects;
  }

  try {
    const pages = await queryNotionDatabase(apiKey, databaseId);
    const parsed = pages
      .map(parseProjectPage)
      .filter(
        (item): item is { project: Project; order: number } => item !== null
      )
      .sort((a, b) => a.order - b.order);

    return parsed.map((item) => item.project);
  } catch (error) {
    console.error("Failed to fetch projects from Notion:", error);
    return fallbackProjects;
  }
}
