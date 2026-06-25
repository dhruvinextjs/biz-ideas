// "use client";
 
// import React, { useState } from "react";
// import { SearchIcon, ArrowRight } from "lucide-react";
// import Image from "next/image";
 
// const ideasData = [
//   {
//     id: 1,
//     image: "/images/startup-showcase.png",
//     title: "Growing a GEO tool to a mid-five figure MRR within a year",
//     description: "A subscription-based service providing automated customer support via advanced AI models",
//     invest: "$1K - $5K",
//     margin: "85%",
//   },
//   {
//     id: 2,
//     image: "/images/startup-showcase.png",
//     title: "Eco-Friendly Packaging Solutions",
//     description: "Provide sustainable packaging alternatives for businesses to reduce plastic waste.",
//     invest: "$1K - $5K",
//     margin: "85%",
//   },
//   {
//     id: 3,
//     image: "/images/startup-showcase.png",
//     title: "Online Skill-Based Learning Platform",
//     description: "Offer courses in high-demand skills like coding, design, and digital marketing.",
//     invest: "$1K - $5K",
//     margin: "85%",
//   },
//   {
//     id: 4,
//     image: "/images/startup-showcase.png",
//     title: "Healthy Meal Subscription Service",
//     description: "Deliver nutritious, ready-to-eat meals tailored to different diets and lifestyles.",
//     invest: "$1K - $5K",
//     margin: "85%",
//   },
//   {
//     id: 5,
//     image: "/images/startup-showcase.png",
//     title: "Digital Marketing Agency Services",
//     description: "Help small businesses grow through SEO, social media, and paid advertising.",
//     invest: "$1K - $5K",
//     margin: "85%",
//   },
//   {
//     id: 6,
//     image: "/images/startup-showcase.png",
//     title: "Home Cleaning & Sanitization Services",
//     description: "Offer professional, on-demand cleaning services for homes and offices.",
//     invest: "$1K - $5K",
//     margin: "85%",
//   },
// ];
 
// const IdeaCard = ({ image, title, description, invest, margin }) => (
//   <div className="bg-card rounded-2xl p-4 flex flex-col border border-black/5 dark:border-white/10 hover:shadow-lg transition-all group">
//     <img
//       src={image}
//       alt={title}
//       className="w-full h-40 object-cover rounded-xl mb-4"
//     />
//     <h3 className="text-foreground text-sm font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
//       {title}
//     </h3>
//     <p className="text-gray-500 dark:text-gray-400 text-xs mb-6 line-clamp-3 flex-1">
//       {description}
//     </p>
//     <div className="flex items-center justify-between mt-auto">
//       <div className="flex items-center gap-8">
//         <div>
//           <p className="text-gray-400 text-[10px] uppercase">Invest</p>
//           <p className="text-foreground text-xs font-bold">{invest}</p>
//         </div>
//         <div>
//           <p className="text-gray-400 text-[10px] uppercase">Margin</p>
//           <p className="text-green-500 text-xs font-bold">{margin}</p>
//         </div>
//       </div>
//       <button className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-white hover:opacity-90 transition">
//         <ArrowRight size={16} />
//       </button>
//     </div>
//   </div>
// );
 
// const NoResults = () => (
//   <div className="flex flex-col items-center justify-center py-24 text-center">
//     {/* Illustration */}
//   <div className="w-28 h-28 mb-6">
 
//   {/* LIGHT MODE */}
//   <Image
//     src="/images/search-empty-light.png"
//     width={100}
//     height={100}
//     alt="No results"
//     className="w-full h-full object-contain block dark:hidden"
//   />
 
//   {/* DARK MODE */}
//   <Image
//     src="/images/search-empty.png"
//       width={100}
//     height={100}
//     alt="No results"
//     className="w-full h-full object-contain hidden dark:block"
//   />
 
// </div>
 
//     <h2 className="text-icon text-xl font-bold mb-2">No results found</h2>
//     <p className="text-[#A0A3BD] text-sm max-w-xs leading-relaxed">
//       We couldn&apos;t find anything for your search.
//       <br />
//       Try different keywords or explore suggestions below.
//     </p>
//   </div>
// );
 
// export default function SearchPage() {
//   const [activeFilter, setActiveFilter] = useState("Business Ideas");
 
//   const filters = [
//     "Business Ideas",
//     "App Ideas",
//     "Startup Ideas",
//     "Case Studies",
//   ];
 
//   // Change to empty array to test empty state: const displayData = [];
//   const displayData = ideasData;
 
