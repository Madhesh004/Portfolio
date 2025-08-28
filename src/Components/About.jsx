import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineFileDownload } from "react-icons/md";

const skills = [
  {
    name: "HTML",
    icon: (
      <svg className="h-10 w-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 2l1.58 17.82L12 22l7.47-2.18L21 2H3zm14.05 6.05H9.07l.17 2.02h7.7l-.63 6.57-4.25 1.38-4.28-1.46-.29-2.93h2.02l.16 1.41 2.4.82 2.35-.76.3-3H7.42l-.56-6.05h10.41l-.22 2.02z" />
      </svg>
    ),
  },
  {
    name: "CSS",
    icon: <img src="/CSS3.svg" alt="CSS Logo" className="h-10 w-10" />,
  },
  {
    name: "JavaScript",
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" className="h-10 w-10" />,
  },
  {
    name: "Tailwind",
    icon: <img src="/Tailwind.svg" alt="Tailwindcss Logo" className="h-10 w-10" />,
  },
  {
    name: "React",
    icon: <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" className="h-10 w-10" />,
  },
  {
    name: "Node.js",
    icon: <img src="/nodejs.svg" alt="Node.js Logo" className="h-10 w-10" />,
  },
  {
    name: "Python",
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <circle cx="512" cy="512" r="512" style={{ fill: "#3776ab" }}></circle>
        <path transform="translate(428.423 184.256)" d="M81.7 73.2c-129.9 0-121.8 56.3-121.8 56.3l.1 58.4H84v17.5H-89.2s-83.1-9.4-83.1 121.7 72.6 126.4 72.6 126.4h43.3v-60.8s-2.3-72.6 71.4-72.6h123s69.1 1.1 69.1-66.8V141.1s10.4-67.9-125.4-67.9zm-68.3 39.3c12.3 0 22.3 10 22.3 22.3s-10 22.3-22.3 22.3-22.3-10-22.3-22.3 9.9-22.3 22.3-22.3zm72 469.8c129.9 0 121.8-56.3 121.8-56.3l-.1-58.4h-124v-17.5h173.2s83.1 9.4 83.1-121.7S266.8 202 266.8 202h-43.3v60.8s2.3 72.6-71.4 72.6h-123S-40 334.3-40 402.2v112.2s-10.3 67.9 125.4 67.9zm68.4-39.3c-12.3 0-22.3-10-22.3-22.3s10-22.3 22.3-22.3 22.3 10 22.3 22.3c0 12.4-10 22.3-22.3 22.3z" style={{ fill: "#fff" }}></path>
      </svg>
    ),
  },
  {
    name: "SQL",
    icon: <img src="https://www.svgrepo.com/show/331760/sql-database-generic.svg" alt="SQL Logo" className="h-10 w-10" />,
  },
  {
    name: "FastAPI",
    icon: <img src="/FastAPI.svg" alt="FastAPI Logo" className="h-10 w-10" />,
  },
  {
    name: "Next.js",
    icon: <img src="/NextJS.svg" alt="Next.js Logo" className="h-10 w-10" />,
  },
  {
    name: "PostgreSQL",
    icon: <img src="/PostgresSQL.svg" alt="PostgresSQl Logo" className="h-10 w-10" />,
  },
  {
    name: "Prisma",
    icon: <img src="/Prisma.svg" alt="Prisma Logo" className="h-10 w-10" />,
  },
  {
    name: "Docker",
    icon: <img src="/Docker.svg" alt="Docker Logo" className="h-10 w-10" />,
  },
];

const About = () => {
  return (
    <div className="text-white mt-32 font-lexend">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h3
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-2xl font-bold"
        >
          About
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl font-normal leading-snug mb-4"
        >
          I am a passionate Software Developer dedicated to building complete, end-to-end applications. 
          My focus is on creating modern, responsive, and user-friendly digital experiences.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-xl font-normal leading-snug mb-4"
        >
          On the front-end, I specialize in React.js, JavaScript, and Tailwind CSS to craft intuitive and engaging interfaces.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-xl font-normal leading-snug mb-4"
        >
          On the back-end, I design and implement robust server-side logic and REST APIs using Node.js, 
          while managing data efficiently with MongoDB.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-xl font-normal leading-snug"
        >
          With strong skills in both development and testing (Postman for API validation), 
          I bridge the gap between front-end and back-end to deliver cohesive, high-performance solutions.
        </motion.p>

        <motion.a
          href="/Madhesh_Resume.pdf"
          download
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center bg-transparent border px-3 py-1 hover:bg-black focus:ring text-base font-semibold text-white rounded-md mt-10 w-auto"
        >
          Resume <MdOutlineFileDownload className="ml-2" />
        </motion.a>

        <div className="mt-8 text-2xl font-medium">
          <h4 className="mb-6">Skills</h4>

          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
              {skills.map((skill, index) => (
                <li key={`skill-${index}`}>
                  <div className="flex flex-col items-center">
                    {skill.icon}
                    <span className="mt-2 text-sm">{skill.name}</span>
                  </div>
                </li>
              ))}
            </ul>

            <ul aria-hidden="true" className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
              {skills.map((skill, index) => (
                <li key={`skill-duplicate-${index}`}>
                  <div className="flex flex-col items-center">
                    {skill.icon}
                    <span className="mt-2 text-sm">{skill.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;