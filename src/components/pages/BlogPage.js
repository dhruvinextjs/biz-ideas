// "use client";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchBlogs } from "@/redux/slices/BlogSlice";
// import { Search, Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// export default function BlogPage() {
//   const dispatch = useDispatch();

//   // Redux store se dynamic state nikalna
//   const { blogs, loading } = useSelector((state) => state.blog);

//   // States for search and client side filtering
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeCategory, setActiveCategory] = useState("All");

//   // Mock Data for Categories - Requirement ke mutabik "All" local hi rakha hai
//   const categories = ["All", "Category 1", "Category 2", "Category 3", "Category 4"];

//   // Component load hote hi API fire hogi (Infinite loop se bachne ke liye khali array dependency)
//   useEffect(() => {
//     dispatch(fetchBlogs());
//   }, [dispatch]);

//   // Dynamic filter logic (Category click aur search filter dono handle karega)
//   const filteredBlogs = blogs.filter((post) => {
//     const matchesCategory =
//       activeCategory === "All" ||
//       post.category?.toLowerCase() === activeCategory.toLowerCase();
    
//     const matchesSearch =
//       post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());

//     return matchesCategory && matchesSearch;
//   });

//   const hasBlogs = filteredBlogs.length > 0;

//   // Helper function for formatted Date mapping
//   const formatDate = (dateString) => {
//     if (!dateString) return "June 4, 2026";
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   return (
//     <div className="min-h-screen bg-background font-sans transition-colors duration-300 relative overflow-hidden pt-20 mt-20 pb-16 px-4 md:px-8">
      
//       {/* Background glowing particles effect */}
//       <div className="absolute top-0 left-0 right-0 h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none z-0 hidden dark:block"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
        
//         {/* Header Section */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             The <span className="text-[#FB8122]">Biz</span> Blog
//           </h1>
//           <p className="text-icon text-sm md:text-base mb-8 opacity-90">
//             Insights, trends, and guides to help you build and scale your next startup.
//           </p>

//           {/* Search Bar */}
//           <div className="relative max-w-lg mx-auto w-full">
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search articles..."
//               className="w-full bg-white dark:bg-[#1D2659] border border-gray-200 dark:border-[#5C6BC9] rounded-full py-5 px-6 pr-16 text-sm text-icon placeholder-gray-500 dark:placeholder-[#AFD0F2] focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 transition-all"
//             />
//             <button className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-[#e6751e] transition-colors rounded-full w-12 flex items-center justify-center text-white shadow-md">
//               <Search size={18} />
//             </button>
//           </div>
//         </div>

//         {/* Category Filters */}
//         <div className="flex flex-wrap justify-center gap-2 mb-12">
//           {categories.map((category, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveCategory(category)}
//               className={`px-6 py-3 rounded-full text-xs font-medium transition-colors ${
//                 activeCategory === category
//                   ? "bg-primary text-white shadow-lg shadow-orange-500/20"
//                   : "bg-white dark:bg-[#1C234D] text-icon opacity-90 border border-gray-200 dark:border-transparent hover:border-gray-300 dark:hover:bg-[#232D45]"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {loading ? (
//           <div className="text-center py-24 text-gray-500">Loading dynamic articles from server...</div>
//         ) : hasBlogs ? (
//           <>
//             {/* Blog Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
//               {filteredBlogs.map((post) => (
//                <Link
//   href={`/blogs/${post._id}`} // Hum direct MongoDB _id pass kar rahe hain dynamic folder fetch ke liye
//   key={post._id}
//   className="flex flex-col bg-card border border-gray-100 dark:border-white/5 rounded-2xl p-6 shadow-sm hover:shadow-md dark:hover:shadow-white/5 transition-all group"
// >
//                   <div className="mb-4">
//                     <span className="inline-block bg-gray-100 dark:bg-[#2A3265] text-icon opacity-90 text-[11px] font-semibold tracking-wider px-4 py-2 rounded-full uppercase">
//                       {post.category || "IDEAS"}
//                     </span>
//                   </div>

//                   <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#FB8122] transition-colors leading-snug">
//                     {post.title}
//                   </h3>

//                   <p className="text-sm text-icon opacity-90 mb-6 flex-grow line-clamp-3">
//                     {post.excerpt || "No description available."}
//                   </p>

//                   <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
//                     <div className="flex items-center text-icon opacity-90 text-xs font-medium">
//                       <Calendar size={14} className="mr-2" />
//                       {formatDate(post.publishedAt)}
//                     </div>
//                     <button className="flex items-center text-[#FB8122] hover:text-[#e6751e] text-xs font-semibold group-hover:translate-x-1 transition-transform">
//                       Read more <ArrowRight size={14} className="ml-1" />
//                     </button>
//                   </div>
//                 </Link>
//               ))}
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-center items-center gap-2">
//               <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-[#222642] border border-gray-200 dark:border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#232D45] transition-colors">
//                 <ChevronLeft size={18} />
//               </button>
//               <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-medium shadow-md">1</button>
//               <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-transparent text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 transition-colors">2</button>
//               <span className="w-10 h-10 flex items-center justify-center text-gray-500">...</span>
//               <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-transparent text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 transition-colors">16</button>
//               <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 transition-colors">
//                 <ChevronRight size={18} />
//               </button>
//             </div>
//           </>
//         ) : (
//           /* --- NO DATA / EMPTY STATE --- */
//           <div className="flex flex-col items-center justify-center py-20 px-4 text-center min-h-[450px] bg-card rounded-2xl border border-dashed border-gray-300 dark:border-white/10 shadow-sm">
//             <div className="relative w-52 h-52 mb-6">
//               <Image
//                 src="/images/empty-blog-light.png"
//                 alt="No blogs"
//                 fill
//                 className="object-contain dark:hidden"
//               />
//               <Image
//                 src="/images/empty-blog-dark.png"
//                 alt="No blogs"
//                 fill
//                 className="object-contain hidden dark:block"
//               />
//             </div>
//             <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
//               No Articles Yet
//             </h2>
//             <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto text-sm leading-relaxed">
//               We’re working on valuable content. Stay tuned for updates.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "@/redux/slices/BlogSlice";
import { Search, Calendar, ArrowRight, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ITEMS_PER_PAGE = 6;

export default function BlogPage() {
  const dispatch = useDispatch();

  const { blogs, loading } = useSelector((state) => state.blog);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["All", "Category 1", "Category 2", "Category 3", "Category 4"];

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const filteredBlogs = blogs.filter((post) => {
    const matchesCategory =
      activeCategory === "All" ||
      post.category?.toLowerCase() === activeCategory.toLowerCase();

    const matchesSearch =
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const hasBlogs = filteredBlogs.length > 0;

  // ✅ Pagination Logic
  const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  // ✅ Filter/search change hone par page reset
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchTerm]);

  const formatDate = (dateString) => {
    if (!dateString) return "June 4, 2026";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-background font-sans transition-colors duration-300 relative overflow-hidden pt-20 mt-20 pb-16 px-4 md:px-8">

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

          <div className="relative max-w-lg mx-auto w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-xs font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white shadow-lg shadow-orange-500/20"
                  : "bg-white dark:bg-[#1C234D] text-icon opacity-90 border border-gray-200 dark:border-transparent hover:border-gray-300 dark:hover:bg-[#232D45]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-24 text-gray-500">Loading dynamic articles from server...</div>
        ) : hasBlogs ? (
          <>
            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {paginatedBlogs.map((post) => (
                <Link
                  href={`/blogs/${post._id}`}
                  key={post._id}
                  className="flex flex-col bg-card border border-gray-100 dark:border-white/5 rounded-2xl p-6 shadow-sm hover:shadow-md dark:hover:shadow-white/5 transition-all group"
                >
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 dark:bg-[#2A3265] text-icon opacity-90 text-[11px] font-semibold tracking-wider px-4 py-2 rounded-full uppercase">
                      {post.category || "IDEAS"}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#FB8122] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-sm text-icon opacity-90 mb-6 flex-grow line-clamp-3">
                    {post.excerpt || "No description available."}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
                    <div className="flex items-center text-icon opacity-90 text-xs font-medium">
                      <Calendar size={14} className="mr-2" />
                      {formatDate(post.publishedAt)}
                    </div>
                    <button className="flex items-center text-[#FB8122] hover:text-[#e6751e] text-xs font-semibold group-hover:translate-x-1 transition-transform">
                      Read more <ArrowRight size={14} className="ml-1" />
                    </button>
                  </div>
                </Link>
              ))}
            </div>

            {/* ✅ Dynamic Pagination */}
            {totalPages >= 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-[#222642] border border-gray-200 dark:border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#232D45] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={18} />
                </button>

                {getPageNumbers().map((page, idx) =>
                  page === "..." ? (
                    <span key={`dots-${idx}`} className="w-10 h-10 flex items-center justify-center text-gray-500">
                      <MoreHorizontal size={18} />
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-colors ${
                        currentPage === page
                          ? "bg-primary text-white shadow-md"
                          : "bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#232D45]"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white dark:bg-[#1A2235] border border-gray-200 dark:border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center min-h-[450px] bg-card rounded-2xl border border-dashed border-gray-300 dark:border-white/10 shadow-sm">
            <div className="relative w-52 h-52 mb-6">
              <Image src="/images/empty-blog-light.png" alt="No blogs" fill className="object-contain dark:hidden" />
              <Image src="/images/empty-blog-dark.png" alt="No blogs" fill className="object-contain hidden dark:block" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No Articles Yet</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto text-sm leading-relaxed">
              We're working on valuable content. Stay tuned for updates.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 