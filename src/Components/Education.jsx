import React from "react";
import { motion } from "framer-motion";

const EducationExperience = () => {
  return (
    <div className="min-h-screen text-white px-6 py-12 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-3xl"
      >
        {/* ================== Education ================== */}
        <h6 className="text-3xl font-bold mb-6">Education</h6>
        <div className="flex flex-col text-xl border border-gray-700 rounded-lg font-semibold p-6 bg-transparent space-y-2 shadow-md mb-12">
          <p>
            <span className="block mb-1 text-lg text-gray-300">College</span>
            <span className="block text-base text-gray-100 font-normal">
              Veltech HighTech Dr.Rangarajan Dr.Sakunthala Engineering College
            </span>
          </p>
          <p>
            <span className="block mb-1 text-lg text-gray-300">Course</span>
            <span className="block text-base text-gray-100 font-normal">
              B.E Computer Science and Engineering
            </span>
          </p>
          <p>
            <span className="block mb-1 text-lg text-gray-300">Duration</span>
            <span className="block text-base text-gray-100 font-normal">
              Nov 2022 - Present
            </span>
          </p>
        </div>

        {/* ================== Experience ================== */}
        <h6 className="text-3xl font-bold mb-6">Experience</h6>
        <div className="flex flex-col text-xl border border-gray-700 rounded-lg font-semibold p-6 bg-transparent space-y-2 shadow-md mb-12">
          <p>
            <span className="block mb-1 text-lg text-gray-300">Role</span>
            <span className="block text-base text-gray-100 font-normal">
              Software Developer Intern
            </span>
          </p>
          <p>
            <span className="block mb-1 text-lg text-gray-300">Company</span>
            <span className="block text-base text-gray-100 font-normal">
              Userorbit
            </span>
          </p>
          <p>
            <span className="block mb-1 text-lg text-gray-300">Duration</span>
            <span className="block text-base text-gray-100 font-normal">
              Jan 2025 - Present
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default EducationExperience;