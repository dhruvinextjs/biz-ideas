"use client";
import React, { useState } from "react";
import Image from "next/image";
import { 
  ChevronRight, 
  Download, 
  Bookmark, 
  Share2,
  ThumbsUp,
  CornerDownRight
} from "lucide-react";

export default function CaseStudyDetailPage() {
  const [activeSection, setActiveSection] = useState("company-overview");

  // Helper function for smooth scrolling to sections
  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Adjust for fixed headers if you have them
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const contents = [
    { id: "company-overview", title: "1. Company Overview" },
    { id: "founder-story", title: "2. Founder Story" },
    { id: "problem", title: "3. Problem" },
    { id: "solution", title: "4. Solution" },
    { id: "business-model", title: "5. Business Model" },
    { id: "revenue", title: "6. Revenue" },
    { id: "funding", title: "7. Funding" },
    { id: "growth", title: "8. Growth" },
    { id: "marketing-strategy", title: "9. Marketing Strategy" },
    { id: "first-customers", title: "10. How They Got First Customers" },
    { id: "lessons", title: "11. Lessons" },
    { id: "similar-business", title: "12. How You Can Start Similar Business" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 pb-20 mt-20">
      
      {/* Hero Header Section */}
      <div className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start justify-between">
          <div className="flex-1">
            {/* Breadcrumbs */}
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6 flex-wrap">
              <span>Home</span>
              <ChevronRight size={14} className="mx-1 shrink-0" />
              <span>Case Studies</span>
              <ChevronRight size={14} className="mx-1 shrink-0" />
              <span className="text-gray-900 dark:text-white font-medium">How EcoBox Grew...</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4 max-w-3xl">
              How EcoBox Grew to ₹10L Monthly Revenue Within Just 12 Months Successfully
            </h1>
            
            <p className="text-sm text-icon">
              By Admin<br />
              January 6, 2024
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-[400px] shrink-0 h-[240px] relative rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/5">
            <Image
              src="/images/startup-sketch.png" // Apni image lagayein
              alt="Businessman looking out window"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content Layout with Sidebar */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Sidebar (Sticky) */}
        {/* <aside className="w-full lg:w-[280px] shrink-0 lg:sticky top-24 order-2 lg:order-1 mt-10 lg:mt-0"> */}
        <aside className="w-full lg:w-[360px] shrink-0 lg:sticky top-24 order-2 lg:order-1 mt-10 lg:mt-0">
          
          {/* Metadata */}
          <div className="mb-10 space-y-3">
            <div className="grid grid-cols-[100px_1fr]">
              <span className="text-sm font-medium text-icon">Company:</span>
              <span className="text-sm font-semibold text-icon opacity-80">Payout</span>
            </div>
            <div className="grid grid-cols-[100px_1fr]">
              <span className="text-sm font-medium text-icon">Founder:</span>
              <span className="text-sm font-semibold text-icon opacity-80">Connor Burd</span>
            </div>
            <div className="grid grid-cols-[100px_1fr]">
              <span className="text-sm font-medium text-icon">Revenue:</span>
              <span className="text-sm font-semibold text-icon opacity-80">$10k/m</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-10 pb-8 border-b-2 border-dotted border-gray-200 dark:border-white/10">
            <div className="flex gap-3 w-full">
                  <button className="flex items-center gap-2 bg-[#2D3B82] hover:bg-[#232e66] text-white px-1 py-2 rounded-2xl text-xs font-medium transition-colors w-40 justify-center">
              <Download size={16} /> Download PDF
            </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-[#2D3B82] hover:bg-[#232e66] border border-gray-200 dark:border-white/10 px-4 py-2 rounded-2xl text-sm font-medium transition-colors text-white">
                <Bookmark size={16} /> Save
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-[#2D3B82] hover:bg-[#232e66] border border-gray-200 dark:border-white/10 px-4 py-2 rounded-2xl text-sm font-medium transition-colors text-white">
                <Share2 size={16} /> Share
              </button>
            </div>
          </div>

          {/* Table of Contents */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Contents</h3>
            <ul className="space-y-3">
              {contents.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm text-left transition-colors hover:text-primary ${
                      activeSection === item.id 
                        ? "text-primary font-semibold" 
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right Main Content Area */}
        <div className="flex-1 space-y-10 order-1 lg:order-2 w-full max-w-7xl">
          
          <section id="company-overview">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Company Overview</h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              EcoBox is a sustainable packaging startup focused on replacing single-use plastic with eco-friendly alternatives. The company provides biodegradable and recyclable packaging solutions to restaurants, e-commerce brands, and local businesses aiming to reduce their environmental impact.
            </p>
          </section>

          <section id="founder-story">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Founder Story</h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              EcoBox was founded by a young entrepreneur who realized the growing demand for sustainable solutions while working with small local businesses. With a clear problem to solve and a goal to provide affordable green packaging, the founder decided to launch EcoBox with a mission to make sustainability accessible for everyone.
            </p>
          </section>

          {/* Problem Box */}
          <section id="problem">
            <div className="bg-[#370D25] border border-[#BD0B0B] p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-white mb-2">Problem</h3>
              <p className="text-sm text-white leading-relaxed">
                Small and medium businesses struggled to find affordable eco-friendly packaging. Most sustainable options were either too expensive or unavailable in bulk, making it difficult for businesses to switch from plastic.
              </p>
            </div>
          </section>

          {/* Solution Box */}
          <section id="solution">
            <div className="bg-green-950 dark:bg-[#00E6FF1F] border border-[#1C8D99] p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-white mb-2">Solution</h3>
              <p className="text-sm text-white leading-relaxed">
                EcoBox introduced cost-effective biodegradable packaging products with flexible ordering options. By partnering with local manufacturers and optimizing logistics, they ensured affordability without compromising quality.
              </p>
            </div>
          </section>

          <section id="business-model">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Business Model</h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              EcoBox operates on a B2B model, supplying packaging in bulk to businesses. Revenue is generated through direct sales, subscription-based repeat orders, and long term contracts with growing brands.
            </p>
          </section>

          <section id="revenue">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Revenue</h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Within 12 months, EcoBox achieved ₹10L in monthly recurring revenue by focusing on repeat customers and consistent B2B orders.
            </p>
          </section>

          <section id="funding">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Funding</h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              EcoBox started as a bootstrapped venture with minimal initial investment. As traction grew, the income was reinvested into expanding operations rather than relying on external funding.
            </p>
          </section>

          <section id="growth">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Growth</h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              EcoBox scaled rapidly by targeting niche markets like cloud kitchens and D2C brands. Strong word of mouth and repeat clients played a major role in consistent growth.
            </p>
          </section>

          <section id="marketing-strategy">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Marketing Strategy</h2>
               <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              The brand focused on digital marketing, including social media awareness campaigns, sustainability-focused content, and targeted ads for local businesses. Educational content about eco-friendly packaging helped build trust and authority.
            </p>
          </section>

          <section id="first-customers">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How They Got First Customers</h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              EcoBox acquired its first customers through direct outreach, local networking, and offering free samples. Early adopters were small restaurants willing to experiment with sustainable packaging.
            </p>
          </section>

          <section id="lessons">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Lessons</h2>
              <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
              <li>Start with a niche market</li>
              <li>Focus on solving a real problem</li>
              <li>Keep costs optimized in early stages</li>
              <li>Build strong relationships with customers</li>
              <li>Consistency leads to scalable growth</li>
            </ul>
          </section>

          <section id="similar-business">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How You Can Start Similar Business</h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              Identify a gap in the local market, validate demand, and start small with a focused audience. Build strong supplier relationships, test your product with early users, and scale gradually using feedback and reinvested profits.
            </p>
            <button className="flex items-center gap-2 bg-card text-icon border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 px-4 py-2 rounded-4xl text-sm font-medium transition-colors">
              <ThumbsUp size={16} /> 25 Likes
            </button>
          </section>

          {/* Discussions Section */}
          <section className="pt-10 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Discussions (3)</h2>
            
            {/* Comment Input */}
            <div className="mb-8">
              <textarea 
                className="w-full bg-gray-100 dark:bg-[#1A2342] border border-gray-200 dark:border-white/10 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px] mb-4 text-gray-900 dark:text-white placeholder-gray-500"
                placeholder="Share your thoughts or ask a question..."
              ></textarea>
              <button className="bg-primary hover:bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold transition-colors shadow-md shadow-primary/20">
                POST COMMENT
              </button>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {[
                { name: "John Doe", time: "2 days ago", initial: "JD", text: "Inspiring read! How exactly did he scale the integration with existing tools like Zendesk. How can you handle that easily." },
                { name: "Alice M.", time: "3 days ago", initial: "AM", text: "Great story! Think targeting new aircraft/energy works approach will be impactful. Wrapped in need for this." },
                { name: "John Doe", time: "1 day ago", initial: "JD", text: "You’ve built a great tool here. This is exactly what I have been struggling with making business decisions. Keep dropping these bombs!" }
              ].map((comment, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#2D3B82] flex items-center justify-center text-white font-bold shrink-0 shadow-sm">
                    {comment.initial}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-900 dark:text-white text-sm">{comment.name}</span>
                      <span className="text-xs text-gray-500">{comment.time}</span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{comment.text}</p>
                    <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-primary transition-colors">
                      <ThumbsUp size={14} className="mr-1" /> 21 Likes
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}