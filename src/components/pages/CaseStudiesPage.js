// "use client";
// import React, { useEffect, useState, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCaseStudies, fetchFilteredCaseStudies } from "@/redux/slices/CasesudieSlice";
// import { toast } from "react-hot-toast";
// import { Filter, ArrowRight, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// // ── Constants ──────────────────────────────────────────────
// const REVENUE_MIN = 0;
// const REVENUE_MAX = 1200;   // in $K/m
// const TEAM_MIN    = 1;
// const TEAM_MAX    = 100;

// export default function CaseStudiesPage() {
//   const dispatch = useDispatch();

//   const { caseStudies, loading, count, total, totalPages, filterLoading } = useSelector(
//     (state) => state.caseStudies
//   );

//   const hasData = caseStudies.length > 0;

//   useEffect(() => {
//     dispatch(fetchCaseStudies());
//   }, [dispatch]);

//   const [selectedFilters, setSelectedFilters] = useState({
//     sortBy: "Newest",
//     industry: "",
//     teamSize: "",
//     profitMargin: "",
//     investment: "",
//     // ── NEW dynamic range fields ──
//     revenueMin: REVENUE_MIN,
//     revenueMax: REVENUE_MAX,
//     teamSizeMin: TEAM_MIN,
//     teamSizeMax: TEAM_MAX,
//   });

//   const handleFilterChange = (category, value) => {
//     setSelectedFilters((prev) => ({
//       ...prev,
//       [category]: prev[category] === value ? "" : value,
//     }));
//   };

//   // ✅ Handler for dual-range sliders
//   const handleRangeChange = (key, value) => {
//     setSelectedFilters((prev) => ({ ...prev, [key]: value }));
//   };

//   const handleApplyFilters = async () => {
//     const hasFilter = Object.entries(selectedFilters).some(([key, val]) => {
//       if (key === "sortBy") return false;
//       if (key === "revenueMin") return val !== REVENUE_MIN;
//       if (key === "revenueMax") return val !== REVENUE_MAX;
//       if (key === "teamSizeMin") return val !== TEAM_MIN;
//       if (key === "teamSizeMax") return val !== TEAM_MAX;
//       return val !== "";
//     });

//     if (!hasFilter) {
//       dispatch(fetchCaseStudies());
//       return;
//     }

//     const result = await dispatch(fetchFilteredCaseStudies(selectedFilters));

//     if (fetchFilteredCaseStudies.fulfilled.match(result)) {
//       const count = result.payload?.count || 0;
//       toast.success(
//         count > 0 ? `${count} case studies found!` : "No case studies found for selected filters",
//         { position: "top-right" }
//       );
//     } else {
//       toast.error("Failed to apply filters. Please try again.", { position: "top-right" });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background text-foreground p-4 md:p-8 mt-20 font-sans transition-colors duration-300">

//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto mb-8 border-b border-gray-200 dark:border-white/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
//             Case Studies
//           </h1>
//           <p className="text-sm text-icon">
//             Explore how innovative ideas turned into success dollar business through strategy, design, and execution.
//           </p>
//         </div>
//         <div className="flex items-center gap-4">
//           <span className="text-sm font-medium text-icon">
//             {loading ? (
//               "Loading stats..."
//             ) : hasData ? (
//               `Showing 1-${caseStudies.length} of ${total || count}`
//             ) : (
//               "Showing 0 of 0"
//             )}
//           </span>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

//         {/* Sidebar Filters */}
//         <aside className="w-full lg:w-[280px] shrink-0">
//           <div className="bg-card rounded-xl p-6 border border-gray-200 dark:border-white/5 sticky top-8">
//             <div className="flex items-center gap-2 mb-6 text-icon border-b border-gray-200 dark:border-white/10 pb-4">
//               <Filter size={20} />
//               <h2 className="text-xl font-bold text-icon">Filters</h2>
//             </div>

