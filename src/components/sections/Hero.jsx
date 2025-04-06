import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#05071E] via-[#05071E] to-[#111A89] relative overflow-hidden pt-[100px] sm:pt-[120px]">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none">
        {Array(36)
          .fill()
          .map((_, i) => (
            <div key={i} className="border border-gray-700 opacity-20"></div>
          ))}
      </div>

      {/* Hero container */}
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[100px] relative z-10">
        {/* Hero content container */}
        <div className="w-full max-w-[1041px] mx-auto flex flex-col items-start sm:items-center justify-center gap-[25px] min-h-[532px] text-left sm:text-center">
          {/* Welcome tag */}
          <div className="inline-flex items-center justify-start sm:justify-center bg-[#2E6D9C] backdrop-blur-sm border border-white/50 rounded-full py-2 px-4 gap-2">
            <span className="text-base sm:text-lg text-white font-normal font-['Poppins']">
              Welcome to KeySystem
            </span>
          </div>

          {/* Hero text content */}
          <div className="w-full flex flex-col items-start sm:items-center gap-4 sm:gap-6">
            <h1 className="text-[32px] sm:text-[64px] lg:text-[80px] text-white font-bold font-['Poppins'] leading-tight">
              IT Consulting for<br />
              Forward-thinking<br />
              Businesses
            </h1>
            <p className="text-[16px] sm:text-[24px] lg:text-[32px] text-white font-normal font-['Poppins'] leading-[140%] max-w-[800px]">
              Driving Digital Transformation, One Solution at a Time
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-start sm:justify-center items-start sm:items-center gap-4 sm:gap-[46px] w-full sm:max-w-[483px] mt-6 sm:mt-[75px]">
            <a
              href="#"
              className="w-full sm:w-[218px] h-[60px] sm:h-[72px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#000080] via-[#4169E1] to-[#000080] text-white text-base sm:text-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-200 border border-[#4169E1]"
            >
              Get Started
            </a>
            <a
              href="#"
              className="w-full sm:w-[218px] h-[60px] sm:h-[72px] flex items-center justify-center rounded-full border border-white text-white text-base sm:text-xl font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* BG vector with rotated image and overlay */}
<div className="relative w-full pt-[60px] sm:pt-[100px] flex justify-center items-center overflow-hidden">
  {/* Rotated background vector */}
  <div
    className="absolute inset-0 w-full h-[300px] sm:h-[500px] bg-no-repeat bg-contain bg-center rotate-180"
    style={{
      backgroundImage: "url('/assets/images/vector-bg.png')",
      zIndex: 0,
    }}
  ></div>

  {/* Overlay image (responsive) */}
  <div className="relative z-10 w-[90%] max-w-[965px]">
    <img
      src="/assets/images/hero-overlay.png"
      alt="Overlay"
      className="w-full h-auto sm:h-[475.91px] rounded-[17.59px] border-[13.19px] border-white object-cover"
    />
  </div>
</div>

    </div>
  );
};

export default HeroSection;
