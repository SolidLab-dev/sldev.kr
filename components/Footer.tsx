import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 bg-neutral-950/50 py-12 text-neutral-400">
      <div className="max-w-5xl mx-auto px-6">
        {/* Navigation & Direct Links */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 border-b border-neutral-900 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-neutral-200 transition-colors"
            >
              PRIVACY POLICY
            </Link>
            <Link
              href="/terms"
              className="hover:text-neutral-200 transition-colors"
            >
              TERMS OF SERVICE
            </Link>
            <a
              href="https://github.com/SolidLab-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-neutral-200 transition-colors"
            >
              GITHUB
              <ArrowUpRight size={12} className="text-neutral-500" />
            </a>
          </div>

          <div className="text-neutral-500">
            CONTACT:{" "}
            <a
              href="mailto:contacts@sldev.kr"
              className="text-neutral-300 hover:text-white underline underline-offset-4 decoration-neutral-700 hover:decoration-neutral-300 transition-colors"
            >
              contacts@sldev.kr
            </a>
          </div>
        </div>

        {/* Business Info (Monospace, Clean Tech Specs Layout) */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 font-mono text-[11px] leading-relaxed text-neutral-500">
          <div className="space-y-1.5">
            <div className="text-neutral-300 font-medium tracking-tight">
              솔리드랩 (SolidLab)
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>대표: 이상훈</span>
              <span className="text-neutral-800">|</span>
              <span>사업자등록번호: 651-06-03559</span>
              <span className="text-neutral-800">|</span>
              <span>통신판매업신고번호: 2025-인천서구-3078</span>
            </div>
            <div>
              <span>소재지: (23446) 인천광역시 검단구 이음6로 33, 3215동 1701호</span>
            </div>
          </div>

          <div className="text-neutral-600 self-start md:self-end">
            © SolidLab. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
