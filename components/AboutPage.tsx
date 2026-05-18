import React, { useState } from 'react';
import { MapPin, ExternalLink, Award, BadgeCheck, Clock, X, Mail, Copy, Check } from 'lucide-react';
import gachonLogo from '../assets/images/gachon_logo.jpg';
import kyungilLogo from '../assets/images/kyungil_logo.jpeg';
import jihyunProfile from '../assets/images/jihyun.jpg';
import githubIcon from '../assets/images/gihub_icon.svg';
import { certifications, skills } from '../constants/profile';

const aboutText = `경제학과를 졸업하고 금융 현장에서 커리어를 시작했지만,
지금은 5년 차 프론트엔드 개발자 강지현입니다.

농협은행 방카슈랑스팀에서 약 1년간 근무하며,
방카 판매인 등록·해지 및 자격 관리 업무를 담당했습니다.
당시 방카 관련 서비스 개편으로 인해 앱과 웹 서비스의 구조와 화면이 함께 변경되었고,
업무 협업을 위해 IT센터를 방문할 기회가 있었습니다.

그곳에서 처음으로 개발자들이 실제로 일하는 모습을 가까이에서 보게 되었고,
기획 단계에서 논의되던 내용이 코드로 구현되어 실제 서비스로 완성되는 과정이
굉장히 인상 깊게 다가왔습니다.

이 경험을 계기로, 보다 전문성을 갖고 장기적으로 성장할 수 있는 직무가 개발자라고 판단하게 되었고,
국비지원 개발 교육 과정을 통해 본격적으로 개발자로 전향했습니다.`;

const strengthItems = [
  { icon: '🔍', text: '새로운 기술을 제품에 자연스럽게 녹여내는 걸 즐깁니다.' },
  { icon: '👤', text: '사용자 흐름을 이해하고, 그 경험을 개선하는 데 큰 흥미가 있습니다.' },
  { icon: '⚡', text: '초기 단계의 서비스 구축 경험이 많아, 빠른 실행력에 자신 있습니다.' },
  { icon: '🤖', text: 'AI 도구를 개발 워크플로우에 적극 활용해 더 빠르고 효율적으로 결과물을 만들어냅니다.' },
];

