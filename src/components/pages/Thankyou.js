"use client";

import React from "react";
import { Mail } from "lucide-react";
import {
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import { BsMicrosoftTeams } from "react-icons/bs";
import Image from "next/image";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background py-16 px-4 md:px-8 mt-20 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-0 left-0 w-full h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FB8122]/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 bg-card border border-gray-200 dark:border-[#37448F] rounded-2xl p-6 md:p-10 shadow-sm text-center">
        
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/vector1.png"
            alt="success"
            width={100}
            height={100}
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-icon mb-4">
          Thank You!
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base text-icon opacity-90 max-w-2xl mx-auto leading-relaxed mb-14">
          Your request has been submitted successfully. We’ll review it and
          get back to you shortly.
        </p>

        {/* 4 Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Whatsapp */}
          <div className="h-44 flex flex-col justify-center items-center bg-gray-400 dark:bg-[#182153] border border-gray-200 dark:border-[#2F3971] rounded-2xl p-6 shadow-sm text-center">
            <h3 className="text-lg font-semibold text-icon mb-6">
              Contact us on Whatsapp
            </h3>

            <button className="w-44 py-3 rounded-full bg-[#28B43E] text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all">
              <FaWhatsapp size={20} />
              Send Message
            </button>
          </div>

          {/* Teams */}
          <div className="h-44 flex flex-col justify-center items-center bg-gray-400 dark:bg-[#182153] border border-gray-200 dark:border-[#2F3971] rounded-2xl p-6 shadow-sm text-center">
            <h3 className="text-lg font-semibold text-icon mb-6">
              Contact us on Teams
            </h3>

            <button className="w-44 py-3 rounded-full bg-[#5059C9] text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all">
              <BsMicrosoftTeams size={20} />
              Send Message
            </button>
          </div>

          {/* Email */}
          <div className="h-44 flex flex-col justify-center items-center bg-gray-400 dark:bg-[#182153] border border-gray-200 dark:border-[#2F3971] rounded-2xl p-6 shadow-sm text-center">
            <h3 className="text-lg font-semibold text-icon mb-6">
              Contact us on Email
            </h3>

            <button className="w-44 py-3 rounded-full bg-[#FB8122] text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all">
              <Mail size={20} />
              Send Message
            </button>
          </div>

          {/* LinkedIn */}
          <div className="h-44 flex flex-col justify-center items-center bg-gray-400 dark:bg-[#182153] border border-gray-200 dark:border-[#2F3971] rounded-2xl p-6 shadow-sm text-center">
            <h3 className="text-lg font-semibold text-icon mb-6">
              Contact us on LinkedIn
            </h3>

            <button className="w-44 py-3 rounded-full bg-[#0B63BD] text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all">
              <FaLinkedinIn size={20} />
              Send Message
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}