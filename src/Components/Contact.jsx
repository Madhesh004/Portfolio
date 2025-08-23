import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from "emailjs-com";

// Reusable animated input component
const AnimatedInput = ({ name, type, placeholder, value, onChange, onFocus, onBlur, shake, focused, className = '' }) => {
  const inputVariants = {
    focused: { scale: 1.02 }, // Slightly less aggressive scale for better UX
    unfocused: { scale: 1 },
    shake: {
      x: [0, -5, 5, -5, 5, 0],
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`px-4 py-2 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400 ${className}`}
      variants={inputVariants}
      animate={shake ? 'shake' : focused ? 'focused' : 'unfocused'}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );
};

// Reusable animated textarea component
const AnimatedTextarea = ({ name, placeholder, value, onChange, onFocus, onBlur, shake, focused, className = '' }) => {
  const textareaVariants = {
    focused: { scale: 1.02 },
    unfocused: { scale: 1 },
    shake: {
      x: [0, -5, 5, -5, 5, 0],
      transition: { duration: 0.4 },
    },
  };
  return (
    <motion.textarea
      name={name}
      rows="4"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`px-4 py-2 rounded-md bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400 ${className}`}
      variants={textareaVariants}
      animate={shake ? 'shake' : focused ? 'focused' : 'unfocused'}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );
};

// Main Contact Component
const Contact = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const successMessageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  const handleFocus = (field) => {
    setFocusedInput(field);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear the specific validation error as the user types
    setValidationErrors((prev) => ({ ...prev, [e.target.name]: null }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is not valid';
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }
    emailjs
      .send(
        "service_slmwrgn",    // replace with EmailJS Service ID
        "template_g1l0qxg",   // replace with EmailJS Template ID
        formData,             // { name, email, subject, message }
        "d8x0ccS-QtDFhpvsk"     // replace with EmailJS Public Key
      )
      .then(
        () => {
          console.log("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setValidationErrors({});
          setShowSuccess(true);
          setTimeout(() => setShowSuccess(false), 3000);
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

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

        <div className="bg-transparent border border-gray-700 p-6 rounded-lg mt-4 shadow-md">
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
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-transparent bg-opacity-70 backdrop-blur-md border border-gray-700 rounded-lg p-6 mt-8 shadow-md"
        >
          <h5 className="text-xl font-semibold mb-4">Send me a message</h5>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="relative">
              <AnimatedInput
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                shake={!!validationErrors.name}
                focused={focusedInput === 'name'}
              />
              <AnimatePresence>
                {validationErrors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="text-red-400 text-sm mt-1 absolute top-full left-0"
                  >
                    {validationErrors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div className="relative">
              <AnimatedInput
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                shake={!!validationErrors.email}
                focused={focusedInput === 'email'}
              />
              <AnimatePresence>
                {validationErrors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="text-red-400 text-sm mt-1 absolute top-full left-0"
                  >
                    {validationErrors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div className="relative">
              <AnimatedInput
                name="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => handleFocus('subject')}
                onBlur={handleBlur}
                shake={!!validationErrors.subject}
                focused={focusedInput === 'subject'}
              />
              <AnimatePresence>
                {validationErrors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="text-red-400 text-sm mt-1 absolute top-full left-0"
                  >
                    {validationErrors.subject}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div className="relative">
              <AnimatedTextarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                shake={!!validationErrors.message}
                focused={focusedInput === 'message'}
              />
              <AnimatePresence>
                {validationErrors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="text-red-400 text-sm mt-1 absolute top-full left-0"
                  >
                    {validationErrors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <motion.button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-md font-medium mt-6"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Send
            </motion.button>
          </form>
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                className="mt-4 text-green-400 font-semibold text-center"
                variants={successMessageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="success-message"
              >
                Message sent successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;