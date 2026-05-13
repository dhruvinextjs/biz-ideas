"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
 ChevronRight,
  ThumbsUp,
  Bookmark,
  Share2,
  Download,
  CornerDownRight,
  X,
  FileText
} from "lucide-react";
import { FaDollarSign } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiSquaresFourBold } from "react-icons/pi";

export default function DetailPage() {
const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
    setStep(1); // Reset to step 1
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep(2); // Go to success/download step
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 pb-20">
      {isModalOpen && (
        // <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all duration-300">
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#040926B2] backdrop-blur-[10px] transition-all duration-300">
          <div className="bg-card border border-gray-200 dark:border-white/10 w-full max-w-xl rounded-2xl shadow-2xl relative overflow-hidden">
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            {step === 1 ? (
              /* STEP 1: LEAD FORM */
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-icon mb-1">Want to download PDF?</h2>
                <p className="text-icon text-sm mb-6 font-light">Enter your details below to get instant access to the file.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-icon mb-1.5">Your name <span className="text-red-500">*</span></label>
                    <input type="text" required placeholder="Type here..." className="w-full dark:bg-[#1D2659] border border-gray-300 dark:border-[#3E4A92] rounded-lg p-3 text-sm text-icon placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-icon mb-1.5">Email <span className="text-red-500">*</span></label>
                    <input type="email" required placeholder="example@mail.com" className="w-full dark:bg-[#1D2659] border border-gray-300 dark:border-[#3E4A92] rounded-lg p-3 text-sm text-icon placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-icon mb-1.5">Country <span className="text-red-500">*</span></label>
                      <select required className="w-full dark:bg-[#1D2659] border border-gray-300 dark:border-[#3E4A92] rounded-lg p-3 text-sm text-icon focus:outline-none focus:ring-1 focus:ring-orange-500">
                        <option value="">Select</option>
                        <option>India</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-icon mb-1.5">Phone number <span className="text-red-500">*</span></label>
                      <input type="tel" required placeholder="Type here..." className="w-full dark:bg-[#1D2659] border border-gray-300 border-[#3E4A92] rounded-lg p-3 text-sm text-icon placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-icon mb-1.5">Project Requirement (optional)</label>
                    <textarea rows="2" placeholder="Type here..." className="w-full dark:bg-[#1D2659] border border-gray-300 dark:border-[#3E4A92] rounded-lg p-3 text-sm text-icon placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none"></textarea>
                  </div>

                  <div className="bg-white rounded-lg p-3 w-fit flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-black uppercase">Captcha <span className="text-red-500">*</span></label>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-800 font-medium">What is 1 × 8 ?</span>
                      <input type="text" required className="w-16 border border-gray-300 rounded px-2 py-1 text-black text-sm focus:outline-none" />
                    </div>
                  </div>

                  <button type="submit" className="w-full md:w-40 bg-[#FD7306] hover:bg-orange-600 text-white font-bold py-3 rounded-full transition-all text-sm uppercase tracking-wider">
                    Submit
                  </button>
                </form>
              </div>
            ) : (
              /* STEP 2: DOWNLOAD FILE */
              <div className="p-10 flex flex-col items-center text-center">
                <div className="mb-6 relative">
                  <div className="w-20 h-24 bg-white rounded-md flex items-center justify-center shadow-lg">
                    <FileText size={48} className="text-red-600" />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-1 border-2 border-[#101732]">
                       <Download size={16} className="text-white" />
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-icon mb-2">Your Download is Ready</h2>
                <p className="text-icon opacity-90 text-sm mb-8">Your file is ready. Click the button below to start downloading.</p>
                
                <button 
                  onClick={closeModal}
                  className="bg-[#FD7306] hover:bg-orange-600 text-white font-bold px-10 py-3 rounded-full transition-all text-sm uppercase tracking-wider flex items-center gap-2"
                >
                  <Download size={18} /> Download PDF
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Hero Section (Top Banner) */}
      <div className="bg-gray-100 dark:bg-[#100A44] border-b border-gray-200 dark:border-white/10 pt-28 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="flex-1">
            {/* Breadcrumbs */}
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span>Home</span>
              <ChevronRight size={14} className="mx-1" />
              <span>Business Ideas</span>
              <ChevronRight size={14} className="mx-1" />
              <span className="text-gray-900 dark:text-white font-medium">
                Growing a GEO tool...
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
              Growing a GEO tool to a mid-five figure MRR within a year
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 text-icon bg-gray-300 dark:bg-[#3E3F65] px-4 py-2 rounded-md text-sm font-normal">
                <PiSquaresFourBold size={16} className="text-icon" /> B2B SaaS
              </span>
              <span className="flex items-center gap-2 text-icon bg-gray-300 dark:bg-[#3E3F65] px-4 py-2 rounded-md text-sm font-normal">
                <FaDollarSign size={16} className="text-icon" /> $2K - $50K
                Investment
              </span>
              <span className="flex items-center gap-2 text-icon bg-gray-300 dark:bg-[#3E3F65] px-4 py-2 rounded-md text-sm font-normal">
                <BsGraphUpArrow size={16} className="text-icon" /> 85% Profit
                Margin
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-[450px] shrink-0 h-[280px] relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/5">
            <Image
              src="/images/startup-sketch.png" // Apni image path se replace karein
              alt="Startup process"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 flex flex-col lg:flex-row gap-12">
        {/* Left Column (Content) */}
        <div className="flex-1 space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Business Overview
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-500 dark:text-[#BACCDE]">
              Customer support is a massive bottleneck for fast-growing
              companies. Hiring agents is expensive, and scaling them is slow.
              This SaaS idea solves that by providing an AI-driven support agent
              that learns from a company's past tickets, knowledge base, and
              website content to answer 80% of routine queries instantly.
            </p>
          </section>

          {/* Problem Box */}
          <div className="bg-[#370D25] border border-[#BD0B0B] rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              The Problem
            </h3>
            <p className="text-sm text-white leading-relaxed">
              Companies spend huge capital on human agents who have limits.
              Customers often face delays leading to frustrated prospects, lost
              revenue, and negatively impacts the organization's reputation.
            </p>
          </div>

          {/* Solution Box */}
          <div className="bg-[#082846] border border-[#1C8D99] rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              The Solution
            </h3>
            <p className="text-sm text-white leading-relaxed">
              An AI model trained entirely on your database. It responds with
              context, resolves basic support requests, and seamlessly transfers
              complex issues to human agents.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-icon mb-4">
              How It Works
            </h2>
         <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <ul className="space-y-3 text-sm md:text-base text-gray-700 dark:text-gray-300">
              <li className="dark:text-[#BACCDE] text-sm">
                <strong className="text-icon font-semibold">
                  1. Data Ingestion :
                </strong>{" "}
                Connect databases, knowledge base, and past support tickets.
              </li>
              <li className="dark:text-[#BACCDE] text-sm">
                <strong className="text-icon font-semibold">
                  2. Training :
                </strong>{" "}
                The platform processes data to create accurate AI embeddings.
              </li>
              <li className="dark:text-[#BACCDE] text-sm">
                <strong className="text-icon font-semibold">
                  3. Deployment :
                </strong>{" "}
                The AI chatbot is integrated into client websites.
              </li>
              <li className="dark:text-[#BACCDE] text-sm">
                <strong className="text-icon font-semibold">
                  4. Workflow :
                </strong>{" "}
                AI filters queries and creates tickets for complex issues.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-icon mb-4">
              Revenue Model
            </h2>
              <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm dark:text-[#BACCDE] mb-4">
              Subscription-based model with tiered pricing based on ticket
              volume.
            </p>
            <ul className="space-y-2 text-sm dark:text-[#BACCDE]">
              <li>
                <strong className="text-icon font-semibold">Starter :</strong>{" "}
                $49/mo (up to 500 conversations)
              </li>
              <li>
                <strong className="text-icon font-semibold">Pro :</strong>{" "}
                $149/mo (up to 2,000 conversations + custom UI)
              </li>
              <li>
                <strong className="text-icon font-semibold">
                  Enterprise :
                </strong>{" "}
                $499+/mo (Custom integrations, dedicated account manager)
              </li>
            </ul>
          </section>

          {/* Execution Breakdown Grid */}
          <section>
            <h2 className="text-xl font-semibold text-icon mb-6">
              Execution Breakdown
            </h2>
              <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card border border-gray-300 dark:border-[#242F70] p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Investment Required
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  $1K - $5K
                </p>
                <p className="text-xs dark:text-[#BACCDE] mt-2">
                  (Server costs, API credits, initial marketing, software setup)
                </p>
              </div>
              <div className="bg-card border border-gray-300 dark:border-[#242F70] p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Timeline to Launch
                </h4>
                <p className="text-sm text-gray-600 dark:text-[#BACCDE]">
                  4 - 6 Weeks
                </p>
                <p className="text-xs dark:text-[#BACCDE] mt-2">
                  (For building MVP and launching beta)
                </p>
              </div>
              <div className="bg-card border border-gray-300 dark:border-[#242F70] p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Required Team
                </h4>
                <p className="text-sm text-gray-600 dark:text-[#BACCDE]">
                  1-2 Founders
                </p>
                <p className="text-xs dark:text-[#BACCDE] mt-2">
                  (1 Developer/AI Architect, 1 Sales/Ops)
                </p>
              </div>
              <div className="bg-card border border-gray-300 dark:border-[#242F70] p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Profit Margin
                </h4>
                <p className="text-sm text-gray-600 dark:text-[#BACCDE]">
                  85%+
                </p>
                <p className="text-xs dark:text-[#BACCDE] mt-2">
                  (Low ongoing costs relative to subscription pricing)
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Tech Stack & Tools Required
            </h2>
             <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-[#BACCDE]">
              <li>
                <strong className="text-gray-900 dark:text-white font-semibold">
                  Frontend :
                </strong>{" "}
                React, Tailwind CSS, Next.js
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white font-semibold">
                  Backend :
                </strong>{" "}
                Node.js, Python, PostgreSQL / Pinecone
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white font-semibold">
                  AI Models :
                </strong>{" "}
                OpenAI API (GPT-4), LangChain, Anthropic (Claude)
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white font-semibold">
                  Hosting :
                </strong>{" "}
                Vercel, AWS
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Marketing Strategy (How to get first 10 customers)
            </h2>
              <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm text-gray-700 dark:text-[#BACCDE] leading-relaxed">
              Build a targeted list of prospects using Omni-channel. Offer them
              a free trial of a custom chatbot for their brand. Partner with
              agencies making them the exact strategy of "we reduce the support
              tickets for their clients by 40%". Email the list with an approach
              of offering value first, close deal later. Cold email {">"}{" "}
              LinkedIn {">"} X {">"} YouTube.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Conclusion
            </h2>
              <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm text-gray-700 dark:text-[#BACCDE] leading-relaxed">
              B2B is highly lucrative. High margin business. You build the tech
              tool exclusively, no one requires a big team, and earning beyond a
              zero to one is high. Once the retention is built up nicely, MRR
              expands to five and six figures within a year with minimal stress.
            </p>
          </section>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pb-8 border-b border-gray-200 dark:border-white/10">
            <button className="flex items-center gap-2 text-icon border border-gray-200 dark:border-[#363B57] hover:bg-gray-100 dark:hover:bg-white/5 px-4 py-2 text-sm font-normal transition-colors rounded-3xl">
              <ThumbsUp size={16} /> Like
            </button>
            <button className="flex items-center gap-2 text-icon border border-gray-200 dark:border-[#363B57] hover:bg-gray-100 dark:hover:bg-white/5 px-4 py-2 text-sm font-normal transition-colors rounded-3xl">
              <Bookmark size={16} /> Save
            </button>
            <button className="flex items-center gap-2 text-icon border border-gray-200 dark:border-[#363B57] hover:bg-gray-100 dark:hover:bg-white/5 px-4 py-2 text-sm font-normal transition-colors rounded-3xl">
              <Share2 size={16} /> Share
            </button>
           <button 
              onClick={handleDownloadClick}
              className="flex items-center gap-2 text-white bg-[#2A357B] hover:bg-[#232e66] px-6 py-2 text-sm font-semibold transition-colors rounded-3xl shadow-lg shadow-blue-900/20"
            >
              <Download size={16} /> Download PDF
            </button>
          </div>

          {/* Discussions */}
          <section className="pt-0">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Discussions (12)
            </h2>

            {/* Comment Input */}
            <div className="mb-8">
              <textarea
                className="w-full bg-gray-100 dark:bg-[#1A2342] border border-gray-200 dark:border-white/10 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px] mb-4 text-gray-900 dark:text-white placeholder-gray-500"
                placeholder="Share your thoughts or ask a question..."
              ></textarea>
              <button className="bg-primary text-white px-8 py-3 rounded-full text-xs font-semibold transition-colors">
                POST COMMENT
              </button>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {[
                {
                  name: "John Doe",
                  time: "2 days ago",
                  initial: "JD",
                  text: "Great breakdown of the business. The numbers look very solid. Is anyone here registered with dealing with the database limits and memory this way?",
                },
                {
                  name: "Alice M.",
                  time: "3 days ago",
                  initial: "AM",
                  text: "I can attest, I started running a similar business last year and it requires a massive infra piece. Great info bro.",
                },
                {
                  name: "John Doe",
                  time: "1 day ago",
                  initial: "JD",
                  text: "Very good strategy on the lead gen. I agree with cold email, works like a charm for B2B if messaging is dialed in. Keep dropping bombs like this!",
                },
              ].map((comment, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#2D3B82] flex items-center justify-center text-white font-bold shrink-0">
                    {comment.initial}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-900 dark:text-white text-sm">
                        {comment.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {comment.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      {comment.text}
                    </p>
                    <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-primary transition-colors">
                      <CornerDownRight size={14} /> Reply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column (Sidebar Form) */}
        <aside className="w-full lg:w-[350px] shrink-0">
          <div className="dark:bg-[#1A2342] dark:bg-card rounded-xl p-6 shadow-xl sticky top-24 border border-transparent dark:border-white/5">
            <h2 className="text-xl font-bold text-icon mb-2">
              Start This Business With Us
            </h2>
            <p className="text-sm text-icon font-light mb-6 leading-relaxed">
              Don't know how to code? We can build this exact platform for you
              quickly and efficiently.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-normal text-icon mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full bg-gray-200 dark:bg-[#1D2659] border border-transparent dark:border-[#3E4A92] rounded-md p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-normal text-icon mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="w-full bg-gray-200 dark:bg-[#1D2659] border border-transparent dark:border-[#3E4A92] rounded-md p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-normal text-icon mb-2">
                  Country <span className="text-red-500">*</span>
                </label>
                <select className="w-full bg-gray-200 dark:bg-[#1D2659] border border-transparent dark:border-[#3E4A92] rounded-md p-2.5 text-sm text-icon focus:outline-none focus:border-primary">
                  <option>Select</option>
                  <option>United States</option>
                  <option>India</option>
                  <option>United Kingdom</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-normal text-icon mb-2">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Type here..."
                  className="w-full bg-gray-200 dark:bg-[#1D2659] border border-transparent dark:border-[#3E4A92] rounded-md p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-normal text-icon mb-2">
                  Project Requirement (optional)
                </label>
                <textarea
                  placeholder="Type here..."
                  rows="3"
                  className="w-full bg-gray-200 dark:bg-[#1D2659] border border-transparent dark:border-white/10 rounded-md p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary resize-none"
                ></textarea>
              </div>

              <div>
                {/* Main Captcha Box */}
                <div className="bg-white w-50 border border-gray-300 p-3 flex flex-col sm:flex-nowrap">
                  <label className="block text-sm font-semibold text-black">
                    Captcha <span className="text-red-500">*</span>
                  </label>

                  <div className="flex flex-row items-center gap-3">
                    {/* Question */}
                  <span className="text-sm text-black whitespace-nowrap">
                    What is 1 × 8 ?
                  </span>

                  {/* Answer Input */}
                  <input
                    type="text"
                    className="w-16 h-9 border border-gray-400 px-2 py-1 text-sm text-gray-900 focus:outline-none"
                  />
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="w-40 bg-primary hover:bg-orange-500 text-white font-bold py-3 rounded-full mt-4 transition-colors text-sm"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}
