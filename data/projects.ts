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
    description: "로컬 LLM(Gemma)과 Whisper를 활용한 프라이버시 중심 온디바이스 개인 재무 관리 애플리케이션.",
    techStack: ["Flutter", "Drift", "Local AI", "Gemma", "Whisper"],
    statusNote: "Core Project"
  },
  {
    title: "KkiniPig (끼니피그)",
    category: "In Development",
    description: "Gemini API의 구조화된 데이터 출력을 활용해 최적의 개인 맞춤 식단을 구성해 주는 웹 서비스.",
    techStack: ["Flutter Web", "Riverpod", "Gemini API"],
    links: [{ label: "Live", url: "https://kkinipig.sldev.kr" }],
    statusNote: "MVP"
  },
  {
    title: "ZeroGStudio",
    category: "In Development",
    description: "홈랩 하드웨어와 LLM 멀티 에이전트 워크플로우를 결합한 자동화 스튜디오 인프라.",
    techStack: ["AutoGen", "Ollama", "Gemini", "Discord Bot"],
    statusNote: "Internal Lab"
  },

  // --- ARCHIVED ---
  {
    title: "BOJ-extension",
    category: "Archived",
    description: "백준 온라인 저지(BOJ) 테스트 케이스 자동 실행 및 채점 지원 VS Code 확장 프로그램. (누적 2,200+ 설치)",
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
    description: "OpenAI 임베딩 기반 기술 문서 및 e-Book 인터랙티브 질의응답 플랫폼.",
    techStack: ["Python", "Flask", "OpenAI Embeddings"],
    statusNote: "Paused"
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
    techStack: ["Python", "Modbus/RS485", "WebSockets"],
    statusNote: "Completed"
  },
  {
    title: "Nugu (누구)",
    category: "Archived",
    description: "배리어프리 유니버설 디자인을 적용한 스마트 IoT 초인종 시스템.",
    techStack: ["IoT Hardware", "Embedded System"],
    statusNote: "Completed"
  },
  {
    title: "CPR Training Kiosk",
    category: "Archived",
    description: "Jetpack Compose 기반 응급처치 교육 및 실습 판정 안드로이드 키오스크.",
    techStack: ["Android", "Jetpack Compose", "Kotlin"],
    statusNote: "Completed"
  }
];
