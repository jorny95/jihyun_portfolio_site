
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainDashboard from './components/MainDashboard';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import RightPanel from './components/RightPanel';
import ExperienceModal from './components/ExperienceModal';
import MobileNav from './components/MobileNav';
import { Experience, ViewType } from './types';

const experiences: Experience[] = [
  {
    id: 'hiconsy',
    title: 'Frontend Engineer',
    company: '이투스에듀 / 하이컨시 (Hiconsy Edu Corporation)',
    period: '2024.07 ~ 재직중',
    domain: 'EdTech',
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
      'Java Thymeleaf 서버사이드 렌더링 페이지 개발 및 유지보수',
      '이투스에듀 재직 중 해당 서비스 부서가 하이컨시로 분사·인수',
    ],
    tags: ['React', 'TypeScript', 'JavaScript', 'Java', 'Thymeleaf', 'HTML/CSS'],
    color: 'bg-yellow-100'
  },
  {
    id: 'blackbit',
    title: 'Frontend Developer',
    company: '블랙빗스튜디오 (Blackbit Studio)',
    period: '2023.03 ~ 2024.06 (1년 4개월)',
    domain: 'Research',
    videoUrl: '/assets/videos/newvo_intro.mp4',
    description: '설문·수요조사 기반 B2B SaaS 플랫폼 "newvo" 프론트엔드 개발. 워크스페이스 단위로 설문(Research), 수요조사(Demand), 상품(Product), 이벤트 등 다양한 폼 유형을 생성·관리하고, 응답 수집부터 AI 분석·리포트까지 제공하는 CRM 방향성의 올인원 데이터 수집 플랫폼입니다.',
    highlights: [
      '워크스페이스 기반 폼 빌더 UI 개발 — Research / Demand / Product / Ticket / Event 등 다양한 폼 유형 지원',
      '응답 대시보드, 교차 분석(Cross-Analysis), AI 기반 데이터 분석 리포트 페이지 구현',
      '팀 워크스페이스 기능 — 멤버 초대, 권한 관리, 활동 로그 화면 개발',
      '카카오톡 마케팅 발송 연동 UI 개발',
      'PC·모바일 반응형 전체 화면 개발 (Next.js App Router)',
      '구독·크레딧·상품 결제 플로우 및 마이페이지 구현',
    ],
    tags: ['Next.js', 'Python', 'FastAPI', 'JavaScript', 'SCSS', 'AWS S3'],
    color: 'bg-purple-100'
  },
];

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('About');
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen w-screen p-0 md:p-4 lg:p-6 bg-[#FEFAF2] overflow-hidden">
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

          {/* 1. 모바일 프로필 영역: 이제 헤더보다 위에 위치하며 스크롤 시 올라갑니다 */}
          <div className="block md:hidden border-b-2 border-black bg-white shrink-0">
            <RightPanel isMobileTop />
          </div>

          {/* activeView에 따른 조건부 렌더링 */}
          {activeView === 'Overview' ? (
            <MainDashboard
              activeView={activeView}
              experiences={experiences}
              onCardClick={(exp) => setSelectedExp(exp)}
              onMenuToggle={() => setIsSidebarOpen(true)}
            />
          ) : activeView === 'Experience' ? (
            <ExperiencePage
              experiences={experiences}
              onCardClick={(exp) => setSelectedExp(exp)}
            />
          ) : activeView === 'About' ? (
            <AboutPage />
          ) : (
            <div className="p-8 md:p-12 min-h-full bg-[#F9F7F2]">
              <h2 className="text-4xl font-black text-black uppercase italic mb-4">{activeView}</h2>
              <div className="w-full h-[60vh] border-4 border-dashed border-black/10 rounded-[40px] flex items-center justify-center">
                <p className="font-bold text-black/20 text-xl uppercase tracking-widest">
                  {activeView} content goes here...
                </p>
              </div>
            </div>
          )}

          {/* Mobile Footer Nav */}
          <div className="block md:hidden">
            <MobileNav activeView={activeView} setActiveView={setActiveView} />
          </div>
        </div>

        {/* Right Panel - Visible on MD+, hidden on SM (content moved to top) */}
        <div className="hidden md:block w-[360px] lg:w-[360px] shrink-0">
          <RightPanel />
        </div>
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
