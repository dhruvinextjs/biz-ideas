// "use client";
// import React, { useState } from "react";
// import {
//   Filter,
//   Grid,
//   List,
//   ArrowRight,
//   ChevronLeft,
//   ChevronRight,
//   MoreHorizontal,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { IoGridSharp, IoList } from "react-icons/io5";

// // Agar data na ho toh niche wale array ko khali [] kar dena testing ke liye
// const ideaCards = [
//   {
//     id: 1,
//     title: "Growing a GEO tool to a mid-five figure MRR within a year",
//     desc: "A subscription-based service providing automated customer support via advanced AI models.",
//     invest: "$1K - $5K",
//     margin: "85%",
//     hasImage: true,
//   },
//   {
//     id: 2,
//     title: "Eco-Friendly Packaging Solutions",
//     desc: "Provide sustainable packaging alternatives for businesses to reduce plastic waste.",
//     invest: "$1K - $5K",
//     margin: "85%",
//     hasImage: true,
//   },
//   {
//     id: 3,
//     title: "Online Skill-Based Learning Platform",
//     desc: "Offer courses in high-demand skills like coding, design, and digital marketing.",
//     invest: "$1K - $5K",
//     margin: "85%",
//     hasImage: true,
//   },
//   {
//     id: 4,
//     title: "Healthy Meal Subscription Service",
//     desc: "Deliver nutritious, ready-to-eat meals tailored to different diets and lifestyles.",
//     invest: "$1K - $5K",
//     margin: "85%",
//     hasImage: true,
//   },
//   {
//     id: 5,
//     title: "Digital Marketing Agency Services",
//     desc: "Help small businesses grow through SEO, social media, and paid advertising.",
//     invest: "$1K - $5K",
//     margin: "85%",
//     hasImage: true,
//   },
//   {
//     id: 6,
//     title: "Home Cleaning & Sanitization Services",
//     desc: "Offer professional, on-demand cleaning services for homes and offices.",
//     invest: "$1K - $5K",
//     margin: "85%",
//     hasImage: true,
//   },
//   {
//     id: 7,
//     title: "Dropshipping E-commerce Store",
//     desc: "Sell trending products online without holding inventory.",
//     invest: "$1K - $5K",
//     margin: "85%",
//     hasImage: true,
//   },
//   {
//     id: 8,
//     title: "Fitness Coaching & Personal Training",
//     desc: "Provide online or offline fitness programs customized to individual goals.",
//     invest: "$1K - $5K",
//     margin: "85%",
//     hasImage: true,
//   },
//   {
//     id: 9,
//     title: "Mobile Car Wash & Detailing Service",
//     desc: "Offer doorstep car cleaning services for convenience-focused customers.",
//     invest: "$1K - $5K",
//     margin: "85%",
//     hasImage: true,
//   },
// ];

// export default function ListingPage() {
//   const [viewMode, setViewMode] = useState("grid");

//   return (
//     <div className="min-h-screen bg-background text-foreground p-4 md:p-8 mt-20 font-sans transition-colors duration-300">
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto mb-8 border-b border-gray-200 dark:border-white/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
//             Business Ideas
//           </h1>
//           <p className="text-sm text-icon">
//             Discover and filter through 1000+ profitable business opportunities.
//           </p>
//         </div>
//         <div className="flex items-center gap-4">
//           <span className="text-sm font-medium text-icon">
//             Showing {ideaCards.length > 0 ? `1-${ideaCards.length}` : "0"} of 1,245
//           </span>
//           <div className="flex bg-card rounded-md p-1 border border-gray-200 dark:border-white/5">
//             <button
//               onClick={() => setViewMode("grid")}
//               className={`p-1.5 rounded ${
//                 viewMode === "grid"
//                   ? "bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white"
//                   : "text-foreground hover:text-gray-900 dark:hover:text-white"
//               }`}
//             >
//               <IoGridSharp size={18} />
//             </button>
//             <button
//               onClick={() => setViewMode("list")}
//               className={`p-1.5 rounded ${
//                 viewMode === "list"
//                   ? "bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white"
//                   : "text-foreground hover:text-gray-900 dark:hover:text-white"
//               }`}
//             >
//               <IoList size={18} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
//         {/* Sidebar Filters */}
//         <aside className="w-full lg:w-[280px] shrink-0">
//           <div className="bg-card rounded-xl p-6 border border-gray-200 dark:border-white/5 sticky top-8">
//             <div className="flex items-center gap-2 mb-6 text-icon border-b border-gray-200 dark:border-white/10 pb-4">
//               <Filter size={20} />
//               <h2 className="text-xl font-bold">Filters</h2>
//             </div>

