
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainDashboard from './components/MainDashboard';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import RightPanel from './components/RightPanel';
import ExperienceModal from './components/ExperienceModal';
import MobileNav from './components/MobileNav';
import MouseSparkle from './components/MouseSparkle';
import { Experience, ViewType } from './types';

const experiences: Experience[] = [
  {
    id: 'hiconsy',
    title: 'Frontend Engineer',
    company: '이투스에듀 / 하이컨시 (Hiconsy Edu Corporation)',
    period: '2024.07 ~ 재직중',
    domain: 'EdTech',
    companyLogo: '/assets/images/companies/hiconsy.png',
    serviceUrl: 'https://matchnow.in/',
    images: [
      '/assets/images/matchnow/01.png',
      '/assets/images/matchnow/02.png',
      '/assets/images/matchnow/03.png',
      '/assets/images/matchnow/04.png',
      '/assets/images/matchnow/05.png',
      '/assets/images/matchnow/06.png',
    ],
    description: '인도 JEE·NEET 수험생을 대상으로 한 1:1 온라인 과외 매칭 플랫폼 "MatchNow" 프론트엔드 개발. 상위 1% 튜터와 학생을 연결하는 매칭 서비스로, Plan·Class·Test 3단계 학습 플로우를 구현하였으며 Android/iOS 앱과 웹 서비스를 함께 제공합니다.',
    highlights: [
      '인도 수험생 대상 JEE·NEET 1:1 과외 매칭 플랫폼 개발',
      'Plan / Class / Test 3단계 학습 플로우 UI 구현',
      'React + TypeScript 기반 모바일 반응형 웹 개발',
      '글로벌 서비스 전체 UI 영문화 — 영어 기반 레이아웃 설계 및 가변 길이 텍스트·줄바꿈·폰트 처리로 다양한 해상도 대응',
      '다국어(i18n/l10n) 지원 구현 — 영어·힌디어 언어 전환 기능 개발 및 RTL/LTR 혼용 환경 대응',
      '글로벌 로케일 처리 — 인도 시간대(IST) 기준 날짜·시간 포맷 및 해외 결제 플로우 UI 구현',
      'Thymeleaf 서버사이드 렌더링 템플릿 개발 및 Spring MVC Controller 레이어 직접 수정 — 백엔드 협업 없이 View~Controller 구간 독립 처리',
      'Android/iOS 앱-웹뷰(WebView) 브릿지 연동 — JavaScript Interface를 통한 앱↔웹 양방향 통신 구현 및 웹뷰 전용 UI 개발',
      'RESTful API 연동 (Axios) — 튜터 매칭, 수업 예약, 사용자 인증 등 전 도메인 API 통신 구현',
      '이투스에듀 재직 중 해당 서비스 부서가 하이컨시로 분사·인수',
    ],
    tags: ['React', 'TypeScript', 'Java', 'Thymeleaf', 'WebView Bridge', 'REST API', 'i18n'],
    color: 'bg-yellow-100'
  },
  {
    id: 'blackbit',
    title: 'Frontend Developer',
    company: '블랙빗스튜디오 (Blackbit Studio)',
    period: '2023.03 ~ 2024.06 (1년 4개월)',
    domain: 'Research',
    companyLogo: '/assets/images/companies/blackbit.png',
    videoUrl: '/assets/videos/newvo_intro.mp4',
    description: '설문·수요조사 기반 B2B SaaS 플랫폼 "newvo" 프론트엔드 개발. 워크스페이스 단위로 설문(Research), 수요조사(Demand), 상품(Product), 이벤트 등 다양한 폼 유형을 생성·관리하고, 응답 수집부터 AI 분석·리포트까지 제공하는 CRM 방향성의 올인원 데이터 수집 플랫폼입니다.',
    highlights: [
      '워크스페이스 기반 폼 빌더 UI 개발 — Research / Demand / Product / Ticket / Event 등 다양한 폼 유형 지원',
      '응답 대시보드, 교차 분석(Cross-Analysis), AI 기반 데이터 분석 리포트 페이지 구현',
      '팀 워크스페이스 기능 — 멤버 초대, 권한 관리, 활동 로그 화면 개발',
      '카카오톡 마케팅 발송 연동 UI 개발',
      'PC·모바일 반응형 전체 화면 개발 (Next.js App Router)',
      '구독·크레딧·상품 결제 플로우 및 마이페이지 구현',
      'RESTful API 연동 (Axios) — 폼 생성·응답 수집·분석 결과 조회 등 전 도메인 API 통신 구현',
    ],
    tags: ['Next.js', 'JavaScript', 'SCSS', 'AWS S3', 'REST API'],
    color: 'bg-purple-100'
  },
  {
    id: 'finakle',
    title: 'Frontend Developer',
    company: '(주)피나클 (FINAKLE)',
    period: '2021.11 ~ 2023.02 (1년 4개월)',
    domain: 'Fintech',
    companyLogo: '/assets/images/companies/finakle.png',
    serviceUrl: 'https://rebit-x.vercel.app/',
    images: [
      '/assets/images/rebit/01.png',
      '/assets/images/rebit/02.png',
      '/assets/images/rebit/03.png',
      '/assets/images/rebit/04.png',
      '/assets/images/funchy/01.png',
      '/assets/images/funchy/02.png',
      '/assets/images/funchy/03.png',
      '/assets/images/funchy/04.png',
      '/assets/images/funchy/05.png',
    ],
    description: '핀테크 기반 상업용 부동산 조각투자 플랫폼 "Rebit" 및 P2P 금융 플랫폼 "FUNCHY" 프론트엔드 개발. 2021년 설립된 스타트업으로 PC 웹 서비스를 담당했으며, BNPL 서비스 사업도 함께 영위하였습니다.',
    highlights: [
      '상업용 부동산 조각투자 플랫폼 "Rebit" PC Web 사용자·관리자 프론트엔드 개발 (Next.js)',
      'Rebit 사용자 페이지: 부동산 청약·거래 플로우, 매물 목록·상세, 청약 신청, 회원가입·마이페이지',
      'Rebit 어드민 페이지: 매물 등록·관리, 회원 관리, 공지사항·이벤트 게시판 관리 화면 개발',
      'P2P 금융 플랫폼 "FUNCHY" — Figma 디자인 시안 제작 및 Next.js 퍼블리싱 (기여도 40%)',
      'FUNCHY 사용자 페이지: 그라디언트·글라스모피즘 컨셉 UI, 투자 예상 수익률 계산기, 카카오맵 API 연동',
      'FUNCHY 어드민 페이지: 투자 상품 관리, 회원 관리, 운영 현황 대시보드 화면 개발',
      'RESTful API 연동 (Axios) — 부동산 매물·청약·거래, 투자 상품·수익률 등 전 도메인 API 통신 구현',
    ],
    tags: ['Next.js', 'JavaScript', 'SCSS', 'Figma', 'REST API', 'Fintech'],
    color: 'bg-blue-100'
  },
  {
    id: 'nonghyup',
    title: 'Bancassurance',
    company: '농협은행주식회사 (NH농협은행)',
    period: '2019.04 ~ 2020.04 (1년)',
    companyLogo: '/assets/images/companies/nonghyub.png',
    domain: 'Finance',
    description: '농협은행 방카슈랑스팀에서 보험 판매 계수 관리 및 방카판매인·보험대리점 자격 관리 업무를 수행. 금융 감독 기준과 내부 규정을 준수하며 데이터 산출·보고 및 자격 관리 행정 업무를 담당했습니다.',
    highlights: [
      '방카 계수자료 작성 및 관리 — 보험 상품별 판매 실적·수수료·정산 구조 이해를 바탕으로 정확한 데이터 산출 및 정기 보고 업무 수행',
      '방카판매인 및 보험대리점 자격 관리 — 자격 유지 요건 점검, 등록·갱신 프로세스 관리 등 금융감독 기준 준수 행정 업무 담당',
      '금융 현장 경험을 바탕으로 핀테크·보험·투자 도메인에 대한 깊은 이해를 갖춤 — 이후 개발자 전향 후 금융 서비스(Rebit, FUNCHY) 개발에 직접 활용',
    ],
    tags: ['방카슈랑스', '금융', '데이터 관리', '자격관리'],
    color: 'bg-green-50'
  },
];

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('Overview');
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen w-screen p-0 md:p-4 lg:p-6 bg-[#FEFAF2] overflow-hidden">
      <MouseSparkle />
      {/* 
          Main Application Window 
          Container with 40px rounded corners and 2px black border 
      */}
      <div className="flex-1 flex flex-col md:flex-row w-full h-full bg-white md:rounded-[40px] border-b-2 md:border-2 border-[#1a1a1a] md:shadow-[8px_8px_0px_#1a1a1a] overflow-hidden relative">

        {/* Left Sidebar - Integrated inside the main container */}
        <Sidebar
          activeView={activeView}
          setActiveView={setActiveView}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">

          {/* 1. 모바일 프로필 영역: About 탭에서는 숨김 */}
          {activeView !== 'About' && (
            <div className="block md:hidden border-b-2 border-black bg-white shrink-0">
              <RightPanel isMobileTop />
            </div>
          )}

          {/* activeView에 따른 조건부 렌더링 */}
          {activeView === 'Overview' ? (
            <MainDashboard
              activeView={activeView}
              experiences={experiences}
              onCardClick={(exp) => setSelectedExp(exp)}
              onMenuToggle={() => setIsSidebarOpen(true)}
              onViewChange={setActiveView}
            />
          ) : activeView === 'Experience' ? (
            <ExperiencePage
              experiences={experiences}
              onCardClick={(exp) => setSelectedExp(exp)}
            />
          ) : activeView === 'About' ? (
            <AboutPage />
          ) : null}

          {/* Mobile Footer Nav */}
          <div className="block md:hidden">
            <MobileNav activeView={activeView} setActiveView={setActiveView} />
          </div>
        </div>

        {/* Right Panel - About 탭에서는 숨김 */}
        {activeView !== 'About' && (
          <div className="hidden md:block w-[360px] lg:w-[360px] shrink-0">
            <RightPanel />
          </div>
        )}
      </div>

      {/* 3D Experience Modal */}
      {selectedExp && (
        <ExperienceModal
          experience={selectedExp}
          onClose={() => setSelectedExp(null)}
        />
      )}
    </div>
  );
};

export default App;