//             <div className="space-y-8">
//               {/* Sort By */}
//               <div>
//                 <h3 className="text-xs font-bold text-icon tracking-wider mb-4 uppercase">SORT BY</h3>
//                 <div className="space-y-3">
//                   {["Newest", "Oldest", "Highest Revenue", "Lowest Revenue"].map((opt, idx) => (
//                     <label key={idx} className="flex items-center gap-3 cursor-pointer group">
//                       <div
//                         onClick={() => handleFilterChange("sortBy", opt)}
//                         className={`w-4 h-4 rounded-full border flex items-center justify-center cursor-pointer ${
//                           selectedFilters.sortBy === opt
//                             ? "border-[#0059DE]"
//                             : "border-gray-400 dark:border-[#CCCCCC]"
//                         }`}
//                       >
//                         {selectedFilters.sortBy === opt && (
//                           <div className="w-2 h-2 bg-[#0059DE] rounded-full"></div>
//                         )}
//                       </div>
//                       <span className="text-sm dark:text-[#CCCCCC] group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
//                         {opt}
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//               </div>

//               {/* ✅ Monthly Revenue — dynamic dual range */}
//               <div>
//                 <h3 className="text-xs font-bold tracking-wider mb-4 uppercase text-icon">MONTHLY REVENUE</h3>
//                 <DualRangeSlider
//                   min={REVENUE_MIN}
//                   max={REVENUE_MAX}
//                   step={10}
//                   valueMin={selectedFilters.revenueMin}
//                   valueMax={selectedFilters.revenueMax}
//                   onChangeMin={(v) => handleRangeChange("revenueMin", v)}
//                   onChangeMax={(v) => handleRangeChange("revenueMax", v)}
//                   formatLabel={(v) => v >= 1000 ? `${(v / 1000).toFixed(1)}M` : `${v}k`}
//                 />
//               </div>

//               {/* ✅ Company Size — dynamic dual range */}
//               <div>
//                 <h3 className="text-xs font-bold tracking-wider mb-4 uppercase text-icon">COMPANY SIZE</h3>
//                 <DualRangeSlider
//                   min={TEAM_MIN}
//                   max={TEAM_MAX}
//                   step={1}
//                   valueMin={selectedFilters.teamSizeMin}
//                   valueMax={selectedFilters.teamSizeMax}
//                   onChangeMin={(v) => handleRangeChange("teamSizeMin", v)}
//                   onChangeMax={(v) => handleRangeChange("teamSizeMax", v)}
//                   formatLabel={(v) => `${v}`}
//                 />
//               </div>

//               {/* Industry */}
//               <div>
//                 <h3 className="text-xs font-bold tracking-wider mb-4 uppercase text-icon">INDUSTRY</h3>
//                 <div className="space-y-3">
//                   {["Marketing", "Advertising", "Analytics", "Real Estate", "Automations"].map((opt, idx) => (
//                     <label key={idx} className="flex items-center gap-3 cursor-pointer group">
//                       <input
//                         type="checkbox"
//                         checked={selectedFilters.industry === opt}
//                         onChange={() => handleFilterChange("industry", opt)}
//                         className="w-4 h-4 rounded border-gray-400 dark:border-white/20 bg-transparent text-primary focus:ring-primary focus:ring-offset-background accent-[#0059DE]"
//                       />
//                       <span className="text-sm group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
//                         {opt}
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Apply Button */}
//             <button
//               onClick={handleApplyFilters}
//               disabled={filterLoading}
//               className="w-full mt-8 bg-primary hover:bg-orange-500 text-white font-medium py-3 rounded-4xl transition-colors shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {filterLoading ? "Applying..." : "Apply Filters"}
//             </button>
//           </div>
//         </aside>

//         {/* Case Studies Content Area */}
//         <div className="flex-1">
//           {loading ? (
//             <div className="text-center py-20 text-gray-500 text-sm font-medium">
//               Loading dynamic case stories...
//             </div>
//           ) : hasData ? (
//             <>
//               <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
//                 {caseStudies.map((study, index) => (
//                   <Link
//                     href={`/case-studies/${study._id}`}
//                     key={study._id || index}
//                     className="bg-card rounded-xl p-6 border border-gray-200 dark:border-white/5 flex flex-col hover:border-primary/50 transition-all hover:shadow-lg group"
//                   >
//                     <div className="flex-1">
//                       <h3 className="text-lg font-normal text-icon leading-snug mb-3 group-hover:text-primary transition-colors">
//                         {study.title}
//                       </h3>
//                       <p className="text-sm leading-relaxed text-gray-600 dark:text-[#9CB3C9] mb-6 line-clamp-3">
//                         {study.excerpt || study.content}
//                       </p>
//                     </div>

