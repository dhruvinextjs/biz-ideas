// "use client";
// import React, from "react";
// import { Search, Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import Link from "next/link";

// export default function BlogPage() {
//   // Mock Data for Categories
//   const categories = ["All", "Category 1", "Category 2", "Category 3", "Category 4"];

//   // Mock Data for Blog Posts
//   const blogPosts = [
//     { category: "IDEAS", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
//     { category: "GUIDE", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
//     { category: "FINANCE", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
//     { category: "TECH", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
//     { category: "MARKETING", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
//     { category: "FINANCE", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
//     { category: "IDEAS", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
//     { category: "GUIDE", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
//     { category: "MARKETING", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
//     { category: "FINANCE", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
//     { category: "TECH", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
//     { category: "IDEAS", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
//   ];

//   return (
//     <div className="min-h-screen bg-background font-sans transition-colors duration-300 relative overflow-hidden pt-20 mt-20 pb-16 px-4 md:px-8">
      
//       {/* Background glowing particles effect for dark mode (Subtle) */}
//       <div className="absolute top-0 left-0 right-0 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none z-0 hidden dark:block"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* ========================================== */}
//         {/* 1. HEADER & SEARCH SECTION                 */}
//         {/* ========================================== */}
//         <div className="text-center max-w-3xl mx-auto mb-24">
//           <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             The <span className="text-[#FB8122]">Biz</span> Blog
//           </h1>
//           <p className="text-icon text-sm md:text-base mb-8 opacity-90">
//             Insights, trends, and guides to help you build and scale your next startup.
//           </p>

//           {/* Search Bar */}
//           {/* <div className="relative max-w-xl mx-auto w-full"> */}
//           <div className="relative max-w-lg mx-auto w-full">
//             <input
//               type="text"
//               placeholder="Search articles..."
//             //   className="w-full bg-white dark:bg-[#1D2659] border border-gray-200 dark:border-white/5 rounded-full py-4 px-6 pr-16 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 shadow-sm transition-all"
//             className="w-full bg-white dark:bg-[#1D2659] border border-gray-200 dark:border-[#5C6BC9] rounded-full py-5 px-6 pr-16 text-sm text-icon placeholder-gray-500 dark:placeholder-[#AFD0F2] focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 transition-all"
//             />
//             <button className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-[#e6751e] transition-colors rounded-full w-12 flex items-center justify-center text-white shadow-md">
//               <Search size={18} />
//             </button>
//           </div>
//         </div>

//         {/* ========================================== */}
//         {/* 2. CATEGORY FILTERS                        */}
//         {/* ========================================== */}
//         <div className="flex flex-wrap justify-center gap-2 mb-12">
//           {categories.map((category, index) => (
//             <button
//               key={index}
//               className={`px-6 py-3 rounded-full text-xs font-medium transition-colors ${
//                 index === 0
//                   ? "bg-primary text-white shadow-lg shadow-orange-500/20" // Active state
//                   : "bg-white dark:bg-[#1C234D] text-icon opacity-90 border border-gray-200 dark:border-transparent hover:border-gray-300 dark:hover:bg-[#232D45]" // Inactive state
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* ========================================== */}
//         {/* 3. BLOG POSTS GRID                         */}
//         {/* ========================================== */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-16">
//           {blogPosts.map((post, index) => (
//             <Link
//               href="/blogs/1"
//               key={index}
//               className="flex flex-col bg-card border border-gray-100 dark:border-white/5 rounded-2xl p-6 shadow-sm hover:shadow-md dark:hover:shadow-white/5 transition-all group"
//             >
//               {/* Category Badge */}
//               <div className="mb-4">
//                 <span className="inline-block bg-gray-100 dark:bg-[#2A3265] text-icon opacity-90 text-[11px] font-semibold tracking-wider px-4 py-2 rounded-full uppercase">
//                   {post.category}
//                 </span>
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#FB8122] transition-colors leading-snug">
//                 {post.title}
//               </h3>

//               {/* Excerpt */}
//               <p className="text-sm text-icon opacity-90 mb-6 flex-grow line-clamp-3">
//                 In the rapidly evolving landscape of 2026, artificial intelligence is no longer just a buzzword...
//               </p>

//               {/* Footer (Date & Read More) */}
//               <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
//                 <div className="flex items-center text-icon opacity-90 text-xs font-medium">
//                   <Calendar size={14} className="mr-2" />
//                   {post.date}
//                 </div>
//                 <button className="flex items-center text-[#FB8122] hover:text-[#e6751e] text-xs font-semibold group-hover:translate-x-1 transition-transform">
//                   Read more <ArrowRight size={14} className="ml-1" />
//                 </button>
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* ========================================== */}
//         {/* 4. PAGINATION                              */}
//         {/* ========================================== */}
//         <div className="flex justify-center items-center gap-2">
//           {/* Prev Button */}
//           <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-[#222642] border border-gray-200 dark:border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#232D45] transition-colors">
//             <ChevronLeft size={18} />
//           </button>