//             <div className="space-y-6">
//               <FilterSection
//                 title="INVESTMENT"
//                 options={["$0 - $2K", "$2K - $5K", "$5K - $20K", "$20K+"]}
//                 checkedIndex={0}
//               />
//               <FilterSection
//                 title="INDUSTRY"
//                 options={[
//                   "AI & Tech",
//                   "SaaS",
//                   "E-Commerce",
//                   "Local Business",
//                   "Services",
//                 ]}
//                 checkedIndex={0}
//               />
//               <FilterSection
//                 title="TEAM SIZE"
//                 options={[
//                   "Solo (1)",
//                   "Small (2-5)",
//                   "Medium (6-15)",
//                   "Large (15+)",
//                 ]}
//               />
//               <FilterSection
//                 title="PROFIT MARGIN"
//                 options={["0-20%", "21-50%", "51-80%", "80%+"]}
//               />
//             </div>

//             <button className="w-full mt-8 bg-[#FB8122] text-white font-semibold py-3 rounded-full transition-colors tracking-wide text-md">
//               Apply Filters
//             </button>
//           </div>
//         </aside>

//         {/* Card Grid / List Container */}
//         <div className="flex-1">
//           {ideaCards.length > 0 ? (
//             <>
//               <div
//                 className={
//                   viewMode === "grid"
//                     ? "grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
//                     : "flex flex-col gap-4"
//                 }
//               >
//                 {ideaCards.map((card) =>
//                   viewMode === "grid" ? (
//                     <Link
//                       href={`/business-ideas-listing/${card.id}`}
//                       key={card.id}
//                       className="bg-card rounded-xl overflow-hidden flex flex-col border border-transparent hover:border-primary/50 transition-colors group cursor-pointer"
//                     >
//                       <div className="h-48 p-4">
//                         <div className="w-full h-full bg-gray-200 dark:bg-white/10 relative overflow-hidden rounded-lg">
//                           {card.hasImage && (
//                             <Image
//                               src="/images/startup-sketch.png"
//                               alt="startup image"
//                               fill
//                               className="object-cover rounded-lg"
//                             />
//                           )}
//                         </div>
//                       </div>
//                       <div className="p-4 flex flex-col flex-1">
//                         <h3 className="text-xl font-normal text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-primary transition-colors">
//                           {card.title}
//                         </h3>
//                         <p className="text-sm leading-relaxed mb-4 min-h-[65px]">
//                           {card.desc}
//                         </p>
//                         {/* <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-200 dark:border-white/10">
//                           <div className="flex gap-6 items-center"> */}
//                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-white/10">
//   <div className="flex items-center gap-15">
//                             <div>
//                               <p className="text-sm text-[#4C4C4C] dark:text-[#9CB3C9] tracking-wider mb-1">
//                                 Invest
//                               </p>
//                               <p className="font-semibold text-icon text-sm">
//                                 {card.invest}
//                               </p>
//                             </div>
//                             <div>
//                               <p className="text-sm text-[#4C4C4C] dark:text-[#9CB3C9] tracking-wider mb-1">
//                                 Margin
//                               </p>
//                               <p className="font-semibold text-green-500 text-sm">
//                                 {card.margin}
//                               </p>
//                             </div>
//                           </div>
//                           <button className="bg-primary text-white p-2 rounded-full hover:scale-105 transition-transform">
//                             <ArrowRight size={18} />
//                           </button>
//                         </div>
//                       </div>
//                     </Link>
//                   ) : (
//                     <Link
//                       href={`/business-ideas-listing/${card.id}`}
//                       key={card.id}
//                       className="bg-card rounded-xl p-3 flex flex-col md:flex-row items-start md:items-center gap-5 border border-transparent hover:border-primary/50 transition-colors group cursor-pointer"
//                     >
//                       <div className="w-full md:w-[240px] h-[140px] md:h-[130px] bg-gray-200 dark:bg-white/10 relative overflow-hidden rounded-lg shrink-0">
//                         <Image
//                           src="/images/startup-sketch.png"
//                           alt="startup image"
//                           fill
//                           className="object-cover rounded-lg"
//                         />
//                       </div>
//                       <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
//                         <div className="flex-1 max-w-xl">
//                           <h3 className="text-lg md:text-xl font-normal text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-primary transition-colors">
//                             {card.title}
//                           </h3>
//                           <p className="text-sm text-[#4C4C4C] dark:text-[#9CB3C9] leading-relaxed line-clamp-2">
//                             {card.desc}
//                           </p>
//                         </div>
//                         <div className="flex items-center gap-6 md:gap-8 shrink-0 pb-2 md:pb-0">
//                           <div>
//                             <p className="text-sm text-[#4C4C4C] dark:text-[#9CB3C9] tracking-wider mb-1">
//                               Invest
//                             </p>
//                             <p className="font-semibold text-icon text-sm">
//                               {card.invest}
//                             </p>
//                           </div>
//                           <div>
//                             <p className="text-sm text-[#4C4C4C] dark:text-[#9CB3C9] tracking-wider mb-1">
//                               Margin
//                             </p>
//                             <p className="font-semibold text-green-500 text-sm">
//                               {card.margin}
//                             </p>
//                           </div>
//                           <button className="bg-primary text-white p-2 rounded-full group-hover:scale-105 transition-transform shrink-0">
//                             <ArrowRight size={18} />
//                           </button>
//                         </div>
//                       </div>
//                     </Link>
//                   )
//                 )}
//               </div>

