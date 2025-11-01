import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { MapPin, Calendar, Settings, BarChart3, ChevronRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import FloatingAviator from './FloatingAviator';

// --- TYPE DEFINITIONS FOR PROPS ---
interface NavLink { label: string; href: string; }
interface Project { title: string; description: string; tags: string[]; imageContent?: React.ReactNode; }
interface Stat { value: string; label: string; }

export interface PortfolioPageProps {
  logo?: { initials: React.ReactNode; name: React.ReactNode; };
  navLinks?: NavLink[];
  resume?: { label: string; onClick?: () => void; };
  hero?: { titleLine1: React.ReactNode; titleLine2Gradient: React.ReactNode; subtitle: React.ReactNode; };
  ctaButtons?: { primary: { label: string; onClick?: () => void; }; secondary: { label: string; onClick?: () => void; }; };
  projects?: Project[];
  stats?: Stat[];
  showAnimatedBackground?: boolean;
  setActiveTab?: (tab: string) => void;
}

// --- INTERNAL ANIMATED BACKGROUND COMPONENT ---
const AuroraBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!mountRef.current) return;
        const currentMount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.domElement.style.position = 'fixed';
        renderer.domElement.style.top = '0';
        renderer.domElement.style.left = '0';
        renderer.domElement.style.zIndex = '0';
        renderer.domElement.style.display = 'block';
        currentMount.appendChild(renderer.domElement);
        const material = new THREE.ShaderMaterial({
            uniforms: { iTime: { value: 0 }, iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) } },
            vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
            fragmentShader: `
                uniform float iTime; uniform vec2 iResolution;
                #define NUM_OCTAVES 3
                float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
                float noise(vec2 p){ vec2 ip=floor(p);vec2 u=fract(p);u=u*u*(3.0-2.0*u);float res=mix(mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);return res*res; }
                float fbm(vec2 x) { float v=0.0;float a=0.3;vec2 shift=vec2(100);mat2 rot=mat2(cos(0.5),sin(0.5),-sin(0.5),cos(0.50));for(int i=0;i<NUM_OCTAVES;++i){v+=a*noise(x);x=rot*x*2.0+shift;a*=0.4;}return v;}
                void main() {
                    vec2 p=((gl_FragCoord.xy)-iResolution.xy*0.5)/iResolution.y*mat2(6.,-4.,4.,6.);vec4 o=vec4(0.);float f=2.+fbm(p+vec2(iTime*5.,0.))*.5;
                    for(float i=0.;i++<35.;){vec2 v=p+cos(i*i+(iTime+p.x*.08)*.025+i*vec2(13.,11.))*3.5;float tailNoise=fbm(v+vec2(iTime*.5,i))*.3*(1.-(i/35.));vec4 auroraColors=vec4(.1+.3*sin(i*.2+iTime*.4),.3+.5*cos(i*.3+iTime*.5),.7+.3*sin(i*.4+iTime*.3),1.);vec4 currentContribution=auroraColors*exp(sin(i*i+iTime*.8))/length(max(v,vec2(v.x*f*.015,v.y*1.5)));float thinnessFactor=smoothstep(0.,1.,i/35.)*.6;o+=currentContribution*(1.+tailNoise*.8)*thinnessFactor;}
                    o=tanh(pow(o/100.,vec4(1.6)));gl_FragColor=o*1.5;
                }`
        });
        const geometry = new THREE.PlaneGeometry(2, 2);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        let animationFrameId: number;
        const animate = () => { animationFrameId = requestAnimationFrame(animate); material.uniforms.iTime.value += 0.016; renderer.render(scene, camera); };
        const handleResize = () => { renderer.setSize(window.innerWidth, window.innerHeight); material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight); };
        window.addEventListener('resize', handleResize);
        animate();
        return () => { cancelAnimationFrame(animationFrameId); window.removeEventListener('resize', handleResize); if (currentMount.contains(renderer.domElement)) currentMount.removeChild(renderer.domElement); renderer.dispose(); material.dispose(); geometry.dispose(); };
    }, []);
    return <div ref={mountRef} />;
};

