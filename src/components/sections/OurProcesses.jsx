import React from 'react';

const OurProcess = () => {
  return (
    <section className="w-full bg-[#05071E] py-20 px-4 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center max-w-[800px] mx-auto mb-12">
        <h2 className="text-white text-[36px] sm:text-[44.95px] font-bold leading-none font-['Poppins']">
          Our Process
        </h2>
        <p className="text-white text-[18px] sm:text-[24px] font-normal leading-none mt-4 font-['Poppins']">
          At KeySystem, we leave you with a lasting impression
        </p>
      </div>

      {/* Process Container */}
      <div className="w-full max-w-[1237px] flex flex-col gap-10">
        {/* Top Card: Strategic Consultation */}
        <div className="bg-gradient-to-br from-[#0C123D] to-[#05071E] rounded-[10px] w-full h-auto sm:h-[243px] flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 py-10">
          <div className="max-w-[700px] text-left">
            <h3 className="text-white text-[30px] sm:text-[40px] font-bold font-['Poppins'] mb-4">
              Strategic Consultation
            </h3>
            <p className="text-white text-[18px] sm:text-[24px] font-normal font-['Poppins']">
              We kick off with a strategic consultation to understand your brand, goals, and audience
            </p>
          </div>
          <img
            src="/assets/images/puzzle.png"
            alt="Strategic Consultation"
            className="w-[80%] sm:w-[385px] sm:h-[322.72px] object-contain sm:-mt-[39.36px] sm:-mr-2 mt-6"
          />
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Collaboration Card */}
          <div className="bg-gradient-to-br from-[#0C123D] to-[#05071E] rounded-[10px] w-full sm:w-[598px] h-auto sm:h-[302px] flex relative overflow-hidden px-6 py-8">
            <div className="w-full sm:w-[402px] text-left z-10">
              <h3 className="text-white text-[30px] sm:text-[40px] font-bold font-['Poppins'] mb-4">
                Collaboration
              </h3>
              <p className="text-white text-[18px] sm:text-[24px] font-normal font-['Poppins']">
                At KeySystem, we collaborate closely to ensure the end result meets your expectations and makes you happy
              </p>
            </div>
            <img
              src="/assets/images/hand.png"
              alt="Collaboration"
              className="absolute bottom-0 right-0 w-[70%] sm:w-[300px] sm:h-auto object-contain"
            />
          </div>

          {/* Delivery Card */}
          <div className="bg-gradient-to-br from-[#0C123D] to-[#05071E] rounded-[10px] w-full sm:w-[598px] h-auto sm:h-[302px] flex relative overflow-hidden px-6 py-8">
            <div className="w-full sm:w-[302px] text-left z-10">
              <h3 className="text-white text-[30px] sm:text-[40px] font-bold font-['Poppins'] mb-4">
                Delivery
              </h3>
              <p className="text-white text-[18px] sm:text-[24px] font-normal font-['Poppins']">
                Our delivery rate is 100%; our clients deserve nothing less.
              </p>
            </div>
            <img
              src="/assets/images/tick.png"
              alt="Delivery"
              className="absolute bottom-0 right-0 w-[70%] sm:w-[330.62px] sm:h-[206px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
