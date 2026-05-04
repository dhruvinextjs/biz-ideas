import ProcessSection from '@/components/pages/OurProcess'
import ServicesPage from '@/components/pages/ServicePage'
import Advertise from '@/components/sections/Advertise'
import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen bg-background font-sans transition-colors duration-300 relative overflow-hidden">
      
      {/* Optional: Subtle Hexagon/Grid Background Effect for Dark Mode */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-0 dark:opacity-5 mix-blend-overlay"></div>

      {/* Render Components */}
      <ServicesPage />
      <ProcessSection />
      <Advertise/>
      
    </div>
  )
}
