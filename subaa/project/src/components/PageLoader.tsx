import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading, onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Loading...');
  const intervalRef = useRef<NodeJS.Timeout>();

  const loadingMessages = [
    'Preparing your magical experience...',
    'Loading beautiful moments...',
    'Setting up your dream wedding showcase...',
    'Almost ready to create magic...',
    'Welcome to Suba Designs...'
  ];

  useEffect(() => {
    if (!isLoading) return;

    // Reset progress when loading starts
    setProgress(0);
    setLoadingText(loadingMessages[0]);

    // Use setInterval for consistent progress updates
    const totalDuration = 2500; // 2.5 seconds total
    const updateInterval = 50; // Update every 50ms
    const progressIncrement = (100 / (totalDuration / updateInterval));

    intervalRef.current = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = Math.min(prevProgress + progressIncrement, 100);
        
        // Update loading text based on progress
        if (newProgress < 20) {
          setLoadingText(loadingMessages[0]);
        } else if (newProgress < 40) {
          setLoadingText(loadingMessages[1]);
        } else if (newProgress < 60) {
          setLoadingText(loadingMessages[2]);
        } else if (newProgress < 80) {
          setLoadingText(loadingMessages[3]);
        } else {
          setLoadingText(loadingMessages[4]);
        }

        // Complete loading when reaching 100%
        if (newProgress >= 100) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          setTimeout(onLoadingComplete, 300); // Small delay for smooth transition
        }

        return newProgress;
      });
    }, updateInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isLoading, onLoadingComplete]);

  // Generate optimized floating hearts
  const generateHearts = React.useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => (
      <motion.div
        key={i}
        className="absolute pointer-events-none"
        initial={{
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
          y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 50,
          opacity: 0,
          scale: 0
        }}
        animate={{
          y: -100,
          opacity: [0, 1, 1, 0],
          scale: [0, 1, 1, 0],
          x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)
        }}
        transition={{
          duration: Math.random() * 3 + 4,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "easeInOut"
        }}
      >
        <Heart 
          className="text-pink-300" 
          size={Math.random() * 20 + 15}
          fill="currentColor"
        />
      </motion.div>
    ));
  }, []);

  // Generate optimized sparkles
  const generateSparkles = React.useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => (
      <motion.div
        key={`sparkle-${i}`}
        className="absolute pointer-events-none"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: Math.random() * 2 + 2,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "easeInOut"
        }}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      >
        <Sparkles className="text-yellow-400" size={Math.random() * 15 + 10} />
      </motion.div>
    ));
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #fefdf8 0%, #fdf6e3 25%, #f7e6b7 50%, #f1d78b 75%, #e8c547 100%)'
          }}
        >
          {/* Floating Elements */}
          <div className="absolute inset-0">
            {generateHearts}
            {generateSparkles}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center max-w-md mx-auto px-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15,
                duration: 1
              }}
              className="mb-8"
            >
              <img 
                src="https://i.postimg.cc/Pr28Q6Qm/feswgfew-Photoroom.png" 
                alt="Suba Designs Logo"
                className="h-24 w-auto mx-auto filter drop-shadow-lg"
                loading="eager"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-4xl font-serif font-bold mb-2"
              style={{ color: '#d4af37' }}
            >
              Suba Designs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-gray-600 mb-8 font-light"
            >
              Creating Magical Wedding Moments
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="mb-6"
            >
              <div className="w-full bg-white/50 rounded-full h-3 shadow-inner backdrop-blur-sm border border-white/30">
                <motion.div
                  className="h-full rounded-full shadow-lg"
                  style={{
                    background: 'linear-gradient(90deg, #d4af37, #f1d78b, #d4af37)',
                    backgroundSize: '200% 100%',
                    animation: 'progressBarGradient 2s linear infinite'
                  }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                />
              </div>
              
              <motion.div
                className="text-center mt-3"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="text-lg font-medium" style={{ color: '#d4af37' }}>
                  {Math.round(progress)}%
                </span>
              </motion.div>
            </motion.div>

            <motion.p
              key={loadingText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-gray-600 text-sm font-light"
            >
              {loadingText}
            </motion.p>
          </div>

          {/* CSS for progress bar animation */}
          <style jsx global>{`
            @keyframes progressBarGradient {
              0% { background-position: 0% 50%; }
              100% { background-position: 200% 50%; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

// PageLoader component remains the same as it was working correctly
interface PageLoaderProps {
  isVisible: boolean;
  onComplete: () => void;
  duration?: number;
}

const PageLoader: React.FC<PageLoaderProps> = ({ 
  isVisible, 
  onComplete, 
  duration = 800 
}) => {
  useEffect(() => {
    if (!isVisible) return;
    
    const timer = setTimeout(onComplete, duration);
    return () => clearTimeout(timer);
  }, [isVisible, onComplete, duration]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm"
        >
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Sparkles 
              className="text-[#d4af37]" 
              size={40}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { PageLoader };