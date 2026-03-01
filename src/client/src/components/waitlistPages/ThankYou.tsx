import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const ThankYou: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white text-zinc-900 px-6 py-20">
      
      {/* Animated Check Icon */}
      <motion.div
        className="text-green-500 text-6xl mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <FaCheckCircle />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        You’re officially on the OutreachAI waitlist 🚀
      </motion.h1>

      {/* Body Text */}
      <motion.p
        className="text-neutral-500 text-base sm:text-lg md:text-xl text-center max-w-xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Thank you for confirming your email! You’ve secured your early access to OutreachAI.
        Stay tuned — we’ll send you exclusive updates, early access perks, and tips to land more clients with AI-powered cold emails.
      </motion.p>

      {/* CTA Buttons */}
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

      {/* Optional Footer */}
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

export default ThankYou;