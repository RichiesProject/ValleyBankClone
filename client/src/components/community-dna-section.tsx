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
            {/* Willamette Valley Bank Logo - Mountain Design */}
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="4" fill="#2c3e50"/>
              <path d="M4 12c0-1.5 1-3 2.5-4.5C8 6 10 5 12 5s4 1 5.5 2.5C19 9 20 10.5 20 12" stroke="white" strokeWidth="1.5" fill="none"/>
              <path d="M4 16c2-1 4-1.5 6-1s4 1 6 0.5c2-0.5 4-1.5 4-2.5" stroke="white" strokeWidth="1.5" fill="none"/>
              <path d="M8 18c1.5-0.5 3-0.5 4 0s3 0.5 4.5 0" stroke="white" strokeWidth="1.2" fill="none"/>
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
            src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653f05ca6fbd1f7f7bf7f06d_ryan-dempster.jpeg"
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