//               {/* Pagination (Only shows if data exists) */}
//               <div className="flex justify-center items-center gap-2 mt-12 mb-8">
//                 <PaginationButton icon={<ChevronLeft size={16} />} disabled />
//                 <PaginationButton active>1</PaginationButton>
//                 <PaginationButton>2</PaginationButton>
//                 <PaginationButton>3</PaginationButton>
//                 <PaginationButton icon={<MoreHorizontal size={16} />} disabled />
//                 <PaginationButton>16</PaginationButton>
//                 <PaginationButton icon={<ChevronRight size={16} />} />
//               </div>
//             </>
//           ) : (
//             /* --- NO DATA STATE (Exact as Screenshot) --- */
//             <div className="flex flex-col items-center justify-center py-20 px-4 text-center min-h-[500px]">
//               <div className="relative w-64 h-64 mb-8">
//                 {/* Light Mode Image */}
//                 <Image
//                   src="/images/no-data-light2.png"
//                   alt="No ideas found"
//                   fill
//                   className="object-contain dark:hidden"
//                 />
//                 {/* Dark Mode Image */}
//                 <Image
//                   src="/images/no-data-dark.png"
//                   alt="No ideas found"
//                   fill
//                   className="object-contain hidden dark:block"
//                 />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//                 No Business Ideas Yet
//               </h2>
//               <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto text-sm leading-relaxed">
//                 We're working on adding high-quality business ideas. Stay tuned!
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Helper Components
// function FilterSection({ title, options, checkedIndex = -1 }) {
//   return (
//     <div>
//       <h3 className="text-xs font-normal tracking-wider mb-3 uppercase text-icon">
//         {title}
//       </h3>
//       <div className="space-y-2.5">
//         {options.map((opt, idx) => (
//           <label
//             key={idx}
//             className="flex items-center gap-3 cursor-pointer group"
//           >
//             <input
//               type="checkbox"
//               defaultChecked={idx === checkedIndex}
//               className="w-4 h-4 rounded border-gray-400 dark:border-white/20 bg-transparent text-primary focus:ring-primary focus:ring-offset-background accent-[#0059DE]"
//             />
//             <span className="text-sm group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
//               {opt}
//             </span>
//           </label>
//         ))}
//       </div>
//     </div>
//   );
// }

// function PaginationButton({ children, active, disabled, icon }) {
//   return (
//     <button
//       disabled={disabled}
//       className={`w-9 h-9 flex items-center justify-center rounded-md text-sm transition-colors
//         ${
//           active
//             ? "bg-primary text-white font-medium"
//             : "bg-card text-foreground hover:bg-gray-200 dark:hover:bg-white/10"
//         }
//         ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
//       `}
//     >
//       {icon || children}
//     </button>
//   );
// }


"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBusinessIdeas, fetchFilteredIdeas  } from "@/redux/slices/BusinessideasSlice"; 
import { toast } from "react-hot-toast";
import {
  Filter,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IoGridSharp, IoList } from "react-icons/io5";
  