//                     <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-white/10">
//                       <div className="text-sm">
//                         <span className="text-gray-500 dark:text-[#FFFFFF]">
//                           {study.companyName || "Company name"}
//                         </span>
//                         <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
//                         <span className="font-semibold text-[#38D051]">
//                           Revenue ${study.monthlyRevenue || 0}K/m
//                         </span>
//                       </div>

//                       <button className="flex items-center gap-2 bg-primary hover:bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-transform group-hover:scale-105">
//                         Read full Story <ArrowRight size={16} />
//                       </button>
//                     </div>
//                   </Link>
//                 ))}
//               </div>

//               {/* Pagination */}
//               <div className="flex justify-center items-center gap-2 mt-12 mb-8">
//                 <PaginationButton icon={<ChevronLeft size={16} />} disabled />
//                 <PaginationButton active>1</PaginationButton>
//                 <PaginationButton>2</PaginationButton>
//                 <PaginationButton>3</PaginationButton>
//                 <PaginationButton icon={<MoreHorizontal size={16} />} disabled />
//                 <PaginationButton>{totalPages || 1}</PaginationButton>
//                 <PaginationButton icon={<ChevronRight size={16} />} />
//               </div>
//             </>
//           ) : (
//             /* --- NO DATA EMPTY STATE --- */
//             <div className="flex flex-col items-center justify-center py-20 px-4 text-center min-h-[500px] bg-card rounded-xl border border-dashed border-gray-300 dark:border-white/10">
//               <div className="relative w-64 h-64 mb-6">
//                 <Image
//                   src="/images/no-data-light2.png"
//                   alt="No case studies"
//                   fill
//                   className="object-contain dark:hidden"
//                 />
//                 <Image
//                   src="/images/no-data-dark.png"
//                   alt="No case studies"
//                   fill
//                   className="object-contain hidden dark:block"
//                 />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//                 No Case Studies Yet
//               </h2>
//               <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto text-sm leading-relaxed">
//                 We'll soon share real startup case studies and insights.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ── ✅ Functional Dual Range Slider ──────────────────────────
// // Same visual as DualRangeMock: grey track, blue fill, white thumbs with blue border, value boxes below
// function DualRangeSlider({ min, max, step, valueMin, valueMax, onChangeMin, onChangeMax, formatLabel }) {
//   const percent = useCallback(
//     (v) => ((v - min) / (max - min)) * 100,
//     [min, max]
//   );

//   const handleMinChange = (e) => {
//     const v = Number(e.target.value);
//     if (v < valueMax) onChangeMin(v);
//   };

//   const handleMaxChange = (e) => {
//     const v = Number(e.target.value);
//     if (v > valueMin) onChangeMax(v);
//   };

//   const leftPct  = percent(valueMin);
//   const rightPct = percent(valueMax);

//   return (
//     <div>
//       {/* Track + thumbs */}
//       <div className="relative h-1 bg-gray-300 dark:bg-[#D9D9D9] rounded-full mb-4 mt-2 mx-2">
//         {/* Blue fill between thumbs */}
//         <div
//           className="absolute h-full bg-[#0059DE] rounded-full"
//           style={{ left: `${leftPct}%`, right: `${100 - rightPct}%` }}
//         />

//         {/* MIN thumb (hidden native input) */}
//         <input
//           type="range"
//           min={min}
//           max={max}
//           step={step}
//           value={valueMin}
//           onChange={handleMinChange}
//           className="absolute w-full h-full opacity-0 cursor-pointer"
//           style={{ zIndex: valueMin > max - 10 ? 5 : 3 }}
//         />
//         {/* MAX thumb (hidden native input) */}
//         <input
//           type="range"
//           min={min}
//           max={max}
//           step={step}
//           value={valueMax}
//           onChange={handleMaxChange}
//           className="absolute w-full h-full opacity-0 cursor-pointer"
//           style={{ zIndex: 4 }}
//         />

//         {/* Visual MIN thumb */}
//         <div
//           className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#0059DE] rounded-full shadow pointer-events-none"
//           style={{ left: `calc(${leftPct}% - 8px)` }}
//         />
//         {/* Visual MAX thumb */}
//         <div
//           className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#0059DE] rounded-full shadow pointer-events-none"
//           style={{ left: `calc(${rightPct}% - 8px)` }}
//         />
//       </div>

