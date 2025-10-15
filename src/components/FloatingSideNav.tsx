import React, { useState, useEffect } from 'react';
import { ChevronRight, LucideIcon } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface FloatingSideNavProps {
  items: NavItem[];
}

const FloatingSideNav: React.FC<FloatingSideNavProps> = ({ items }) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="relative">
        {/* Floating animation wrapper */}
        <div className="animate-float">
          <div className="bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out"
            style={{ width: isExpanded ? '200px' : '60px' }}
          >
            <div className="p-3 space-y-2">
              {items.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-500/20 dark:bg-blue-400/20 text-blue-600 dark:text-blue-400'
                        : 'hover:bg-white/20 dark:hover:bg-black/20 text-gray-700 dark:text-gray-300'
                    }`}
                    title={item.label}
                  >
                    <Icon size={20} className="flex-shrink-0" />
                    <span
                      className={`text-sm font-medium whitespace-nowrap transition-opacity duration-300 ${
                        isExpanded ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Floating indicator when collapsed */}
        {!isExpanded && (
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 animate-pulse">
            <div className="bg-blue-500/50 dark:bg-blue-400/50 rounded-full p-1">
              <ChevronRight size={12} className="text-white" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingSideNav;

