
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MainDashboard from './components/MainDashboard';
import RightPanel from './components/RightPanel';
import ExperienceModal from './components/ExperienceModal';
import MobileNav from './components/MobileNav';
import { Experience, ViewType } from './types';

const experiences: Experience[] = [
  {
    id: 'edtech',
    title: 'Frontend Engineer',
    company: 'EdTech Startup (India)',
    period: '2022 - Present (2 Years)',
    domain: 'EdTech',
    description: 'Mentor-Mentee matching platform connecting Indian students with global experts. Focused on high-concurrency matching algorithms and localized mobile-web UI.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Matching Algorithm'],
    color: 'bg-yellow-100'
  },
  {
    id: 'research',
    title: 'Frontend Developer',
    company: 'Data Research Lab',
    period: '2021 - 2022 (1 Year)',
    domain: 'Research',
    description: 'Developed interactive data visualization tools for academic and market research. Transformed complex datasets into intuitive web interfaces.',
    tags: ['D3.js', 'Next.js', 'Research Tools', 'DataViz'],
    color: 'bg-purple-100'
  },
  {
    id: 'fintech',
    title: 'Junior Frontend Developer',
    company: 'Fintech Innovation',
    period: '2020 - 2021 (1 Year)',
    domain: 'Fintech',
    description: 'Built core transaction modules and dashboard for a micro-investment platform. Leveraged Economics background for financial accuracy and UX.',
    tags: ['Fintech', 'Chart.js', 'Secure UI', 'Economics'],
    color: 'bg-blue-100'
  }
];

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('Overview');
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
          ) : (
            <div className="p-8 md:p-12 min-h-full bg-[#F9F7F2]">
              {/* 새로운 페이지 내용이 들어갈 빈 공간 */}
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