// --- MAIN CUSTOMIZABLE PORTFOLIO COMPONENT ---
const StarfallAboutSection: React.FC<PortfolioPageProps> = ({
  logo = { initials: 'SD', name: 'Saswat Dash' },
  navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Product Management', href: '#product' },
    { label: 'Data Analytics', href: '#data' },
    { label: 'Mechanical Core', href: '#mechanical' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ],
  resume = { label: 'Resume' },
  hero = {
    titleLine1: "Hey, I'm Saswat",
    titleLine2Gradient: 'Multi-Disciplinary Professional',
    subtitle: 'Turning bold ideas into real-world products with sharp data insights, intelligent systems, and obsessive focus on user experience.'
  },
  ctaButtons = {
    primary: { label: 'Get In Touch', onClick: () => setActiveTab?.('contact') },
    secondary: { label: 'View My Work', onClick: () => setActiveTab?.('viewwork') }
  },
  projects = [
    {
      title: 'Product Management',
      description: 'Driving user growth and product innovation through data-driven decision making and strategic thinking',
      tags: ['Strategy', 'Analytics', 'Growth'],
      imageContent: (
        <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
          <Settings className="text-white" size={48} />
        </div>
      )
    },
    {
      title: 'Data & Analytics',
      description: 'Leveraging advanced analytics and machine learning to extract insights and optimize business performance',
      tags: ['ML/AI', 'Python', 'Visualization'],
      imageContent: (
        <div className="w-full h-full bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
          <BarChart3 className="text-white" size={48} />
        </div>
      )
    },
    {
      title: 'Mechanical Core',
      description: 'Expertise in design, manufacturing, and process optimization with hands-on engineering experience',
      tags: ['CAD', 'Manufacturing', 'Optimization'],
      imageContent: (
        <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
          <Settings className="text-white" size={48} />
        </div>
      )
    }
  ],
  stats = [
    { value: '9th', label: 'American Express Campus Challenge out of 4,518 participants' },
    { value: '67%', label: 'MAU growth achieved at InstaPrepsAI through strategic relaunch' },
    { value: '85%', label: 'Model accuracy achieved in AtliQ Hotels Revenue Optimization' },
    { value: '55%', label: 'Increase in formability through warm forming process development' }
  ],
  showAnimatedBackground = true,
  setActiveTab
}) => {
  return (
    <div className="bg-background text-foreground geist-font">
      {showAnimatedBackground && <AuroraBackground />}
      <div className="relative">

        {/* Main Content */}
        <main id="about" className="w-full min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section with Two Columns */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              {/* Left Side - Content */}
              <div className="space-y-6 float-animation">
                {/* Hero Title */}
                <h1 className="leading-[1.1] geist-font">
                  <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight block mb-2 animate-fade-in">
                    {hero.titleLine1}
                  </span>
                  <span className="gradient-text text-2xl md:text-3xl lg:text-4xl font-light block tracking-tight">{hero.titleLine2Gradient}</span>
                </h1>
                
                <p className="md:text-xl leading-relaxed inter-font text-lg font-light text-muted-foreground">
                  {hero.subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={ctaButtons.primary.onClick} 
                    className="primary-button px-6 py-3 text-white rounded-lg font-medium text-sm min-w-[160px] flex items-center justify-center gap-2"
                  >
                    {ctaButtons.primary.label}
                    <ChevronRight size={16} />
                  </button>
                  <button 
                    onClick={ctaButtons.secondary.onClick} 
                    className="glass-button min-w-[160px] inter-font text-sm font-medium text-foreground rounded-lg px-6 py-3"
                  >
                    {ctaButtons.secondary.label}
                  </button>
                </div>

                {/* Location and Education Info */}
                <div className="flex flex-wrap gap-6 text-muted-foreground pt-2">
                  <div className="flex items-center space-x-2">
                    <MapPin size={20} />
                    <span className="inter-font">IIT Kharagpur</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar size={20} />
                    <span className="inter-font">Expected Graduation: 2026</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Profile Photo */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-full max-w-md">
                  <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-1">
                    <img
                      src="src/assets/images/Profile photo.jpeg"
                      alt="Saswat Dash"
                      className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                    />
                  </div>
                  {/* Active Status Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 rounded-full flex items-center gap-2 shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white text-xs font-medium">Available</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="divider mb-16" />

            {/* Professional Summary Cards */}
            <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-2xl p-6 text-left cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={() => {
                    const tabMap: { [key: string]: string } = {
                      'Product Management': 'product',
                      'Data & Analytics': 'data',
                      'Mechanical Core': 'mechanical'
                    };
                    setActiveTab?.(tabMap[project.title] || 'about');
                  }}
                >
                  <div className="project-image rounded-xl h-32 mb-4 flex items-center justify-center">
                    {project.imageContent}
                  </div>
                  <h3 className="text-lg font-medium text-card-foreground mb-2 geist-font">{project.title}</h3>
                  <p className="text-muted-foreground text-sm inter-font mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="skill-badge px-2 py-1 rounded text-xs text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="divider mb-16" />

            {/* Key Achievements Stats */}
            <div id="skills" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-6 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <div className="text-3xl md:text-4xl font-light text-foreground mb-2 geist-font tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground text-sm inter-font font-normal">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Floating Aviator Button */}
        <FloatingAviator onClick={() => setActiveTab?.('offtrack')} />
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
          text-shadow: 0 2px 10px rgba(59, 130, 246, 0.2);
        }
      `}</style>
    </div>
  );
};

export default StarfallAboutSection;