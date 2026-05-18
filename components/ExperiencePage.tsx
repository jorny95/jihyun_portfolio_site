
import React from 'react';
import { TrendingUp, Monitor, Users, ChevronRight, Calendar, Building2 } from 'lucide-react';
import { Experience } from '../types';

interface ExperiencePageProps {
  experiences: Experience[];
  onCardClick: (exp: Experience) => void;
}

const domainIcon = (domain: Experience['domain']) => {
  if (domain === 'Fintech') return <TrendingUp size={20} className="text-black" />;
  if (domain === 'Research') return <Monitor size={20} className="text-black" />;
  return <Users size={20} className="text-black" />;
};

const ExperiencePage: React.FC<ExperiencePageProps> = ({ experiences, onCardClick }) => {
  return (
    <div className="flex-1 flex flex-col min-w-0 bg-[#F9F7F2]">
      {/* Header */}
      <div className="hidden md:flex p-6 items-center justify-between sticky top-0 bg-[#F9F7F2]/80 backdrop-blur-md z-20 border-b border-black/5">
        <h2 className="text-4xl font-black text-black uppercase italic tracking-tighter">Experience</h2>
        <span className="text-sm font-black text-black/40 uppercase tracking-widest">{experiences.length} Companies</span>
      </div>

      <div className="px-4 md:px-8 pb-32 pt-4">
        {/* Mobile title */}
        <div className="block md:hidden mb-6">
          <h2 className="text-3xl font-black text-black uppercase italic tracking-tighter">Experience</h2>
          <p className="text-xs font-black text-black/40 uppercase tracking-widest mt-1">{experiences.length} Companies</p>
        </div>

        {/* Timeline list */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[27px] md:left-[35px] top-0 bottom-0 w-[2px] bg-black/10" />

          <div className="space-y-4 md:space-y-5">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => onCardClick(exp)}
                className="w-full text-left flex items-start gap-4 md:gap-6 group"
              >
                {/* Timeline dot */}
                <div className="relative shrink-0 mt-4">
                  <div className={`w-[56px] md:w-[72px] h-[56px] md:h-[72px] ${exp.color} rounded-2xl md:rounded-3xl border-2 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center group-hover:shadow-[5px_5px_0px_#000] group-hover:-translate-y-0.5 transition-all overflow-hidden`}>
                    {exp.companyLogo ? (
                      <img src={exp.companyLogo} alt={exp.company} className="w-full h-full object-cover" />
                    ) : (
                      domainIcon(exp.domain)
                    )}
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-white border-2 border-black rounded-full flex items-center justify-center">
                    <span className="text-[9px] font-black">{index + 1}</span>
                  </div>
                </div>

                {/* Card content */}
                <div className={`flex-1 ${exp.color} border-2 border-black rounded-[20px] md:rounded-[28px] p-4 md:p-6 shadow-[3px_3px_0px_#000] group-hover:shadow-[6px_6px_0px_#000] group-hover:-translate-y-0.5 transition-all`}>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      {/* Domain badge */}
                      <span className="inline-block px-2.5 py-0.5 bg-white border-2 border-black rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-2 shadow-[1px_1px_0px_#000]">
                        {exp.domain}
                      </span>

                      {/* Title + Company */}
                      <h3 className="text-base md:text-xl font-black text-black leading-tight">{exp.title}</h3>
                      <div className="flex items-center gap-1.5 mt-0.5 mb-2">
                        <Building2 size={12} className="text-black/50 shrink-0" />
                        <p className="text-xs md:text-sm font-bold text-black/70">{exp.company}</p>
                      </div>

                      {/* Period */}
                      <div className="flex items-center gap-1.5 mb-3">
                        <Calendar size={12} className="text-black/50 shrink-0" />
                        <span className="text-[10px] md:text-xs font-black text-black/60 uppercase tracking-wider">{exp.period}</span>
                      </div>

                      {/* One-line description */}
                      <p className="text-xs md:text-sm font-bold text-black/80 leading-relaxed line-clamp-2">
                        {exp.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="shrink-0 mt-1 w-8 h-8 bg-white border-2 border-black rounded-xl flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-black group-hover:text-white transition-colors">
                      <ChevronRight size={16} className="text-black group-hover:text-white" />
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t-2 border-black/10">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 bg-white border-2 border-black rounded-lg text-[9px] md:text-[10px] font-black text-black shadow-[1px_1px_0px_#000]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Total experience summary */}
        <div className="mt-10 p-5 md:p-8 bg-white border-2 border-black rounded-[24px] md:rounded-[32px] shadow-[4px_4px_0px_#000]">
          <p className="text-xs font-black uppercase tracking-widest text-black/40 mb-2">Total Experience</p>
          <p className="text-3xl md:text-4xl font-black text-black">4+ Years</p>
          <p className="text-sm font-bold text-black/60 mt-1">Frontend Engineering across Fintech · Research · EdTech</p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
