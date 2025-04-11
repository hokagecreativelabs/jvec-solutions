import React from 'react';

const ReadyToGetStarted = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#111A89] via-[#05071E] to-[#030517] py-20 px-4 flex justify-center">
      <div className="w-full max-w-[1237px] h-auto md:h-[582px] rounded-[23px] border border-[#2A2E6E] bg-gradient-to-r from-[#030517] to-[#181B4D] px-6 sm:px-10 md:px-16 py-10 relative overflow-hidden">
        {/* Right Side Image - Positioned Absolutely */}
        <div className="absolute top-0 right-0 bottom-0 w-1/2 hidden md:block">
          <div className="relative h-full w-full">
            <img
              src="/assets/images/radial.png"
              alt="Get Started Visual"
              className="absolute right-0 h-full object-contain"
            />
          </div>
        </div>
        
        {/* Text Content */}
        <div className="md:max-w-[85%] text-white relative z-10 pt-16">
          <h2 className="font-['Poppins'] text-[36px] sm:text-[48px] md:text-[57.99px] font-bold leading-[100%] mb-4">
            Ready to get started?
          </h2>
          <p className="font-['Poppins'] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[100%] mb-6">
            Shoot us a Mail
          </p>
          <div className="max-w-full md:max-w-[95%] h-auto text-[16px] sm:text-[20px] md:text-[24px] leading-[140%] tracking-[3%] font-['Poppins'] text-[#E4E4E4] mb-8">
            <p className="mb-4">
              Join numerous corporations, organizations, and businesses as they scale their teams, tap into new market
              opportunities and build innovative products with KeySystem Technology.
            </p>
            <p>
              Join thousands of students who are ready to learn new skills or take their career to the next level by
              enrolling in one of our training programs today.
            </p>
          </div>
          <button className="mt-4 w-full sm:w-[316px] h-[72px] px-10 py-[18px] text-white font-bold text-[18px] bg-gradient-to-br from-[#000080] via-[#4169E1] to-[#000080] border-2 border-white rounded-[37px] hover:opacity-90 transition-all duration-300">
            Send Us a Mail Now
          </button>
        </div>
        
        {/* Mobile Image (shown only on small screens) */}
        <div className="mt-8 w-full block md:hidden">
          <img
            src="/assets/images/radial.png"
            alt="Get Started Visual"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ReadyToGetStarted;