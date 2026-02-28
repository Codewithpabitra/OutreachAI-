import React from "react"
import { motion } from "framer-motion"
import { FaCheck } from "react-icons/fa"

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="w-full py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold"
        >
          Pricing Preview
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-neutral-500 text-xl md:text-3xl lg:text-4xl font-bold"
        >
          Simple, no surprises.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-16 md:py-20">

          {/* FREE PLAN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="bg-neutral-100/90 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between items-start w-full"
          >
            <div className="flex flex-col gap-2 items-start">
              <h3 className="text-gray-400 text-lg mb-3">
                Free Plan
              </h3>

              <div className="flex items-end gap-1 mb-5">
  <span className="text-2xl font-bold">$0</span>
  <span className="text-sm text-neutral-500 mb-1">/month</span>
</div>

              <ul className="space-y-2 text-neutral-500 text-sm">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-neutral-400" />
                  20 emails per month
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-neutral-400" />
                  All AI features
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-neutral-400" />
                  No credit card required
                </li>
              </ul>
            </div>

            <button className="mt-10 w-full py-2 rounded-xl cursor-pointer bg-neutral-300 hover:bg-neutral-200 transition-colors text-zinc-900 font-medium">
              Get Started
            </button>
          </motion.div>

          {/* PRO PLAN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8 }}
            className="bg-neutral-100/90 border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between items-start w-full"
          >
            <div className="flex flex-col gap-2 items-start">
              <h3 className="text-gray-400 text-lg mb-3">
                Pro Plan
              </h3>

              <div className="flex items-end gap-1 mb-5">
  <span className="text-2xl font-bold">$9</span>
  <span className="text-sm text-neutral-500 mb-1">/month</span>
</div>

              <ul className="space-y-2 text-neutral-500 text-sm">
                <li className="flex items-center gap-3">
                  <FaCheck className="text-neutral-400" />
                  Unlimited emails
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-neutral-400" />
                  Priority support
                </li>
                <li className="flex items-center gap-3">
                  <FaCheck className="text-neutral-400" />
                  Advanced personalization
                </li>
              </ul>
            </div>

            <button className="mt-10 w-full py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 cursor-pointer transition-colors text-white font-medium">
              Go Pro
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Pricing