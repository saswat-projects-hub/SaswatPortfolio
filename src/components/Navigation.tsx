import React from 'react';
import { User, BarChart3, Settings, GraduationCap, Mail } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'about', label: 'About', icon: User },
    { id: 'product', label: 'Product Management', icon: Settings },
    { id: 'data', label: 'Data & Analytics', icon: BarChart3 },
    { id: 'mechanical', label: 'Mechanical Core', icon: Settings },
    { id: 'education', label: 'Education & Skills', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className="sticky top-0 bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-border backdrop-blur-md border border-border flex items-center justify-center">
              <span className="geist-font text-sm font-bold text-foreground">SD</span>
            </div>
            <span className="geist-font text-lg font-medium text-foreground">Saswat Dash</span>
          </div>
          <div className="hidden md:flex items-center space-x-4 ">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`group relative flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeTab === id
                    ? 'text-foreground font-medium bg-white/10 dark:bg-white/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5 dark:hover:bg-white/5'
                }`}
              >
                <Icon size={18} />
                <span className="inter-font text-sm max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
                  {label}
                </span>
              </button>
            ))}
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden">
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="glass-button px-4 py-2 rounded-lg inter-font text-sm"
            >
              {tabs.map(({ id, label }) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;