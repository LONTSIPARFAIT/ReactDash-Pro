import { Menu, X, Home, BarChart3, Users, Settings, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: BarChart3, label: 'Analytics' },
    { icon: Users, label: 'Users' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <div className={`${isOpen ? 'w-64' : 'w-20'} bg-surface border-r border-surface h-screen transition-all duration-300 flex flex-col`}>
      <div className="p-5 flex items-center justify-between border-b border-surface">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-2xl flex items-center justify-center font-bold text-lg">RD</div>
          {isOpen && <span className="font-semibold text-2xl tracking-tight text-text">ReactDash Pro</span>}
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-text-muted hover:text-text p-1 rounded-lg hover:bg-surface-2 lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ x: 8 }}
            className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl cursor-pointer transition-all ${
              item.active 
                ? 'bg-surface-2 text-text' 
                : 'hover:bg-surface-2 text-text-muted hover:text-text'
            }`}
          >
            <item.icon size={22} />
            {isOpen && <span className="font-medium">{item.label}</span>}
          </motion.div>
        ))}
      </nav>

      <div className="p-4 border-t border-surface mt-auto">
        <div className="flex items-center gap-3 px-4 py-3 text-text-muted hover:text-text cursor-pointer rounded-2xl hover:bg-surface-2">
          <LogOut size={22} />
          {isOpen && <span className="font-medium">Logout</span>}
        </div>
      </div>
    </div>
  );
}