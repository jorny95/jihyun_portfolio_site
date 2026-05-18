
import React from 'react';
import { Home, Briefcase, User } from 'lucide-react';
import { ViewType } from '../types';

interface MobileNavProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ activeView, setActiveView }) => {
  const navItems: { label: ViewType; icon: any }[] = [
    { label: 'Overview', icon: <Home size={20} /> },
    { label: 'Experience', icon: <Briefcase size={20} /> },
    { label: 'About', icon: <User size={20} /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-4 border-black px-6 pt-4 flex items-center justify-between z-40" style={{ paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))' }}>
      {navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => setActiveView(item.label)}
          className={`flex flex-col items-center space-y-1 transition-all ${activeView === item.label
            ? 'text-black scale-110'
            : 'text-gray-400'
            }`}
        >
          <div className={`${activeView === item.label ? 'bg-yellow-300 p-2 rounded-xl border-2 border-black -mt-6 shadow-[2px_2px_0px_#000]' : ''}`}>
            {item.icon}
          </div>
          <span className="text-[10px] font-black uppercase tracking-tighter">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default MobileNav;
