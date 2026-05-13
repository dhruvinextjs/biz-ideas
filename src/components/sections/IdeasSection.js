// import React from 'react';
// import { ChevronRight } from 'lucide-react';
// import Link from 'next/link';

// export default function IdeasSection() {
//   const categories = [
//     {
//       title: "Business Ideas",
//       color: "text-[#FB8122]", // Orange color from your theme
//       items: Array(5).fill({
//         name: "AI-powered fitness app using 3D animations and AR for workout guidance.",
//         category: "Category name",
//         invest: "Invest $1K - $5K",
//         profit: "85% Profit"
//       })
//     },
//     {
//       title: "App Ideas",
//       color: "text-[#FB8122]",
//       items: Array(5).fill({
//         name: "AI-powered fitness app using 3D animations and AR for workout guidance.",
//         category: "Category name",
//         invest: "Invest $1K - $5K",
//         profit: "85% Profit"
//       })
//     },
//     {
//       title: "Startup Ideas",
//       color: "text-[#FB8122]",
//       items: Array(5).fill({
//         name: "AI-powered fitness app using 3D animations and AR for workout guidance.",
//         category: "Category name",
//         invest: "Invest $1K - $5K",
//         profit: "85% Profit"
//       })
//     }
//   ];

//   return (
//     // <section className="w-full py-6 px-4 bg-background transition-colors duration-300">
//     //   <div className="container mx-auto max-w-7xl">
//     <section className="w-full py-6 px-4 bg-background transition-colors duration-300">
//   <div className="container mx-auto max-w-7xl border-b-2 border-dotted border-[#E6E6E6] dark:border-[#1C234D] pb-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {categories.map((cat, idx) => (
//             <div key={idx} className="flex flex-col gap-2">
//               {/* Category Header */}
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h2 className={`${cat.color} font-bold text-lg mb-1`}>
//                     {cat.title}
//                   </h2>
//                   <p className="text-xs italic text-[#4C4C4C] dark:text-[#9CB3C9]">
//                     Lorem ipsum text is here now.
//                   </p>
//                 </div>
//                 <Link 
//                   href="#" 
//                   className="flex items-center gap-1 text-[14px] text-[#4C4C4C] dark:text-[#9CB3C9] hover:text-primary transition-colors"
//                 >
//                   View more <ChevronRight size={14} className='mt-1' />
//                 </Link>
//               </div>

//               {/* Items List */}
//               <div className="flex flex-col">
//                 {cat.items.map((item, i) => (
//                   <div 
//                     key={i} 
//                     className="group cursor-pointer py-5 border-b border-dotted border-foreground/15 last:border-0"
//                   >
//                     <h3 className="text-[16px] font-normal leading-snug group-hover:text-primary transition-colors mb-2 text-icon">
//                       {item.name}
//                     </h3>
//                     <div className="flex items-center gap-2 text-[11px] text-[#4C4C4C] dark:text-[#9CB3C9]">
//                       <span>{item.category}</span>
//                       <span className="text-foreground/20">•</span>
//                       <span>{item.invest}</span>
//                       <span className="text-foreground/20">•</span>
//                       <span>{item.profit}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
 
export default function IdeasSection() {
  const categories = [
    {
      title: "Business Ideas",
      color: "text-[#FB8122]", // Orange color from your theme
      items: Array(5).fill({
        name: "AI-powered fitness app using 3D animations and AR for workout guidance.",
        category: "Category name",
        invest: "Invest $1K - $5K",
        profit: "85% Profit"
      })
    },
    {
      title: "App Ideas",
      color: "text-[#FB8122]",
      items: Array(5).fill({
        name: "AI-powered fitness app using 3D animations and AR for workout guidance.",
        category: "Category name",
        invest: "Invest $1K - $5K",
        profit: "85% Profit"
      })
    },
    {
      title: "Startup Ideas",
      color: "text-[#FB8122]",
      items: Array(5).fill({
        name: "AI-powered fitness app using 3D animations and AR for workout guidance.",
        category: "Category name",
        invest: "Invest $1K - $5K",
        profit: "85% Profit"
      })
    }
  ];
 
  return (
    // <section className="w-full py-6 px-4 bg-background transition-colors duration-300">
    //   <div className="container mx-auto max-w-7xl">
    <section className="w-full py-6 px-4 bg-background transition-colors duration-300">
  <div className="container mx-auto max-w-7xl border-b-2 border-dotted border-[#E6E6E6] dark:border-[#1C234D] pb-6">
       <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
         <div className="hidden lg:block absolute top-0 bottom-0 left-[33.33%] border-l-2 border-dotted border-[#E6E6E6] dark:border-[#1C234D]" />
 
          {/* ✅ Vertical Line 2 */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[66.66%] border-l-2 border-dotted border-[#E6E6E6] dark:border-[#1C234D]" />
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              {/* Category Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className={`${cat.color} font-bold text-lg mb-1`}>
                    {cat.title}
                  </h2>
                  <p className="text-xs italic text-[#4C4C4C] dark:text-[#9CB3C9]">
                    Lorem ipsum text is here now.
                  </p>
                </div>
                <Link
                  href="#"
                  className="flex items-center gap-1 text-[14px] text-foreground hover:text-primary hover:text-primary transition-colors"
                >
                  View more <ChevronRight size={14} className='mt-1' />
                </Link>
              </div>
 
              {/* Items List */}
              <div className="flex flex-col">
                {cat.items.map((item, i) => (
                  <div
                    key={i}
                    className="group cursor-pointer py-5 border-b border-dotted border-foreground/15 last:border-0"
                  >
                    <h3 className="text-[16px] font-normal leading-snug group-hover:text-primary transition-colors mb-2 text-icon">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2 text-[12px] text-foreground hover:text-primary">
                      <span>{item.category}</span>
                      <span className="text-foreground/20">•</span>
                      <span>{item.invest}</span>
                      <span className="text-foreground/20">•</span>
                      <span>{item.profit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}