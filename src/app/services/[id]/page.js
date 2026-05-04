import ServiceDetail from '@/components/pages/ServiceDetail'
import Advertise from '@/components/sections/Advertise'
import Testimonials from '@/components/sections/Testimonials'
import React from 'react'

export default function page() {
  return (
    <div>
      <ServiceDetail/>
      <Testimonials/>
      <Advertise/>
    </div>
  )
}
