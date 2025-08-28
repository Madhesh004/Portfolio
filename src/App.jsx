import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Education from "./Components/Education";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

const lines = [
  {
    words: ["Hi,", "I", "am", "Madhesh"],
    className: "font-lexend text-white text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2",
  },
  {
    words: ["Software", "Developer"],
    className: "font-lexend text-white text-left text-lg sm:text-xl md:text-2xl font-semibold mb-2",
  },
  {
    words: ["Final-year", "Computer", "Science", "Engineering", "student"],
    className: "font-lexend text-white text-left text-base sm:text-lg font-normal mb-2",
  },
  {
    words: ["at", "Veltech", "HighTech", "Engineering", "College,", "Chennai."],
    className: "font-lexend text-white text-left text-base sm:text-lg font-normal mb-2",
  },
];

const wordAnimation = {
  hidden: {
    opacity: 0,
    y: "100%",
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: "0%",
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

export default function App() {
  return (
    <main className="min-h-screen scroll-smooth relative font-lexend">
      {/* Background Gradient */}
      <div className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="Home"
        className="min-h-screen scroll-mt-24 px-4 flex flex-col lg:flex-row items-center lg:items-center justify-center gap-10 max-w-6xl mx-auto relative"
      >
        <div className="absolute -z-10 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl top-10 left-10 animate-pulse" />
        <div className="absolute -z-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />

        {/* Animated Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          aria-label="Introduction text"
        >
          <motion.div
            className="flex flex-col items-start w-full max-w-[900px] px-4 font-sans text-white text-base leading-6 antialiased mt-20 lg:mt-0"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {lines.map((line, lineIndex) => (
              <span key={`line-${lineIndex}`} className={line.className}>
                {line.words.map((word, index) => (
                  <motion.span
                    key={`line${lineIndex}-word${index}`}
                    variants={wordAnimation}
                    aria-hidden="true"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.div>
        </motion.div>


      </section>

      {/* About Section */}
      <section
        id="About"
        className="scroll-mt-24 min-h-screen max-w-4xl mx-auto mt-24 px-4 text-white relative"
      >
        <About />
      </section>

      {/* Education Section */}
      <section
        id="Education"
        className="scroll-mt-24 min-h-screen max-w-4xl mx-auto mt-24 px-4 text-white relative"
      >
        <Education />
      </section>

      {/* Project Section */}
      <section
        id="Project"
        className="scroll-mt-24 min-h-screen max-w-4xl mx-auto mt-24 px-4 text-white relative"
      >
        <Project />
      </section>

      {/* Contact Section */}
      <section
        id="Contact"
        className="scroll-mt-24 min-h-screen max-w-4xl mx-auto mt-24 px-4 text-white relative"
      >
        <Contact />
      </section>
    </main>
  );
}