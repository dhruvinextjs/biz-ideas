"use client";
import React, { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchCaseStudies } from "@/redux/slices/CasesudieSlice";

export default function CaseStudies() {
  const dispatch = useDispatch();
  const { caseStudies } = useSelector((state) => state.caseStudies);

  useEffect(() => {
    dispatch(fetchCaseStudies());
  }, [dispatch]);

  const featuredCases = caseStudies.filter((i) => i.isFeatured === true);

  return (
    <section className="w-full px-4 bg-background transition-colors duration-300">
      <div className="container mx-auto max-w-7xl border-b-2 border-dotted border-[#E6E6E6] dark:border-[#1C234D] pb-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-primary font-bold text-sm tracking-tight">
            Case Studies
          </h2>
          <Link
            href="/case-studies"
            className="flex items-center gap-1 text-[12px] text-foreground hover:text-primary transition-colors font-medium"
          >
            View more <ChevronRight size={14} />
          </Link>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCases.length === 0 ? (
            <p className="text-sm text-foreground/50 italic">No featured case studies yet.</p>
          ) : (
            featuredCases.map((item) => (
              <Link
                href={`/case-studies/${item._id}`}
                key={item._id}
                className="bg-card p-6 rounded-[20px] flex flex-col justify-between min-h-[200px] hover:shadow-md transition-shadow cursor-pointer border border-transparent rounded-3xl dark:border-white/5"
              >
                <div>
                  <p className="text-[12px] font-normal text-[#4C4C4C] dark:text-[#9CB3C9] uppercase tracking-wider mb-3">
                    {item.founderName}
                  </p>
                  <h3 className="text-lg font-normal leading-snug text-icon group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-6 pt-4 border-t border-foreground/10">
                  <p className="text-[12px] text-[#4C4C4C] dark:text-[#9CB3C9]">
                    Revenue: {item.revenue} • {item.companyName}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}