import React from 'react';

const logos = [
  '/assets/images/trust/1.png',
  '/assets/images/trust/2.png',
  '/assets/images/trust/3.png',
  '/assets/images/trust/4.png',
  '/assets/images/trust/5.png',
  '/assets/images/trust/6.png',
  '/assets/images/trust/7.png',
  '/assets/images/trust/8.png',
  '/assets/images/trust/9.png',
  '/assets/images/trust/10.png',
  '/assets/images/trust/11.png',
];

const TheyTrustUs = () => {
  return (
    <section className="w-full bg-[#05071E] py-20 px-4 flex flex-col items-center">
      {/* Heading container */}
      <div className="max-w-[882px] flex flex-col gap-5 items-center text-center">
        <h2 className="font-['Poppins'] text-white text-[40px] sm:text-[50px] font-bold leading-none">
          They Trust Us
        </h2>
        <p className="font-['Poppins'] text-white text-[18px] sm:text-[24px] font-normal leading-none">
          And so can you
        </p>
      </div>

      {/* Logos container */}
      <div className="mt-16 max-w-[1134px] w-full flex flex-wrap justify-center gap-6 sm:gap-[38px]">
        {logos.map((src, idx) => (
          <div
            key={idx}
            className="bg-white p-2 rounded-md shadow-md flex items-center justify-center"
            style={{
              width: '250.85px',
              height: '99.92px',
              borderRadius: '6.38px',
            }}
          >
            <img
              src={src}
              alt={`logo-${idx}`}
              className="object-contain max-w-full max-h-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TheyTrustUs;