export default function ListingPage() {
  const [viewMode, setViewMode] = useState("grid");

  const dispatch = useDispatch();
  // Redux store se values access karna
 const [selectedFilters, setSelectedFilters] = useState({
  investment: "",
  industry: "",
  teamSize: "",
  profitMargin: "",
});

const { ideas, loading, error, totalCount, filterLoading } = useSelector(
  (state) => state.businessIdeas
);



  useEffect(() => {
    dispatch(fetchBusinessIdeas());
  }, [dispatch]);

  const handleFilterChange = (category, value) => {
  setSelectedFilters((prev) => ({
    ...prev,
    // ✅ Same value dobara click karo to deselect ho
    [category]: prev[category] === value ? "" : value,
  }));
};

const handleApplyFilters = async () => {
  const hasFilter = Object.values(selectedFilters).some((v) => v !== "");

  if (!hasFilter) {
    // Koi filter nahi → sab fetch karo
    dispatch(fetchBusinessIdeas());
    return;
  }

  const result = await dispatch(fetchFilteredIdeas(selectedFilters));

  if (fetchFilteredIdeas.fulfilled.match(result)) {
    const count = result.payload?.count || 0;
    toast.success(
      count > 0
        ? `${count} ideas found!`
        : "No ideas found for selected filters",
      { position: "top-right" }
    );
  } else {
    toast.error("Failed to apply filters. Please try again.", {
      position: "top-right",
    });
  }
};

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 mt-20 font-sans transition-colors duration-300">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8 border-b border-gray-200 dark:border-white/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Business Ideas
          </h1>
          <p className="text-sm text-icon">
            Discover and filter through 1000+ profitable business opportunities.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-icon">
            Showing {ideas.length > 0 ? `1-${ideas.length}` : "0"} of {totalCount || 1245}
          </span>
          <div className="flex bg-card rounded-md p-1 border border-gray-200 dark:border-white/5">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-1.5 rounded ${
                viewMode === "grid"
                  ? "bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white"
                  : "text-foreground hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <IoGridSharp size={18} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-1.5 rounded ${
                viewMode === "list"
                  ? "bg-gray-200 dark:bg-white/10 text-gray-900 dark:text-white"
                  : "text-foreground hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              <IoList size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
  {/* Sidebar Filters */}
<aside className="w-full lg:w-[280px] shrink-0">
  <div className="bg-card rounded-xl p-6 border border-gray-200 dark:border-white/5 sticky top-8">
    <div className="flex items-center gap-2 mb-6 text-icon border-b border-gray-200 dark:border-white/10 pb-4">
      <Filter size={20} />
      <h2 className="text-xl font-bold">Filters</h2>
    </div>

    <div className="space-y-6">
      <FilterSection
        title="INVESTMENT"
        category="investment"
        options={["$0 - $2K", "$2K - $5K", "$5K - $20K", "$20K+"]}
        selectedValue={selectedFilters.investment}
        onFilterChange={handleFilterChange}
      />
      <FilterSection
        title="INDUSTRY"
        category="industry"
        options={["AI & Tech", "SaaS", "E-Commerce", "Local Business", "Services"]}
        selectedValue={selectedFilters.industry}
        onFilterChange={handleFilterChange}
      />
      <FilterSection
        title="TEAM SIZE"
        category="teamSize"
        options={["Solo (1)", "Small (2-5)", "Medium (6-15)", "Large (15+)"]}
        selectedValue={selectedFilters.teamSize}
        onFilterChange={handleFilterChange}
      />
      <FilterSection
        title="PROFIT MARGIN"
        category="profitMargin"
        options={["0-20%", "21-50%", "51-80%", "80%+"]}
        selectedValue={selectedFilters.profitMargin}
        onFilterChange={handleFilterChange}
      />
    </div>

    <button
      onClick={handleApplyFilters}
      disabled={filterLoading}
      className="w-full mt-8 bg-[#FB8122] text-white font-semibold py-3 rounded-full transition-colors tracking-wide text-md disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {filterLoading ? "Applying..." : "Apply Filters"}
    </button>
  </div>
</aside>
        {/* Card Grid / List Container */}
        <div className="flex-1">
          {ideas.length > 0 ? (
            <>
              <div
                className={
                  viewMode === "grid"
                    ? "grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : "flex flex-col gap-4"
                }
              >
                {ideas.map((card) =>
                  viewMode === "grid" ? (
                    // =============== GRID VIEW COMPONENT ===============
                    <Link
                      href={`/business-ideas-listing/${card._id}`}
                      key={card._id}
                      className="bg-card rounded-xl overflow-hidden flex flex-col border border-transparent hover:border-primary/50 transition-colors group cursor-pointer"
                    >
                      <div className="h-48 p-4">
                        <div className="w-full h-full bg-gray-200 dark:bg-white/10 relative overflow-hidden rounded-lg">
                          {card.image && (
                            <Image
                              src={card.image || "/images/startup-sketch.png"}
                              alt="startup image"
                              fill
                              className="object-cover rounded-lg"
                            />
                          )}
                        </div>
                      </div>
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="text-xl font-normal text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-primary transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-sm leading-relaxed mb-4 min-h-[65px] line-clamp-3">
                          {card.description}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-white/10">
                          <div className="flex items-center gap-15">
                            <div>
                              <p className="text-sm text-[#4C4C4C] dark:text-[#9CB3C9] tracking-wider mb-1">
                                Invest
                              </p>
                              <p className="font-semibold text-icon text-sm">
                                ${card.investmentMin} - ${card.investmentMax}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-[#4C4C4C] dark:text-[#9CB3C9] tracking-wider mb-1">
                                Margin
                              </p>
                              <p className="font-semibold text-green-500 text-sm">
                                {card.profitMargin}%
                              </p>
                            </div>
                          </div>
                          <button className="bg-primary text-white p-2 rounded-full hover:scale-105 transition-transform">
                            <ArrowRight size={18} />
                          </button>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    // =============== LIST VIEW COMPONENT ===============
                    <Link
                      href={`/business-ideas-listing/${card._id}`}
                      key={card._id}
                      className="bg-card rounded-xl p-3 flex flex-col md:flex-row items-start md:items-center gap-5 border border-transparent hover:border-primary/50 transition-colors group cursor-pointer"
                    >
                      <div className="w-full md:w-[240px] h-[140px] md:h-[130px] bg-gray-200 dark:bg-white/10 relative overflow-hidden rounded-lg shrink-0">
                        <Image
                          src={card.image || "/images/startup-sketch.png"}
                          alt="startup image"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
                        <div className="flex-1 max-w-xl">
                          <h3 className="text-lg md:text-xl font-normal text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-primary transition-colors">
                            {card.title}
                          </h3>
                          <p className="text-sm text-[#4C4C4C] dark:text-[#9CB3C9] leading-relaxed line-clamp-2">
                            {card.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-6 md:gap-8 shrink-0 pb-2 md:pb-0">
                          <div>
                            <p className="text-sm text-[#4C4C4C] dark:text-[#9CB3C9] tracking-wider mb-1">
                              Invest
                            </p>
                            <p className="font-semibold text-icon text-sm">
                              ${card.investmentMin} - ${card.investmentMax}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-[#4C4C4C] dark:text-[#9CB3C9] tracking-wider mb-1">
                              Margin
                            </p>
                            <p className="font-semibold text-green-500 text-sm">
                              {card.profitMargin}%
                            </p>
                          </div>
                          <button className="bg-primary text-white p-2 rounded-full group-hover:scale-105 transition-transform shrink-0">
                            <ArrowRight size={18} />
                          </button>
                        </div>
                      </div>
                    </Link>
                  )
                )}
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-2 mt-12 mb-8">
                <PaginationButton icon={<ChevronLeft size={16} />} disabled />
                <PaginationButton active>1</PaginationButton>
                <PaginationButton>2</PaginationButton>
                <PaginationButton>3</PaginationButton>
                <PaginationButton icon={<MoreHorizontal size={16} />} disabled />
                <PaginationButton>16</PaginationButton>
                <PaginationButton icon={<ChevronRight size={16} />} />
              </div>
            </>
          ) : (
            /* --- NO DATA STATE --- */
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center min-h-[500px]">
              <div className="relative w-64 h-64 mb-8">
                <Image
                  src="/images/no-data-light2.png"
                  alt="No ideas found"
                  fill
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/images/no-data-dark.png"
                  alt="No ideas found"
                  fill
                  className="object-contain hidden dark:block"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                No Business Ideas Yet
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto text-sm leading-relaxed">
                We're working on adding high-quality business ideas. Stay tuned!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ✅ NAYA - dynamic, radio-style single select
function FilterSection({ title, category, options, selectedValue, onFilterChange }) {
  return (
    <div>
      <h3 className="text-xs font-normal tracking-wider mb-3 uppercase text-icon">
        {title}
      </h3>
      <div className="space-y-2.5">
        {options.map((opt, idx) => (
          <label key={idx} className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={selectedValue === opt}
              onChange={() => onFilterChange(category, opt)}
              className="w-4 h-4 rounded border-gray-400 dark:border-white/20 bg-transparent text-primary focus:ring-primary focus:ring-offset-background accent-[#0059DE]"
            />
            <span className="text-sm group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
              {opt}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

function PaginationButton({ children, active, disabled, icon }) {
  return (
    <button
      disabled={disabled}
      className={`w-9 h-9 flex items-center justify-center rounded-md text-sm transition-colors
        ${
          active
            ? "bg-primary text-white font-medium"
            : "bg-card text-foreground hover:bg-gray-200 dark:hover:bg-white/10"
        }
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {icon || children}
    </button>
  );
}