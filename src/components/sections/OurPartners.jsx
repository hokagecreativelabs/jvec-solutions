import React from 'react';

const OurPartners = () => {
  const logos = [
    '/assets/images/software-group.png',
    '/assets/images/cognizant.png',
    '/assets/images/temenos.png',
    '/assets/images/netinfo.png',
    '/assets/images/machindra.png',
  ];

  return (
    <section className="w-full bg-[#05071E] py-20 px-4 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center max-w-[800px] mx-auto mb-12">
        <h2 className="font-['Poppins'] font-bold text-[32px] sm:text-[44.95px] leading-[100%] text-white">
          Our Partners
        </h2>
        <p className="font-['Poppins'] font-normal text-[18px] sm:text-[24px] leading-[100%] text-white mt-4">
          Creating a Synergy with global brands
        </p>
      </div>

      {/* Logos Grid */}
      <div className="w-full max-w-[1496px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-2 bg-[#050617]">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-full h-[91.55px] rounded-[5.77px] flex items-center justify-center p-4"
          >
            <img
              src={logo}
              alt={`Partner ${index + 1}`}
              className="w-[230px] max-w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
