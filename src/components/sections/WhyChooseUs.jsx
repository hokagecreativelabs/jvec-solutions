import React from 'react';

export default function WhyChooseUs() {
  return (
    <section
      className="w-full min-h-screen bg-center bg-no-repeat bg-cover relative flex flex-col items-center px-4 py-16 overflow-hidden"
      style={{ backgroundImage: "url('/assets/images/section-bg.png')" }}
    >
      {/* Centered Gradient Overlay */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-full max-w-[1200px] h-full bg-gradient-to-b from-transparent via-transparent to-[#111A89] opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center">
        {/* Title */}
        <h2 className="max-w-[946px] font-poppins font-bold text-[32px] md:text-[50px] text-white leading-[100%]">
          Why we are your Trusted Consultant
        </h2>

        {/* Subtitle */}
        <p className="max-w-[660px] mt-6 font-poppins text-[#BBBBBB] font-normal text-[18px] md:text-[24px] leading-[100%]">
          Empowering Businesses with Cutting-edge Technology
        </p>

        {/* Paragraph */}
        <p className="max-w-[1092px] mt-10 font-poppins font-normal text-[#D2D2D2] text-[20px] md:text-[32px] leading-[100%]">
          Excellence isn’t a goal, it’s our DNA; our relentless pursuit of excellence is the driving
          force behind our success. Excellence is our legacy, and we are proud to carry it forward.
        </p>

        {/* Pre-image Text */}
        <p className="max-w-[1058px] mt-10 font-poppins text-[#D2D2D2] text-[18px] md:text-[24px] leading-[100%]">
          Watch the video to see how we are innovating to keep businesses on top of their games.
        </p>

        {/* Image */}
        <img
          src="/assets/images/why-choose-img.png"
          alt="Consulting Team at Work"
          className="w-full max-w-[1044px] h-auto mt-10 rounded-[19px] border-[14px] border-white object-cover"
        />
      </div>
    </section>
  );
}