//   return (
//     <main className="bg-background text-foreground p-6 md:p-10 mt-20">
//       <div className="max-w-7xl mx-auto">
 
//         {/* Search Header Section — LEFT title, RIGHT search input */}
//         <div className="flex items-center justify-between gap-6 mb-10 border-b border-dashed border-icon/40 pb-8">
 
//           {/* LEFT: Title + count */}
//           <div>
//             <h1 className="text-2xl md:text-3xl font-bold text-icon">
//               Search results for:{" "}
//               <span className="font-medium text-gray-600 dark:text-[#92ADC8]">E-Commerce</span>
//             </h1>
//             <p className="text-xs text-[#A0A3BD] mt-1">
//               {displayData.length} items found
//             </p>
//           </div>
 
//           {/* RIGHT: Search input */}
//           <div className="flex items-center dark:bg-[#111c44] px-5 py-2 rounded-full shrink-0 w-[260px] border border-gray-700">
//             <SearchIcon size={20} className="text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search ideas..."
//               className="bg-transparent outline-none text-sm ml-3 w-full placeholder-gray-400 text-icon"
//             />
//           </div>
 
//         </div>
 
//         {/* Filters */}
//         <div className="flex flex-wrap gap-3 mb-10">
//           {filters.map((item) => (
//             <button
//               key={item}
//               onClick={() => setActiveFilter(item)}
//               className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
//                 activeFilter === item
//                   ? "bg-primary text-white shadow-md"
//                   : "bg-card text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10"
//               }`}
//             >
//               {item}
//             </button>
//           ))}
//         </div>
 
//         {/* Grid or Empty State */}
//         {displayData.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {displayData.map((item) => (
//               <IdeaCard key={item.id} {...item} />
//             ))}
//           </div>
//         ) : (
//           <NoResults />
//         )}
 
//       </div>
//     </main>
//   );
// }

// "use client";

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchSearchResults } from "@/redux/slices/SearchSlice"; // Aapke folder structure ke hisab se import check kar lein
// import { SearchIcon, ArrowRight } from "lucide-react";
// import Image from "next/image";

// const IdeaCard = ({ image, title, description, invest, margin }) => (
//   <div className="bg-card rounded-2xl p-4 flex flex-col border border-black/5 dark:border-white/10 hover:shadow-lg transition-all group">
//     <img
//       src={image}
//       alt={title}
//       className="w-full h-40 object-cover rounded-xl mb-4"
//     />
//     <h3 className="text-foreground text-sm font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
//       {title}
//     </h3>
//     <p className="text-gray-500 dark:text-gray-400 text-xs mb-6 line-clamp-3 flex-1">
//       {description}
//     </p>
//     <div className="flex items-center justify-between mt-auto">
//       <div className="flex items-center gap-8">
//         <div>
//           <p className="text-gray-400 text-[10px] uppercase">Invest</p>
//           <p className="text-foreground text-xs font-bold">{invest}</p>
//         </div>
//         <div>
//           <p className="text-gray-400 text-[10px] uppercase">Margin</p>
//           <p className="text-green-500 text-xs font-bold">{margin}</p>
//         </div>
//       </div>
//       <button className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-white hover:opacity-90 transition">
//         <ArrowRight size={16} />
//       </button>
//     </div>
//   </div>
// );

// const NoResults = () => (
//   <div className="flex flex-col items-center justify-center py-24 text-center">
//     <div className="w-28 h-28 mb-6">
//       <Image
//         src="/images/search-empty-light.png"
//         width={100}
//         height={100}
//         alt="No results"
//         className="w-full h-full object-contain block dark:hidden"
//       />
//       <Image
//         src="/images/search-empty.png"
//         width={100}
//         height={100}
//         alt="No results"
//         className="w-full h-full object-contain hidden dark:block"
//       />
//     </div>
//     <h2 className="text-icon text-xl font-bold mb-2">No results found</h2>
//     <p className="text-[#A0A3BD] text-sm max-w-xs leading-relaxed">
//       We couldn&apos;t find anything for your search.
//       <br />
//       Try different keywords or explore suggestions below.
//     </p>
//   </div>
// );

// export default function SearchPage() {
//   const dispatch = useDispatch();
  
//   // local input state handle karne ke liye
//   const [searchTerm, setSearchTerm] = useState("ai"); 
//   const [activeFilter, setActiveFilter] = useState("Business Ideas");

//   // Redux store se data fetch karna
//   const { ideas, caseStudies, query, loading } = useSelector((state) => state.search);