//           {/* Page Numbers */}
//           <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-medium shadow-md shadow-orange-500/20">
//             1
//           </button>
//           <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-transparent text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-[#232D45] transition-colors">
//             2
//           </button>
//           <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-transparent text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-[#232D45] transition-colors">
//             3
//           </button>
          
//           <span className="w-10 h-10 flex items-center justify-center text-gray-500 dark:text-gray-400">
//             ...
//           </span>
          
//           <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-transparent text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-[#232D45] transition-colors">
//             16
//           </button>

//           {/* Next Button */}
//           <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#232D45] transition-colors">
//             <ChevronRight size={18} />
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }



"use client";
import React from "react";
import { Search, Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  // Mock Data for Categories
  const categories = ["All", "Category 1", "Category 2", "Category 3", "Category 4"];

  // Testing ke liye is array ko empty [] kar ke dekhein
  const blogPosts = [
    { category: "IDEAS", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
    { category: "GUIDE", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
    { category: "FINANCE", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
    { category: "TECH", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
    { category: "MARKETING", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
    { category: "FINANCE", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
    { category: "IDEAS", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
    { category: "GUIDE", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
    { category: "MARKETING", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
    { category: "FINANCE", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
    { category: "TECH", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
    { category: "IDEAS", title: "Top 10 AI Business Ideas for 2026", date: "March 15, 2025" },
  ];

  const hasBlogs = blogPosts.length > 0;

  return (
    <div className="min-h-screen bg-background font-sans transition-colors duration-300 relative overflow-hidden pt-20 mt-20 pb-16 px-4 md:px-8">
      
      {/* Background glowing particles effect */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none z-0 hidden dark:block"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            The <span className="text-[#FB8122]">Biz</span> Blog
          </h1>
          <p className="text-icon text-sm md:text-base mb-8 opacity-90">
            Insights, trends, and guides to help you build and scale your next startup.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto w-full">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-white dark:bg-[#1D2659] border border-gray-200 dark:border-[#5C6BC9] rounded-full py-5 px-6 pr-16 text-sm text-icon placeholder-gray-500 dark:placeholder-[#AFD0F2] focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-[#e6751e] transition-colors rounded-full w-12 flex items-center justify-center text-white shadow-md">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full text-xs font-medium transition-colors ${
                index === 0
                  ? "bg-primary text-white shadow-lg shadow-orange-500/20"
                  : "bg-white dark:bg-[#1C234D] text-icon opacity-90 border border-gray-200 dark:border-transparent hover:border-gray-300 dark:hover:bg-[#232D45]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {hasBlogs ? (
          <>
            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {blogPosts.map((post, index) => (
                <Link
                  href="/blogs/1"
                  key={index}
                  className="flex flex-col bg-card border border-gray-100 dark:border-white/5 rounded-2xl p-6 shadow-sm hover:shadow-md dark:hover:shadow-white/5 transition-all group"
                >
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 dark:bg-[#2A3265] text-icon opacity-90 text-[11px] font-semibold tracking-wider px-4 py-2 rounded-full uppercase">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#FB8122] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-sm text-icon opacity-90 mb-6 flex-grow line-clamp-3">
                    In the rapidly evolving landscape of 2026, artificial intelligence is no longer just a buzzword...
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
                    <div className="flex items-center text-icon opacity-90 text-xs font-medium">
                      <Calendar size={14} className="mr-2" />
                      {post.date}
                    </div>
                    <button className="flex items-center text-[#FB8122] hover:text-[#e6751e] text-xs font-semibold group-hover:translate-x-1 transition-transform">
                      Read more <ArrowRight size={14} className="ml-1" />
                    </button>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-[#222642] border border-gray-200 dark:border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#232D45] transition-colors">
                <ChevronLeft size={18} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-medium shadow-md">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-transparent text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 transition-colors">2</button>
              <span className="w-10 h-10 flex items-center justify-center text-gray-500">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-transparent text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 transition-colors">16</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </>
        ) : (
          /* --- NO DATA / EMPTY STATE --- */
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center min-h-[450px] bg-card rounded-2xl border border-dashed border-gray-300 dark:border-white/10 shadow-sm">
            <div className="relative w-52 h-52 mb-6">
              {/* Light mode image */}
              <Image
                src="/images/empty-blog-light.png"
                alt="No blogs"
                fill
                className="object-contain dark:hidden"
              />
              {/* Dark mode image */}
              <Image
                src="/images/empty-blog-dark.png"
                alt="No blogs"
                fill
                className="object-contain hidden dark:block"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No Articles Yet
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto text-sm leading-relaxed">
              We’re working on valuable content. Stay tuned for updates.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}