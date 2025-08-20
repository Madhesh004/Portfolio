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
      </motion.div>
    </div>
  );
};

export default Project;