import React, { useState } from "react"
import { motion } from "framer-motion"
import {
  FaFire,
  FaEnvelope,
  FaBolt,
  FaCheckCircle,
} from "react-icons/fa"
import Pricing from "./Pricing"

const headline =
  "Cold Emails That Actually Get Replies."

const subheadline =
  "Generate personalized, high-converting outreach emails in 30 seconds using AI."

const Home: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const words = headline.split(" ");

  const footerLinks = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "See Example", href: "#example" },
      { name: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Cold Email Guide", href: "#" },
      { name: "API Docs", href: "#" },
      { name: "Community", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Refund Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  },
  {
    title: "Follow",
    links: [
      { name: "Twitter (X)", href: "https://twitter.com" },
      { name: "LinkedIn", href: "https://linkedin.com" },
      { name: "GitHub", href: "https://github.com" },
      { name: "Instagram", href: "https://instagram.com" },
    ],
  },
]

  return (
    <div className="w-full min-h-screen bg-white text-zinc-900 overflow-hidden">

      {/* NAVBAR */}
      <nav className="w-full flex justify-between items-center px-6 md:px-16 lg:px-30 py-6">
        <h1 className="text-lg md:text-xl font-semibold tracking-wide">
          Outreach.ai®
        </h1>
        <div className="hidden md:flex gap-5 text-sm text-neutral-500 font-semibold">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">See Example</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 md:py-32">

        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20 blur-3xl" />

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-5xl leading-tight"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.07 } },
          }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="mt-4 text-base sm:text-lg md:text-xl font-semibold text-gray-500 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {subheadline}
        </motion.p>

        <motion.button
        onClick={() => setShowForm(true)}
          className="mt-8 px-6 sm:px-8 py-3 rounded-full bg-zinc-900 text-white font-medium hover:scale-105 transition-transform cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          Join the Waitlist
        </motion.button>

        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-10 mt-12 md:mt-16 text-sm px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <div className="flex items-center gap-2">
            <FaFire />
            Built for freelancers & indie hackers
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            500+ emails generated in beta
          </div>
          <div className="flex items-center gap-2">
            <FaBolt />
            Save 5+ hours per week
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle />
            No code required
          </div>
        </motion.div>
      </section>

      {/* SEE EXAMPLE */}
      <div className="px-6 py-20 md:p-32 flex justify-center">
        <div className="flex flex-col items-center gap-3 text-center max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold">
            See Example
          </h2>
          <p className="text-neutral-500 text-base md:text-lg">
            View a real OutreachAI-generated cold email.
          </p>
          <button className="px-6 py-2 rounded-full bg-zinc-900 text-neutral-300 hover:scale-105 transition-transform text-sm">
            See Example
          </button>
        </div>
      </div>

      {/* PROBLEM SECTION */}
      <section className="px-6 py-10 max-w-6xl mx-auto"> <motion.h2 className="text-3xl font-semibold text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} > Cold Outreach Is Hard </motion.h2> <div className="grid md:grid-cols-3 gap-10"> {[ { title: "You don’t know what to say.", desc: "Staring at a blank cursor wastes valuable time.", }, { title: "You waste hours rewriting.", desc: "Manual personalization makes outreach slow.", }, { title: "Templates don’t convert.", desc: "Generic cold emails get ignored every time.", }, ].map((item, index) => ( <motion.div key={index} className="bg-[#16161c] p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-all" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} > <div className="h-24 bg-white/5 rounded-xl mb-6" /> <h3 className="text-lg font-semibold mb-3 text-neutral-300"> {item.title} </h3> <p className="text-gray-400 text-sm"> {item.desc} </p> </motion.div> ))} </div> </section>

      {/* MEET SECTION */}
      <div className="px-6 py-20 md:p-30 max-w-5xl flex flex-col gap-4">
        <h2 className="text-lg md:text-xl font-semibold">
          Meet OutreachAI
        </h2>
        <p className="text-neutral-500 text-sm md:text-base">
          OutreachAI harnesses AI to generate sharp, persuasive cold emails in seconds. No more guessing games or rewriting. Each message is personalized to the recipient.
        </p>
        <p className="text-neutral-500 text-sm md:text-base">
          You get a complete cold email—subject, hook, value, and CTA—instantly. Simply enter your prospect details, pick your goal, and let OutreachAI craft a tailored cold email that lands in inboxes, not trash folders.
        </p>
        <p className="text-neutral-500 text-sm md:text-base">
          Ready to leave clunky templates behind? Let AI do the heavy lifting for your next outreach campaign.
        </p>
      </div>

          {/* HOW IT WORKS */}
      <section className="px-6 py-15 max-w-6xl mx-auto text-center"> <motion.h2 className="text-3xl font-semibold mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} > How It Works </motion.h2> <div className="grid md:grid-cols-3 gap-10"> {[ { title: "1. Enter prospect details.", desc: "Paste their name, company, or website.", }, { title: "2. Choose goal and tone.", desc: "Select the purpose & personalize the vibe.", }, { title: "3. Generate and copy.", desc: "Get your email instantly — copy and send.", }, ].map((item, index) => ( <motion.div key={index} className="bg-[#16161c] p-8 rounded-2xl border border-white/5 hover:scale-105 transition-transform" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }} > <div className="h-24 bg-white/5 rounded-xl mb-6 " /> <h3 className="text-lg font-semibold mb-3 text-neutral-300"> {item.title} </h3> <p className="text-gray-400 text-sm"> {item.desc} </p> </motion.div> ))} </div> </section>


      {/* Example Output */}
<section className="w-full px-6 py-16 sm:px-10 md:px-20 lg:px-32">
  <div className="max-w-5xl mx-auto flex flex-col gap-4">

    <h2 className="text-xl md:text-2xl font-semibold text-zinc-900">
      Example Output
    </h2>

    <p className="text-neutral-500 text-sm sm:text-base">
      <span className="font-medium text-neutral-700">Subject:</span> Unlock Growth at Acme Co.
    </p>

    <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
      Hey Sam, I’ve been following Acme Co and noticed your team is expanding.
      OutreachAI helps fast-growing companies like yours connect with more
      clients without generic spam. Would you be open to a quick call to explore
      how we can fill your pipeline with ready-to-close leads?
    </p>

    <p className="text-neutral-500 text-sm sm:text-base">
      Let’s land new clients this month. <br />
      Cheers, Alex.
    </p>

  </div>
</section>
    

         {/* ================= EXAMPLE CTA ================= */}
<section className="w-full px-6 py-16 sm:px-10 md:px-20 lg:px-32 flex flex-col gap-8">

  {/* Preview Box */}
  <div className="w-full h-64 sm:h-80 md:h-96 bg-black/5 rounded-xl" />

  {/* Text Content */}
  <div className="flex flex-col gap-3 max-w-md md:max-w-2xl">

    <motion.h2
      className="text-xl sm:text-2xl font-semibold"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Templates Gallery
    </motion.h2>

    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
      Browse our curated selection of elegant, conversion-focused website
      templates. Each template is designed for modern SaaS brands, utilizing
      clean lines, ample white space, and subtle gradients. Click a template
      below to preview features and see how OutreachAI helps you launch
      professional-quality outreach in minutes.
    </p>

  </div>

</section>

      <Pricing />

          {/* get early access  */}
      <div className="w-full px-6 py-16 sm:px-10 md:px-20 lg:px-32 flex justify-center items-center">
  <div className="flex flex-col justify-center items-center gap-4 text-center">

    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900">
      Start Landing More Clients Today
    </h2>

    <p className="text-neutral-500 text-sm sm:text-base md:text-lg">
      Join early and get exclusive access.
    </p>

    <button onClick={() => setShowForm(true)} className="px-6 py-2.5 rounded-full bg-zinc-900 text-white font-medium text-sm hover:scale-105 transition-transform cursor-pointer">
      Get Early Access
    </button>

  </div>
</div>

{showForm && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
    
    <div className="relative bg-white rounded-2xl w-full max-w-2xl p-1 sm:p-6 shadow-xl">
      
      {/* Close Button */}
      <button
        onClick={() => setShowForm(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl cursor-pointer"
      >
        ✕
      </button>

      {/* Iframe */}
      <iframe
        src="https://58d8d219.sibforms.com/serve/MUIFAE8JD0_NkDDw1HWj9z_7DYuLBKs6RRH3xNyBFflDdAVw5EIzRN2TkmzhLtHbRBcUp0d_u8kQXmDN7IAwNjnhcF1jfHsvQr8fEqTOR1q5TQPIzL_6esr4KLWo5YyZa5SffsRXFs-3d12bcbHVwuGVlv5rPopjIOVHOdM2e8CcwfSIPYRlZ6hxOohyy7pAXzoRBu75b_r0EFvMTA=="
        width="100%"
        height="500"
        style={{ border: "none" }}
      />
    </div>
  </div>
)}

      {/* FOOTER */}
      <div className="px-6 py-10 border-t border-neutral-200 mt-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-lg font-semibold">Outreach.ai®</h1>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-10 text-sm">
  {footerLinks.map((section, i) => (
    <ul key={i}>
      <li className="font-semibold mb-3 text-zinc-900">
        {section.title}
      </li>

      {section.links.map((link, index) => (
        <li key={index} className="mb-2">
          <a
            href={link.href}
            className="text-neutral-500 hover:text-zinc-900 transition-colors"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  ))}
</div>

<div className="mt-10 pt-6 border-t border-neutral-200 text-center text-sm text-neutral-500">
  © {new Date().getFullYear()} Outreach.ai®. All rights reserved.
</div>
        </div>

        
      </div>
    </div>
  )
}

export default Home