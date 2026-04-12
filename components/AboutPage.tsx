import React from 'react';

const renderTextWithLinks = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split('\n').map((line, lineIdx, arr) => {
    const parts = line.split(urlRegex);
    return (
      <React.Fragment key={lineIdx}>
        {parts.map((part, partIdx) =>
          urlRegex.test(part) ? (
            <a
              key={partIdx}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700 break-all"
            >
              {part}
            </a>
          ) : (
            <span key={partIdx}>{part}</span>
          )
        )
        }
        {lineIdx < arr.length - 1 && <br />}
      </React.Fragment >
    );
  });
};
const aboutText = `경제학과를 졸업하고 금융 현장에서 커리어를 시작했지만,
지금은 4년 차 프론트엔드 개발자 강지현입니다.

농협은행 방카슈랑스팀에서 약 1년간 근무하며,
방카 판매인 등록·해지 및 자격 관리 업무를 담당했습니다.
당시 방카 관련 서비스 개편으로 인해 앱과 웹 서비스의 구조와 화면이 함께 변경되었고,
업무 협업을 위해 IT센터를 방문할 기회가 있었습니다.

그곳에서 처음으로 개발자들이 실제로 일하는 모습을 가까이에서 보게 되었고,
기획 단계에서 논의되던 내용이 코드로 구현되어 웹과 앱의 실제 서비스로 완성되는 과정이
굉장히 인상 깊게 다가왔습니다.
막연히 'IT 지원 조직'으로만 생각하던 개발이,
실제로는 비즈니스와 사용자 경험을 기술로 연결하는 고도의 전문 영역이라는 점을 체감하게 된 순간이었습니다.

이 경험을 계기로, 빠르게 변화하는 디지털 환경 속에서
보다 전문성을 갖고 장기적으로 성장할 수 있는 직무가 개발자라고 판단하게 되었고,
국비지원 개발 교육 과정을 통해 본격적으로 개발자로 전향했습니다.

[개발자로서의 정체성]

Next.js 기반의 웹 애플리케이션 개발을 중심으로
부동산 조각투자, P2P 금융, 생성형 AI, 글로벌 교육 플랫폼 등
다양한 도메인에서 실제 서비스를 만들어온 프론트엔드 개발자입니다.

새로운 환경에 빠르게 적응하며,
사용자 경험과 비즈니스 요구를 함께 고려하는 개발을 중요하게 생각합니다.
단순히 화면을 구현하는 것을 넘어,
"왜 이 기능이 필요한지", "어떻게 써야 더 좋아지는지"를 고민하며 서비스를 만들어왔습니다.

[경력 요약]

- FINAKLE (2021.11 ~ 2023.02)
레빗: https://rebit-x.vercel.app/
부동산 조각투자 플랫폼 '레빗', 그리고 PHP 기반
P2P 대출 플랫폼 '슬라이스펀드 → 펀치' 리뉴얼을 Next.js로 담당했습니다.
레거시 구조 개선과 신규 UI 구현을 맡아 서비스의 안정성과 확장성을 높였습니다.

- 블랙빗스튜디오 (2023.02 ~ 2024.07)
생성형 AI 리서치 플랫폼 '써밋(Summit)'의 프론트엔드를 전담했습니다.
기획 단계부터 참여해 인터랙션, 데이터 시각화 등
제품 핵심 경험을 Next.js 기반으로 구축했습니다.

- 이투스에듀 → 하이컨시 (2024.07 ~ 재직 중)
매치나우: https://matchnow.in/
인도 유저를 대상으로 하는 멘토–멘티 매칭 교육 플랫폼을 개발하고 있습니다.
Thymeleaf 환경에서 jQuery + JavaScript 기반으로 기능을 설계·구현하며,
현재 베타 테스트를 통해 빠르게 피드백을 반영하고 있습니다.
(이투스에듀에서 재직중 부서가 하이컨시로 인수되었습니다)

[저는 이런 개발자입니다]

→ 새로운 기술을 제품에 자연스럽게 녹여내는 걸 즐깁니다.
→ 사용자 흐름을 이해하고, 그 경험을 개선하는 데 큰 흥미가 있습니다.
→ 초기 단계의 서비스 구축 경험이 많아, 빠른 실행력에 자신 있습니다.`;

const AboutPage: React.FC = () => {
  return (
    <div className="p-8 md:p-12 min-h-full bg-[#F9F7F2]">
      <h2 className="text-4xl font-black text-black uppercase italic mb-4">About</h2>
      <div className="w-full h-[75vh] border-4 border-dashed border-black/10 rounded-[40px] overflow-y-auto p-8">
        <p className="font-medium text-black/80 text-base leading-relaxed">
          {renderTextWithLinks(aboutText)}
        </p>
      </div>
    </div>
  );
};

export default AboutPage;