import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingAviatorProps {
  onClick: () => void;
}

const FloatingAviator: React.FC<FloatingAviatorProps> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.div
        className="relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 whitespace-nowrap"
            >
              <div className="glass-card px-4 py-2 rounded-lg shadow-lg border border-white/20 dark:border-white/10">
                <p className="text-sm font-medium text-foreground inter-font flex items-center gap-2">
                  Know me off the track <span>👀</span>
                </p>
              </div>
              {/* Arrow */}
              <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-white/10 dark:border-l-white/5"></div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Button */}
        <motion.button
          onClick={onClick}
          className="relative w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center justify-center cursor-pointer group overflow-hidden"
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, -5, 0],
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-400 via-blue-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-50 blur-xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Avatar/Icon */}
          <div className="relative z-10 text-3xl">
            <motion.span
              animate={{
                rotate: isHovered ? [0, 15, -15, 0] : 0,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              😎
            </motion.span>
          </div>

          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white"
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{
              scale: [1, 1.5, 1.8],
              opacity: [0.8, 0.4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />

          {/* Notification Badge (optional - can show new content) */}
          <motion.div
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-background"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default FloatingAviator;

