// "use client";
// import React from "react";
// import Image from "next/image";
// import {
//   ChevronRight,
//   Briefcase,
//   DollarSign,
//   TrendingUp,
//   ThumbsUp,
//   Bookmark,
//   Share2,
//   Download,
//   MessageSquare,
//   CornerDownRight,
// } from "lucide-react";
// import { FaDollarSign } from "react-icons/fa6";
// import { BsGraphUpArrow } from "react-icons/bs";
// import { PiSquaresFourBold } from "react-icons/pi";

// export default function StartupDetailPage() {
//   return (
//     <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 pb-20">
//       {/* Hero Section (Top Banner) */}
//       <div className="bg-card border-b border-gray-200 dark:border-white/10 pt-28 pb-12 px-4 md:px-8">
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-center justify-between">
//           <div className="flex-1">
//             {/* Breadcrumbs */}
//             <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
//               <span>Home</span>
//               <ChevronRight size={14} className="mx-1" />
//               <span>Startup Ideas</span>
//               <ChevronRight size={14} className="mx-1" />
//               <span className="text-gray-900 dark:text-white font-medium">
//                 Hyperlocal Grocery...
//               </span>
//             </div>

//             <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
//               Hyperlocal Grocery Delivery App
//             </h1>

//             {/* Badges */}
//             <div className="flex flex-wrap gap-3">
//               <span className="flex items-center gap-2 text-icon bg-[#3D4064] px-4 py-2 rounded-md text-sm font-normal">
//                 <PiSquaresFourBold size={16} className="text-icon" /> Local Business
//               </span>
//               <span className="flex items-center gap-2 text-icon bg-[#3D4064] px-4 py-2 rounded-md text-sm font-normal">
//                 <FaDollarSign size={16} className="text-icon" /> $2K - $7K Investment
//                 Investment
//               </span>
//               <span className="flex items-center gap-2 text-icon bg-[#3D4064] px-4 py-2 rounded-md text-sm font-normal">
//                 <BsGraphUpArrow size={16} className="text-icon" /> 85% Profit Margin
//                 Margin
//               </span>
//             </div>
//           </div>

//           {/* Hero Image */}
//           <div className="w-full lg:w-[450px] shrink-0 h-[280px] relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/5">
//             <Image
//               src="/images/startup-detail.png" // Apni image path se replace karein
//               alt="Startup process"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Main Content Layout */}
//       <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 flex flex-col lg:flex-row gap-12">
//         {/* Left Column (Content) */}
//         <div className="flex-1 space-y-10">
//           <section>
//             <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//               Business Overview
//             </h2>
//             <p className="text-sm md:text-base leading-relaxed text-gray-500 dark:text-[#BACCDE]">
//              Urban consumers increasingly prefer convenience and speed when it comes to daily essentials. Traditional grocery shopping is time-consuming, and existing delivery platforms often lack true “hyperlocal” efficiency.
// This startup focuses on building a hyperlocal grocery delivery platform that connects users with nearby stores, ensuring deliveries within 15–30 minutes. By optimizing logistics and leveraging local inventory, the platform delivers faster and more reliably than large-scale competitors.
//             </p>
//           </section>

//           {/* Problem Box */}
//           <div className="bg-[#370D25] border border-[#BD0B0B] rounded-xl p-6">
//             <h3 className="text-xl font-semibold text-icon mb-2">
//               The Problem
//             </h3>
//             <p className="text-sm text-icon leading-relaxed">
//               Companies spend huge capital on human agents who have limits.
//               Customers often face delays leading to frustrated prospects, lost
//               revenue, and negatively impacts the organization's reputation.
//             </p>
//           </div>

//           {/* Solution Box */}
//           <div className="bg-[#082846] border border-[#1C8D99] rounded-xl p-6">
//             <h3 className="text-xl font-semibold text-icon mb-2">
//               The Solution
//             </h3>
//             <p className="text-sm text-icon leading-relaxed">
//               An AI model trained entirely on your database. It responds with
//               context, resolves basic support requests, and seamlessly transfers
//               complex issues to human agents.
//             </p>
//           </div>

