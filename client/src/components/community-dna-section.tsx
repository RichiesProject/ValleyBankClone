import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CommunityDnaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="relative bg-slate-800 py-20 lg:py-32 overflow-hidden" 
      data-testid="community-dna-section"
    >
      {/* Background overlay for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-700 to-slate-900"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Bank icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
          data-testid="bank-icon"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-lg">
            <svg className="w-8 h-8 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              <path d="M9 12h6v2H9z"/>
              <path d="M9 8h6v2H9z"/>
            </svg>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight"
          data-testid="text-community-dna-heading"
        >
          Community banking
          <br />
          is in our DNA
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
          data-testid="text-community-description"
        >
          Willamette Valley Bank is made up of people who live and work in the communities we serve.
        </motion.p>

        {/* CEO profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center space-x-4"
          data-testid="ceo-profile"
        >
          <img 
            src="/Screenshot 2025-09-04 at 7.25.42 PM_1757069873705.png"
            alt="Ryan Dempster, President and CEO"
            className="w-16 h-16 rounded-full object-cover border-2 border-white/20"
          />
          <div className="text-left">
            <h3 className="text-white font-semibold text-lg" data-testid="text-ceo-name">
              Ryan Dempster
            </h3>
            <p className="text-gray-400" data-testid="text-ceo-title">
              President, CEO
            </p>
          </div>
        </motion.div>
      </div>

      {/* Parallax background elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full opacity-10"
        animate={{ 
          y: isInView ? [0, -20, 0] : 0,
          rotate: isInView ? [0, 180, 360] : 0
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-green-500 rounded-full opacity-10"
        animate={{ 
          y: isInView ? [0, 20, 0] : 0,
          rotate: isInView ? [360, 180, 0] : 0
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
    </section>
  );
}