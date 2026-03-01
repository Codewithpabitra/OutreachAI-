import React from "react";
import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

const ConfirmationPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white text-zinc-900 px-6 py-20">
      
      {/* Animated Envelope Icon */}
      <motion.div
        className="text-blue-500 text-6xl mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <FaEnvelopeOpenText />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Almost There! ✨
      </motion.h1>

      {/* Body Text */}
      <motion.p
        className="text-neutral-500 text-base sm:text-lg md:text-xl text-center max-w-xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Thanks for signing up for early access to OutreachAI. Please check your inbox 
        for a confirmation email and click the link to secure your spot on the waitlist.
      </motion.p>

      {/* Optional CTA */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >

        <a
          href="/"
          className="px-6 py-3 rounded-full border border-zinc-900 text-zinc-900 font-medium text-sm hover:scale-105 transition-transform text-center"
        >
          Back to Homepage
        </a>
      </motion.div>

      {/* Footer */}
      <motion.p
        className="text-gray-400 text-lg mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        © {new Date().getFullYear()} OutreachAI®. All rights reserved.
      </motion.p>
    </div>
  );
};

export default ConfirmationPage;