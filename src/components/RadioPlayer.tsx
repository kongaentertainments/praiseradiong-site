import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import { FaHeart, FaShare, FaHandHoldingHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import 'react-h5-audio-player/lib/styles.css';

const RadioPlayer: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [listeners, setListeners] = useState(Math.floor(Math.random() * 1000) + 500);
  const streamUrl = 'https://stream.zeno.fm/9xwv2tuzoqsuv';

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'PraiseRadioNG.co',
        text: 'Listen to PraiseRadioNG.co - Your #1 Gospel Radio Station',
        url: window.location.href,
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-3xl mx-auto"
    >
      <motion.div 
        className="bg-gradient-to-r from-secondary to-secondary-dark rounded-t-lg p-6 text-white relative overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-full h-1 bg-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-3 w-3 rounded-full bg-primary"
            />
            <span className="font-medium">LIVE</span>
          </div>
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <FaHandHoldingHeart />
            <span>{listeners} listening</span>
          </motion.div>
        </div>
        
        <motion.h2 
          className="text-2xl font-bold mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          Now Playing
        </motion.h2>
        <p className="text-primary-light">PraiseRadioNG.co Live Worship</p>
      </motion.div>
      
      <motion.div 
        className="bg-white rounded-b-lg shadow-lg p-4"
        whileHover={{ boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
      >
        <AudioPlayer
          autoPlay={false}
          src={streamUrl}
          showJumpControls={false}
          layout="stacked"
          customProgressBarSection={[]}
          customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
          className="custom-player"
          style={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
          onError={() => console.log('Error loading audio stream')}
          onPlay={() => setListeners(prev => prev + 1)}
        />
        
        <div className="flex justify-center space-x-4 mt-4">
          <motion.button 
            onClick={() => setIsLiked(!isLiked)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
              isLiked 
                ? 'bg-primary text-secondary' 
                : 'bg-gray-100 text-secondary'
            } hover:bg-opacity-80 transition-colors duration-200`}
          >
            <AnimatePresence>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <FaHeart size={18} />
              </motion.div>
            </AnimatePresence>
            <span>{isLiked ? 'Loved' : 'Love'}</span>
          </motion.button>
          
          <motion.button 
            onClick={handleShare}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-secondary text-primary hover:bg-secondary-dark transition-colors duration-200"
          >
            <FaShare size={18} />
            <span>Share</span>
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/support"
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary text-secondary hover:bg-primary-dark transition-colors duration-200"
            >
              <FaHandHoldingHeart size={18} />
              <span>Donate</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RadioPlayer;