//   const filters = [
//     "Business Ideas",
//     "App Ideas",
//     "Startup Ideas",
//     "Case Studies",
//   ];

//   // Component load hote hi default query trigger karne ke liye
//   useEffect(() => {
//     dispatch(fetchSearchResults(searchTerm));
//   }, []);

//   // Search input user type karke enter dabaye tab call karne ke liye
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       dispatch(fetchSearchResults(searchTerm));
//     }
//   };

//   // Active filter ke validation ke hisab se dynamic data manipulate karna
//   // Aapke Postman response me "ideas" aur "caseStudies" hain, filter ke according displayData banega:
//   let displayData = [];
//   if (activeFilter === "Business Ideas" || activeFilter === "App Ideas" || activeFilter === "Startup Ideas") {
//     displayData = ideas.map((item) => ({
//       id: item._id,
//       image: item.image,
//       title: item.title,
//       description: item.description,
//       invest: `$${item.investmentMin} - $${item.investmentMax}`,
//       margin: `${item.profitMargin}%`,
//     }));
//   } else if (activeFilter === "Case Studies") {
//     displayData = caseStudies.map((item) => ({
//       id: item._id,
//       image: item.image,
//       title: item.title,
//       description: item.excerpt || `Founder: ${item.founderName} | Company: ${item.companyName}`, // Fallback description
//       invest: `Rev: $${item.monthlyRevenue}K`,
//       margin: item.industry,
//     }));
//   }

//   return (
//     <main className="bg-background text-foreground p-6 md:p-10 mt-20">
//       <div className="max-w-7xl mx-auto">

//         {/* Search Header Section */}
//         <div className="flex items-center justify-between gap-6 mb-10 border-b border-dashed border-icon/40 pb-8">

//           {/* LEFT: Title + count */}
//           <div>
//             <h1 className="text-2xl md:text-3xl font-bold text-icon">
//               Search results for:{" "}
//               <span className="font-medium text-gray-600 dark:text-[#92ADC8]">
//                 {query || searchTerm}
//               </span>
//             </h1>
//             <p className="text-xs text-[#A0A3BD] mt-1">
//               {loading ? "Searching..." : `${displayData.length} items found`}
//             </p>
//           </div>

//           {/* RIGHT: Search input */}
//           <div className="flex items-center dark:bg-[#111c44] px-5 py-2 rounded-full shrink-0 w-[260px] border border-gray-700">
//             <SearchIcon size={20} className="text-gray-400" />
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               onKeyDown={handleKeyDown}
//               placeholder="Search ideas..."
//               className="bg-transparent outline-none text-sm ml-3 w-full placeholder-gray-400 text-icon"
//             />
//           </div>

//         </div>

//         {/* Filters */}
//         <div className="flex flex-wrap gap-3 mb-10">
//           {filters.map((item) => (
//             <button
//               key={item}
//               onClick={() => setActiveFilter(item)}
//               className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
//                 activeFilter === item
//                   ? "bg-primary text-white shadow-md"
//                   : "bg-card text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10"
//               }`}
//             >
//               {item}
//             </button>
//           ))}
//         </div>

//         {/* Grid or Empty State / Loading State */}
//         {loading ? (
//           <div className="text-center py-24 text-gray-500">Loading data from server...</div>
//         ) : displayData.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {displayData.map((item) => (
//               <IdeaCard key={item.id} {...item} />
//             ))}
//           </div>
//         ) : (
//           <NoResults />
//         )}

//       </div>
//     </main>
//   );
// }                               

"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "@/redux/slices/SearchSlice"; 
import { SearchIcon, ArrowRight } from "lucide-react";
import Image from "next/image";

const IdeaCard = ({ image, title, description, invest, margin }) => (
  <div className="bg-card rounded-2xl p-4 flex flex-col border border-black/5 dark:border-white/10 hover:shadow-lg transition-all group">
    <img
      src={image}
      alt={title}
      className="w-full h-40 object-cover rounded-xl mb-4"
    />
    <h3 className="text-foreground text-sm font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-gray-500 dark:text-gray-400 text-xs mb-6 line-clamp-3 flex-1">
      {description}
    </p>
    <div className="flex items-center justify-between mt-auto">
      <div className="flex items-center gap-8">
        <div>
          <p className="text-gray-400 text-[10px] uppercase">Invest</p>
          <p className="text-foreground text-xs font-bold">{invest}</p>
        </div>
        <div>
          <p className="text-gray-400 text-[10px] uppercase">Margin</p>
          <p className="text-green-500 text-xs font-bold">{margin}</p>
        </div>
      </div>
      <button className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-white hover:opacity-90 transition">
        <ArrowRight size={16} />
      </button>
    </div>
  </div>
);