//       {/* Value boxes — same design as DualRangeMock */}
//       <div className="flex items-center justify-between gap-3">
//         <div className="flex-1 dark:bg-[#1D2659] border border-gray-300 dark:border-white/10 rounded-md p-2 flex items-center justify-center">
//           <span className="text-sm text-gray-900 dark:text-white">{formatLabel(valueMin)}</span>
//         </div>
//         <span className="text-sm text-gray-500">to</span>
//         <div className="flex-1 dark:bg-[#1D2659] border border-gray-300 dark:border-white/10 rounded-md p-2 flex items-center justify-center">
//           <span className="text-sm text-gray-900 dark:text-white">{formatLabel(valueMax)}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PaginationButton({ children, active, disabled, icon }) {
//   return (
//     <button
//       disabled={disabled}
//       className={`w-9 h-9 flex items-center justify-center rounded-md text-sm transition-colors
//         ${active ? "bg-primary text-white font-medium shadow-md shadow-primary/30" : "bg-card text-foreground hover:bg-gray-200 dark:hover:bg-white/10"}
//         ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
//       `}
//     >
//       {icon || children}
//     </button>
//   );
// }

"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCaseStudies, fetchFilteredCaseStudies } from "@/redux/slices/CasesudieSlice";
import { toast } from "react-hot-toast";
import { Filter, ArrowRight, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const REVENUE_MIN = 0;
const REVENUE_MAX = 1200;
const TEAM_MIN    = 1;
const TEAM_MAX    = 100;
const ITEMS_PER_PAGE = 6;

export default function CaseStudiesPage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const { caseStudies, loading, count, total, totalPages, filterLoading } = useSelector(
    (state) => state.caseStudies
  );

  const hasData = caseStudies.length > 0;

  useEffect(() => {
    dispatch(fetchCaseStudies());
  }, [dispatch]);

  // ✅ Pagination Logic
  const computedTotalPages = Math.ceil(caseStudies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedStudies = caseStudies.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page < 1 || page > computedTotalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = () => {
    const pages = [];
    if (computedTotalPages <= 5) {
      for (let i = 1; i <= computedTotalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", computedTotalPages);
      } else if (currentPage >= computedTotalPages - 2) {
        pages.push(1, "...", computedTotalPages - 2, computedTotalPages - 1, computedTotalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", computedTotalPages);
      }
    }
    return pages;
  };

  const [selectedFilters, setSelectedFilters] = useState({
    sortBy: "Newest",
    industry: "",
    teamSize: "",
    profitMargin: "",
    investment: "",
    revenueMin: REVENUE_MIN,
    revenueMax: REVENUE_MAX,
    teamSizeMin: TEAM_MIN,
    teamSizeMax: TEAM_MAX,
  });

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category] === value ? "" : value,
    }));
  };

  const handleRangeChange = (key, value) => {
    setSelectedFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApplyFilters = async () => {
    const hasFilter = Object.entries(selectedFilters).some(([key, val]) => {
      if (key === "sortBy") return false;
      if (key === "revenueMin") return val !== REVENUE_MIN;
      if (key === "revenueMax") return val !== REVENUE_MAX;
      if (key === "teamSizeMin") return val !== TEAM_MIN;
      if (key === "teamSizeMax") return val !== TEAM_MAX;
      return val !== "";
    });

    setCurrentPage(1);

    if (!hasFilter) {
      dispatch(fetchCaseStudies());
      return;
    }

    const result = await dispatch(fetchFilteredCaseStudies(selectedFilters));

    if (fetchFilteredCaseStudies.fulfilled.match(result)) {
      const count = result.payload?.count || 0;
      toast.success(
        count > 0 ? `${count} case studies found!` : "No case studies found for selected filters",
        { position: "top-right" }
      );
    } else {
      toast.error("Failed to apply filters. Please try again.", { position: "top-right" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 mt-20 font-sans transition-colors duration-300">

      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8 border-b border-gray-200 dark:border-white/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Case Studies
          </h1>
          <p className="text-sm text-icon">
            Explore how innovative ideas turned into success dollar business through strategy, design, and execution.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-icon">
            {loading ? (
              "Loading stats..."
            ) : hasData ? (
              `Showing ${startIndex + 1}-${Math.min(startIndex + ITEMS_PER_PAGE, caseStudies.length)} of ${caseStudies.length}`
            ) : (
              "Showing 0 of 0"
            )}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* Sidebar Filters */}
        <aside className="w-full lg:w-[280px] shrink-0">
          <div className="bg-card rounded-xl p-6 border border-gray-200 dark:border-white/5 sticky top-8">
            <div className="flex items-center gap-2 mb-6 text-icon border-b border-gray-200 dark:border-white/10 pb-4">
              <Filter size={20} />
              <h2 className="text-xl font-bold text-icon">Filters</h2>
            </div>

            <div className="space-y-8">
              {/* Sort By */}
              <div>
                <h3 className="text-xs font-bold text-icon tracking-wider mb-4 uppercase">SORT BY</h3>
                <div className="space-y-3">
                  {["Newest", "Oldest", "Highest Revenue", "Lowest Revenue"].map((opt, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                      <div
                        onClick={() => handleFilterChange("sortBy", opt)}
                        className={`w-4 h-4 rounded-full border flex items-center justify-center cursor-pointer ${
                          selectedFilters.sortBy === opt
                            ? "border-[#0059DE]"
                            : "border-gray-400 dark:border-[#CCCCCC]"
                        }`}
                      >
                        {selectedFilters.sortBy === opt && (
                          <div className="w-2 h-2 bg-[#0059DE] rounded-full"></div>
                        )}
                      </div>
                      <span className="text-sm dark:text-[#CCCCCC] group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Monthly Revenue */}
              <div>
                <h3 className="text-xs font-bold tracking-wider mb-4 uppercase text-icon">MONTHLY REVENUE</h3>
                <DualRangeSlider
                  min={REVENUE_MIN}
                  max={REVENUE_MAX}
                  step={10}
                  valueMin={selectedFilters.revenueMin}
                  valueMax={selectedFilters.revenueMax}
                  onChangeMin={(v) => handleRangeChange("revenueMin", v)}
                  onChangeMax={(v) => handleRangeChange("revenueMax", v)}
                  formatLabel={(v) => v >= 1000 ? `${(v / 1000).toFixed(1)}M` : `${v}k`}
                />
              </div>

              {/* Company Size */}
              <div>
                <h3 className="text-xs font-bold tracking-wider mb-4 uppercase text-icon">COMPANY SIZE</h3>
                <DualRangeSlider
                  min={TEAM_MIN}
                  max={TEAM_MAX}
                  step={1}
                  valueMin={selectedFilters.teamSizeMin}
                  valueMax={selectedFilters.teamSizeMax}
                  onChangeMin={(v) => handleRangeChange("teamSizeMin", v)}
                  onChangeMax={(v) => handleRangeChange("teamSizeMax", v)}
                  formatLabel={(v) => `${v}`}
                />
              </div>

              {/* Industry */}
              <div>
                <h3 className="text-xs font-bold tracking-wider mb-4 uppercase text-icon">INDUSTRY</h3>
                <div className="space-y-3">
                  {["Marketing", "Advertising", "Analytics", "Real Estate", "Automations"].map((opt, idx) => (
                    <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedFilters.industry === opt}
                        onChange={() => handleFilterChange("industry", opt)}
                        className="w-4 h-4 rounded border-gray-400 dark:border-white/20 bg-transparent text-primary focus:ring-primary focus:ring-offset-background accent-[#0059DE]"
                      />
                      <span className="text-sm group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleApplyFilters}
              disabled={filterLoading}
              className="w-full mt-8 bg-primary hover:bg-orange-500 text-white font-medium py-3 rounded-4xl transition-colors shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {filterLoading ? "Applying..." : "Apply Filters"}
            </button>
          </div>
        </aside>

        {/* Case Studies Content Area */}
        <div className="flex-1">
          {loading ? (
            <div className="text-center py-20 text-gray-500 text-sm font-medium">
              Loading dynamic case stories...
            </div>
          ) : hasData ? (
            <>
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                {paginatedStudies.map((study, index) => (
                  <Link
                    href={`/case-studies/${study._id}`}
                    key={study._id || index}
                    className="bg-card rounded-xl p-6 border border-gray-200 dark:border-white/5 flex flex-col hover:border-primary/50 transition-all hover:shadow-lg group"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-normal text-icon leading-snug mb-3 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-[#9CB3C9] mb-6 line-clamp-3">
                        {study.excerpt || study.content}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-white/10">
                      <div className="text-sm">
                        <span className="text-gray-500 dark:text-[#FFFFFF]">
                          {study.companyName || "Company name"}
                        </span>
                        <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                        <span className="font-semibold text-[#38D051]">
                          Revenue ${study.monthlyRevenue || 0}K/m
                        </span>
                      </div>

                      <button className="flex items-center gap-2 bg-primary hover:bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-transform group-hover:scale-105">
                        Read full Story <ArrowRight size={16} />
                      </button>
                    </div>
                  </Link>
                ))}
              </div>

              {/* ✅ Dynamic Pagination */}
              {computedTotalPages >= 1 && (
                <div className="flex justify-center items-center gap-2 mt-12 mb-8">
                  <PaginationButton
                    icon={<ChevronLeft size={16} />}
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  />

                  {getPageNumbers().map((page, idx) =>
                    page === "..." ? (
                      <PaginationButton key={`dots-${idx}`} icon={<MoreHorizontal size={16} />} disabled />
                    ) : (
                      <PaginationButton
                        key={page}
                        active={currentPage === page}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </PaginationButton>
                    )
                  )}

                  <PaginationButton
                    icon={<ChevronRight size={16} />}
                    disabled={currentPage === computedTotalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center min-h-[500px] bg-card rounded-xl border border-dashed border-gray-300 dark:border-white/10">
              <div className="relative w-64 h-64 mb-6">
                <Image src="/images/no-data-light2.png" alt="No case studies" fill className="object-contain dark:hidden" />
                <Image src="/images/no-data-dark.png" alt="No case studies" fill className="object-contain hidden dark:block" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No Case Studies Yet</h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto text-sm leading-relaxed">
                We'll soon share real startup case studies and insights.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DualRangeSlider({ min, max, step, valueMin, valueMax, onChangeMin, onChangeMax, formatLabel }) {
  const percent = useCallback(
    (v) => ((v - min) / (max - min)) * 100,
    [min, max]
  );

  const handleMinChange = (e) => {
    const v = Number(e.target.value);
    if (v < valueMax) onChangeMin(v);
  };

  const handleMaxChange = (e) => {
    const v = Number(e.target.value);
    if (v > valueMin) onChangeMax(v);
  };

  const leftPct  = percent(valueMin);
  const rightPct = percent(valueMax);

  return (
    <div>
      <div className="relative h-1 bg-gray-300 dark:bg-[#D9D9D9] rounded-full mb-4 mt-2 mx-2">
        <div
          className="absolute h-full bg-[#0059DE] rounded-full"
          style={{ left: `${leftPct}%`, right: `${100 - rightPct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={valueMin}
          onChange={handleMinChange}
          className="absolute w-full h-full opacity-0 cursor-pointer"
          style={{ zIndex: valueMin > max - 10 ? 5 : 3 }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={valueMax}
          onChange={handleMaxChange}
          className="absolute w-full h-full opacity-0 cursor-pointer"
          style={{ zIndex: 4 }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#0059DE] rounded-full shadow pointer-events-none"
          style={{ left: `calc(${leftPct}% - 8px)` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#0059DE] rounded-full shadow pointer-events-none"
          style={{ left: `calc(${rightPct}% - 8px)` }}
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 dark:bg-[#1D2659] border border-gray-300 dark:border-white/10 rounded-md p-2 flex items-center justify-center">
          <span className="text-sm text-gray-900 dark:text-white">{formatLabel(valueMin)}</span>
        </div>
        <span className="text-sm text-gray-500">to</span>
        <div className="flex-1 dark:bg-[#1D2659] border border-gray-300 dark:border-white/10 rounded-md p-2 flex items-center justify-center">
          <span className="text-sm text-gray-900 dark:text-white">{formatLabel(valueMax)}</span>
        </div>
      </div>
    </div>
  );
}

function PaginationButton({ children, active, disabled, icon, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-9 h-9 flex items-center justify-center rounded-md text-sm transition-colors
        ${active ? "bg-primary text-white font-medium shadow-md shadow-primary/30" : "bg-card text-foreground hover:bg-gray-200 dark:hover:bg-white/10"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {icon || children}
    </button>
  );
} 