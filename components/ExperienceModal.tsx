
import React from 'react';
import { X, ExternalLink, Calendar, MapPin } from 'lucide-react';
import { Experience } from '../types';

interface ExperienceModalProps {
  experience: Experience;
  onClose: () => void;
}

const ExperienceModal: React.FC<ExperienceModalProps> = ({ experience, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 bg-black/70 backdrop-blur-sm">
      <div className="bg-white w-full max-w-[1000px] h-full md:h-[680px] md:rounded-[48px] border-black border-t-4 md:border-4 shadow-none md:shadow-[12px_12px_0px_#000] overflow-hidden flex flex-col md:flex-row animate-in fade-in slide-in-from-bottom-10 md:zoom-in duration-300">

        {/* Close Button Mobile - Floating */}
        <button
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 z-[60] p-2 bg-white rounded-full border-2 border-black shadow-[3px_3px_0px_#000] active:translate-y-[2px] active:shadow-none transition-all"
        >
          <X size={24} className="text-black" />
        </button>

        {/* Left/Top: 3D Visualization */}
        <div className="w-full md:w-1/2 h-[260px] md:h-full bg-[#E5E7EB] border-b-4 md:border-b-0 md:border-r-4 border-black relative overflow-hidden shrink-0">
          <iframe
            src='https://my.spline.design/3dcardz3ro-626Ak3nd2xVIbW9dFIpMvm7z/'
            frameBorder='0'
            width='100%'
            height='100%'
            title="3D Card Interaction"
            className="w-full h-full scale-125 md:scale-110 pointer-events-auto"
          />
          <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-white px-3 py-1.5 md:px-5 md:py-2.5 border-2 border-black rounded-full font-black text-[10px] md:text-sm shadow-[3px_3px_0px_#000]">
            3D CARD VIEW
          </div>
        </div>

        {/* Right/Bottom: Content Details */}
        <div className="w-full md:w-1/2 flex-1 md:h-full p-6 md:p-12 flex flex-col relative bg-white overflow-hidden">
          <button
            onClick={onClose}
            className="hidden md:block absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors border-2 border-transparent hover:border-black"
          >
            <X size={28} className="text-black" />
          </button>

          <div className="flex-1 overflow-y-auto custom-scrollbar pr-0 md:pr-4">
            <div className={`w-fit px-4 py-1.5 rounded-full border-2 border-black font-black text-[10px] md:text-[12px] uppercase tracking-widest mb-4 md:mb-8 ${experience.color} text-black shadow-[2px_2px_0px_#000]`}>
              {experience.domain} Specialist
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-2 text-black leading-tight tracking-tighter">{experience.title}</h2>
            <p className="text-xl md:text-2xl font-bold text-black/60 mb-6 md:mb-10">{experience.company}</p>

            <div className="space-y-6 md:space-y-10">
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 text-xs md:text-base font-black text-black">
                <div className="flex items-center gap-2">
                  <Calendar size={20} className="text-black/40" />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={20} className="text-black/40" />
                  <span>Seoul & Global</span>
                </div>
              </div>

              <div className="space-y-3 md:space-y-6">
                <h3 className="text-lg md:text-2xl font-black pt-6 border-t-2 border-black/10 text-black">Career Summary</h3>
                <p className="text-sm md:text-base text-black font-bold leading-relaxed">
                  {experience.description}
                </p>
              </div>

              <div className="space-y-3 md:space-y-6">
                <h3 className="text-lg md:text-2xl font-black pt-6 border-t-2 border-black/10 text-black">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {experience.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1.5 md:px-4 md:py-2 bg-white border-2 border-black rounded-lg md:rounded-xl text-[10px] md:text-sm font-black text-black shadow-[2px_2px_0px_#000]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-10 pt-6 md:pt-8 border-t-2 border-black/10 flex items-center justify-between pb-4 md:pb-0">
            <button className="flex items-center gap-2 text-sm md:text-base font-black text-black/50 hover:text-black transition-colors">
              Case Study <ExternalLink size={18} />
            </button>
            <button
              onClick={onClose}
              className="bg-black text-white px-8 py-3 md:px-10 md:py-4 rounded-xl md:rounded-2xl font-black text-sm md:text-lg hover:translate-x-1 active:translate-y-1 transition-all shadow-[4px_4px_0px_#1a1a1a] md:shadow-[6px_6px_0px_#1a1a1a] active:shadow-none"
            >
              Close History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
