"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "@/redux/slices/ServiceSlice"; // Slice path check kar lein
import {
  Smartphone,
  PenTool,
  Rocket,
  ArrowRight,
  Settings,
} from "lucide-react";
import { LuClipboard, LuLightbulb } from "react-icons/lu";
import { MdOutlineChecklist } from "react-icons/md";
import { RiDatabase2Line, RiEarthLine, RiLayout3Line } from "react-icons/ri";
import { HiOutlineWindow } from "react-icons/hi2";
import { TfiLayoutAccordionMerged } from "react-icons/tfi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image"; 
import {BASE_URL} from "@/api/apiConfig"

// Fallback Helper function (agar backend se image nahi milti)
const getServiceIcon = (title) => {
  const normalizedTitle = title?.toLowerCase().trim();

  switch (normalizedTitle) {
    case "business consultation":
      return <LuLightbulb size={25} className="text-white" />;
    case "business plan preparation":
      return <LuClipboard size={20} className="text-white" />;
    case "scope document preparation":
      return <MdOutlineChecklist size={25} className="text-white" />;
    case "domain & hosting setup":
      return <RiEarthLine size={20} className="text-white" />;
    case "app development":
      return <Smartphone size={20} className="text-white" />;
    case "website development":
      return <HiOutlineWindow size={25} className="text-white" />;
    case "landing page development":
      return <RiLayout3Line size={25} className="text-white" />;
    case "logo design":
      return <PenTool size={20} className="text-white" />;
    case "social media post design":
      return <TfiLayoutAccordionMerged size={20} className="text-white" />;
    case "mvp development":
      return <Rocket size={20} className="text-white" />;
    case "saas development":
      return <RiDatabase2Line size={25} className="text-white" />;
    case "digital marketing":
      return <HiOutlineSpeakerphone size={20} className="text-white" />;
    default:
      return <Settings size={22} className="text-white" />;
  }
};

function ServicesPage() {
  const dispatch = useDispatch();
  
  
  // Redux store se backend state stream extract karna
  const { services, loading } = useSelector((state) => state.service);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

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
      {loading ? (
        <div className="text-center py-20 text-gray-500 text-sm font-medium">
          Loading startup services...
        </div>
      ) : services.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              href={`/services/${service._id}`} 
              key={service._id || index}
              className="bg-card p-6 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md dark:hover:shadow-white/5 transition-all group"
            >
              {/* Image / Icon container div with same design classes */}
              <div className="w-12 h-12 bg-[#0B6CFD] rounded-xl flex items-center justify-center mb-5 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform relative overflow-hidden">
                {service.image ? (
                  <Image
                    src={`${BASE_URL.replace(/\/$/, "")}${service.image}`}
                    alt={service.title}
                    fill
                    className="object-cover p-2" // p-2 use kiya hai taaki dynamic logo/image corner se chipke nahi aur standard lage
                  />
                ) : (
                  getServiceIcon(service.title)
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-[#9CB3C9] leading-relaxed">
                {service.description || service.fullDescription} 
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-500 text-sm">
          No services published yet.
        </div>
      )}
    </div>
  );
}

export default ServicesPage;