const NoResults = () => (
  <div className="flex flex-col items-center justify-center py-24 text-center">
    <div className="w-28 h-28 mb-6">
      <Image
        src="/images/search-empty-light.png"
        width={100}
        height={100}
        alt="No results"
        className="w-full h-full object-contain block dark:hidden"
      />
      <Image
        src="/images/search-empty.png"
        width={100}
        height={100}
        alt="No results"
        className="w-full h-full object-contain hidden dark:block"
      />
    </div>
    <h2 className="text-icon text-xl font-bold mb-2">No results found</h2>
    <p className="text-[#A0A3BD] text-sm max-w-xs leading-relaxed">
      We couldn&apos;t find anything for your search.
      <br />
      Try different keywords or explore suggestions below.
    </p>
  </div>
);

export default function SearchPage() {
  const dispatch = useDispatch();
  
  const [searchTerm, setSearchTerm] = useState("test"); 
  const [activeFilter, setActiveFilter] = useState("Business Ideas");

  const { ideas, caseStudies, query, loading } = useSelector((state) => state.search);

  const filters = [
    "Business Ideas",
    "App Ideas",
    "Startup Ideas",
    "Case Studies",
  ];

  // Infinite loop se bachne ke liye array blank dependency ke saath []
  useEffect(() => {
    dispatch(fetchSearchResults(searchTerm));
  }, [dispatch]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      dispatch(fetchSearchResults(searchTerm));
    }
  };

  // --- DYNAMIC FILTER LOGIC ACCORDING TO ITEM TYPE ---
  let displayData = [];

  if (activeFilter === "Business Ideas") {
    displayData = ideas
      .filter((item) => item.type === "business")
      .map((item) => ({
        id: item._id,
        image: item.image,
        title: item.title,
        description: item.description,
        invest: `$${item.investmentMin} - $${item.investmentMax}`,
        margin: `${item.profitMargin}%`,
      }));
  } else if (activeFilter === "App Ideas") {
    displayData = ideas
      .filter((item) => item.type === "app")
      .map((item) => ({
        id: item._id,
        image: item.image,
        title: item.title,
        description: item.description,
        invest: `$${item.investmentMin} - $${item.investmentMax}`,
        margin: `${item.profitMargin}%`,
      }));
  } else if (activeFilter === "Startup Ideas") {
    displayData = ideas
      .filter((item) => item.type === "startup")
      .map((item) => ({
        id: item._id,
        image: item.image,
        title: item.title,
        description: item.description,
        invest: `$${item.investmentMin} - $${item.investmentMax}`,
        margin: `${item.profitMargin}%`,
      }));
  } else if (activeFilter === "Case Studies") {
    displayData = caseStudies.map((item) => ({
      id: item._id,
      image: item.image,
      title: item.title,
      description: item.excerpt || `Founder: ${item.founderName} | Company: ${item.companyName}`,
      invest: `Rev: $${item.monthlyRevenue}K`,
      margin: item.industry,
    }));
  }

  return (
    <main className="bg-background text-foreground p-6 md:p-10 mt-20">
      <div className="max-w-7xl mx-auto">

        {/* Search Header Section */}
        <div className="flex items-center justify-between gap-6 mb-10 border-b border-dashed border-icon/40 pb-8">

          {/* LEFT: Title + count */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-icon">
              Search results for:{" "}
              <span className="font-medium text-gray-600 dark:text-[#92ADC8]">
                {query || searchTerm}
              </span>
            </h1>
            <p className="text-xs text-[#A0A3BD] mt-1">
              {loading ? "Searching..." : `${displayData.length} items found`}
            </p>
          </div>

          {/* RIGHT: Search input */}
          <div className="flex items-center dark:bg-[#111c44] px-5 py-2 rounded-full shrink-0 w-[260px] border border-gray-700">
            <SearchIcon size={20} className="text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search ideas..."
              className="bg-transparent outline-none text-sm ml-3 w-full placeholder-gray-400 text-icon"
            />
          </div>

        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all ${
                activeFilter === item
                  ? "bg-primary text-white shadow-md"
                  : "bg-card text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid or Empty State / Loading State */}
        {loading ? (
          <div className="text-center py-24 text-gray-500">Loading data from server...</div>
        ) : displayData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayData.map((item) => (
              <IdeaCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <NoResults />
        )}

      </div>
    </main>
  );
}