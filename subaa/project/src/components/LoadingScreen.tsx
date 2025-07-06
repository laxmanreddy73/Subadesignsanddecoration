import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout>();
  const messageIntervalRef = useRef<NodeJS.Timeout>();

  const loadingMessages = [
    'Welcome to Suba Designs',
    'Creating magical moments...',
    'Almost ready!'
  ];

  useEffect(() => {
    if (!isLoading) return;

    // Reset states
    setProgress(0);
    setCurrentMessageIndex(0);

    // Smooth, fast progress - completes in 1 second
    const totalDuration = 1000;
    const updateInterval = 16; // 60fps for smooth animation
    const progressIncrement = (100 / (totalDuration / updateInterval));

    intervalRef.current = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = Math.min(prevProgress + progressIncrement, 100);
        
        if (newProgress >= 100) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          // Very short delay before completing
          setTimeout(onLoadingComplete, 200);
        }
        
        return newProgress;
      });
    }, updateInterval);

    // Message cycling - every 350ms
    messageIntervalRef.current = setInterval(() => {
      setCurrentMessageIndex(prev => 
        prev < loadingMessages.length - 1 ? prev + 1 : prev
      );
    }, 350);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (messageIntervalRef.current) clearInterval(messageIntervalRef.current);
    };
  }, [isLoading, onLoadingComplete]);

  // Minimal floating elements for performance
  const floatingElements = React.useMemo(() => (
    <>
      {/* Just 2 hearts for minimal animation */}
      {[0, 1].map(i => (
        <motion.div
          key={`heart-${i}`}
          className="absolute pointer-events-none opacity-20"
          style={{
            left: `${30 + i * 40}%`,
            top: '70%'
          }}
          animate={{
            y: [-10, -40],
            opacity: [0, 0.2, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear"
          }}
        >
          <Heart className="text-pink-400" size={8} fill="currentColor" />
        </motion.div>
      ))}
      
      {/* Just 1 sparkle */}
      <motion.div
        className="absolute pointer-events-none opacity-30 top-1/3 right-1/4"
        animate={{
          scale: [0, 1, 0],
          rotate: [0, 180]
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="text-yellow-400" size={8} />
      </motion.div>
    </>
  ), []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100"
        >
          {/* Minimal floating elements */}
          <div className="absolute inset-0">
            {floatingElements}
          </div>

          {/* Main content with faster animations */}
          <div className="relative z-10 text-center max-w-sm mx-auto px-6">
            {/* Logo - faster entrance */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mb-4"
            >
              <img 
                src="https://i.postimg.cc/Pr28Q6Qm/feswgfew-Photoroom.png" 
                alt="Suba Designs Logo"
                className="h-12 md:h-16 w-auto mx-auto drop-shadow-md"
                loading="eager"
              />
            </motion.div>

            {/* Title - faster entrance */}
            <motion.h1
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className="text-lg md:text-xl font-serif font-bold mb-1 text-amber-700"
            >
              Suba Designs
            </motion.h1>

            {/* Subtitle - faster entrance */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.2 }}
              className="text-xs text-gray-600 mb-6 font-light"
            >
              Creating Magical Wedding Moments
            </motion.p>

            {/* Smooth progress bar without percentage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.15 }}
              className="mb-4"
            >
              <div className="w-full bg-white/60 rounded-full h-1.5 shadow-sm overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 shadow-sm"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.05, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Fast-changing loading text */}
            <div className="h-4 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentMessageIndex}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -3 }}
                  transition={{ duration: 0.15 }}
                  className="text-gray-600 text-xs font-medium"
                >
                  {loadingMessages[currentMessageIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Simple loading dots */}
            <motion.div
              className="flex justify-center space-x-1 mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 rounded-full bg-amber-500"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 1, 0.4]
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;