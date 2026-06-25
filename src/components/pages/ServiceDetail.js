"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation"; // URL ID read karne ke liye
import { useDispatch, useSelector } from "react-redux";
import {
  fetchServiceById,
  clearCurrentService,
} from "@/redux/slices/ServiceSlice";
import {
  ArrowRight,
  Search,
  Briefcase,
  TrendingUp,
  Rocket,
  Settings,
} from "lucide-react";
import { FaDollarSign } from "react-icons/fa6";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { RiCheckDoubleFill } from "react-icons/ri";
import { LuLightbulb } from "react-icons/lu";
import { GoGoal } from "react-icons/go";
import { BASE_URL } from "@/api/apiConfig";

export default function ServiceDetail() {
  const params = useParams();
  const dispatch = useDispatch();
  const id = params?.id; // Dynamic URL ID param string

  // Redux se dynamic current item state pull out karna
  const { currentService, detailLoading, error } = useSelector(
    (state) => state.service,
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchServiceById(id));
    }
    return () => {
      dispatch(clearCurrentService()); // Component unmount pe clean up
    };
  }, [id, dispatch]);

  // Loading UI screen status
  if (detailLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 font-medium">
        Loading service details...
      </div>
    );
  }

  // Error handle block
  if (error || !currentService) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-medium">
        {typeof error === "string" ? error : "Service details not found!"}
      </div>
    );
  }

  // --- DESIGN STRATEGY PRESERVATION ---
  // Title text ko design ke prefix/highlight rules ke according do bhago me Todna
  const words = currentService.title
    ? currentService.title.split(" ")
    : ["Service"];
  const titlePrefix = words.slice(0, -1).join(" ") || "Service";
  const titleHighlight = words[words.length - 1] || "";

  const features =
    currentService?.features?.map((item, index) => ({
      title: item.title,
      desc: item.description,
      icon:
        index === 0 ? (
          <Search size={20} className="text-white" />
        ) : index === 1 ? (
          <Briefcase size={20} className="text-white" />
        ) : index === 2 ? (
          <FaDollarSign size={20} className="text-white" />
        ) : index === 3 ? (
          <LiaVectorSquareSolid size={22} className="text-white" />
        ) : index === 4 ? (
          <TrendingUp size={22} className="text-white" />
        ) : (
          <RiCheckDoubleFill size={22} className="text-white" />
        ),
    })) || [];

  const reasons = [
    "Clear direction",
    "Reduced risk",
    "Faster decision-making",
    "Expert insights",
  ];

  const processes = [
    {
      step: "1",
      title: "Discovery",
      desc: "Initial meeting to understand your vision and goals.",
      icon: <LuLightbulb size={25} className="text-icon" />,
    },
    {
      step: "2",
      title: "Research",
      desc: "In-depth market and competitor analysis.",
      icon: <Search size={25} className="text-icon" />,
    },
    {
      step: "3",
      title: "Strategy",
      desc: "Developing a custom business and growth plan.",
      icon: <GoGoal size={25} className="text-icon" />,
    },
    {
      step: "4",
      title: "Execution Plan",
      desc: "Final roadmap with actionable next steps.",
      icon: <Rocket size={25} className="text-icon" />,
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* ================= HERO + INTRO ================= */}
      <div className="w-full max-w-7xl px-4 md:px-8 relative z-10 mt-20 md:mt-28 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16 mb-16">
          <div className="flex-1 w-full text-center lg:text-left">
            <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-4 tracking-wider font-medium">
              Home <span className="mx-2">&gt;</span> Services
              <span className="mx-2">&gt;</span>
              <span className="text-icon">{currentService.title}</span>
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {titlePrefix}{" "}
              <span className="text-[#FB8122]">{titleHighlight}</span>
            </h1>

            <p className="text-icon text-sm sm:text-base md:text-lg mb-8 max-w-xl mx  -auto lg:mx-0 leading-relaxed">
              {currentService.description}
            </p>

            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FB8122] hover:bg-[#e6751e] text-white transition-colors text-sm font-medium shadow-lg shadow-orange-500/20 hover:scale-105 transform duration-200">
              Book Free Consultation <ArrowRight size={16} />
            </button>
          </div>

          <div className="flex-1 w-full">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Fallback configuration with standard img tag to prevent unconfigured host error */}
              <img
                src={
                  currentService.detailImage
                    ? `${BASE_URL}${currentService.detailImage}`
                    : "/images/startup-showcase.png"
                }
                alt={currentService.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* INTRO BOX */}
        <div className="w-full bg-white dark:bg-[#222955] border border-gray-200 dark:border-white/10 rounded-2xl p-6 sm:p-8 md:p-12 text-center shadow-sm relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('/images/service-bg.png')" }}
          ></div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 dark:to-white/5 pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Strategic Guidance for{" "}
              <span className="text-[#FB8122]">{currentService.title}</span>
            </h2>

            <p className="text-icon text-sm sm:text-base leading-relaxed max-w-5xl mx-auto">
              {currentService.fullDescription}
            </p>
          </div>
        </div>
      </div>

      {/* ================= WHAT YOU GET ================= */}
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto py-16 md:py-24 relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            What You Get
          </h2>
          <p className="text-icon opacity-90 text-sm md:text-base">
            Comprehensive solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-gray-100 dark:border-white/5 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md dark:hover:shadow-white/5 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-5 md:mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= PROCESS ================= */}
      <div className="py-16 px-4 md:px-8 w-full max-w-7xl mx-auto relative z-10 mb-16 md:mb-20">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-icon mb-3">
            Our Process
          </h2>
          <p className="text-icon text-sm md:text-base opacity-90">
            A structured approach to building and launching successful startups.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-[36px] left-[10%] right-[10%] h-[1px] bg-transparent border-dashed border-t-2 border-gray-300 dark:border-white/20 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 relative z-10">
            {processes.map((process, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-[72px] h-[72px] rounded-full bg-card border-[3px] border-[#0B6CFD] flex items-center justify-center mb-4 sm:mb-5 relative bg-white dark:bg-gray-900">
                  <div className="w-14 h-14 bg-card rounded-full flex items-center justify-center">
                    {process.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-icon mb-2">
                  {process.step}. {process.title}
                </h3>
                <p className="text-sm text-icon max-w-[200px] opacity-80">
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= WHY CHOOSE ================= */}
      <div className="w-full max-w-7xl px-4 md:px-8 mx-auto relative z-10 mb-20">
        <div className="bg-card border border-gray-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('/images/service-bg.png')" }}
          ></div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="w-full lg:w-1/3 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-relaxed">
                  Why Choose Our <br className="hidden lg:block" />
                  <span className="text-[#FB8122]">Consultation?</span>
                </h2>
              </div>

              <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reasons.map((reason, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 dark:bg-[#060E3A] border border-gray-200 dark:border-[#3C4991] py-6 sm:py-8 px-4 rounded-xl flex justify-center items-center text-center text-icon text-lg sm:text-xl font-medium transition-colors hover:bg-gray-100 dark:hover:bg-[#0a1450]"
                  >
                    {reason}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
