import { Mail, Phone, Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12 px-6 md:px-12 font-['Poppins']">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Logo and Services */}
        <div className="flex flex-col lg:flex-row mb-12">
          {/* Logo Section */}
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <div className="mb-4">
              <img 
                src="/assets/images/logo.png" 
                alt="KeySystem Technology Limited" 
                className="h-12" 
              />
            </div>
            <p className="text-sm text-gray-400">
              © 2025 KeySystem Technology Limited. All rights reserved.
            </p>
          </div>

          {/* Services Section */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-bold mb-6 uppercase leading-tight tracking-normal">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="space-y-3">
                  <li><a href="#" className="text-[#CFCFCF] hover:text-blue-400 text-xl leading-loose">Core refresh</a></li>
                  <li><a href="#" className="text-[#CFCFCF] hover:text-blue-400 text-xl leading-loose">Application management services</a></li>
                  <li><a href="#" className="text-[#CFCFCF] hover:text-blue-400 text-xl leading-loose">Evolution & enhancement services</a></li>
                  <li><a href="#" className="text-[#CFCFCF] hover:text-blue-400 text-xl leading-loose">Solution Assurance & validation</a></li>
                  <li><a href="#" className="text-[#CFCFCF] hover:text-blue-400 text-xl leading-loose">Digital Banking & financial inclusion</a></li>
                  <li><a href="#" className="text-[#CFCFCF] hover:text-blue-400 text-xl leading-loose">Online/mobile lending solution</a></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li><a href="#" className="text-[#CFCFCF] hover:text-blue-400 text-xl leading-loose">Staff augmentation solutions</a></li>
                  <li><a href="#" className="text-[#CFCFCF] hover:text-blue-400 text-xl leading-loose">Risk management & Internal audit solutions</a></li>
                  <li><a href="#" className="text-[#CFCFCF] hover:text-blue-400 text-xl leading-loose">Data Warehouse & Business Intelligence (BI)</a></li>
                  <li><a href="#" className="text-[#CFCFCF] hover:text-blue-400 text-xl leading-loose">Enterprise Document Management Solutions</a></li>
                  <li><a href="#" className="text-[#CFCFCF] hover:text-blue-400 text-xl leading-loose">KeySystem software testing</a></li>
                  <li><a href="#" className="text-[#CFCFCF] hover:text-blue-400 text-xl leading-loose">Cybersecurity Solutions</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Quick Links and Contact Addresses */}
        <div className="flex flex-col lg:flex-row mb-12">
          {/* Quick Links Section */}
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <h2 className="text-3xl font-bold mb-6 uppercase leading-tight tracking-normal">Quick Links</h2>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#CFCFCF] hover:text-blue-400 text-xl leading-loose">About Us</a></li>
              <li><a href="#" className="text-[#CFCFCF] hover:text-blue-400 text-xl leading-loose">Sitemap</a></li>
            </ul>
          </div>

          {/* Contact Addresses Section */}
          <div className="lg:w-3/4">
            <h2 className="text-3xl font-bold mb-6 uppercase leading-tight tracking-normal">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nigeria Address */}
              <div>
                <h3 className="font-bold mb-2 text-xl">Nigeria</h3>
                <p className="text-[#CFCFCF] text-xl leading-loose">
                  55G Adebisi Omotola Close,<br />
                  Off Samuel Adedoyin Street,<br />
                  Victoria Island
                </p>
              </div>

              {/* UK Address */}
              <div>
                <h3 className="font-bold mb-2 text-xl">United Kingdom</h3>
                <p className="text-[#CFCFCF] text-xl leading-loose">
                  39 Kenyon Lane, Off Moston Lane,<br />
                  Moston, Manchester,<br />
                  United Kingdom, M40 9JG
                </p>
              </div>
            </div>
            
            {/* Phone Numbers - All on same level */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <h3 className="font-bold mb-2 text-xl">United Kingdom</h3>
                <div className="flex items-center text-[#CFCFCF] text-xl">
                  <Phone size={20} className="mr-2" />
                  <span>+44 161 948 1444</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-2 text-xl">United Arab Emirates</h3>
                <div className="flex items-center text-[#CFCFCF] text-xl">
                  <Phone size={20} className="mr-2" />
                  <span>+971 50 423 8817</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold mb-2 text-xl">Canada</h3>
                <div className="flex items-center text-[#CFCFCF] text-xl">
                  <Phone size={20} className="mr-2" />
                  <span>+1 647 977 1435</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Social Media, Nigeria Phone and Email */}
        <div className="flex flex-col lg:flex-row items-start">
          {/* Social Media Icons */}
          <div className="mb-8 lg:mb-0 lg:w-1/4">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={28} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={28} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={28} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={28} />
              </a>
            </div>
          </div>

          {/* Nigeria Phone and Email */}
          <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nigeria Phone */}
            <div>
              <h3 className="font-bold mb-2 text-xl">Nigeria</h3>
              <div className="flex items-center text-[#CFCFCF] text-xl">
                <Phone size={20} className="mr-2" />
                <span>+234 818 444 1404</span>
              </div>
            </div>
            
            {/* Email */}
            <div>
              <h3 className="font-bold mb-2 text-xl">Email</h3>
              <div className="flex items-center text-[#CFCFCF] text-xl">
                <Mail size={20} className="mr-2" />
                <a href="mailto:enquiries@keysystemltc" className="hover:text-blue-400">
                  enquiries@keysystemltc
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}