//           <section>
//             <h2 className="text-xl font-semibold text-icon mb-4">
//               How It Works
//             </h2>
//             <ul className="space-y-3 text-sm md:text-base text-gray-700 dark:text-gray-300">
//               <li className="dark:text-[#BACCDE] text-sm">
//                 <strong className="text-icon font-semibold">
//                   1. Data Ingestion :
//                 </strong>{" "}
//                 Connect databases, knowledge base, and past support tickets.
//               </li>
//               <li className="dark:text-[#BACCDE] text-sm">
//                 <strong className="text-icon font-semibold">
//                   2. Training :
//                 </strong>{" "}
//                 The platform processes data to create accurate AI embeddings.
//               </li>
//               <li className="dark:text-[#BACCDE] text-sm">
//                 <strong className="text-icon font-semibold">
//                   3. Deployment :
//                 </strong>{" "}
//                 The AI chatbot is integrated into client websites.
//               </li>
//               <li className="dark:text-[#BACCDE] text-sm">
//                 <strong className="text-icon font-semibold">
//                   4. Workflow :
//                 </strong>{" "}
//                 AI filters queries and creates tickets for complex issues.
//               </li>
//             </ul>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-icon mb-4">
//               Revenue Model
//             </h2>
//             <p className="text-sm dark:text-[#BACCDE] mb-4">
//               Subscription-based model with tiered pricing based on ticket
//               volume.
//             </p>
//             <ul className="space-y-2 text-sm dark:text-[#BACCDE]">
//               <li>
//                 <strong className="text-icon font-semibold">Starter :</strong>{" "}
//                 $49/mo (up to 500 conversations)
//               </li>
//               <li>
//                 <strong className="text-icon font-semibold">Pro :</strong>{" "}
//                 $149/mo (up to 2,000 conversations + custom UI)
//               </li>
//               <li>
//                 <strong className="text-icon font-semibold">
//                   Enterprise :
//                 </strong>{" "}
//                 $499+/mo (Custom integrations, dedicated account manager)
//               </li>
//             </ul>
//           </section>

//           {/* Execution Breakdown Grid */}
//           <section>
//             <h2 className="text-xl font-semibold text-icon mb-6">
//               Execution Breakdown
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="bg-card border border-[#242F70] p-6 rounded-xl">
//                 <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
//                   Investment Required
//                 </h4>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   $1K - $5K
//                 </p>
//                 <p className="text-xs dark:text-[#BACCDE] mt-2">
//                   (Server costs, API credits, initial marketing, software setup)
//                 </p>
//               </div>
//               <div className="bg-card border border-[#242F70] p-6 rounded-xl">
//                 <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
//                   Timeline to Launch
//                 </h4>
//                 <p className="text-sm text-gray-600 dark:text-[#BACCDE]">
//                   4 - 6 Weeks
//                 </p>
//                 <p className="text-xs dark:text-[#BACCDE] mt-2">
//                   (For building MVP and launching beta)
//                 </p>
//               </div>
//               <div className="bg-card border border-[#242F70] p-6 rounded-xl">
//                 <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
//                   Required Team
//                 </h4>
//                 <p className="text-sm text-gray-600 dark:text-[#BACCDE]">
//                   1-2 Founders
//                 </p>
//                 <p className="text-xs dark:text-[#BACCDE] mt-2">
//                   (1 Developer/AI Architect, 1 Sales/Ops)
//                 </p>
//               </div>
//               <div className="bg-card border border-[#242F70] p-6 rounded-xl">
//                 <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
//                   Profit Margin
//                 </h4>
//                 <p className="text-sm text-gray-600 dark:text-[#BACCDE]">
//                   85%+
//                 </p>
//                 <p className="text-xs dark:text-[#BACCDE] mt-2">
//                   (Low ongoing costs relative to subscription pricing)
//                 </p>
//               </div>
//             </div>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//               Tech Stack & Tools Required
//             </h2>
//             <ul className="space-y-2 text-sm text-gray-700 dark:text-[#BACCDE]">
//               <li>
//                 <strong className="text-gray-900 dark:text-white font-semibold">
//                   Frontend :
//                 </strong>{" "}
//                 React, Tailwind CSS, Next.js
//               </li>
//               <li>
//                 <strong className="text-gray-900 dark:text-white font-semibold">
//                   Backend :
//                 </strong>{" "}
//                 Node.js, Python, PostgreSQL / Pinecone
//               </li>
//               <li>
//                 <strong className="text-gray-900 dark:text-white font-semibold">
//                   AI Models :
//                 </strong>{" "}
//                 OpenAI API (GPT-4), LangChain, Anthropic (Claude)
//               </li>
//               <li>
//                 <strong className="text-gray-900 dark:text-white font-semibold">
//                   Hosting :
//                 </strong>{" "}
//                 Vercel, AWS
//               </li>
//             </ul>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//               Marketing Strategy (How to get first 10 customers)
//             </h2>
//             <p className="text-sm text-gray-700 dark:text-[#BACCDE] leading-relaxed">
//               Build a targeted list of prospects using Omni-channel. Offer them
//               a free trial of a custom chatbot for their brand. Partner with
//               agencies making them the exact strategy of "we reduce the support
//               tickets for their clients by 40%". Email the list with an approach
//               of offering value first, close deal later. Cold email {">"}{" "}
//               LinkedIn {">"} X {">"} YouTube.
//             </p>
//           </section>

