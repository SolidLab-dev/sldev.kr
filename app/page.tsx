import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Smartphone,
  Sparkles,
  Mail,
  Github,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 font-bold text-xl tracking-tighter"
          >
            {/* 
              [로고 적용 안내] 
              1. public 폴더에 사용하실 로고 이미지를 'logo.png' 이름으로 저장해주세요.
              2. 만약 SVG라면 파일명을 'logo.svg'로 변경하고 아래 src도 수정해주세요.
            */}
            <div className="relative w-8 h-8">
              <Image
                src="/logo.svg"
                alt="Solid Lab Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span>Solid Lab</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link
              href="#products"
              className="hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="#values"
              className="hover:text-primary transition-colors"
            >
              Values
            </Link>
            <Link
              href="mailto:contact@sldev.kr"
              className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors text-xs font-semibold border border-white/5"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/5 mx-auto max-w-7xl overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] bg-[#0076DD]/10 opacity-30 blur-[120px] rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center rounded-full border border-[#0076DD]/30 bg-[#0076DD]/10 px-4 py-1.5 text-sm font-medium text-[#0076DD] backdrop-blur-xl">
              <span className="flex h-2 w-2 rounded-full bg-[#0076DD] mr-2"></span>
              Solving Daily Problems
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Simpler Life with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0076DD] to-blue-400">
                Solid Solutions.
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              일상 속의 반복되는 불편함을 해결합니다.
              <br className="hidden md:block" />
              개발자의 시선으로 찾아낸 문제들을 견고한 소프트웨어로 풀어냅니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="#products"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#0076DD] px-8 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition-all hover:bg-blue-600 hover:scale-105 active:scale-95"
              >
                Explore Products
              </Link>
              <Link
                href="#values"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-white/10 bg-white/5 px-8 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/20"
              >
                Our Philosophy
              </Link>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Our Products
            </h2>
            <p className="text-muted-foreground text-lg">
              복잡한 기능을 덜어내고 본질에 집중한, 작지만 강력한 도구들을
              준비하고 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Placeholder 1 */}
            <div className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-1 overflow-hidden hover:border-[#0076DD]/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0076DD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full bg-[#050505] rounded-[22px] p-8 flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-[#0076DD]/20 flex items-center justify-center text-[#0076DD] mb-6">
                  <Layers size={24} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  BOJ Extension
                </h3>
                <p className="text-gray-400 mb-8 flex-1 leading-relaxed">
                  백준(BOJ) 문제 풀이를 위한 VS Code 확장 프로그램입니다.
                  <br />
                  문제 파싱부터 테스트 케이스 실행까지, 흐름이 끊기지 않는
                  효율적인 알고리즘 풀이 환경을 제공합니다.
                </p>

                <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                  <span className="flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300">
                    <Layers size={12} /> VS Code Extension
                  </span>
                  <div className="ml-auto flex items-center gap-4">
                    <a
                      href="https://github.com/dltkdgns00/BOJ-extension"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://marketplace.visualstudio.com/items?itemName=dltkdgns00.BOJ-EX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#0076DD] hover:text-blue-400 transition-colors flex items-center gap-1"
                    >
                      Marketplace <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Placeholder 2 */}
            <div className="group relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-1 overflow-hidden hover:border-[#0076DD]/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-[#0076DD]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full bg-[#050505] rounded-[22px] p-8 flex flex-col">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
                  <Sparkles size={24} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  YTMusic Sharer
                </h3>
                <p className="text-gray-400 mb-8 flex-1 leading-relaxed">
                  유튜브 뮤직의 현재 재생 정보를 손쉽게 공유할 수 있는
                  도구입니다.
                  <br />
                  오픈 소스로 공개되어 누구나 사용할 수 있습니다.
                </p>

                <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                  <span className="flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-gray-300">
                    Open Source
                  </span>
                  <a
                    href="https://github.com/dltkdgns00/ytmusic-sharer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-sm font-medium text-[#0076DD] hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <Github size={16} />
                    <span>View on GitHub</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section
          id="values"
          className="py-24 px-6 border-t border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] -z-10" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                &quot;Commit Your Work.&quot;
              </h2>
              <div className="space-y-6 text-lg text-gray-400">
                <p>
                  <strong className="text-white">Solid Lab</strong>은 삶을 더
                  단순하고 명쾌하게 만드는 소프트웨어를 연구합니다.
                </p>
                <p>
                  우리는 기술을 과시하지 않습니다. 대신 당신의 일상 속에
                  자연스럽게 스며들어, <br />
                  겪고 있던 작은 불편함들을 조용히 해결하고 사라집니다.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "사용자 중심의 직관적 설계",
                  "불필요한 기능 제거",
                  "빠르고 안정적인 성능",
                  "신뢰할 수 있는 데이터 보안",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-sm font-medium text-gray-300"
                  >
                    <CheckCircle2 size={18} className="text-[#0076DD]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 aspect-square lg:aspect-auto lg:h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block p-4 rounded-full bg-[#0076DD]/20 text-[#0076DD] mb-6">
                  <Mail size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  함께 문제를 해결해볼까요?
                </h3>
                <p className="text-gray-400 mb-8 max-w-xs mx-auto">
                  Solid Lab은 언제나 새로운 아이디어와 피드백을 기다립니다.
                </p>
                <a
                  href="mailto:contact@sldev.kr"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-[#020202]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-white tracking-tight">
                Solid Lab
              </span>
              <span className="text-xs text-gray-500 px-2 border-l border-gray-800">
                Since 2025
              </span>
            </div>

            <div className="text-sm text-gray-500">
              &copy; 2026 Solid Lab. All rights reserved.
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/SolidLab-dev"
                className="text-gray-500 hover:text-[#0076DD] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:contact@sldev.kr"
                className="text-gray-500 hover:text-[#0076DD] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
