import React from 'react'
import { Helmet } from 'react-helmet'
import Hero from '../../components/sections/Hero'
import LogoTicker from '../../components/sections/LogoTicker'
import WhyChooseUs from '../../components/sections/WhyChooseUs'
import OurOfferings from '../../components/sections/OurOfferings'
import WhatWeRepresent from '../../components/sections/WhatWeRepresent'
import ComplianceCertifications from '../../components/sections/ComplianceCertifications'
import TheyTrustUs from '../../components/sections/TheyTrustUs'
import OurProcess from '../../components/sections/OurProcesses'
import OurPartners from '../../components/sections/OurPartners'
import ReadyToGetStarted from '../../components/sections/GetStarted'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>KeySystem Technology | Empowering Growth through Innovation</title>
        <meta name="description" content="At KeySystem, we help organizations and students scale by delivering smart ICT solutions, expert consulting, and powerful training." />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.keysystemtech.com/" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="KeySystem Technology | Empowering Growth through Innovation" />
        <meta property="og:description" content="Discover how KeySystem empowers corporations, students, and teams with smart tech solutions and world-class training." />
        <meta property="og:image" content="https://www.keysystemtech.com/assets/og-image.jpg" />
        <meta property="og:url" content="https://www.keysystemtech.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KeySystem Technology" />
        <meta name="twitter:description" content="Innovative ICT solutions, strategic consulting, and training to elevate your business or career." />
        <meta name="twitter:image" content="https://www.keysystemtech.com/assets/og-image.jpg" />

        {/* Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Helmet>

      {/* Page Content */}
      <Hero />
      <LogoTicker />
      <WhyChooseUs />
      <OurOfferings />
      <WhatWeRepresent />
      <ComplianceCertifications />
      <TheyTrustUs />
      <OurProcess />
      <OurPartners />
      <ReadyToGetStarted />
    </>
  )
}

export default Home
