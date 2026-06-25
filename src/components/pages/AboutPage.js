
"use client";
import React, { useEffect } from "react";
import { Target, Eye } from "lucide-react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getAboutData } from "@/redux/slices/AboutSlice"; 
import  {BASE_URL} from "@/api/apiConfig"                                

export default function AboutPage() {
  const dispatch = useDispatch();

  // Redux store se states select karna
  const { aboutData, loading } = useSelector((state) => state.about);

  useEffect(() => {
    dispatch(getAboutData());
  }, [dispatch]);

  // Loading phase state handle karna
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-sm text-foreground/60 animate-pulse">Loading About Details...</p>
      </div>
    );
  }

  // State empty hone par screen clean rakhna
  if (!aboutData) {
    return null;
  }



  // Destructuring dynamic values from API schema with fallback
  const {
    headingLine1 = "About",
    headingLine2 = "Build Smarter. Grow Faster. Stay Independent.",
    headingLine3 = "The Story Behind The Biz Ideas",
    description1 = "",
    description2 = "",
    founderImage = "",
    founderName = "Founded by Chirag Panchal",
    storyContent = "",
    missionTitle = "Our Mission",
    missionDescription = "",
    visionTitle = "Our Vision",
    visionDescription = "",
    businessIdeas = "0",
    startupIdeas = "0",
    communityMembers = "0",
    projectsLaunched = "0"
  } = aboutData;

  // Image path format checklist 
  const resolvedFounderImg = founderImage
    ? `${BASE_URL}${founderImage}`
    : "/images/chirag.png";
        
  return (          
    <div className="min-h-screen bg-background font-sans transition-colors duration-300 py-16 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto">

        {/* ========================================== */}
        {/* 1. HERO SECTION                            */}
        {/* ========================================== */}
        <section className="text-center mb-14">
          {/* Pehle static tha, isko badal kar aise handle karein */}
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-icon mb-6 leading-tight">
            {headingLine2 ? (
              // Agar pure line backend se direct display karwani ho
              headingLine2
            ) : (
              <>
                Build <span className="text-primary">Smarter.</span> Grow{" "}
                <span className="text-primary">Faster.</span>
                <br className="hidden md:block" /> Stay{" "}
                <span className="text-primary">Independent.</span>
              </>
            )}
          </h1>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-sm md:text-base text-icon leading-relaxed opacity-90">
              {description1}
            </p>
            <p className="text-sm md:text-base text-icon leading-relaxed opacity-90">
              {description2}
            </p>
          </div>
        </section>

        {/* ========================================== */}
        {/* 2. STORY & FOUNDER SECTION                 */}
        {/* ========================================== */}
        <section className="text-center mb-16 relative">
          <div className="absolute top-[55px] left-0 right-0 h-px bg-gray-200 dark:bg-[#292F57] z-10"></div>

          {/* Founder Image */}
          <div className="inline-block bg-background z-50 rounded-full relative mb-14">
            <Image
              src={resolvedFounderImg}
              alt={founderName}
              width={100}
              height={100}
              className="w-24 h-24 md:w-28 md:h-28 z-50 rounded-full object-cover shadow-md border border-gray-200 dark:border-white/10"
              unoptimized // Local storage domain configurations issues bypass karne ke liye
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-icon mb-2">
            {headingLine3}
          </h2>
          <p className="text-md text-icon opacity-90 mb-2">
            {founderName}
          </p>

          {/* Render Rich HTML Text dynamic output block */}
          <div
            className="max-w-4xl mx-auto space-y-6 text-sm text-icon opacity-90 leading-relaxed text-center [&>p]:mb-4"
            dangerouslySetInnerHTML={{ __html: storyContent }}
          />
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
            <h3 className="text-xl font-bold text-icon mb-2">{missionTitle}</h3>
            <p className="text-sm text-gray-600 dark:text-[#BACCDE] leading-relaxed">
              {missionDescription}
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white dark:bg-[#0C1445] border border-gray-200 dark:border-[#2E3A84] rounded-2xl p-4 flex flex-col items-start transition-transform hover:-translate-y-1 duration-300">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-[#0D3D54] flex items-center justify-center text-teal-600 dark:text-[#1DBA9F] mb-2">
              <Eye size={24} />
            </div>
            <h3 className="text-xl font-bold text-icon mb-2">{visionTitle}</h3>
            <p className="text-sm text-gray-600 dark:text-[#BACCDE] leading-relaxed">
              {visionDescription}
            </p>
          </div>
        </section>

        {/* ========================================== */}
        {/* 4. STATS SECTION                           */}
        {/* ========================================== */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-y-10 pt-16 text-center">
          <div className="md:border-r border-gray-200 dark:border-[#525E9F] px-4">
            <h4 className="text-3xl md:text-4xl font-bold text-icon mb-2">{businessIdeas}</h4>
            <p className="text-xs md:text-sm text-gray-500 dark:text-[#BACCDE]">Business Ideas</p>
          </div>

          <div className="md:border-r border-gray-200 dark:border-[#525E9F] px-4">
            <h4 className="text-3xl md:text-4xl font-bold text-icon mb-2">{startupIdeas}</h4>
            <p className="text-xs md:text-sm text-gray-500 dark:text-[#BACCDE]">Startup Ideas</p>
          </div>

          <div className="md:border-r border-gray-200 dark:border-[#525E9F] px-4">
            <h4 className="text-3xl md:text-4xl font-bold text-icon mb-2">{communityMembers}</h4>
            <p className="text-xs md:text-sm text-gray-500 dark:text-[#BACCDE]">Community Members</p>
          </div>

          <div className="px-4">
            <h4 className="text-3xl md:text-4xl font-bold text-icon mb-2">{projectsLaunched}</h4>
            <p className="text-xs md:text-sm text-gray-500 dark:text-[#BACCDE]">Projects Launched</p>
          </div>
        </section>

      </div>
    </div>
  );
}