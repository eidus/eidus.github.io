export interface LocaleMessages {
  common: {
    all: string;
    copyToClipboard: string;
  };
  navigation: {
    openMainMenu: string;
  };
  theme: {
    system: string;
    light: string;
    dark: string;
    currentTheme: string;
    cycleTheme: string;
  };
  profile: {
    email: string;
    location: string;
    workAddress: string;
    click: string;
    googleMap: string;
    send: string;
    sendEmail: string;
    researchInterests: string;
    like: string;
    liked: string;
    thanks: string;
  };
  home: {
    about: string;
    news: string;
    selectedPublications: string;
    viewAll: string;
  };
  publications: {
    searchPlaceholder: string;
    filters: string;
    year: string;
    type: string;
    keywords: string;
    noResults: string;
    abstract: string;
    bibtex: string;
    code: string;
    paper: string;
  };
  footer: {
    lastUpdated: string;
    builtWithPrism: string;
  };
}

const en: LocaleMessages = {
  common: {
    all: 'All',
    copyToClipboard: 'Copy to clipboard',
  },
  navigation: {
    openMainMenu: 'Open main menu',
  },
  theme: {
    system: 'System',
    light: 'Light',
    dark: 'Dark',
    currentTheme: 'Current theme',
    cycleTheme: 'Click to cycle theme',
  },
  profile: {
    email: 'Email',
    location: 'Location',
    workAddress: 'Work Address',
    click: 'Click',
    googleMap: 'Google Map',
    send: 'Send',
    sendEmail: 'Send Email',
    researchInterests: 'Research Interests',
    like: 'Like',
    liked: 'Liked',
    thanks: 'Thanks!',
  },
  home: {
    about: 'About',
    news: 'News',
    selectedPublications: 'Selected Publications',
    viewAll: 'View All',
  },
  publications: {
    searchPlaceholder: 'Search publications...',
    filters: 'Filters',
    year: 'Year',
    type: 'Type',
    keywords: 'Keywords',
    noResults: 'No publications found matching your criteria.',
    abstract: 'Abstract',
    bibtex: 'BibTeX',
    code: 'Code',
    paper: 'Paper',
  },
  footer: {
    lastUpdated: 'Last updated',
    builtWithPrism: 'Built with PRISM',
  },
};

const ko: LocaleMessages = {
  common: {
    all: '전체',
    copyToClipboard: '클립보드에 복사',
  },
  navigation: {
    openMainMenu: '메인 메뉴 열기',
  },
  theme: {
    system: '시스템',
    light: '라이트',
    dark: '다크',
    currentTheme: '현재 테마',
    cycleTheme: '클릭하여 테마 전환',
  },
  profile: {
    email: '이메일',
    location: '위치',
    workAddress: '근무지 주소',
    click: '클릭',
    googleMap: '구글 지도',
    send: '보내기',
    sendEmail: '이메일 보내기',
    researchInterests: '연구 관심사',
    like: '좋아요',
    liked: '좋아요 완료',
    thanks: '감사합니다!',
  },
  home: {
    about: '소개',
    news: '소식',
    selectedPublications: '주요 논문',
    viewAll: '전체 보기',
  },
  publications: {
    searchPlaceholder: '논문 검색...',
    filters: '필터',
    year: '연도',
    type: '유형',
    keywords: '키워드',
    noResults: '조건에 맞는 논문이 없습니다.',
    abstract: '초록',
    bibtex: 'BibTeX',
    code: '코드',
    paper: '논문',
  },
  footer: {
    lastUpdated: '최근 업데이트',
    builtWithPrism: 'PRISM으로 제작됨',
  },
};

export const messages: Record<string, LocaleMessages> = {
  en,
  ko,
};

export function getMessages(locale: string): LocaleMessages {
  return messages[locale] || en;
}
