import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    quote: "This is the kind of resource I wish I had when I started. Straight to the point, no fluff.",
    name: "Aarav",
    role: "Bootstrapped Founder",
    avatar: "/images/person1.jpg" // Apni image path use karein
  },
  {
    quote: "Most content online is noise. This actually helps you think and move faster.",
    name: "Neha",
    role: "Facebook",
    avatar: "/images/person2.jpg"
  },
  {
    quote: "If you're building solo, this gives you clarity without overwhelming you.",
    name: "Rohan",
    role: "SaaS Founder",
    avatar: "/images/person3.jpg"
  }
];

export default function Testimonials() {
  return (
    // <section className="w-full py-4 px-4 bg-background transition-colors duration-300">
    //   <div className="container mx-auto max-w-7xl">
    <section className="w-full py-4 px-4 bg-background transition-colors duration-300">
  <div className="container mx-auto max-w-7xl border-b-2 border-dotted border-[#E6E6E6] dark:border-[#1C234D] pb-10">
        {/* Header */}
        <div className="mb-3 pt-2">
          <h2 className="text-primary font-bold text-sm tracking-tight uppercase">
            Testimonials
          </h2>
        </div>

        {/* Responsive Grid/Carousel Container */}
        <div className="flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible no-scrollbar">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="min-w-[300px] flex-1 bg-card p-8 rounded-[24px] flex flex-col justify-between transition-all border border-transparent dark:border-white/5"
            >
              {/* Quote Section */}
              <div className="mb-10">
                <p className="text-[18px] font-normal leading-relaxed text-icon">
                  "{item.quote}"
                </p>
              </div>

              {/* User Info Section */}
              <div className="pt-6 border-t border-foreground/10 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-foreground/10">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm font-semibold text-foreground/80">
                    {item.name}, <span className="font-normal text-[#4C4C4C] dark:text-[#9CB3C9]">{item.role}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}