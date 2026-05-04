"use client";
import React from "react";
import {
  MessageSquare,
  ClipboardList,
  FileText,
  Globe,
  Smartphone,
  Monitor,
  LayoutTemplate,
  PenTool,
  Share2,
  Rocket,
  Cloud,
  TrendingUp,
  Search,
  Settings,
  Code,
  ArrowRight,
} from "lucide-react";
import { LuClipboard, LuLightbulb } from "react-icons/lu";
import { MdOutlineChecklist } from "react-icons/md";
import { RiDatabase2Line, RiEarthLine, RiLayout3Line } from "react-icons/ri";
import { HiOutlineWindow } from "react-icons/hi2";
import { TfiLayoutAccordionMerged } from "react-icons/tfi";
import { FiDatabase } from "react-icons/fi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import Link from "next/link";

// ==========================================
// 1. SERVICES SECTION COMPONENT
// ==========================================
function ServicesPage() {
  const services = [
    {
      id:1,
      title: "Business Consultation",
      desc: "Expert advice on market validation, pricing, scaling, and tech stack selection.",
      icon: <LuLightbulb size={25} className="text-white" />,
    },
    {
       id:2,
      title: "Business Plan Preparation",
      desc: "Structured planning to define your vision, target market, revenue model, and growth strategy.",
      icon: <LuClipboard size={20} className="text-white" />,
    },
    {
       id:3,
      title: "Scope Document Preparation",
      desc: "Clear documentation outlining features, functionality, timelines, and project requirements.",
      icon: <MdOutlineChecklist size={25} className="text-white" />,
    },
    {
       id:4,
      title: "Domain & Hosting Setup",
      desc: "Securely setup your domain and secure hosting for a fast, reliable online presence.",
      icon: <RiEarthLine size={20} className="text-white" />,
    },
    {
       id:5,
      title: "App Development",
      desc: "Native iOS and Android apps built with React Native for maximum performance.",
      icon: <Smartphone size={20} className="text-white" />,
    },
    {
       id:6,
      title: "Website Development",
      desc: "Responsive and scalable website built for performance, user experience and business growth.",
      icon: <HiOutlineWindow size={25} className="text-white" />,
    },
    {
       id:7,
      title: "Landing Page Development",
      desc: "High-converting landing pages designed to capture leads and drive conversions effectively.",
      icon: <RiLayout3Line size={25} className="text-white" />,
    },
    {
       id:8,
      title: "Logo Design",
      desc: "Creative and memorable logo designs that reflect your brand identity and vision.",
      icon: <PenTool size={20} className="text-white" />,
    },
    {
       id:9,
      title: "Social Media Post Design",
      desc: "Relevant brand notice to align project goals, deliverable, and admin expectations.",
      icon: <TfiLayoutAccordionMerged size={20} className="text-white" />,
    },
    {
       id:10,
      title: "MVP Development",
      desc: "Launch your Minimum Viable Product in 4-6 weeks to validate your idea fast.",
      icon: <Rocket size={20} className="text-white" />,
    },
    {
       id:11,
      title: "SaaS Development",
      desc: "End-to-end development of scalable, secure, and multi-tenant SaaS products.",
      icon: <RiDatabase2Line size={25} className="text-white" />,
    },
    {
       id:12,
      title: "Digital Marketing",
      desc: "Get your first 100 paying customers through SEO, content, and paid ads.",
      icon: <HiOutlineSpeakerphone size={20} className="text-white" />,
    },
  ];

  return (
    <div className="pt-20 pb-12 px-4 md:px-8 max-w-7xl mx-auto relative z-10 mt-20">
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-icon mb-4 leading-16">
          We Help You To <br className="hidden sm:block" />
          <span className="text-primary">Build Your Startup</span>
        </h1>
        <p className="text-icon text-sm md:text-base mb-8 max-w-2xl text-center mx-auto">
          From initial consultation to final launch, our team of experts
          provides the tools and services you need to succeed.
        </p>
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-[#FFFFFF]/30 text-icon hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-sm font-normal">
          Book Free Consultation <ArrowRight size={16} />
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link
          href={`/services/${service.id}`}
            key={index}
            className="bg-card p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md dark:hover:shadow-white/5 transition-all group"
          >
            <div className="w-12 h-12 bg-[#0B6CFD] rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-[#9CB3C9] leading-relaxed">
              {service.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;