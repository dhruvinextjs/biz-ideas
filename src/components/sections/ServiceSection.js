import React from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ServiceSection() {
  const services = [
    {
      title: "Business Consultation",
      description: "Expert advice on market validation, pricing, scaling, and tech stack selection.",
      image: "/images/service1.png" // Apni image path se replace karein
    },
    {
      title: "Business Plan Preparation",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/images/service2.png"
    },
    {
      title: "Scope Document Preparation",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "/images/service3.png"
    }
  ];

  return (
    <section className="w-full py-12 px-4 bg-background transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-t border-dotted border-foreground/10 pt-8">
          <h2 className="text-primary font-bold text-sm tracking-tight uppercase">
            Services
          </h2>
          <Link 
            href="#" 
            className="flex items-center gap-1 text-[12px] text-foreground/50 hover:text-primary transition-colors font-medium"
          >
            View more <ChevronRight size={14} />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-[#F0F0F0] dark:bg-[#1A1F3D]/40 rounded-[24px] overflow-hidden flex flex-col cursor-pointer transition-all hover:shadow-lg border border-transparent dark:border-white/5"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden m-4 rounded-[18px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="px-6 pb-8">
                <h3 className="text-xl font-semibold text-foreground/90 group-hover:text-primary transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#4C4C4C] dark:text-[#9CB3C9]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}