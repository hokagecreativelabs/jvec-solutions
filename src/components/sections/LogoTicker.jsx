import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import SterlingBank from "../../../public/assets/images/sterling.png";
import CrusaderSterling from "../../../public/assets/images/crusader.png";
import NAFC from "/assets/images/nafc.png";
import NBF from "/assets/images/nbf.png";
import MPB from "/assets/images/mpb.png";
import Stanbic from "/assets/images/stanbic.png";
import Bank from "/assets/images/bank.png";

const logos = [
  SterlingBank,
  CrusaderSterling,
  NAFC,
  NBF,
  MPB,
  Stanbic,
  Bank,
];

const LogoTicker = () => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  
  // Clone logos to ensure seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];
  
  return (
    <section className="w-full py-32 overflow-hidden">
      <div 
        ref={containerRef}
        className="w-full relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      >
        {/* First animation group - moving from right to left */}
        <motion.div
          ref={scrollerRef}
          className="flex gap-8 py-4"
          animate={{ x: [0, "-50%"] }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }
          }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div 
              key={i} 
              className="flex-none"
            >
              <img
                src={logo}
                alt={`Client Logo ${i}`}
                className="h-16 object-contain"
                style={{
                  minWidth: "180px",
                  maxWidth: "180px",
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoTicker;