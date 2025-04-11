import React from 'react';

const ComplianceCertifications = () => {
  return (
    <section className="bg-[#050A1F] py-20 px-6 md:px-12 lg:px-20 text-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading + CTA */}
        <div className="flex flex-col items-start md:items-center md:text-center text-left mb-12">
          <h2 className="text-[24px] md:text-[50px] font-bold font-['Poppins'] leading-[100%] mb-4 max-w-[816px]">
            Compliance Certifications/ <br className="hidden md:block" />
            Standards We Specialize In
          </h2>

          <p className="text-[16px] md:text-[24px] font-normal font-['Poppins'] leading-[100%] text-[#BBBBBB] mb-8 max-w-[728px]">
            Elevate Your Organization's Security Posture with Our Compliance/Standards Consulting Services
          </p>

          <button className="text-white bg-gradient-to-br from-[#000080] via-[#4169E1] to-[#000080] border border-[#4169E1] font-semibold text-lg px-8 py-3 rounded-full shadow-md hover:opacity-90 transition-all">
            Contact Us
          </button>
        </div>

        {/* Logos Container */}
        <div className="bg-white rounded-[10px] p-6 md:p-10 w-full max-w-[1234px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center items-center">
            <img src="/assets/images/compliance/1.png" alt="PCI DSS" className="max-h-[80px] object-contain" />
            <img src="/assets/images/compliance/2.png" alt="ISO 27001" className="max-h-[80px] object-contain" />
            <img src="/assets/images/compliance/3.png" alt="Cybersecurity Framework" className="max-h-[80px] object-contain" />
            <img src="/assets/images/compliance/4.png" alt="GDPR" className="max-h-[80px] object-contain" />
            <img src="/assets/images/compliance/5.png" alt="NDPR Audit" className="max-h-[80px] object-contain" />
            <img src="/assets/images/compliance/6.png" alt="ISO 22301" className="max-h-[80px] object-contain" />

            <img src="/assets/images/compliance/7.png" alt="HIPAA" className="max-h-[80px] object-contain" />
            <img src="/assets/images/compliance/8.png" alt="TOGAF" className="max-h-[80px] object-contain" />
            <img src="/assets/images/compliance/9.png" alt="ISO 20000" className="max-h-[80px] object-contain" />
            <img src="/assets/images/compliance/10.png" alt="SOC 1" className="max-h-[80px] object-contain" />
            <img src="/assets/images/compliance/10.png" alt="SOC 2" className="max-h-[80px] object-contain" />
            <img src="/assets/images/compliance/11.png" alt="COBIT" className="max-h-[80px] object-contain" />

            <img src="/assets/images/compliance/12.png" alt="SSAE 18" className="max-h-[80px] object-contain" />
            <img src="/assets/images/compliance/13.png" alt="PCAOB" className="max-h-[80px] object-contain" />
            <img src="/assets/images/compliance/14.png" alt="COSO" className="max-h-[80px] object-contain" />
            <img src="/assets/images/compliance/15.png" alt="SSAE 16" className="max-h-[80px] object-contain" />
            <img src="/assets/images/compliance/16.png" alt="IAASB" className="max-h-[80px] object-contain" />
            <img src="/assets/images/compliance/17.png" alt="ISAE 3402" className="max-h-[80px] object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceCertifications;