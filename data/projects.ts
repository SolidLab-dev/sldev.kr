export interface Project {
  title: string;
  category: 'In Development' | 'Archived';
  description: string;
  techStack: string[];
  links?: { label: string; url: string }[];
  statusNote?: string;
}

export const projects: Project[] = [
  // --- IN DEVELOPMENT ---
  {
    title: "Ark",
    category: "In Development",
    description: "로컬 LLM(Gemma)과 Whisper를 활용한 프라이버시 중심 온디바이스 복식부기 개인 재무 관리 애플리케이션.",
    techStack: ["Flutter", "Drift", "Local AI", "Gemma", "Whisper", "Adapty"],
    statusNote: "Core Project"
  },
  {
    title: "KartDraft (카트드래프트)",
    category: "In Development",
    description: "Gemini 3.8 기반 스크린샷 OCR과 ELO 레이팅 알고리즘을 결합한 카트라이더 클럽전 매치 분석 SaaS 플랫폼.",
    techStack: ["Next.js", "TypeScript", "Supabase", "Gemini 3.8", "Tauri"],
    links: [{ label: "Live", url: "https://kartdraft.com" }],
    statusNote: "MVP"
  },
  {
    title: "SL-WinPE",
    category: "In Development",
    description: "Windows ADK와 PowerShell 스크립트 기반의 대량 PC 자동 프로비저닝 및 하드웨어 진단용 커스텀 WinPE 프레임워크.",
    techStack: ["Windows ADK", "PowerShell", "DISM/FFU", "Git"],
    statusNote: "Internal Lab"
  },

  // --- ARCHIVED ---
  {
    title: "ZeroGStudio",
    category: "Archived",
    description: "홈랩 하드웨어와 LLM 멀티 에이전트 워크플로우를 결합한 자율 실행 자동화 스튜디오 인프라.",
    techStack: ["Python", "AutoGen", "Ollama", "Gemini", "Discord Bot"],
    links: [{ label: "GitHub", url: "https://github.com/SolidLab-dev/ZeroG" }],
    statusNote: "Paused"
  },
  {
    title: "KkiniPig (끼니피그)",
    category: "Archived",
    description: "Gemini API의 구조화된 데이터 출력을 활용해 예산 맞춤형 식단을 구성해 주는 웹 서비스 (정식 출시 보류).",
    techStack: ["Flutter Web", "Riverpod", "Gemini API"],
    links: [{ label: "Live", url: "https://kkinipig.sldev.kr" }],
    statusNote: "Paused"
  },
  {
    title: "BOJ-extension",
    category: "Archived",
    description: "백준 온라인 저지(BOJ) 테스트 케이스 자동 실행 및 채점 지원 VS Code 확장 프로그램. 서비스 종료에 따라 아카이브됨 (누적 2,200+ 설치).",
    techStack: ["TypeScript", "VS Code Extension API"],
    links: [
      {
        label: "Marketplace",
        url: "https://marketplace.visualstudio.com/items?itemName=dltkdgns00.BOJ-EX"
      }
    ],
    statusNote: "Archived"
  },
  {
    title: "CodeLearn (BookMate)",
    category: "Archived",
    description: "OpenAI 임베딩 기반 기술 문서 및 e-Book 인터랙티브 질의응답 플랫폼 (교내 ChatGPT 활용 프로그래밍 챌린지 장려상 수상).",
    techStack: ["Python", "Flask", "OpenAI Embeddings"],
    statusNote: "Completed"
  },
  {
    title: "Aily",
    category: "Archived",
    description: "YOLOv5 비전 모델과 임베디드 제어를 결합한 자동 재활용 분리수거 키오스크 (KES 2023 출품).",
    techStack: ["Flutter", "YOLOv5", "Arduino", "Python"],
    statusNote: "Completed"
  },
  {
    title: "Taehwan Proaster Control SW",
    category: "Archived",
    description: "산업용 커피 로스팅 머신 하드웨어 제어 및 WebSocket 기반 키오스크 웹 인터페이스.",
    techStack: ["Raspberry Pi CM4", "Python", "Modbus/RS485", "WebSockets"],
    statusNote: "Completed"
  },
  {
    title: "CPR Training Kiosk",
    category: "Archived",
    description: "Jetpack Compose 기반 응급처치 교육 및 실습 판정 안드로이드 키오스크.",
    techStack: ["Android", "Jetpack Compose", "Kotlin"],
    statusNote: "Completed"
  },
  {
    title: "Nugu (누구)",
    category: "Archived",
    description: "배리어프리 유니버설 디자인을 적용한 스마트 IoT 초인종 시스템.",
    techStack: ["IoT Hardware", "Embedded System"],
    statusNote: "Completed"
  }
];
