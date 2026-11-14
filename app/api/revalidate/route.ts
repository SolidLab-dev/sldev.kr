import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { PROJECTS_CACHE_TAG } from "@/lib/notion";

function extractSecret(request: NextRequest): string | null {
  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    return authHeader.slice("Bearer ".length).trim();
  }

  const headerSecret = request.headers.get("x-revalidate-secret");
  if (headerSecret) {
    return headerSecret.trim();
  }

  return request.nextUrl.searchParams.get("secret");
}

function handleRevalidate(request: NextRequest) {
  const expectedSecret = process.env.REVALIDATE_SECRET;
  if (!expectedSecret) {
    return NextResponse.json(
      { ok: false, message: "REVALIDATE_SECRET is not configured" },
      { status: 500 }
    );
  }

  const providedSecret = extractSecret(request);
  if (!providedSecret || providedSecret !== expectedSecret) {
    return NextResponse.json(
      { ok: false, message: "Invalid revalidation secret" },
      { status: 401 }
    );
  }

  revalidateTag(PROJECTS_CACHE_TAG, { expire: 0 });
  revalidatePath("/");

  return NextResponse.json({
    ok: true,
    revalidated: true,
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request: NextRequest) {
  return handleRevalidate(request);
}

export async function GET(request: NextRequest) {
  return handleRevalidate(request);
}
