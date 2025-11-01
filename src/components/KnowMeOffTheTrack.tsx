import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Lightbulb, Globe, Target, ChevronLeft } from 'lucide-react';
import ShootingStarsBackground from './ShootingStarsBackground';

interface KnowMeOffTheTrackProps {
  setActiveTab: (tab: string) => void;
}

const KnowMeOffTheTrack: React.FC<KnowMeOffTheTrackProps> = ({ setActiveTab }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [vibeMeter, setVibeMeter] = useState(65);
  const [tiltStyle, setTiltStyle] = useState({ transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)' });

  // Carousel images - reference from public folder
  const carouselImages = [
    '/knowmeoffthetrack/1.webp',
    '/knowmeoffthetrack/2.jpg',
    '/knowmeoffthetrack/3.JPG',
    '/knowmeoffthetrack/4.JPG',
    '/knowmeoffthetrack/5.JPG',
    '/knowmeoffthetrack/6.jpg',
    '/knowmeoffthetrack/7.webp',
    '/knowmeoffthetrack/8.JPG'
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // 3D Tilt effect handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10; // Max 10 degrees
    const rotateY = ((x - centerX) / centerX) * 10; // Max 10 degrees
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    });
  };

  const funFacts = [
    {
      icon: <Coffee className="w-6 h-6 text-amber-600" />,
      text: "Great ideas happen between caffeine and chaos.",
      emoji: "☕"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
      text: "I tend to learn random things… that somehow always turn useful later.",
      emoji: "💡"
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      text: "Every new place I visit adds a new way of thinking to my toolkit.",
      emoji: "🌍"
    },
    {
      icon: <Target className="w-6 h-6 text-purple-500" />,
      text: "Balance of structure and spontaneity keeps me going.",
      emoji: "🎯"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Shooting Stars Background */}
      <ShootingStarsBackground starCount={30} />

      {/* Back Button */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <motion.button
          onClick={() => setActiveTab('about')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 glass-button px-4 py-2 rounded-lg"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={20} />
          <span className="inter-font font-medium">Back to About</span>
        </motion.button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Title Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 geist-font">
            Know Me <span className="gradient-text">Off The Track</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground inter-font italic max-w-2xl mx-auto">
            Because there's more to me than just work and deadlines
          </p>
        </motion.div>

        {/* Two Column Layout: Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Main Text Content with Highlighted Phrases */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Main Paragraph */}
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <div className="space-y-6 text-foreground inter-font leading-relaxed text-lg">
                <p>
                  <span className="text-3xl mr-2">👋</span>
                  Hey, I'm <strong className="gradient-text font-semibold">Saswat</strong> — <span className="highlighted-text">someone who loves exploring new ideas</span> as much as building them. While most know me through my product and design work, there's <span className="highlighted-text">a lighter, curious side</span> that <span className="highlighted-text">thrives on learning, experimenting, and connecting dots in unexpected ways.</span>
                </p>
                
                <p>
                  I adapt quickly — to people, places, and even chaos — which probably explains why I blend just as well into a startup brainstorm as I do into a formal strategy meeting. I enjoy fast-paced environments, but I'm equally at ease in calm, structured setups that value clarity and collaboration.
                </p>
                
                <p>
                  Outside work, you'll find me exploring creative side projects, diving into podcasts, sketching out design ideas, or traveling somewhere new just to reset my mind. I believe that <span className="highlighted-text">staying curious (and a little playful) keeps the creativity flowing.</span>
                </p>
                
                <p className="text-muted-foreground italic">
                  So, this space is just a small peek into who I am when the laptop lid closes — a mix of curiosity, caffeine, and creativity.
                </p>
              </div>
            </div>

            {/* Fun Facts Card */}
            <div className="glass-card rounded-2xl p-8 md:p-10 bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-pink-50/50 dark:from-purple-900/10 dark:via-blue-900/10 dark:to-pink-900/10">
              <h3 className="text-2xl font-bold text-foreground mb-6 geist-font flex items-center gap-2">
                <span className="text-3xl">✨</span> Fun Facts
              </h3>
              <div className="space-y-6">
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-2xl">{fact.emoji}</span>
                    </div>
                    <p className="text-foreground inter-font leading-relaxed">
                      {fact.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: 3D Tilted Image Carousel with Blue Border */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={tiltStyle}
              className="relative rounded-2xl overflow-hidden border-[5px] border-blue-500 shadow-2xl transition-all duration-200 ease-out cursor-pointer"
            >
              {/* Image Carousel */}
              <div className="relative w-full min-h-[400px] lg:min-h-[500px] bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-pink-900/20">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <img
                      src={carouselImages[currentImageIndex]}
                      alt={`Off the track moment ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain"
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-blue-500 w-8 shadow-lg shadow-blue-500/50' 
                          : 'bg-white/50 hover:bg-white/75 w-2'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* 3D Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Image Counter */}
            <div className="mt-4 text-center">
              <span className="text-sm text-muted-foreground inter-font">
                {currentImageIndex + 1} / {carouselImages.length}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Vibe Meter Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="glass-card rounded-2xl p-8 md:p-10 max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 geist-font text-center">
            Current Vibe Meter
          </h3>
          
          <div className="space-y-6">
            {/* Slider Labels */}
            <div className="flex justify-between items-center text-sm inter-font">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💭</span>
                <span className="text-muted-foreground">Chill</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Charged Up</span>
                <span className="text-2xl">⚡</span>
              </div>
            </div>

            {/* Slider */}
            <div className="relative">
              <input
                type="range"
                min="0"
                max="100"
                value={vibeMeter}
                onChange={(e) => setVibeMeter(parseInt(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-blue-200 via-purple-200 to-yellow-200 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-yellow-900/30 rounded-full appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, 
                    rgb(191, 219, 254) 0%, 
                    rgb(233, 213, 255) ${vibeMeter}%, 
                    rgb(229, 231, 235) ${vibeMeter}%, 
                    rgb(229, 231, 235) 100%)`
                }}
              />
              <div 
                className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-lg border-2 border-purple-400 transition-all duration-300 pointer-events-none"
                style={{ left: `calc(${vibeMeter}% - 12px)` }}
              />
            </div>

            {/* Value Display */}
            <div className="text-center">
              <div className="inline-block glass-button px-6 py-3 rounded-full">
                <span className="text-3xl font-bold gradient-text geist-font">
                  {vibeMeter}%
                </span>
              </div>
              <p className="text-muted-foreground text-sm mt-3 inter-font">
                {vibeMeter < 30 
                  ? "Taking it easy today 🧘" 
                  : vibeMeter < 70 
                  ? "Balanced and ready 🎯" 
                  : "Full throttle mode! 🚀"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          background: white;
          border: 2px solid rgb(192, 132, 252);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          opacity: 0;
        }
        
        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: white;
          border: 2px solid rgb(192, 132, 252);
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          opacity: 0;
        }

        .highlighted-text {
          background: linear-gradient(120deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
          padding: 2px 6px;
          border-radius: 4px;
          border-bottom: 2px solid rgba(59, 130, 246, 0.3);
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .highlighted-text:hover {
          background: linear-gradient(120deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 100%);
          border-bottom-color: rgba(59, 130, 246, 0.6);
          text-shadow: 0 0 8px rgba(59, 130, 246, 0.2);
        }

        @media (prefers-color-scheme: dark) {
          .highlighted-text {
            background: linear-gradient(120deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 51, 234, 0.15) 100%);
            border-bottom-color: rgba(59, 130, 246, 0.4);
          }

          .highlighted-text:hover {
            background: linear-gradient(120deg, rgba(59, 130, 246, 0.25) 0%, rgba(147, 51, 234, 0.25) 100%);
            border-bottom-color: rgba(59, 130, 246, 0.7);
          }
        }
      `}</style>
    </div>
  );
};

export default KnowMeOffTheTrack;

