import React from 'react';

const WhatWeRepresent = () => {
  return (
    <section className="bg-[#050A1F] py-20 px-6 md:px-12 lg:px-20 text-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-[32px] md:text-[44.95px] leading-[100%] font-bold font-['Poppins'] mb-4">
          What we Represent
        </h2>
        {/* Title Paragraph */}
        <p className="text-[18px] md:text-[24px] font-normal font-['Poppins'] leading-[100%] text-[#BBBBBB] max-w-[728px] mx-auto mb-4">
          Our relentless pursuit of excellence is the driving force behind our success
        </p>
        {/* More Paragraph */}
        <p className="text-[16px] md:text-[20px] font-normal font-['Poppins'] leading-[140%] text-[#BBBBBB] max-w-[1024px] mx-auto mb-16">
          Excellence isn't a goal, it's our DNA; our relentless pursuit of excellence is the driving force behind our success. Excellence is our legacy, and we are proud to carry it forward. Watch the video to see how we are innovating to keep businesses on top of their games.
        </p>
        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-10">
          {/* Vision Card */}
          <div className="relative w-full max-w-[605px] rounded-[10px] p-[2px] bg-gradient-to-b from-[#01B4DE] via-[#C9C9C9]/10 to-[#01B4DE] flex-1">
            <div className="bg-gradient-to-tr from-[#05071E] via-[#05071E] to-[#111A89] rounded-[10px] p-6 flex flex-col h-full">
              <div className="h-64 md:h-80 flex items-center justify-center mb-6">
                <img src="/assets/images/bull.png" alt="Vision" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="w-full">
                <h3 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold font-['Poppins'] mb-4 text-white text-left">
                  Our Vision
                </h3>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-normal font-['Poppins'] leading-[140%] text-[#BBBBBB] text-left">
                  To be the trusted partner for businesses seeking to leverage technology to improve decision-making, unlock new opportunities, and achieve transformative growth.
                </p>
              </div>
            </div>
          </div>
          {/* Mission Card */}
          <div className="relative w-full max-w-[605px] rounded-[10px] p-[2px] bg-gradient-to-b from-[#01B4DE] via-[#C9C9C9]/10 to-[#01B4DE] flex-1">
            <div className="bg-gradient-to-tr from-[#05071E] via-[#05071E] to-[#111A89] rounded-[10px] p-6 flex flex-col h-full">
              <div className="h-64 md:h-80 flex items-center justify-center mb-6">
                <img src="/assets/images/glass.png" alt="Mission" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="w-full">
                <h3 className="text-[28px] md:text-[36px] lg:text-[48px] font-bold font-['Poppins'] mb-4 text-white text-left">
                  Our Mission
                </h3>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] font-normal font-['Poppins'] leading-[140%] text-[#BBBBBB] text-left">
                  We bridge the gap between technology and business, delivering customized ICT solutions that drive efficiency, growth, and competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeRepresent;