import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border py-8 text-muted-foreground text-xs md:text-sm">
      <div className="container mx-auto px-4">
        {/* Links Section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-6">
          <Link
            href="/terms"
            className="hover:text-foreground transition-colors"
          >
            이용약관
          </Link>
          <Link
            href="/privacy"
            className="font-bold hover:text-foreground transition-colors"
          >
            개인정보처리방침
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            고객지원 : contacts@sldev.kr
          </Link>
        </div>

        {/* Info Section */}
        <div className="flex flex-col gap-2 leading-relaxed">
          <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
            <span>상호명 : 솔리드랩(SolidLab)</span>
            <span className="hidden md:inline text-border">|</span>
            <span>대표이사 : 이상훈</span>
            <span className="hidden md:inline text-border">|</span>
            <span>사업자등록번호 : 651-06-03559</span>
            <span className="hidden md:inline text-border">|</span>
            <span>통신판매업신고번호 : 2025-인천서구-3078</span>
          </div>

          <div>
            <span>
              주소 : (22868) 인천광역시 서구 이음6로 33, 3215동 1701호
            </span>
          </div>

          <div className="mt-4 pt-4 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground/60">
              Copyright © SolidLab. All rights reserved.
            </p>
            {/* Optional Social Icons or additional branding could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
