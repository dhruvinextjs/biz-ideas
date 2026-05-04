import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Advertise() {
  return (
    <section className="w-full py-20 px-4 bg-background transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        {/* Main Card Container */}
        <div className="relative overflow-hidden rounded-[40px] px-6 py-16 md:py-14 text-center 
          bg-card"
        >
          {/* Subtle Diagonal Lines for Dark Mode */}
          <div className="absolute inset-0 opacity-10 pointer-events-none hidden dark:block 
            bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] 
            bg-[length:10px_10px]" 
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Heading - Changes based on theme per screenshots */}
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-icon">
              <span className="dark:inline hidden">Stay informed</span>
              <span className="inline dark:hidden">Stop overthinking. Start building.</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-lg text-[#4C4C4C] dark:text-[#9CB3C9] mb-10 max-w-2xl">
              Market insights that help you start and grow your business.
            </p>

            {/* Email Input Field */}
            <div className="relative w-full max-w-lg">
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full h-14 md:h-16 pl-6 pr-16 rounded-full border border-foreground/10 
                  bg-white dark:bg-[#192468] 
                  text-icon placeholder:text-[#AFD0F2]
                  focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
              />
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 
                  bg-[#FB8122] hover:bg-[#e6731a] text-white rounded-full 
                  flex items-center justify-center transition-transform active:scale-95 shadow-lg"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}