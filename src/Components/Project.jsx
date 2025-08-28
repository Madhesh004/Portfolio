import React from 'react';
import { motion } from 'framer-motion';

const Project = () => {
  return (
    <div className="text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold mb-4">Projects</h2>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="mt-6"
        >
          <video
            src="/WalkthroughProject.mp4" 
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-4xl h-auto rounded-lg shadow-lg mt-20 ml-20 border-2 border-black"
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Project;