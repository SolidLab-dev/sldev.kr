import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { getProjects } from "@/lib/notion";

export const revalidate = 300;

export default async function Home() {
  const projects = await getProjects();
  const inDevProjects = projects.filter((p) => p.category === "In Development");
  const archivedProjects = projects.filter((p) => p.category === "Archived");

  const engineeringPrinciples = [
    {
      num: "01",
      title: "사용자 중심의 직관적 설계",
      desc: "복잡한 기능을 나열하기보다 사용자의 흐름에 맞춘 직관적인 인터페이스와 반응성을 추구합니다.",
    },
    {
      num: "02",
      title: "프라이버시 & 온디바이스",
      desc: "민감한 개인 데이터와 로컬 자원을 외부 클라우드 종속 없이 안전하게 다루는 온디바이스 인텔리전스를 지향합니다.",
    },
    {
      num: "03",
      title: "신뢰할 수 있는 아키텍처",
      desc: "화려한 겉모습보다 결함에 견고하고, 예외 상황에서도 안정적으로 자가 회복하는 소프트웨어를 만듭니다.",
    },
    {
      num: "04",
      title: "본질에 집중한 도구",
      desc: "과시용 기술과 불필요한 레이어를 과감히 덜어내고, 일상과 업무의 실제 마찰을 제거하는 데 집중합니다.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-[#0076dd] selection:text-white">
      {/* Top Header / Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-none">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 font-bold tracking-tight text-neutral-100 hover:text-white transition-colors"
          >
            <div className="relative w-7 h-7">
              <Image
                src="/logo.svg"
                alt="SolidLab Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-sm font-bold tracking-tight uppercase leading-none">
                SolidLab
              </span>
              <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest leading-none mt-1">
                Software Studio
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-8 font-mono text-xs text-neutral-400">
            <a
              href="#products"
              className="hover:text-neutral-100 transition-colors hidden sm:inline-block"
            >
              PRODUCTS
            </a>
            <a
              href="#philosophy"
              className="hover:text-neutral-100 transition-colors hidden sm:inline-block"
            >
              PHILOSOPHY
            </a>
            <a
              href="#archive"
              className="hover:text-neutral-100 transition-colors hidden sm:inline-block"
            >
              ARCHIVE
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/SolidLab-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-100 transition-colors hidden md:inline-flex items-center gap-1"
              >
                GITHUB
                <ArrowUpRight size={12} className="text-neutral-500" />
              </a>
              <a
                href="mailto:contacts@sldev.kr"
                className="px-3.5 py-1.5 border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white transition-colors text-xs font-mono"
              >
                CONTACT US
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-16 md:py-24 space-y-32">
        {/* Hero Section: Corporate & Studio Statement */}
        <section className="space-y-8 pt-4 md:pt-10 border-b border-neutral-800/80 pb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-neutral-800 bg-neutral-900/60 font-mono text-[11px] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0076DD] inline-block animate-pulse"></span>
            <span>SOLIDLAB SOFTWARE ENGINEERING STUDIO</span>
          </div>

          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-100 leading-[1.08]">
              Simpler Life with <br />
              <span className="text-[#0076DD]">Solid Solutions.</span>
            </h1>

            <p className="text-lg md:text-2xl text-neutral-400 leading-relaxed font-normal max-w-3xl">
              일상 속의 반복되는 불편함과 복잡성을 개발자의 시선으로 포착해,
              본질에 집중한 견고한 소프트웨어로 풀어냅니다.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#products"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-100 text-neutral-950 font-semibold text-sm hover:bg-white transition-colors"
            >
              <span>Explore Products</span>
              <ArrowRight size={15} />
            </a>
            <a
              href="#philosophy"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 text-neutral-300 font-mono text-xs transition-colors"
            >
              <span>Our Philosophy</span>
            </a>
          </div>

          {/* Studio Meta Strip */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-neutral-900 font-mono text-xs">
            <div className="space-y-1">
              <div className="text-neutral-500 text-[10px] uppercase">Core Motto</div>
              <div className="text-neutral-300">Commit Your Work</div>
            </div>
            <div className="space-y-1">
              <div className="text-neutral-500 text-[10px] uppercase">Domains</div>
              <div className="text-neutral-300">On-Device AI / Automation</div>
            </div>
            <div className="space-y-1">
              <div className="text-neutral-500 text-[10px] uppercase">Entity Type</div>
              <div className="text-neutral-300">Independent Studio</div>
            </div>
            <div className="space-y-1">
              <div className="text-neutral-500 text-[10px] uppercase">Status</div>
              <div className="text-neutral-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Operational
              </div>
            </div>
          </div>
        </section>

        {/* Section 01: Products in Development */}
        <section id="products" className="space-y-10 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-5">
            <div>
              <div className="font-mono text-xs text-[#0076DD] tracking-wider uppercase mb-1">
                {"// 01. ACTIVE PRODUCTS"}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-100">
                In Development
              </h2>
            </div>
            <p className="text-sm text-neutral-400 font-sans max-w-md">
              솔리드랩이 현재 집중적으로 연구 및 구축 중인 핵심 소프트웨어 솔루션 라인업입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inDevProjects.map((project) => (
              <div
                key={project.title}
                className="group border border-neutral-800 bg-neutral-950 p-7 flex flex-col justify-between hover:border-neutral-700 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="font-mono text-[11px] px-2.5 py-1 border border-neutral-800 text-neutral-300 bg-neutral-900/80 font-medium">
                      {project.statusNote || "In Development"}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#0076DD]" />
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-neutral-100 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm text-neutral-400 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                <div className="pt-8 mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-2 py-0.5 border border-neutral-800/80 text-neutral-400 bg-neutral-900/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-neutral-900 flex flex-wrap items-center gap-4 font-mono text-xs">
                    {project.links && project.links.length > 0 ? (
                      project.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[#0076DD] hover:underline underline-offset-4 font-medium"
                        >
                          <span>
                            {link.label === "Live" ? "Live Service" : link.label}
                          </span>
                          <ArrowUpRight size={14} />
                        </a>
                      ))
                    ) : (
                      <span className="text-neutral-600 text-[11px]">
                        INTERNAL TESTING PHASE
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 02: Company Philosophy & Engineering Values */}
        <section id="philosophy" className="space-y-12 scroll-mt-24 border-t border-neutral-800/80 pt-20">
          <div className="max-w-3xl space-y-4">
            <div className="font-mono text-xs text-[#0076DD] tracking-wider uppercase">
              {"// 02. CORE PHILOSOPHY"}
            </div>
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-100">
                &quot;Commit Your Work.&quot;
              </h2>
              <span className="font-mono text-xs text-neutral-600 tracking-wider">
                Proverbs 16:3
              </span>
            </div>
            <div className="space-y-4 text-neutral-400 text-base md:text-lg leading-relaxed pt-2">
              <p>
                <strong className="text-neutral-100 font-semibold">솔리드랩 (SolidLab)</strong>은
                삶을 더 단순하고 명쾌하게 만드는 소프트웨어를 연구합니다.
              </p>
              <p>
                우리는 기술 자체를 과시하지 않습니다. 대신 일상과 엔지니어링 현장의
                작은 불편함을 조용히 해결하고 온전한 효율을 남깁니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {engineeringPrinciples.map((principle) => (
              <div
                key={principle.num}
                className="border border-neutral-800 bg-neutral-950 p-6 space-y-3"
              >
                <div className="font-mono text-xs text-[#0076DD] font-semibold">
                  {principle.num}
                </div>
                <h3 className="text-lg font-bold text-neutral-200">
                  {principle.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 03: Engineering Archive & Track Record */}
        <section id="archive" className="space-y-10 scroll-mt-24 border-t border-neutral-800/80 pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-800 pb-5">
            <div>
              <div className="font-mono text-xs text-neutral-500 tracking-wider uppercase mb-1">
                {"// 03. TRACK RECORD & HERITAGE"}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-100">
                Engineering Archive
              </h2>
            </div>
            <p className="text-sm text-neutral-400 font-sans max-w-md">
              솔리드랩이 제작하고 검증해 온 오픈소스 도구, 산업용 하드웨어 제어 SW 및 프로젝트 기록입니다.
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block border border-neutral-800 bg-neutral-950 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-800 font-mono text-[11px] uppercase tracking-wider text-neutral-500 bg-neutral-900/40">
                  <th className="py-3 px-5 font-medium w-48">Project</th>
                  <th className="py-3 px-5 font-medium">Description</th>
                  <th className="py-3 px-5 font-medium w-64">Tech Stack</th>
                  <th className="py-3 px-5 font-medium w-28 text-center">Status</th>
                  <th className="py-3 px-5 font-medium w-28 text-right">Resource</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900 text-sm">
                {archivedProjects.map((project) => (
                  <tr
                    key={project.title}
                    className="hover:bg-neutral-900/40 transition-colors group"
                  >
                    <td className="py-4 px-5 font-semibold text-neutral-200 align-top">
                      {project.title}
                    </td>
                    <td className="py-4 px-5 text-neutral-400 text-xs leading-relaxed align-top">
                      {project.description}
                    </td>
                    <td className="py-4 px-5 align-top">
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-[10px] px-1.5 py-0.5 border border-neutral-800/80 text-neutral-400 bg-neutral-900/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-5 font-mono text-xs text-center align-top">
                      <span className="inline-block text-[11px] text-neutral-500">
                        {project.statusNote || "Archived"}
                      </span>
                    </td>
                    <td className="py-4 px-5 font-mono text-xs text-right align-top">
                      {project.links && project.links.length > 0 ? (
                        <div className="flex flex-wrap justify-end gap-3">
                          {project.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[#0076DD] hover:underline underline-offset-4"
                            >
                              <span>{link.label}</span>
                              <ArrowUpRight size={12} />
                            </a>
                          ))}
                        </div>
                      ) : (
                        <span className="text-neutral-700">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card / List View */}
          <div className="md:hidden space-y-4">
            {archivedProjects.map((project) => (
              <div
                key={project.title}
                className="border border-neutral-800 bg-neutral-950 p-5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-neutral-200 text-base">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[11px] text-neutral-500">
                    {project.statusNote || "Archived"}
                  </span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-1.5 py-0.5 border border-neutral-800 text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="pt-2 border-t border-neutral-900 font-mono text-xs flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#0076DD]"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight size={12} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section 04: Business & Engineering Partnership */}
        <section className="border border-neutral-800 bg-neutral-950 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="font-mono text-xs text-[#0076DD] tracking-wider uppercase">
                {"// PARTNERSHIP & INQUIRY"}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-100 tracking-tight">
                솔리드랩과 함께 기술적 문제를 해결하세요
              </h3>
              <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                신규 소프트웨어 개발, 온디바이스 인텔리전스 도입, 자동화 워크플로우 구축 및 기술 협업에 대해 편하게 문의해주세요.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <a
                href="mailto:contacts@sldev.kr"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-100 text-neutral-950 font-semibold text-xs font-mono uppercase tracking-wider hover:bg-white transition-colors"
              >
                <span>contacts@sldev.kr</span>
                <ArrowRight size={14} />
              </a>
              <a
                href="https://github.com/SolidLab-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-mono transition-colors"
              >
                <span>GITHUB</span>
                <ArrowUpRight size={13} className="text-neutral-500" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
