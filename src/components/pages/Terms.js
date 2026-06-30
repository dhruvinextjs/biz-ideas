  "use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTermsCondition } from "@/redux/slices/TermsConditionSlice"; // Apni exact slice path verify kar lena

export default function Terms() {
  const dispatch = useDispatch();
  
  // Redux store se dynamic terms state pull karna
  const { termsData, loading } = useSelector((state) => state.termsCondition);

  useEffect(() => {
    dispatch(getTermsCondition());
  }, [dispatch]);

  // Loading indicator grid break hone se bachane ke liye
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-sm text-foreground/60 animate-pulse">Loading Terms & Conditions...</p>
      </div>
    );
  }

  // Fallback handler agar response na mile
  if (!termsData) {
    return null;
  }

  // Postman framework fields standard variables mapping
  const pageTitle = termsData.title || "Terms & conditions";
  const htmlContent = termsData.content || "";

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* ========================================== */}
      {/* 1. HERO BANNER SECTION                    */}
      {/* ========================================== */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat z-0"
          style={{
            backgroundImage: `url('/images/policy-bg.jpg')`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(9, 14, 45, 0.3) 0%, rgba(9, 14, 45, 0.5) 78.37%, rgba(9, 14, 45, 0.8) 100%)",
            }}
          ></div>
        </div>

        {/* Banner Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-white mb-2">
            {pageTitle}
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed w-md">
            Please review our rules and guidelines before using our resources and platform services.
          </p>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. CONTENT SECTION                        */}
      {/* ========================================== */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-16">
        <div 
          className="space-y-6 text-sm text-icon opacity-90 leading-relaxed terms-content-wrapper [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-icon [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-4"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </section>
    </div>
  );
}