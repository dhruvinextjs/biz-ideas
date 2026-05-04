// "use client";

// import React from "react";
// import { Bookmark } from "lucide-react";

// const bookmarks = [
//   {
//     category: "POST",
//     title: "Top 10 AI Business Ideas for 2026",
//   },
//   {
//     category: "BUSINESS IDEAS",
//     title: "How EcoBox Grew to ₹10L Monthly Revenue Withi...",
//   },
//   {
//     category: "APP IDEAS",
//     title: "All In One Personalized Health Fitness Tracking Ap...",
//   },
//   {
//     category: "STARTUP IDEAS",
//     title: "AI-Based Resume & Job Matching Platform",
//   },
//   {
//     category: "BUSINESS IDEAS",
//     title: "Growing a GEO tool to a mid-five figure MRR within...",
//   },
//   {
//     category: "APP IDEAS",
//     title: "AI Based Personalized Travel Planning And Booking...",
//   },
//   {
//     category: "STARTUP IDEAS",
//     title: "Smart Home Automation Services",
//   },
//   {
//     category: "POST",
//     title: "8 Ways to Build a List of Companies That Are Usi...",
//   },
//   {
//     category: "POST",
//     title: "Evergreen Search: They show you what's popular...",
//   },
// ];

// export default function BookMarks() {
//   return (
//     <div className="bg-background pt-32 md:pt-36 pb-18 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-3xl md:text-4xl font-bold text-icon">
//             Bookmarks
//           </h1>
//           <p className="text-sm text-icon mt-2">Manage your bookmarks</p>
//         </div>

//         {/* Bookmarks Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {bookmarks.map((item, index) => (
//             <div
//               key={index}
//               className="group relative bg-card hover:bg-[#1A2338] border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 overflow-hidden"
//             >
//               {/* Bookmark Icon Top Right */}
//               <div className="absolute top-4 right-4 text-gray-500 dark:text-white/30 group-hover:text-white/70 transition-colors">
//                 <Bookmark size={18} fill="currentColor" />
//               </div>

//               {/* Category Badge */}
//               <div
//                 className="inline-block bg-gray-500 dark:bg-[#2A3265] py-2 px-4  text-xs font-semibold tracking-widest uppercase
//      text-white/80 rounded-full mb-4"
//               >
//                 {item.category}
//               </div>

//               {/* Title */}
//               <h3 className="text-[17px] leading-tight font-medium text-icon line-clamp-2 pr-8 group-hover:text-orange-400 transition-colors">
//                 {item.title}
//               </h3>
//             </div>
//           ))}
//         </div>

//         {/* Optional: Empty state message (agar bookmarks 0 ho toh) */}
//         {bookmarks.length === 0 && (
//           <div className="text-center py-20">
//             <Bookmark size={48} className="mx-auto text-gray-500 mb-4" />
//             <p className="text-gray-400 text-lg">No bookmarks yet</p>
//             <p className="text-sm text-gray-500 mt-1">
//               Save interesting posts and ideas here
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



"use client";

import React from "react";
import { Bookmark } from "lucide-react";
import Image from "next/image";

// Testing ke liye is array ko empty [] kar ke dekhein
const bookmarks = [
  {
    category: "POST",
    title: "Top 10 AI Business Ideas for 2026",
  },
  {
    category: "BUSINESS IDEAS",
    title: "How EcoBox Grew to ₹10L Monthly Revenue Withi...",
  },
  {
    category: "APP IDEAS",
    title: "All In One Personalized Health Fitness Tracking Ap...",
  },
  {
    category: "STARTUP IDEAS",
    title: "AI-Based Resume & Job Matching Platform",
  },
  {
    category: "BUSINESS IDEAS",
    title: "Growing a GEO tool to a mid-five figure MRR within...",
  },
  {
    category: "APP IDEAS",
    title: "AI Based Personalized Travel Planning And Booking...",
  },
  {
    category: "STARTUP IDEAS",
    title: "Smart Home Automation Services",
  },
  {
    category: "POST",
    title: "8 Ways to Build a List of Companies That Are Usi...",
  },
  {
    category: "POST",
    title: "Evergreen Search: They show you what's popular...",
  },
];

export default function BookMarks() {
  const hasBookmarks = bookmarks.length > 0;

  return (
    <div className="min-h-screen bg-background pt-32 md:pt-36 pb-18 px-4 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-icon">
            Bookmarks
          </h1>
          <p className="text-sm text-icon mt-2 opacity-80">
            {hasBookmarks 
              ? `You have ${bookmarks.length} saved items` 
              : "Manage your bookmarks"}
          </p>
        </div>

        {hasBookmarks ? (
          /* Bookmarks Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bookmarks.map((item, index) => (
              <div
                key={index}
                className="group relative bg-card hover:bg-[#1A2338] border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* Bookmark Icon Top Right */}
                <div className="absolute top-4 right-4 text-primary transition-colors">
                  <Bookmark size={18} fill="currentColor" />
                </div>

                {/* Category Badge */}
                <div
                  className="inline-block bg-gray-200 dark:bg-[#2A3265] py-2 px-4 text-[10px] font-bold tracking-widest uppercase
                  text-gray-700 dark:text-white/80 rounded-full mb-4"
                >
                  {item.category}
                </div>

                {/* Title */}
                <h3 className="text-[17px] leading-tight font-medium text-icon line-clamp-2 pr-8 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        ) : (
          /* --- NO DATA / EMPTY STATE --- */
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center min-h-[450px] bg-card rounded-2xl border border-dashed border-gray-300 dark:border-white/10">
            <div className="relative w-52 h-52 mb-6">
              {/* Light mode image */}
              <Image
                src="/images/no-bookmark-light.png"
                alt="No bookmarks"
                fill
                className="object-contain dark:hidden"
              />
              {/* Dark mode image */}
              <Image
                src="/images/no-bookmark-dark.png"
                alt="No bookmarks"
                fill
                className="object-contain hidden dark:block"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
             No Saved Ideas Yet
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto text-sm leading-relaxed">
             You haven’t saved any ideas yet. Start exploring and bookmark
your favorites.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}