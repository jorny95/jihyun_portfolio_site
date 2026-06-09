
export const certifications: { name: string; issuer: string; date: string; status: 'pass' | 'pending'; note?: string }[] = [
  {
    name: '정보처리기사',
    issuer: '한국산업인력공단',
    date: '2026.06 취득',
    status: 'pass' as const,
  },
  {
    name: 'SQLD',
    issuer: '한국데이터산업진흥원',
    date: '2026.03 취득',
    status: 'pass' as const,
  },
  {
    name: '컴퓨터활용능력 1급',
    issuer: '대한상공회의소',
    date: '취득',
    status: 'pass' as const,
  },
  {
    name: 'AFPK',
    issuer: '한국FP협회',
    date: '2019 취득',
    status: 'pass' as const,
  },
];

export const skills = [
  { name: 'HTML / CSS / JavaScript', progress: 90, color: 'bg-red-500' },
  { name: 'React / Next.js', progress: 95, color: 'bg-blue-500', desc: 'Core UI Architecture' },
  { name: 'State Management', progress: 90, color: 'bg-yellow-500', desc: 'Context / Zustand' },
  { name: 'Fullstack Bridge', progress: 85, color: 'bg-green-500', desc: 'Spring / Thymeleaf' },
];