const AboutPage: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const email = "kjwise1128@gmail.com";
  const phone = "01086433076";

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
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`, '_blank');
  };

  return (
    <div className="flex-1 min-w-0 bg-[#F9F7F2] overflow-y-auto">
      {isContactModalOpen && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsContactModalOpen(false)}>
          <div className="bg-white w-full max-w-sm rounded-[32px] border-4 border-black shadow-[8px_8px_0px_#000] p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h6 className="font-black text-2xl italic uppercase tracking-tighter">Contact Me</h6>
              <button onClick={() => setIsContactModalOpen(false)} className="p-1 hover:bg-gray-100 rounded-full border border-transparent hover:border-black transition-all"><X size={20} /></button>
            </div>
            <div className="space-y-4">
              <button onClick={handleGmailOpen} className="w-full flex items-center gap-4 bg-red-50 border-2 border-black rounded-2xl px-5 py-4 hover:bg-red-100 transition-all shadow-[4px_4px_0px_#000] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000]">
                <div className="bg-white p-2 rounded-xl border border-black shrink-0"><Mail className="text-red-500" size={20} /></div>
                <div className="text-left"><p className="text-[10px] font-black text-red-800 uppercase leading-none mb-1">Send via</p><p className="text-sm font-black text-black">Google Gmail</p></div>
              </button>
              <button onClick={handleCopyEmail} className="w-full flex items-center gap-4 bg-indigo-50 border-2 border-black rounded-2xl px-5 py-4 hover:bg-indigo-100 transition-all shadow-[4px_4px_0px_#000] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000]">
                <div className="bg-white p-2 rounded-xl border border-black shrink-0">{emailCopied ? <Check className="text-green-500" size={20} /> : <Copy className="text-indigo-500" size={20} />}</div>
                <div className="text-left"><p className="text-[10px] font-black text-indigo-800 uppercase leading-none mb-1">Email</p><p className="text-sm font-black text-black truncate max-w-[180px]">{email}</p></div>
                {emailCopied && <span className="ml-auto text-[10px] font-black text-green-600 bg-white px-2 py-1 rounded border border-green-600">COPIED!</span>}
              </button>
              <button onClick={handleCopyPhone} className="w-full flex items-center gap-4 bg-indigo-50 border-2 border-black rounded-2xl px-5 py-4 hover:bg-indigo-100 transition-all shadow-[4px_4px_0px_#000] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000]">
                <div className="bg-white p-2 rounded-xl border border-black shrink-0">{phoneCopied ? <Check className="text-green-500" size={20} /> : <Copy className="text-indigo-500" size={20} />}</div>
                <div className="text-left"><p className="text-[10px] font-black text-indigo-800 uppercase leading-none mb-1">Phone</p><p className="text-sm font-black text-black">{phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3")}</p></div>
                {phoneCopied && <span className="ml-auto text-[10px] font-black text-green-600 bg-white px-2 py-1 rounded border border-green-600">COPIED!</span>}
              </button>
            </div>
            <p className="mt-6 text-[10px] font-bold text-black/40 text-center uppercase tracking-widest">Thank you for your interest.</p>
          </div>
        </div>
      )}

      <div className="p-4 md:p-8 pb-32">
        {/* Mobile title */}
        <div className="block md:hidden mb-6">
          <h2 className="text-3xl font-black text-black uppercase italic tracking-tighter">About</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

          {/* ── Left: Profile + Bio ── */}
          <div className="flex-1 min-w-0 space-y-6">
            {/* Profile card */}
            <div className="bg-white border-2 border-black rounded-[28px] md:rounded-[36px] p-6 md:p-8 shadow-[4px_4px_0px_#000] flex items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-black shadow-[3px_3px_0px_#000] overflow-hidden shrink-0">
                <img src={jihyunProfile} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black text-black leading-tight">강지현</h3>
                <p className="text-base md:text-lg font-black text-black/60">Frontend Dev.</p>
                <div className="flex items-center gap-1.5 mt-2 text-xs font-bold text-black/50">
                  <MapPin size={13} />
                  <span>Republic of Korea</span>
                </div>
                <div className="flex gap-2 mt-3">
                  <span className="text-[9px] font-black bg-yellow-100 px-2 py-0.5 border border-black rounded shadow-[1px_1px_0px_#000]">ECONOMICS</span>
                  <span className="text-[9px] font-black bg-blue-100 px-2 py-0.5 border border-black rounded shadow-[1px_1px_0px_#000]">5YRS EXP</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="bg-white border-2 border-black rounded-[28px] md:rounded-[36px] p-6 md:p-8 shadow-[4px_4px_0px_#000]">
              <h4 className="text-lg md:text-xl font-black text-black mb-4 uppercase italic">About Me</h4>
              <p className="text-sm font-bold text-black/80 leading-relaxed whitespace-pre-line">{aboutText}</p>
            </div>

            {/* Strengths */}
            <div className="bg-white border-2 border-black rounded-[28px] md:rounded-[36px] p-6 md:p-8 shadow-[4px_4px_0px_#000]">
              <h4 className="text-lg md:text-xl font-black text-black mb-4 uppercase italic">이런 개발자입니다</h4>
              <div className="space-y-3">
                {strengthItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-[#F9F7F2] rounded-xl p-3 border border-black/10">
                    <span className="text-lg shrink-0">{item.icon}</span>
                    <p className="text-sm font-bold text-black/80 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub */}
            <a href="https://github.com/jorny95" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 bg-orange-50 border-2 border-black rounded-[28px] p-5 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] hover:-translate-y-0.5 transition-all">
              <div className="w-12 h-12 bg-white rounded-2xl border-2 border-black shadow-[2px_2px_0px_#000] p-2 flex items-center justify-center shrink-0">
                <img src={githubIcon} alt="GitHub" className="w-full h-full object-contain" />
              </div>
              <span className="font-black text-base uppercase tracking-tight">GitHub Profile</span>
              <ExternalLink size={16} className="ml-auto text-black/40" />
            </a>
          </div>

          {/* ── Right: Academic + Certs + Skills + Contact ── */}
          <div className="w-full lg:w-[340px] shrink-0 space-y-6">

            {/* Academic Path */}
            <div className="bg-white border-2 border-black rounded-[28px] md:rounded-[36px] p-6 shadow-[4px_4px_0px_#000]">
              <h4 className="text-lg font-black text-black mb-4 flex items-center gap-2">
                <Award size={18} /> Academic Path
              </h4>
              <div className="space-y-3">
                <div className="bg-orange-50 border-2 border-black rounded-2xl p-4 shadow-[2px_2px_0px_#000]">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 bg-white rounded-xl border-2 border-black p-1.5 flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#000]">
                      <img src={gachonLogo} alt="Gachon" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="font-black text-sm text-black">가천대학교</p>
                      <p className="text-[11px] font-bold text-black/80">글로벌경제학과 (심화전공)</p>
                      <p className="text-[11px] font-bold text-black/50">경영학과 (복수전공)</p>
                      <div className="flex gap-1.5 mt-2">
                        <span className="text-[9px] font-black bg-white px-2 py-0.5 border-2 border-black rounded shadow-[1px_1px_0px_#000]">GPA <span className="text-orange-600">4.39</span> / 4.5</span>
                        <span className="text-[9px] font-black bg-white px-2 py-0.5 border-2 border-black rounded shadow-[1px_1px_0px_#000]">120 Credits</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo-50 border-2 border-black rounded-2xl p-4 shadow-[2px_2px_0px_#000]">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 bg-white rounded-xl border-2 border-black p-1.5 flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#000]">
                      <img src={kyungilLogo} alt="Kyungil" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="font-black text-sm text-black">경일게임아카데미</p>
                      <p className="text-[11px] font-bold text-black/80">블록체인 개발자 양성과정 수료</p>
                      <span className="text-[9px] font-black bg-white px-2 py-0.5 rounded border border-black uppercase mt-2 inline-block">Technical Intensive</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white border-2 border-black rounded-[28px] md:rounded-[36px] p-6 shadow-[4px_4px_0px_#000]">
              <h4 className="text-lg font-black text-black mb-4 flex items-center gap-2">
                <BadgeCheck size={18} /> Certifications
              </h4>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center justify-between bg-[#F9F7F2] border-2 border-black rounded-2xl px-4 py-3 shadow-[2px_2px_0px_#000]">
                    <div className="flex items-center gap-2 min-w-0">
                      {cert.status === 'pending'
                        ? <Clock size={14} className="text-yellow-500 shrink-0" />
                        : <BadgeCheck size={14} className="text-green-500 shrink-0" />
                      }
                      <div className="min-w-0">
                        <p className="text-xs font-black text-black">{cert.name}</p>
                        <p className="text-[9px] font-bold text-black/50">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <span className={`text-[9px] font-black px-2 py-0.5 rounded border ${cert.status === 'pending' ? 'bg-yellow-50 border-yellow-400 text-yellow-700' : 'bg-green-50 border-green-400 text-green-700'}`}>
                        {cert.status === 'pending' ? '취득예정' : '취득'}
                      </span>
                      <p className="text-[9px] font-bold text-black/40 mt-0.5">{cert.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competency */}
            <div className="bg-white border-2 border-black rounded-[28px] md:rounded-[36px] p-6 shadow-[4px_4px_0px_#000]">
              <h4 className="text-lg font-black text-black mb-4">Core Competency</h4>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="p-3 bg-[#F9F7F2] rounded-2xl border-2 border-black shadow-[2px_2px_0px_#000]">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className="text-xs font-black text-black block">{skill.name}</span>
                        {'desc' in skill && <span className="text-[9px] font-bold text-black/40">{(skill as any).desc}</span>}
                      </div>
                      <span className="text-[11px] font-black text-black">{skill.progress}%</span>
                    </div>
                    <div className="w-full bg-white h-2.5 rounded-full overflow-hidden border-2 border-black">
                      <div className={`${skill.color} h-full rounded-full`} style={{ width: `${skill.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-indigo-50 border-2 border-black rounded-[28px] md:rounded-[36px] p-6 shadow-[4px_4px_0px_#000]">
              <h4 className="text-lg font-black text-black mb-2">Contact Info.</h4>
              <div className="flex items-center gap-2 text-xs font-black text-black mb-4">
                <MapPin size={14} className="text-indigo-600" />
                <span>Seoul, KR | Open for Remote</span>
              </div>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="w-full flex items-center justify-between bg-white border-2 border-black rounded-2xl px-5 py-4 text-sm font-black text-black hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_#000] active:shadow-none active:translate-y-[4px]"
              >
                <span>Contact Now!</span>
                <ExternalLink size={16} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
