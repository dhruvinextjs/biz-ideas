// "use client";
// import React from "react";

// export default function PrivacyPolicy() {
//   return (
//     <div className="min-h-screen bg-background transition-colors duration-300">
//       {/* ========================================== */}
//       {/* 1. HERO BANNER SECTION                     */}
//       {/* ========================================== */}
//       <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
//         {/* Background Image with Dark Overlay */}
//         <div
//           className="absolute inset-0 bg-cover bg-top bg-no-repeat z-0"
//           style={{
//             backgroundImage: `url('/images/policy-bg.jpg')`, // Aap apni image yahan dal sakte hain
//           }}
//         >
//           <div
//             className="absolute inset-0"
//             style={{
//               background:
//                 "linear-gradient(180deg, rgba(9, 14, 45, 0.3) 0%, rgba(9, 14, 45, 0.5) 78.37%, rgba(9, 14, 45, 0.8) 100%)",
//             }}
//           ></div>
//         </div>

//         {/* Banner Content */}
//         <div className="relative z-10 text-center px-4 max-w-3xl justify-center items-center">
//           <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
//           <p className="text-gray-300 text-sm md:text-base leading-relaxed w-md">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry.
//           </p>
//         </div>
//       </section>

//       {/* ========================================== */}
//       {/* 2. CONTENT SECTION                          */}
//       {/* ========================================== */}
//       <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-16">
//         <div className="space-y-12">
//           {/* Repeatable Content Block 1 */}
//           <div className="space-y-4">
//             <h2 className="text-xl font-bold text-icon">
//               What is Lorem Ipsum?
//             </h2>
//             <p className="text-sm text-icon opacity-90 leading-relaxed">
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book.
//             </p>
//           </div>

//           {/* Repeatable Content Block 2 */}
//           <div className="space-y-4">
//             <h2 className="text-xl font-bold text-icon">
//               It is a long established fact that a reader will be distracted
//             </h2>
//             <p className="text-sm text-icon opacity-90 leading-relaxed">
//               There are many variations of passages of Lorem Ipsum available,
//               but the majority have suffered alteration in some form, by
//               injected humour, or randomised words which don't look even
//               slightly believable. If you are going to use a passage of Lorem
//               Ipsum, you need to be sure there isn't anything embarrassing
//               hidden in the middle of text.
//             </p>
//           </div>

//           {/* Block 3 */}
//            <div className="space-y-4">
//             <h2 className="text-xl font-bold text-icon">
//               What is Lorem Ipsum?
//             </h2>
//             <p className="text-sm text-icon opacity-90 leading-relaxed">
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book.
//             </p>
//           </div>

//           {/* Block 4 */}
//          <div className="space-y-4">
//             <h2 className="text-xl font-bold text-icon">
//               It is a long established fact that a reader will be distracted
//             </h2>
//             <p className="text-sm text-icon opacity-90 leading-relaxed">
//               There are many variations of passages of Lorem Ipsum available,
//               but the majority have suffered alteration in some form, by
//               injected humour, or randomised words which don't look even
//               slightly believable. If you are going to use a passage of Lorem
//               Ipsum, you need to be sure there isn't anything embarrassing
//               hidden in the middle of text.
//             </p>
//           </div>

//           {/* Block 5 */}
//             <div className="space-y-4">
//             <h2 className="text-xl font-bold text-icon">
//               What is Lorem Ipsum?
//             </h2>
//             <p className="text-sm text-icon opacity-90 leading-relaxed">
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPrivacyPolicy } from "@/redux/slices/PrivacyPoliceSlice"; // Apni exact slice path check karein

export default function PrivacyPolicy() {
  const dispatch = useDispatch();
  
  // Redux store se dynamic policy data pull karna
  const { policyData, loading } = useSelector((state) => state.privacyPolicy);

  useEffect(() => {
    dispatch(getPrivacyPolicy());
  }, [dispatch]);

  // Loading indicator bina layout bigade
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-sm text-foreground/60 animate-pulse">Loading Privacy Policy...</p>
      </div>
    );
  }

  // Fallback agar policyData available na ho
  if (!policyData) {
    return null;
  }

  // Postman response ke according direct text variables set kiye hain
  const pageTitle = policyData.title || "Privacy Policy";
  const htmlContent = policyData.content || "";

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* ========================================== */}
      {/* 1. HERO BANNER SECTION                    */}
      {/* ========================================== */}
      <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat z-0"
          style={{
            backgroundImage: `url('/images/policy-bg.jpg')`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(9, 14, 45, 0.3) 0%, rgba(9, 14, 45, 0.5) 78.37%, rgba(9, 14, 45, 0.8) 100%)",
            }}
          ></div>
        </div>

        {/* Banner Content */}
        <div className="relative z-10 text-center px-4 max-w-3xl flex flex-col justify-center items-center">
          {/* Dynamic Main Title */}
          <h1 className="text-4xl font-bold text-white mb-2">{pageTitle}</h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed w-md">
            Please read our privacy policy carefully to understand our views and practices.
          </p>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. CONTENT SECTION                        */}
      {/* ========================================== */}
      <section className="max-w-7xl mx-auto py-16 px-6 md:px-12 lg:px-16">
        {/* Backend se aane wale HTML content ko render karne ke liye dangerouslySetInnerHTML use kiya hai.
          'prose' editor tags (h2, p, strong) ka design barkarar rakhne ke liye common utility classes lagayi hain.
        */}
        <div 
          className="space-y-6 text-icon text-sm opacity-90 leading-relaxed privacy-content-wrapper [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-icon [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-4"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </section>
    </div>
  );
}