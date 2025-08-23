import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Reusable animated input component
const AnimatedInput = ({ name, type, placeholder, className = '' }) => {
  const inputVariants = {
    focused: { scale: 1.05 },
    unfocused: { scale: 1 },
  };

  return (
    <motion.input
      name={name}
      type={type}
      placeholder={placeholder}
      className={`px-4 py-2 rounded-md bg-transparent text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400 ${className}`}
      variants={inputVariants}
      initial="unfocused"
      whileFocus="focused"
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );
};

// Reusable animated textarea component
const AnimatedTextarea = ({ name, placeholder, className = '' }) => {
  const textareaVariants = {
    focused: { scale: 1.05 },
    unfocused: { scale: 1 },
  };
  return (
    <motion.textarea
      name={name}
      rows="4"
      placeholder={placeholder}
      className={`px-4 py-2 rounded-md bg-transparent text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400 ${className}`}
      variants={textareaVariants}
      initial="unfocused"
      whileFocus="focused"
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );
};

// Main Contact Component
const Contact = () => {
  useEffect(() => {
    const form = document.getElementById('web3form');
    const result = document.getElementById('result');
    if (!form) return;
    const handleSubmit = async (e) => {
      e.preventDefault();
      result.innerHTML = "Please wait...";
      const formData = new FormData(form);
      const object = {};
      formData.forEach((value, key) => {
        object[key] = value;
      });
      const json = JSON.stringify(object);
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json,
        });
        const data = await res.json();
        if (data.success) {
          result.innerHTML = "Thank you for contacting me!";
          form.reset();
        } else {
          result.innerHTML = data.message || "Something went wrong!";
        }
      } catch (err) {
        result.innerHTML = "Something went wrong!";
      }
    };
    form.addEventListener('submit', handleSubmit);
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <div className="text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h4 className="flex flex-col items-center text-3xl font-bold text-white">
          Contact
          <span className="text-base font-normal ml-1 mb-10">Get in touch</span>
        </h4>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-transparent border border-gray-700 p-6 rounded-lg mt-4 shadow-md"
        >
          <p className="mb-2">
            Name: Madhesh
          </p>
          <p className="mb-2">
            Phone:{' '}
            <a href="tel:+91 73053 20168" className="text-white hover:text-blue-500">
              +91 73053 20168
            </a>
          </p>
          <p className="mb-4">
            Email:{' '}
            <a href="mailto:madhesh.karthigeyan2@gmail.com" className="text-white hover:text-blue-500">
              madhesh.karthigeyan2@gmail.com
            </a>
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/madhesh-k/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/Madhesh004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/Madhesh04/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              LeetCode
            </a>
            <a
              href="https://maps.app.goo.gl/huqMH18VWjSrH76a6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors"
            >
              {' '}
              Location
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-transparent bg-opacity-70 backdrop-blur-md border border-gray-700 rounded-lg p-6 mt-8 shadow-md"
        >
          <h5 className="text-xl font-semibold mb-4">Send me a message</h5>
          <form
            id="web3form"
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex flex-col space-y-4"
            autoComplete="off"
          >
            <input
              type="hidden"
              name="access_key"
              value="d491cb54-9b81-48f8-ab39-bdddb4e5ae44"
            />
            <input
              type="hidden"
              name="subject"
              value="New Submission from Portfolio Contact Form"
            />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

            <AnimatedInput
              type="text"
              name="name"
              required
              placeholder="Your Name"
            />
            <AnimatedInput
              type="email"
              name="email"
              required
              placeholder="Your Email"
            />
            <AnimatedInput
              type="text"
              name="phone"
              placeholder="Your Phone"
            />
            <AnimatedTextarea
              name="message"
              required
              placeholder="Message"
            />
            <motion.button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md font-medium mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              Send
            </motion.button>
            <p className="text-sm mt-2" id="result"></p>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;