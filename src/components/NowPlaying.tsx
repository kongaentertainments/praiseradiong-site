import React from 'react';
import { motion } from 'framer-motion';

const NowPlaying: React.FC = () => {
  const currentSong = "Mercy Chinwo - Na You Dey Reign";

  return (
    <div className="bg-secondary-dark text-white py-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="bg-primary h-3 w-3 rounded-full mr-3"
          />
          <div className="flex items-center overflow-hidden">
            <span className="text-sm whitespace-nowrap mr-2">Now Playing:</span>
            <div className="overflow-hidden relative w-48 sm:w-64 md:w-96">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ 
                  x: ["-100%"]
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="whitespace-nowrap"
              >
                <motion.span 
                  className="text-sm font-semibold text-primary inline-block"
                  animate={{ 
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {currentSong}
                </motion.span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;