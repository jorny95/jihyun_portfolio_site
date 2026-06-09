
import React from 'react';
import { TrendingUp, Monitor, Users, Menu, Zap, UserCheck, GraduationCap, Landmark, BotMessageSquare } from 'lucide-react';
import { Experience, ViewType } from '../types';

interface MainDashboardProps {
  activeView: ViewType;
  experiences: Experience[];
  onCardClick: (exp: Experience) => void;
  onMenuToggle: () => void;
  onViewChange: (view: ViewType) => void;
}

const domainIcon = (domain: Experience['domain']) => {
  if (domain === 'Fintech') return <TrendingUp size={20} className="text-black" />;
  if (domain === 'Research') return <Monitor size={20} className="text-black" />;
  if (domain === 'Finance') return <Landmark size={20} className="text-black" />;
  return <Users size={20} className="text-black" />;
};

const MainDashboard: React.FC<MainDashboardProps> = ({ activeView, experiences, onCardClick, onMenuToggle, onViewChange }) => {
  return (
    <div className="flex-1 flex flex-col min-w-0 bg-[#F9F7F2]">
      {/* Header */}
      <div className="hidden md:flex p-4 md:p-6 items-center justify-between sticky top-0 bg-[#F9F7F2]/80 backdrop-blur-md z-20 border-b border-black/5">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 border-2 border-[#1a1a1a] rounded-xl bg-white hover:bg-gray-100 transition-colors shadow-[2px_2px_0px_#000]"
        >
          <Menu size={20} className="text-black" />
        </button>
        <div className="flex items-center flex-wrap gap-2 justify-end ml-auto">
          {['Next.js', 'React', 'TypeScript', 'Fintech', 'EdTech', '5년차', 'AI 활용'].map((tag) => (
            <span key={tag} className="whitespace-nowrap px-3 py-1 bg-white border-2 border-[#1a1a1a] rounded-full text-[10px] font-black text-black shadow-[1px_1px_0px_#1a1a1a]">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-4 md:px-8 pb-48 md:pb-32">
        {/* Hero */}
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
              <span className="text-black/60">× Economics</span>
            </h2>
            <p className="hidden md:block mt-4 text-sm font-bold text-black max-w-[340px] leading-relaxed break-keep">
              경제학과 졸업 후 금융 현장을 거쳐 개발자로 전향한,<br />
              비즈니스와 사용자 경험을 함께 고민하는<br />
              5년차 프론트엔드 개발자입니다.
            </p>
          </div>
        </div>

        {/* Career Milestones */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl md:text-2xl font-black text-black">Career Milestones</h3>
          <button
            onClick={() => onViewChange('Experience')}
            className="text-xs font-black text-black/60 hover:text-black border-b-2 border-black/20 hover:border-black transition-all"
          >
            View All &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              onClick={() => onCardClick(exp)}
              className={`retro-card p-5 md:p-6 ${exp.color} rounded-[24px] md:rounded-[32px] cursor-pointer flex flex-col h-[190px] md:h-[220px] hover:shadow-[6px_6px_0px_#1a1a1a] active:translate-y-1 active:shadow-[2px_2px_0px_#1a1a1a] border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="bg-white p-1.5 rounded-xl border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#1a1a1a] w-9 h-9 overflow-hidden flex items-center justify-center shrink-0">
                  {exp.companyLogo
                    ? <img src={exp.companyLogo} alt={exp.company} className="w-full h-full object-cover" />
                    : domainIcon(exp.domain)
                  }
                </div>
                <span className={`text-[9px] font-black text-black/60 text-right leading-tight ml-2 ${exp.period.length > 15 ? 'max-w-[140px]' : ''}`}>{exp.period}</span>
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

        {/* Who I Am */}
        <div className="mt-12">
          <h3 className="text-xl md:text-2xl font-black text-black mb-6">Who I Am</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="retro-card bg-yellow-50 rounded-[24px] md:rounded-[32px] overflow-hidden flex group border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]">
              <div className="p-6 md:p-8 flex-1">
                <div className="bg-white p-2 w-fit rounded-xl border-2 border-[#1a1a1a] mb-4 shadow-[2px_2px_0px_#1a1a1a]">
                  <GraduationCap size={24} className="text-yellow-600" />
                </div>
                <h5 className="text-lg md:text-xl font-black mb-2 text-black">경제학 × 개발</h5>
                <p className="text-xs md:text-sm text-black/70 font-bold leading-relaxed">경제학과 졸업 후 농협은행 방카슈랑스팀을 거쳐 개발자로 전향하였고, 금융 현장 경험을 바탕으로 핀테크·리서치·교육 도메인에 대한 이해도를 가지고 있습니다.</p>
              </div>
            </div>

            <div className="retro-card bg-blue-50 rounded-[24px] md:rounded-[32px] overflow-hidden flex group border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]">
              <div className="p-6 md:p-8 flex-1">
                <div className="bg-white p-2 w-fit rounded-xl border-2 border-[#1a1a1a] mb-4 shadow-[2px_2px_0px_#1a1a1a]">
                  <UserCheck size={24} className="text-blue-600" />
                </div>
                <h5 className="text-lg md:text-xl font-black mb-2 text-black">사용자 중심 개발</h5>
                <p className="text-xs md:text-sm text-black/70 font-bold leading-relaxed">"왜 이 기능이 필요한지", "어떻게 써야 더 좋아지는지"를 고민합니다. 단순히 화면을 구현하는 것을 넘어 사용자 경험 개선에 집중합니다.</p>
              </div>
            </div>

            <div className="retro-card bg-green-50 rounded-[24px] md:rounded-[32px] overflow-hidden flex group border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]">
              <div className="p-6 md:p-8 flex-1">
                <div className="bg-white p-2 w-fit rounded-xl border-2 border-[#1a1a1a] mb-4 shadow-[2px_2px_0px_#1a1a1a]">
                  <Zap size={24} className="text-green-600" />
                </div>
                <h5 className="text-lg md:text-xl font-black mb-2 text-black">빠른 실행력</h5>
                <p className="text-xs md:text-sm text-black/70 font-bold leading-relaxed">초기 단계 스타트업에서의 서비스 구축 경험이 많습니다. 새로운 환경에 빠르게 적응하며 실행력 있게 제품을 만들어갑니다.</p>
              </div>
            </div>

            <div className="retro-card bg-purple-50 rounded-[24px] md:rounded-[32px] overflow-hidden flex group border-2 border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a]">
              <div className="p-6 md:p-8 flex-1">
                <div className="bg-white p-2 w-fit rounded-xl border-2 border-[#1a1a1a] mb-4 shadow-[2px_2px_0px_#1a1a1a]">
                  <BotMessageSquare size={24} className="text-purple-600" />
                </div>
                <h5 className="text-lg md:text-xl font-black mb-2 text-black">AI 활용 개발</h5>
                <p className="text-xs md:text-sm text-black/70 font-bold leading-relaxed">AI 도구를 개발 워크플로우에 자연스럽게 녹여 생산성을 높입니다. 코드 작성부터 문제 해결까지 AI를 효율적으로 활용해 더 빠르고 정확하게 결과물을 만들어냅니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
