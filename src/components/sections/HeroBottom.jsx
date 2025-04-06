import React from "react";

const HeroSectionBottom = () => {
  return (
    <div className="relative w-full overflow-hidden mt-12">
      {/* Blue Curved Vector Background */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full">
          <path 
            fill="#0066FF" 
            fillOpacity="0.3"
            d="M0,64L80,85.3C160,107,320,149,480,144C640,139,800,85,960,74.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Image Container with Border */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4">
        <div className="border-8 border-blue-900 rounded-2xl overflow-hidden shadow-2xl">
          <img
            src="/api/placeholder/800/400" 
            alt="Man with glasses looking at data screens"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionBottom;