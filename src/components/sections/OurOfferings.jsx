import React from 'react';

const OurOfferings = () => {
  const offeringCards = [
    'Core Banking Services',
    'Digital Banking & Financial Inclusion',
    'Online/Mobile Lending Solution',
    'Staff Augmentation Solutions',
    'Internal Audit Solutions',
    'Business Intelligence',
    'KeySystem Software Testing',
    'Data Warehouse',
    'Cybersecurity Solutions',
  ];

  return (
    <div className="w-full bg-[#05071E] py-20 flex flex-col items-center px-4 md:px-8 overflow-x-hidden">
      {/* Title Heading */}
      <h2 className="text-white font-['Poppins'] font-bold text-[32px] md:text-[50px] leading-[100%] text-center max-w-full">
        Our Offerings
      </h2>

      {/* Title Paragraph */}
      <p className="text-white font-['Poppins'] font-normal text-[16px] md:text-[24px] leading-[150%] text-center mt-6 max-w-3xl">
        Leverage KeySystem’s cutting-edge expertise to transform your business. Our tailored software and cybersecurity
        solutions drive efficiency, security, and growth. We empower businesses to thrive in the digital age.
      </p>

      {/* CTA */}
      <a
        href="#"
        className="mt-8 flex items-center justify-center text-white font-['Poppins'] font-semibold text-[16px] md:text-[18px] bg-gradient-to-br from-[#000080] via-[#4169E1] to-[#000080] border border-[#4169E1] rounded-[37px] shadow-lg hover:scale-105 transition-transform duration-200 px-8 py-4"
      >
        Learn More
      </a>

      {/* Tag Containers */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-[50px] mt-16 w-full max-w-[1200px]">
        {[...Array(3)].map((_, columnIdx) => (
          <div key={columnIdx} className="flex flex-col gap-6 w-full sm:w-[277px]">
            {offeringCards.slice(columnIdx * 3, columnIdx * 3 + 3).map((title, i) => (
              <div
                key={i}
                className="flex items-center justify-center text-white font-['Poppins'] text-center text-[16px] md:text-[18px] border rounded-full relative px-4 py-6 overflow-hidden"
                style={{
                  background: 'linear-gradient(90deg, rgba(10, 52, 64, 0.89), rgba(5, 7, 30, 0.65))',
                  borderColor: '#DCAEC2',
                  minHeight: '135px',
                }}
              >
                <span className="truncate">{title}</span>
                <span className="absolute right-4 text-white text-lg">→</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurOfferings;
