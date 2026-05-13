"use client";
import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

export default function ToolPage() {
  return (
    <div className="bg-background relative overflow-hidden font-sans transition-colors duration-300 mt-20">
      
      {/* Background Particles / Confetti Effect (Visible mostly in dark mode) */}
      <div className="absolute top-0 left-0 w-full h-96 overflow-hidden pointer-events-none opacity-0 dark:opacity-100">
        <div className="absolute top-10 left-[20%] w-2 h-2 bg-blue-500 rounded-full blur-[1px] opacity-60"></div>
        <div className="absolute top-24 left-[70%] w-2.5 h-2.5 bg-purple-500 rounded-full blur-[1px] opacity-40"></div>
        <div className="absolute top-20 left-[40%] w-2.5 h-2.5 bg-purple-500 rounded-full blur-[1px] opacity-40"></div>
        <div className="absolute top-16 left-[50%] w-2.5 h-2.5 bg-purple-500 rounded-full blur-[1px] opacity-40"></div>
        <div className="absolute top-16 right-[30%] w-2 h-2 bg-yellow-500 rounded-full blur-[1px] opacity-60"></div>
        <div className="absolute top-16 right-[40%] w-2 h-2 bg-yellow-500 rounded-full blur-[1px] opacity-60"></div>
        <div className="absolute top-8 right-[70%] w-3 h-3 bg-red-500 rounded-full blur-[2px] opacity-30"></div>
        <div className="absolute top-8 right-[35%] w-3 h-3 bg-red-500 rounded-full blur-[2px] opacity-30"></div>
        <div className="absolute top-8 right-[15%] w-3 h-3 bg-red-500 rounded-full blur-[2px] opacity-30"></div>
        <div className="absolute top-32 left-[20%] w-1.5 h-1.5 bg-green-500 rounded-full blur-[1px] opacity-50"></div>
        <div className="absolute top-32 left-[10%] w-1.5 h-1.5 bg-green-500 rounded-full blur-[1px] opacity-50"></div>
        <div className="absolute top-40 right-[40%] w-2 h-2 bg-pink-500 rounded-full blur-[1px] opacity-40"></div>
      </div>

    <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8 mt-10">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Business Tools
          </h1>
          <p className="text-base text-icon opacity-90 max-w-2xl mx-auto">
            Free tools to help you validate, plan, and launch your business with confidence.
          </p>
        </div>

        {/* Tools Card Container */}
        <div className="max-w-2xl mx-auto">
          
          {/* Single Tool Card - Image Match Design */}
          <div className="bg-card border border-white/5 rounded-2xl p-8 md:p-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-8 shadow-2xl transition-all group">
            
            {/* Left Side: Content Stack */}
            <div className="flex flex-col items-center md:items-start w-full text-center md:text-left">
              
              {/* Icon Box - Exact as per image */}
              <div className="w-12 h-12 bg-[#0070FF] rounded-2xl flex items-center justify-center mb-4">
                <Search className="text-white w-6 h-6" />
              </div>
              
              {/* Text Info */}
              <div className="space-y-2">
                <h2 className="text-xl text-icon font-semibold">
                  Business Name Generator
                </h2>
                <p className="text-sm text-gray-400 dark:text-[#9CB3C9] font-normal">
                  Find the perfect name for your startup using AI.
                </p>
              </div>
            </div>

            {/* Right Side: Action Button - Exact as per image */}
            <div className="shrink-0 pb-2">
                <button className="flex items-center gap-2 bg-[#FF7A00] hover:bg-[#e66e00] text-white px-4 py-2 rounded-full text-md font-normal transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/20">
                    Explore Tool <ArrowRight className="w-5 h-5 stroke-[3]" />
                </button>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}