
import React, { useState } from 'react';
import { Award, GraduationCap, MapPin, ExternalLink, X, Mail, Copy, Check } from 'lucide-react';
import gachonLogo from '../assets/images/gachon_logo.jpg';
import kyungilLogo from '../assets/images/kyungil_logo.jpeg';
import jihyunProfile from '../assets/images/jihyun.jpg';

interface RightPanelProps {
  isMobileTop?: boolean;
}

const RightPanel: React.FC<RightPanelProps> = ({ isMobileTop }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const email = "kjwise1128@gmail.com";
  const phone = "01086433076";

  const skills = [
    { name: 'HTML,CSS,Javacript', progress: 90, color: 'bg-red-500' },
    { name: 'React / Next.js', progress: 95, color: 'bg-blue-500', desc: 'Core UI Architecture' },
    { name: 'State Management (Context/Zustand)', progress: 90, color: 'bg-yellow-500', desc: 'Complex Data Flow' },
    { name: 'Fullstack Bridge (Spring/Thymeleaf)', progress: 85, color: 'bg-green-500', desc: 'Backend Integration' },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };


  const handleGmailOpen = () => {
    const subject = encodeURIComponent("강지현 개발자님, 포트폴리오 보고 연락드립니다.");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;
    window.open(gmailUrl, '_blank');
  };

  const ContactModal = () => (
    <div
      className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={() => setIsContactModalOpen(false)}
    >
      <div
        className="bg-white w-full max-w-sm rounded-[32px] border-4 border-black shadow-[8px_8px_0px_#000] p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h6 className="font-black text-2xl italic uppercase tracking-tighter">Contact Me</h6>
          <button onClick={() => setIsContactModalOpen(false)} className="p-1 hover:bg-gray-100 rounded-full border border-transparent hover:border-black transition-all">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleGmailOpen}
            className="w-full flex items-center gap-4 bg-red-50 border-2 border-black rounded-2xl px-5 py-4 hover:bg-red-100 transition-all shadow-[4px_4px_0px_#000] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000]"
          >
            <div className="bg-white p-2 rounded-xl border border-black shrink-0">
              <Mail className="text-red-500" size={20} />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black text-red-800 uppercase leading-none mb-1">Send via</p>
              <p className="text-sm font-black text-black">Google Gmail</p>
            </div>
          </button>

          <button
            onClick={handleCopyEmail}
            className="w-full flex items-center gap-4 bg-indigo-50 border-2 border-black rounded-2xl px-5 py-4 hover:bg-indigo-100 transition-all shadow-[4px_4px_0px_#000] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000]"
          >
            <div className="bg-white p-2 rounded-xl border border-black shrink-0">
              {emailCopied ? <Check className="text-green-500" size={20} /> : <Copy className="text-indigo-500" size={20} />}
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black text-indigo-800 uppercase leading-none mb-1">Email Address</p>
              <p className="text-sm font-black text-black truncate max-w-[180px]">{email}</p>
            </div>
            {emailCopied && <span className="ml-auto text-[10px] font-black text-green-600 bg-white px-2 py-1 rounded border border-green-600">COPIED!</span>}
          </button>

          <button
            onClick={handleCopyPhone}
            className="w-full flex items-center gap-4 bg-indigo-50 border-2 border-black rounded-2xl px-5 py-4 hover:bg-indigo-100 transition-all shadow-[4px_4px_0px_#000] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000]"
          >
            <div className="bg-white p-2 rounded-xl border border-black shrink-0">
              {phoneCopied ? <Check className="text-green-500" size={20} /> : <Copy className="text-indigo-500" size={20} />}
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black text-indigo-800 uppercase leading-none mb-1">Phone Number</p>
              <p className="text-sm font-black text-black truncate max-w-[180px]">{phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")}</p>
            </div>
            {phoneCopied && <span className="ml-auto text-[10px] font-black text-green-600 bg-white px-2 py-1 rounded border border-green-600">COPIED!</span>}
          </button>
        </div>

        <p className="mt-6 text-[10px] font-bold text-black/40 text-center uppercase tracking-widest">Thank you for your interest.</p>
      </div>
    </div>
  );

  const ProfileImageModal = () => (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={() => setIsImageModalOpen(false)}
    >
      <button
        className="absolute top-8 right-8 p-3 text-white hover:bg-white/10 rounded-full transition-colors"
        onClick={() => setIsImageModalOpen(false)}
      >
        <X size={32} />
      </button>
      <div
        className="relative max-w-2xl w-full aspect-square bg-white rounded-[48px] border-8 border-black shadow-[16px_16px_0px_#1a1a1a] overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={jihyunProfile}
          alt="Profile Large"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  if (isMobileTop) {
    return (
      <div className="p-4 bg-white flex flex-col gap-4">
        {isImageModalOpen && <ProfileImageModal />}
        {isContactModalOpen && <ContactModal />}

        {/* Profile Header - Compact for Mobile */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div
              onClick={() => setIsImageModalOpen(true)}
              className="w-12 h-12 bg-yellow-400 rounded-full border-2 border-black flex items-center justify-center overflow-hidden shrink-0 shadow-[2px_2px_0px_#1a1a1a] cursor-pointer hover:scale-105 transition-transform"
            >
              <img src={jihyunProfile} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-black text-base text-black leading-tight">Frontend Dev.</h4>
              <p className="text-[9px] font-black text-black/50 uppercase tracking-tighter">Seoul, South Korea</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[9px] font-black bg-orange-100 px-2 py-0.5 border border-black rounded shadow-[1px_1px_0px_#000]">ECONOMICS</span>
          </div>
        </div>

        {/* Replaced Academic Path with Compact Core Competency to avoid scrolling */}
        <div className="retro-card bg-gray-50 p-4 rounded-2xl border-2 border-black shadow-[3px_3px_0px_#000]">
          <h5 className="font-black text-[10px] text-black uppercase tracking-widest mb-3 border-b border-black/10 pb-2 flex justify-between items-center">
            <span>Core Competency</span>
            <Award size={12} className="text-black" />
          </h5>
          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] font-black text-black uppercase truncate">{skill.name}</span>
                  <span className="text-[8px] font-black text-black">{skill.progress}%</span>
                </div>
                <div className="w-full bg-white h-1.5 rounded-full overflow-hidden border border-black/20">
                  <div className={`${skill.color} h-full rounded-full`} style={{ width: `${skill.progress}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full border-l-2 border-black flex flex-col p-6 lg:p-8 bg-white shrink-0 overflow-y-auto custom-scrollbar">
      {isImageModalOpen && <ProfileImageModal />}
      {isContactModalOpen && <ContactModal />}

      {/* Profile Header */}
      <div className="flex items-center space-x-4 mb-8">
        <div
          onClick={() => setIsImageModalOpen(true)}
          className="w-32 h-32 bg-yellow-400 rounded-full border-2 border-black flex items-center justify-center overflow-hidden shrink-0 shadow-[3px_3px_0px_#1a1a1a] cursor-pointer hover:rotate-3 transition-all"
        >
          <img src={jihyunProfile} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div className="min-w-0">
          <h4 className="font-black text-xl text-black truncate leading-tight">강지현</h4>
          <h4 className="font-black text-xl text-black truncate leading-tight">Frontend Dev.</h4>
          <div className="flex items-center gap-2 mt-3 text-xs font-bold text-black/60">
            <MapPin size={14} />
            <span>Republic of Korea</span>
          </div>
        </div>
      </div>

      {/* Education Background */}
      <h5 className="font-black text-lg text-black mb-4 flex items-center gap-2">
        <Award size={20} />
        Academic Path
      </h5>

      {/* University Card */}
      <div className="retro-card bg-orange-50 p-5 rounded-[32px] mb-4 border-2 border-black shadow-[4px_4px_0px_#000]">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-white rounded-2xl border-2 border-black shadow-[2px_2px_0px_#1a1a1a] p-2 flex items-center justify-center shrink-0">
            <img
              src={gachonLogo}
              alt="Gachon University"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="min-w-0">
            <h6 className="font-black text-base text-black leading-tight uppercase tracking-tight">가천대학교</h6>
            <p className="text-[11px] font-bold text-black mt-1">글로벌경제학과 (심화전공)</p>
            <p className="text-[11px] font-bold text-black/60">경영학과 (복수전공)</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <div className="bg-white px-2 py-1 rounded border-2 border-black shadow-[2px_2px_0px_#000] text-[10px] font-black">
                GPA <span className="text-orange-600">4.39</span> / 4.5
              </div>
              <div className="bg-white px-2 py-1 rounded border-2 border-black shadow-[2px_2px_0px_#000] text-[10px] font-black">
                120 Credits
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academy Card */}
      <div className="retro-card bg-indigo-50 p-5 rounded-[32px] mb-10 border-2 border-black shadow-[4px_4px_0px_#000]">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-white rounded-2xl border-2 border-black shadow-[2px_2px_0px_#1a1a1a] p-2 flex items-center justify-center shrink-0">
            <img
              src={kyungilLogo}
              alt="Kyungil Academy"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h6 className="font-black text-base text-black leading-tight uppercase tracking-tight">경일게임아카데미</h6>
            <p className="text-[11px] font-bold text-black mt-1">블록체인 개발자 양성과정 수료</p>
            <div className="mt-3">
              <span className="text-[9px] font-black bg-white px-2 py-0.5 rounded border border-black uppercase">Technical Intensive</span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills / Stats */}
      <h5 className="font-black text-lg text-black mb-4">Core Competency</h5>
      <div className="space-y-4 mb-8">
        {skills.map((skill) => (
          <div key={skill.name} className="p-4 bg-gray-50 rounded-2xl border-2 border-[#1a1a1a] shadow-[2px_2px_0px_#000]">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-xs font-black text-black uppercase tracking-tight block">{skill.name}</span>
                <span className="text-[9px] font-bold text-black/40 uppercase">{skill.desc}</span>
              </div>
              <span className="text-[11px] font-black text-black">{skill.progress}%</span>
            </div>
            <div className="w-full bg-white h-3 rounded-full overflow-hidden border-2 border-black">
              <div className={`${skill.color} h-full rounded-full transition-all duration-1000 border-r border-black/20`} style={{ width: `${skill.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Connect Card */}
      <div className="mt-auto pt-8">
        <div className="retro-card bg-indigo-50 p-6 rounded-[32px] border-2 border-black shadow-[6px_6px_0px_#1a1a1a]">
          <h6 className="font-black text-xl text-black mb-2 leading-tight">Contact Info.</h6>
          <div className="space-y-4 mt-4">
            <div className="flex items-center gap-3 text-xs font-black text-black">
              <MapPin size={18} className="text-indigo-600" />
              <span className="truncate">Seoul, KR | Open for Remote</span>
            </div>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="w-full flex items-center justify-between bg-white border-2 border-black rounded-2xl px-5 py-4 text-sm font-black text-black hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_#000] active:shadow-none active:translate-y-[4px]">
              <span>Contact Now!</span>
              <ExternalLink size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
