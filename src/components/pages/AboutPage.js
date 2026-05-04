"use client";
import React from "react";
import { Target, Eye } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans transition-colors duration-300 py-16 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* ========================================== */}
        {/* 1. HERO SECTION                            */}
        {/* ========================================== */}
        <section className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-icon mb-6 leading-tight">
            Build <span className="text-primary">Smarter.</span> Grow{" "}
            <span className="text-primary">Faster.</span>
            <br className="hidden md:block" /> Stay{" "}
            <span className="text-primary">Independent.</span>
          </h1>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-sm md:text-base text-icon leading-relaxed opacity-90">
              The Biz Ideas is a platform for ambitious creators, founders, and dreamers who want to build profitable businesses on their own terms.
            </p>
            <p className="text-sm md:text-base text-icon leading-relaxed opacity-90">
              We believe that you don't need massive funding, a big team, or years of experience to start something meaningful. All you need is the right idea, the right guidance, and the courage to take action.
            </p>
          </div>
        </section>

        {/* ========================================== */}
        {/* 2. STORY & FOUNDER SECTION                 */}
        {/* ========================================== */}
        <section className="text-center mb-16 relative">
          {/* Divider Line */}
          <div className="absolute top-12 left-0 right-0 h-px bg-gray-200 dark:bg-white/5 -z-10"></div>
          
          {/* Founder Image */}
          <div className="inline-block bg-background p-2 rounded-full mb-14">
            <Image
              src="/images/chirag.png" // Yahan apni profile image ka URL daal dena
              alt="Chirag Panchal"
              width={100}
              height={100}
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-md border border-gray-200 dark:border-white/10"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-icon mb-2">
            The Story Behind The <span className="text-[#FB8122]">Biz</span> Ideas
          </h2>
          <p className="text-md text-icon opacity-90 mb-2">
            Founded by Chirag Panchal
          </p>

          <div className="max-w-4xl mx-auto space-y-6 text-sm text-icon opacity-90 leading-relaxed">
            <p>
              The Biz Ideas started in a small co-working space with a simple observation: there are millions of people with the drive to start a business, but they often get stuck at the very first step finding a viable idea.
            </p>
            <p>
              We realized that while there's no shortage of "ideas" on the internet, there's a massive shortage of *structured, validated, and actionable* business models. Most people don't just need a title; they need to understand the problem, the solution, the revenue model, and the step-by-step path to launch.
            </p>
            <p>
              That's why we built The Biz Ideas. We combined our background in software development and business strategy to create a platform that doesn't just inspire, but actually enables execution.
            </p>
          </div>
        </section>

        {/* ========================================== */}
        {/* 3. MISSION & VISION CARDS                  */}
        {/* ========================================== */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Mission Card */}
          <div className="bg-white dark:bg-[#0C1445] border border-gray-200 dark:border-[#2E3A84] rounded-2xl p-4 flex flex-col items-start transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-[#0C2E7C] flex items-center justify-center text-icon mb-2">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold text-icon mb-2">Our Mission</h3>
            <p className="text-sm text-gray-600 dark:text-[#BACCDE] leading-relaxed">
              To empower 1 million entrepreneurs to start and grow profitable businesses by providing actionable ideas, powerful tools, and expert services.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white dark:bg-[#0C1445] border border-gray-200 dark:border-[#2E3A84] rounded-2xl p-4 flex flex-col items-start transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-[#0D3D54] flex items-center justify-center text-teal-600 dark:text-[#1DBA9F] mb-2">
              <Eye size={24} />
            </div>
            <h3 className="text-xl font-bold text-icon mb-2">Our Vision</h3>
            <p className="text-sm text-gray-600 dark:text-[#BACCDE] leading-relaxed">
              To become the world's leading ecosystem for startup creation, where every great idea has the support it needs to become a successful reality.
            </p>
          </div>
        </section>

        {/* ========================================== */}
        {/* 4. STATS SECTION                           */}
        {/* ========================================== */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-y-10 pt-16 text-center">
          <div className="md:border-r border-gray-200 dark:[#525E9F] px-4">
            <h4 className="text-3xl md:text-4xl font-bold text-icon mb-2">1K+</h4>
            <p className="text-xs md:text-sm text-gray-500 dark:text-[#BACCDE]">Business Ideas</p>
          </div>
          
          <div className="md:border-r border-gray-200 dark:[#525E9F] px-4">
            <h4 className="text-3xl md:text-4xl font-bold text-icon mb-2">800+</h4>
            <p className="text-xs md:text-sm text-gray-500 dark:text-[#BACCDE]">Startup Ideas</p>
          </div>
          
          <div className="md:border-r border-gray-200 dark:[#525E9F] px-4">
            <h4 className="text-3xl md:text-4xl font-bold text-icon mb-2">50K+</h4>
            <p className="text-xs md:text-sm text-gray-500 dark:text-[#BACCDE]">Community Members</p>
          </div>
          
          <div className="px-4">
            <h4 className="text-3xl md:text-4xl font-bold text-icon mb-2">80+</h4>
            <p className="text-xs md:text-sm text-gray-500 dark:text-[#BACCDE]">Projects Launched</p>
          </div>
        </section>

      </div>
    </div>
  );
}