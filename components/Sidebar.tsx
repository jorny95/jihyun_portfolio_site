
import React from 'react';
import { Home, Briefcase, Code, User, LogOut, Gift, X } from 'lucide-react';
import { ViewType } from '../types';

interface SidebarProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, isOpen, onClose }) => {
  const navItems: { label: ViewType; icon: any }[] = [
    { label: 'Overview', icon: <Home size={22} /> },
    { label: 'Experience', icon: <Briefcase size={22} /> },
    { label: 'Projects', icon: <Code size={22} /> },
    { label: 'About', icon: <User size={22} /> },
  ];

  const sidebarContent = (isDrawer: boolean) => (
    <div className={`w-full h-full flex flex-col p-8 lg:p-10 bg-white shrink-0 relative ${!isDrawer ? 'border-r-2 border-black' : ''}`}>
      {/* Close button for drawer mode */}
      {isDrawer && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 border-2 border-black rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={20} className="text-black" />
        </button>
      )}

      <div className="mb-14">
        <h1 className="text-4xl font-black italic tracking-tighter text-black select-none">JI_HYUN.</h1>
      </div>

      <nav className="flex-1 space-y-5">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setActiveView(item.label);
              if (onClose && isDrawer) onClose();
            }}
            className={`w-full flex items-center space-x-4 px-5 py-4 rounded-2xl transition-all border-2 ${activeView === item.label
              ? 'bg-black text-white border-black shadow-[4px_4px_0px_#e5e7eb]'
              : 'bg-white text-black border-transparent hover:border-black hover:bg-gray-50'
              }`}
          >
            <span className={activeView === item.label ? 'text-white' : 'text-black'}>
              {item.icon}
            </span>
            <span className="font-black text-sm uppercase tracking-wider">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto space-y-8">
        <button className="flex items-center space-x-4 px-5 py-3 text-black/40 hover:text-black font-black text-sm uppercase transition-all">
          <LogOut size={22} />
          <span>Exit App</span>
        </button>

        <div className="p-5 bg-yellow-100 rounded-3xl border-2 border-black relative overflow-hidden shadow-[4px_4px_0px_#000]">
          <div className="relative z-10">
            <div className="bg-white p-2.5 w-fit rounded-xl border-2 border-black mb-3 shadow-[2px_2px_0px_#000]">
              <Gift size={20} className="text-yellow-600" />
            </div>
            <p className="text-[11px] font-black text-black leading-tight mb-2">Upgrade to Pro to see all analytics.</p>
            <button className="w-full mt-1 bg-white border-2 border-black rounded-xl py-2 text-[10px] font-black text-black hover:bg-black hover:text-white transition-all">
              GO PREMIUM
            </button>
          </div>
          <div className="absolute -right-3 -bottom-3 w-20 h-20 bg-yellow-300 rotate-12 -z-0 border-2 border-black opacity-40"></div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Version: Integrated into the flex flow */}
      <div className="hidden lg:block w-[260px] h-full shrink-0">
        {sidebarContent(false)}
      </div>

      {/* Mobile/Tablet Drawer Version: Overlayed */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />
        <div
          className={`absolute left-0 top-0 h-full w-[280px] bg-white transition-transform duration-300 border-r-4 border-black ${isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          {sidebarContent(true)}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