//           <section>
//             <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
//               Conclusion
//             </h2>
//             <p className="text-sm text-gray-700 dark:text-[#BACCDE] leading-relaxed">
//               B2B is highly lucrative. High margin business. You build the tech
//               tool exclusively, no one requires a big team, and earning beyond a
//               zero to one is high. Once the retention is built up nicely, MRR
//               expands to five and six figures within a year with minimal stress.
//             </p>
//           </section>

//           {/* Actions */}
//           <div className="flex flex-wrap gap-4 pb-8 border-b border-gray-200 dark:border-white/10">
//             <button className="flex items-center gap-2 text-icon border border-gray-200 dark:border-[#363B57] hover:bg-gray-100 dark:hover:bg-white/5 px-4 py-2 text-sm font-normal transition-colors rounded-3xl">
//               <ThumbsUp size={16} /> Like
//             </button>
//             <button className="flex items-center gap-2 text-icon border border-gray-200 dark:border-[#363B57] hover:bg-gray-100 dark:hover:bg-white/5 px-4 py-2 text-sm font-normal transition-colors rounded-3xl">
//               <Bookmark size={16} /> Save
//             </button>
//             <button className="flex items-center gap-2 text-icon border border-gray-200 dark:border-[#363B57] hover:bg-gray-100 dark:hover:bg-white/5 px-4 py-2 text-sm font-normal transition-colors rounded-3xl">
//               <Share2 size={16} /> Share
//             </button>
//             <button className="flex items-center gap-2 text-icon bg-[#2A357B] hover:bg-[#232e66] px-4 py-2 text-sm font-normal transition-colors rounded-3xl">
//               <Download size={16} /> Download PDF
//             </button>
//           </div>

//           {/* Discussions */}
//           <section className="pt-0">
//             <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
//               Discussions (12)
//             </h2>

//             {/* Comment Input */}
//             <div className="mb-8">
//               <textarea
//                 className="w-full bg-gray-100 dark:bg-[#1A2342] border border-gray-200 dark:border-white/10 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px] mb-4 text-gray-900 dark:text-white placeholder-gray-500"
//                 placeholder="Share your thoughts or ask a question..."
//               ></textarea>
//               <button className="bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors">
//                 POST COMMENT
//               </button>
//             </div>

//             {/* Comments List */}
//             <div className="space-y-6">
//               {[
//                 {
//                   name: "John Doe",
//                   time: "2 days ago",
//                   initial: "JD",
//                   text: "Great breakdown of the business. The numbers look very solid. Is anyone here registered with dealing with the database limits and memory this way?",
//                 },
//                 {
//                   name: "Alice M.",
//                   time: "3 days ago",
//                   initial: "AM",
//                   text: "I can attest, I started running a similar business last year and it requires a massive infra piece. Great info bro.",
//                 },
//                 {
//                   name: "John Doe",
//                   time: "1 day ago",
//                   initial: "JD",
//                   text: "Very good strategy on the lead gen. I agree with cold email, works like a charm for B2B if messaging is dialed in. Keep dropping bombs like this!",
//                 },
//               ].map((comment, i) => (
//                 <div key={i} className="flex gap-4">
//                   <div className="w-10 h-10 rounded-full bg-[#2D3B82] flex items-center justify-center text-white font-bold shrink-0">
//                     {comment.initial}
//                   </div>
//                   <div>
//                     <div className="flex items-center gap-2 mb-1">
//                       <span className="font-bold text-gray-900 dark:text-white text-sm">
//                         {comment.name}
//                       </span>
//                       <span className="text-xs text-gray-500">
//                         {comment.time}
//                       </span>
//                     </div>
//                     <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
//                       {comment.text}
//                     </p>
//                     <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-primary transition-colors">
//                       <CornerDownRight size={14} /> Reply
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>

//         {/* Right Column (Sidebar Form) */}
//         <aside className="w-full lg:w-[350px] shrink-0">
//           <div className="dark:bg-[#1A2342] dark:bg-card rounded-xl p-6 shadow-xl sticky top-24 border border-transparent dark:border-white/5">
//             <h2 className="text-xl font-bold text-icon mb-2">
//               Start This Business With Us
//             </h2>
//             <p className="text-sm text-icon font-light mb-6 leading-relaxed">
//               Don't know how to code? We can build this exact platform for you
//               quickly and efficiently.
//             </p>

