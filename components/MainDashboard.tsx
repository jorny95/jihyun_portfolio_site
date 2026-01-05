
import React from 'react';
import { Search, ChevronLeft, TrendingUp, Monitor, Lightbulb, Users, Code, Menu } from 'lucide-react';
import { Experience, ViewType } from '../types';

interface MainDashboardProps {
  activeView: ViewType;
  experiences: Experience[];
  onCardClick: (exp: Experience) => void;
  onMenuToggle: () => void;
}

const MainDashboard: React.FC<MainDashboardProps> = ({ activeView, experiences, onCardClick, onMenuToggle }) => {
  return (
    <div className="flex-1 flex flex-col min-w-0 bg-[#F9F7F2]">
      {/* Header: 이 영역만 상단에 고정됩니다 */}
      <div className="hidden md:flex p-4 md:p-6 flex-col md:flex-row md:items-center justify-between sticky top-0 bg-[#F9F7F2]/80 backdrop-blur-md z-20 gap-4 border-b border-black/5">
        <div className="flex items-center space-x-2 md:space-x-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 border-2 border-[#1a1a1a] rounded-xl bg-white hover:bg-gray-100 transition-colors shadow-[2px_2px_0px_#000]"
          >
            <Menu size={20} className="text-black" />
          </button>
        </div>

        <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {['Coding', 'Economics', 'Fintech', 'Education'].map((tag) => (
            <span key={tag} className="whitespace-nowrap px-3 py-1 bg-white border-2 border-[#1a1a1a] rounded-full text-[10px] font-black text-black shadow-[1px_1px_0px_#1a1a1a]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-4 md:px-8 pb-32">
        {/* Hero Section with Interactive Cubes */}
        <div className="w-full h-[240px] md:h-[320px] bg-white border-2 border-[#1a1a1a] rounded-[24px] md:rounded-[40px] mt-4 md:mt-0 mb-8 overflow-hidden relative shadow-[6px_6px_0px_#1a1a1a]">
          <iframe
            src='https://my.spline.design/interactivecubes-p9fkTLQ2xVXBlmRHYDXevdsm/'
            frameBorder='0'
            width='100%'
            height='100%'
            title="Interactive Cubes Hero"
            className="w-full h-full"
          />
          <div className="absolute top-4 left-4 md:top-10 md:left-10 pointer-events-none bg-white/40 backdrop-blur-sm p-4 rounded-2xl border border-black/10">
            <h2 className="text-2xl md:text-5xl font-black leading-tight text-black drop-shadow-sm">
              Frontend Engineer<br />
              <span className="text-black/60 md:text-black/60">× Economics</span>
            </h2>
            <p className="hidden md:block mt-4 text-sm font-bold text-black max-w-[340px] leading-relaxed">
              경제학 전공 기반의 데이터 분석적 사고와<br />
              사용자 심리를 꿰뚫는 프론트엔드 개발자입니다.
            </p>
          </div>
        </div>

        {/* Section Heading */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl md:text-2xl font-black text-black">Career Milestones</h3>
          <button className="text-xs font-black text-black/60 hover:text-black border-b-2 border-black/20 hover:border-black transition-all">View All History &rarr;</button>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              onClick={() => onCardClick(exp)}
              className={`retro-card p-5 md:p-6 ${exp.color} rounded-[24px] md:rounded-[32px] cursor-pointer flex flex-col h-[190px] md:h-[220px] hover:shadow-[6px_6px_0px_#1a1a1a] active:translate-y-1 active:shadow-[2px_2px_0px_#1a1a1a]`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-white p-2 rounded-xl border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a]">
                  {exp.domain === 'Fintech' && <TrendingUp size={20} className="text-black" />}
                  {exp.domain === 'Research' && <Monitor size={20} className="text-black" />}
                  {exp.domain === 'EdTech' && <Users size={20} className="text-black" />}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-black/70">{exp.period}</span>
              </div>
              <h4 className="font-black text-lg md:text-xl leading-tight mb-1 text-black">{exp.title}</h4>
              <p className="text-xs font-bold text-black/70 mb-auto">{exp.company}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="bg-white px-2 py-1 rounded-md text-[10px] font-black border-2 border-[#1a1a1a] text-black">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Toolkit Section */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl md:text-2xl font-black text-black">Expertise & Mindset</h3>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
            <div className="retro-card bg-pink-50 rounded-[24px] md:rounded-[32px] overflow-hidden flex group">
              <div className="p-6 md:p-8 flex-1">
                <div className="bg-white p-2 w-fit rounded-xl border-2 border-[#1a1a1a] mb-4 shadow-[2px_2px_0px_#1a1a1a]">
                  <Lightbulb size={24} className="text-pink-600" />
                </div>
                <h5 className="text-xl md:text-2xl font-black mb-1 md:mb-2 text-black">Economics Thinking</h5>
                <p className="text-xs md:text-sm text-black font-bold leading-relaxed">경제학적 게임 이론과 행동 경제학을 인터페이스 설계에 녹여 사용자 전환율을 최적화합니다.</p>
              </div>
              <div className="w-1/4 md:w-1/3 bg-pink-100 flex items-center justify-center border-l-2 border-[#1a1a1a] group-hover:bg-pink-200 transition-colors">
                <span className="text-4xl md:text-6xl grayscale group-hover:grayscale-0 transition-all">📊</span>
              </div>
            </div>
            <div className="retro-card bg-blue-50 rounded-[24px] md:rounded-[32px] overflow-hidden flex group">
              <div className="p-6 md:p-8 flex-1">
                <div className="bg-white p-2 w-fit rounded-xl border-2 border-[#1a1a1a] mb-4 shadow-[2px_2px_0px_#1a1a1a]">
                  <Code size={24} className="text-blue-600" />
                </div>
                <h5 className="text-xl md:text-2xl font-black mb-1 md:mb-2 text-black">Technical Excellence</h5>
                <p className="text-xs md:text-sm text-black font-bold leading-relaxed">React, Next.js, TypeScript를 활용하여 확장 가능하고 성능이 뛰어난 아키텍처를 구축합니다.</p>
              </div>
              <div className="w-1/4 md:w-1/3 bg-blue-100 flex items-center justify-center border-l-2 border-[#1a1a1a] group-hover:bg-blue-200 transition-colors">
                <span className="text-4xl md:text-6xl grayscale group-hover:grayscale-0 transition-all">⚛️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
