import { useEffect } from 'react';
import { motion } from 'motion/react';


interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      {/* Decorative Blur Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />

      <div className="flex flex-col items-center space-y-6 z-10">
        {/* Animated Icon/Logo */}
        <motion.div
          className="relative w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 shadow-lg shadow-blue-500/20"
          initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
          animate={{ scale: [0.5, 1.1, 1], rotate: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-3xl font-extrabold text-white">CB</span>
          
          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-purple-400/30"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Text Fade/Slide */}
        <div className="text-center">
          <motion.h1
            className="text-2xl md:text-3xl font-bold tracking-wider text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Chaitanya Bodkhe
          </motion.h1>
          <motion.p
            className="text-sm md:text-base text-gray-400 mt-2 font-medium tracking-wide"
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Software Engineer & Java Developer
          </motion.p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mt-4">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
