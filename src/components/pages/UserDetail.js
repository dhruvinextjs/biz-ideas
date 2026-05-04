"use client";
import Link from "next/link";
import React from "react";
import { FaArrowLeft, FaClock, FaEnvelope, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaRegEnvelope, FaXTwitter } from "react-icons/fa6";

export default function UserDetail() {
  // Dummy data matching your screenshot
  const recentPosts = [
    {
      id: 1,
      title: "11 Marketing Channels That Consistently Work for Founders",
      time: "1h ago",
    },
    {
      id: 2,
      title: "8 Ways to Build a List of Companies That Are Using Slack",
      time: "March 13, 2024",
    },
    {
      id: 3,
      title: "I sent 10 cold DMs about failed Stripe payments. Here's what actually happened.",
      time: "March 10, 2024",
    },
    {
      id: 4,
      title: "Week 12: shipped 0 features, had 20+ real conversations, learned more than the previous 3 weeks combined",
      time: "March 09, 2024",
    },
    {
      id: 5,
      title: "Evergreen Search: They show you what's popular, not what you can actually rank for.",
      time: "March 07, 2024",
    },
    {
      id: 6,
      title: "I bootstrapped for 4 months. Monday I'm going back to a 9-to-5.",
      time: "March 04, 2024",
    },
    {
      id: 7,
      title: "ReachMyAgent: I built a voice AI that speaks on your behalf — because I was frustrated from both sides of the same problem",
      time: "March 01, 2024",
    },
    {
      id: 8,
      title: "HamiltonX Solver: How do you usually teach or visualize the Traveling Salesman Problem?",
      time: "Feb 28, 2024",
    },
    {
      id: 9,
      title: "How do you handle the fact that your AI forgets everything between sessions?",
      time: "Feb 21, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans transition-colors duration-300 py-10 px-4 md:px-8 mt-20">
      <div className="max-w-3xl mx-auto">
        
        {/* ========================================== */}
        {/* 1. TOP BAR / BACK BUTTON                   */}
        {/* ========================================== */}
       <Link href={"/"}> <button className="flex items-center gap-2 text-sm text-gray-600 dark:text-[#BACCDE] hover:text-[#FB8122] dark:hover:text-[#FB8122] transition-colors mb-10 group">
          <FaArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button></Link>

        {/* ========================================== */}
        {/* 2. AUTHOR HEADER PROFILE                   */}
        {/* ========================================== */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10 text-center sm:text-left">
          <img
            src="https://i.pravatar.cc/300?u=darko" // Replace with actual author image
            alt="Darko Gjorgjievski"
            className="w-28 h-28 md:w-32 md:h-32 rounded-3xl object-cover shadow-sm border border-gray-200 dark:border-white/10 shrink-0"
          />
          <div className="flex-1 pt-2">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Darko Gjorgjievski
            </h1>
            <p className="text-sm text-icon opacity-90 leading-relaxed max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
        </div>

        {/* Custom Dotted Divider */}
        <hr className="border-t-[1.5px] border-dotted border-gray-300 dark:border-[#2A3441] my-10" />

        {/* ========================================== */}
        {/* 3. SOCIAL LINKS                            */}
        {/* ========================================== */}
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Social Links
          </h2>
          <div className="flex items-center gap-4">
            {/* Email */}
            <a href="#" className="w-18 h-18 rounded-full bg-[#FB8122] text-white flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all">
              <FaRegEnvelope size={28} />
            </a>
            {/* LinkedIn */}
            <a href="#" className="w-18 h-18 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all">
              <FaLinkedinIn size={30} fill="currentColor" />
            </a>
            {/* Instagram */}
            <a href="#" className="w-18 h-18 rounded-full bg-gradient-to-tr from-[#FFB02A] via-[#E1306C] to-[#833AB4] text-white flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all">
              <FaInstagram  size={30} />
            </a>
            {/* X (Twitter) - Using an SVG for exact X logo look */}
           <a href="#" className="w-18 h-18 rounded-full bg-black text-white flex items-center justify-center hover:-translate-y-1 hover:shadow-lg transition-all">
              <FaXTwitter  size={30} />
            </a>
          </div>
        </div>

        {/* Custom Dotted Divider */}
        <hr className="border-t-[1.5px] border-dotted border-gray-300 dark:border-[#2A3441] my-10" />

        {/* ========================================== */}
        {/* 4. RECENT POSTS LIST                       */}
        {/* ========================================== */}
        <div>
          <h2 className="text-xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Recent Posts
          </h2>
          
          <div className="flex flex-col">
            {recentPosts.map((post, index) => (
              <div 
                key={post.id} 
                className={`py-5 group cursor-pointer ${
                  index !== recentPosts.length - 1 
                    ? "border-b border-dotted border-gray-300 dark:border-[#2A3441]" 
                    : ""
                }`}
              >
                <h3 className="text-base md:text-[17px] text-icon mb-2 group-hover:text-[#FB8122] transition-colors leading-snug">
                  {post.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-[#8E9EAF]">
                  <FaClock size={13} className="opacity-80" />
                  <span>{post.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}