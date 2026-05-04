"use client";
import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

export default function ToolPage() {
  return (
    <div className="bg-background relative overflow-hidden font-sans transition-colors duration-300 mt-20">
      
      {/* Background Particles / Confetti Effect (Visible mostly in dark mode) */}
      <div className="absolute top-0 left-0 w-full h-96 overflow-hidden pointer-events-none opacity-0 dark:opacity-100">
        <div className="absolute top-10 left-[20%] w-2 h-2 bg-blue-500 rounded-full blur-[1px] opacity-60"></div>
        <div className="absolute top-24 left-[40%] w-2.5 h-2.5 bg-purple-500 rounded-full blur-[1px] opacity-40"></div>
        <div className="absolute top-16 right-[30%] w-2 h-2 bg-yellow-500 rounded-full blur-[1px] opacity-60"></div>
        <div className="absolute top-8 right-[15%] w-3 h-3 bg-red-500 rounded-full blur-[2px] opacity-30"></div>
        <div className="absolute top-32 left-[10%] w-1.5 h-1.5 bg-green-500 rounded-full blur-[1px] opacity-50"></div>
        <div className="absolute top-40 right-[40%] w-2 h-2 bg-pink-500 rounded-full blur-[1px] opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8 mt-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Business Tools
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Free tools to help you validate, plan, and launch your business with confidence.
          </p>
        </div>

        {/* Tools Card Container */}
        <div className="max-w-3xl mx-auto space-y-6">
          
          {/* Single Tool Card */}
          <div className="bg-card border border-gray-200 dark:border-white/5 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm hover:shadow-md dark:hover:shadow-white/5 transition-all group">
            
            {/* Left Side: Icon & Text */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 w-full">
              {/* Icon Box */}
              <div className="w-14 h-14 bg-blue-600 rounded-[14px] flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/20">
                <Search className="text-white w-6 h-6" />
              </div>
              
              {/* Text Info */}
              <div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1">
                  Business Name Generator
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Find the perfect name for your startup using AI.
                </p>
              </div>
            </div>

            {/* Right Side: Action Button */}
            <button className="w-full sm:w-auto flex justify-center items-center gap-2 bg-[#FB8122] hover:bg-[#e06c1b] text-white px-6 py-2.5 rounded-full text-sm font-medium transition-transform group-hover:scale-105 shrink-0 shadow-md shadow-orange-500/20">
              Explore Tool <ArrowRight className="w-4 h-4" />
            </button>
            
          </div>
          
          {/* Note: Agar aur tools add karne ho, toh bas upar wale <div className="bg-white..."> ko copy-paste kar lijiye is container ke andar. */}

        </div>
      </div>
    </div>
  );
}