//             <form className="space-y-4">
//               <div>
//                 <label className="block text-sm font-normal text-icon mb-2">
//                   Your Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Type here..."
//                   className="w-full bg-[#2D3B82] dark:bg-[#1D2659] border border-transparent dark:border-[#3E4A92] rounded-md p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-normal text-icon mb-2">
//                   Email <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="example@mail.com"
//                   className="w-full bg-[#2D3B82] dark:bg-[#1D2659] border border-transparent dark:border-[#3E4A92] rounded-md p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-normal text-icon mb-2">
//                   Country <span className="text-red-500">*</span>
//                 </label>
//                 <select className="w-full bg-[#2D3B82] dark:bg-[#1D2659] border border-transparent dark:border-[#3E4A92] rounded-md p-2.5 text-sm text-white focus:outline-none focus:border-primary">
//                   <option>Select</option>
//                   <option>United States</option>
//                   <option>India</option>
//                   <option>United Kingdom</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-normal text-icon mb-2">
//                   Phone number <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   placeholder="Type here..."
//                   className="w-full bg-[#2D3B82] dark:bg-[#1D2659] border border-transparent dark:border-[#3E4A92] rounded-md p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-normal text-icon mb-2">
//                   Project Requirement (optional)
//                 </label>
//                 <textarea
//                   placeholder="Type here..."
//                   rows="3"
//                   className="w-full bg-[#2D3B82] dark:bg-[#1D2659] border border-transparent dark:border-white/10 rounded-md p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary resize-none"
//                 ></textarea>
//               </div>

//               <div>
//                 {/* Main Captcha Box */}
//                 <div className="bg-white w-50 border border-gray-300 p-3 flex flex-col sm:flex-nowrap">
//                   <label className="block text-sm font-semibold text-black">
//                     Captcha <span className="text-red-500">*</span>
//                   </label>

//                   <div className="flex flex-row items-center gap-3">
//                     {/* Question */}
//                   <span className="text-sm text-black whitespace-nowrap">
//                     What is 1 × 8 ?
//                   </span>

//                   {/* Answer Input */}
//                   <input
//                     type="text"
//                     className="w-16 h-9 border border-gray-400 px-2 py-1 text-sm text-gray-900 focus:outline-none"
//                   />
//                   </div>
//                 </div>
//               </div>

//               <button
//                 type="button"
//                 className="w-40 bg-primary hover:bg-orange-500 text-white font-bold py-3 rounded-full mt-4 transition-colors text-sm"
//               >
//                 SUBMIT
//               </button>
//             </form>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }



"use client";
import React from "react";
import Image from "next/image";
import {
  ChevronRight,
  Briefcase,
  DollarSign,
  TrendingUp,
  ThumbsUp,
  Bookmark,
  Share2,
  Download,
  MessageSquare,
  CornerDownRight,
} from "lucide-react";
import { FaDollarSign } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiSquaresFourBold } from "react-icons/pi";

export default function DetailPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 pb-20">
      {/* Hero Section (Top Banner) */}
      <div className="bg-gray-100 dark:bg-[#100A44] border-b border-gray-200 dark:border-white/10 pt-28 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="flex-1">
            {/* Breadcrumbs */}
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span>Home</span>
              <ChevronRight size={14} className="mx-1" />
              <span>Startup Ideas</span>
              <ChevronRight size={14} className="mx-1" />
              <span className="text-gray-900 dark:text-white font-medium">
               Hyperlocal Grocery...
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
             Hyperlocal Grocery Delivery App
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 text-icon bg-gray-300 dark:bg-[#3E3F65] px-4 py-2 rounded-md text-sm font-normal">
                <PiSquaresFourBold size={16} className="text-icon" /> Local Business
              </span>
              <span className="flex items-center gap-2 text-icon bg-gray-300 dark:bg-[#3E3F65] px-4 py-2 rounded-md text-sm font-normal">
                <FaDollarSign size={16} className="text-icon" /> $2K - $7K Investment
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
              src="/images/startup-detail.png" // Apni image path se replace karein
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
              Urban consumers increasingly prefer convenience and speed when it comes to daily essentials. Traditional grocery shopping is time-consuming, and existing delivery platforms often lack true “hyperlocal” efficiency.
This startup focuses on building a hyperlocal grocery delivery platform that connects users with nearby stores, ensuring deliveries within 15–30 minutes. By optimizing logistics and leveraging local inventory, the platform delivers faster and more reliably than large-scale competitors.
            </p>
          </section>

          {/* Problem Box */}
          <div className="bg-[#370D25] border border-[#BD0B0B] rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              The Problem
            </h3>
            <p className="text-sm text-white leading-relaxed">
              Customers face delays in grocery deliveries due to centralized warehouses and inefficient routing. Small local stores struggle to compete with large eCommerce platforms and lack digital presence. Additionally, users often receive out-of-stock items or delayed substitutions, leading to poor experience.
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
            <button className="flex items-center gap-2 text-icon dark:bg-[#2A357B] hover:bg-[#232e66] border border-gray-200 dark:border-[#363B57] px-4 py-2 text-sm font-normal transition-colors rounded-3xl">
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
              <button className="bg-primary text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors">
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
                <select className="w-full bg-gray-200 dark:bg-[#1D2659] border border-transparent dark:border-[#3E4A92] rounded-md p-2.5 text-sm text-white focus:outline-none focus:border-primary">
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
