// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { ArrowRight, X, Check } from "lucide-react";
// import Image from "next/image";

// export default function ResetPassword() {
//   const [openPopup, setOpenPopup] = useState(false);

//   return (
//     <section className="w-full bg-background flex items-center justify-center pt-36 pb-4 px-4 relative">
//       <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-start">

//         {/* LEFT SIDE */}
//         <div className="w-full max-w-md">
//           <p className="text-md dark:text-[#9CA3C9] mb-3">
//             Enter the email address you signed up with.
//           </p>

//           <div className="mb-4">
//             <input
//               type="email"
//               placeholder="Enter email address"
//               className="w-full h-11 px-4 rounded-md dark:bg-[#1D2659] border border-gray-400 dark:border-[#3E4A92] text-sm text-foreground outline-none placeholder:text-icon opacity-80"
//             />
//           </div>

//           {/* BUTTON */}
//           <button
//             onClick={() => setOpenPopup(true)}
//             className="h-10 px-4 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-primary/90 transition"
//           >
//             Submit <ArrowRight size={14} />
//           </button>
//         </div>

//         {/* RIGHT CARD */}
//         <div className="bg-card rounded-lg relative shadow-lg p-4 md:p-6">
//           <div className="absolute dark:bg-[#2D3674] top-10 -left-2 w-4 h-4 bg-card rotate-45" />

//           <div className="px-6 py-5 dark:bg-[#2D3674]">
//             <h2 className="text-icon text-lg font-semibold text-center">
//               Reset Your Password
//             </h2>
//           </div>

//           <div className="px-6 py-6 space-y-5">
//             <div className="flex items-start gap-3">
//               <Image
//                 src="/images/chats.png"
//                 alt=""
//                 width={18}
//                 height={18}
//                 className="mt-1"
//               />

//               <p className="text-sm dark:text-[#9CA3C9] leading-6">
//                 Don&apos;t have an account yet?{" "}
//                 <Link
//                   href="/signup"
//                   className="text-icon font-md underline decoration-primary decoration-2 underline-offset-5"
//                 >
//                   Join the Us!
//                 </Link>
//               </p>
//             </div>

//             <div className="flex items-start gap-3">
//               <Image
//                 src="/images/chats.png"
//                 alt=""
//                 width={18}
//                 height={18}
//                 className="mt-1"
//               />

//               <p className="text-sm dark:text-[#9CA3C9] leading-6">
//                 Already have an account?{" "}
//                 <Link
//                   href="/signin"
//                   className="text-icon font-md underline decoration-primary decoration-2 underline-offset-5"
//                 >
//                   Sign in.
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//      {/* POPUP */}
// {openPopup && (
//   <div className="fixed inset-0 bg-background z-50 flex items-center justify-center px-4">

//     {/* CLOSE ICON */}
//     <button
//       onClick={() => setOpenPopup(false)}
//       className="absolute top-5 right-5 text-black dark:text-white hover:text-primary transition z-50"
//     >
//       <X size={24} />
//     </button>

//     {/* POPUP BOX */}
//     <div className="bg-white dark:bg-white rounded-xl w-full max-w-sm py-10 px-8 text-center shadow-2xl border border-black/5">

//       {/* CHECK ICON */}
//       <div className="w-16 h-16 mx-auto rounded-full bg-blue-500 flex items-center justify-center mb-5">
//         <Check size={30} className="text-white" strokeWidth={3} />
//       </div>

//       <h3 className="text-xl font-bold text-black mb-2">
//         Email Sent
//       </h3>

//       <p className="text-sm text-gray-600 leading-6">
//         You should get a password reset email within a few minutes!
//       </p>
//     </div>
//   </div>
// )}
//     </section>
//   );
// }

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, X, Check, UserPlus, LogIn } from "lucide-react";
import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";

export default function ResetPassword() {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <section className="w-full bg-background flex items-center justify-center pt-36 pb-4 px-4 relative">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-start">
        {/* LEFT SIDE */}
        <div className="w-full max-w-md ">
          <p className="text-md dark:text-[#9CA3C9] mb-2 font-medium">
            Enter the email address you signed up with.
          </p>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full h-12 px-4 rounded-lg dark:bg-[#1D2659] border border-gray-400 dark:border-[#3E4A92] text-sm text-foreground outline-none placeholder:text-gray-500 transition-all focus:border-primary"
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={() => setOpenPopup(true)}
            className="h-10 px-4 rounded-full bg-primary text-white text-sm font-semibold flex items-center gap-1 hover:bg-[#e06c1b] transition shadow-lg shadow-orange-500/20"
          >
            Submit <RiArrowRightSLine size={18} />
          </button>
        </div>

        {/* RIGHT CARD - EXACT DESIGN AS SCREENSHOT */}
        <div className="relative group">
          {/* Tooltip Arrow */}
          <div className="absolute top-10 -left-2 w-4 h-4 bg-[#2D3674] rotate-45 z-0" />

          <div className="relative z-10 bg-[#1D2659] rounded-xl shadow-2xl overflow-hidden border border-white/5">
            {/* Card Header */}
            <div className="bg-[#2D3674] py-8 px-6 text-center">
              <h2 className="text-white text-xl font-semibold tracking-wide">
                Reset Your Password
              </h2>
            </div>

            {/* Card Body */}
            <div className="p-8 space-y-8">
              {/* Join Link */}
              <div className="flex items-center gap-4">
                {/* <UserPlus size={22} /> */}
                <Image
                  src={"/images/reset-passcode.png"}
                  alt="img"
                  width={20}
                  height={20}
                />

                <p className="text-sm text-gray-300">
                  Don&apos;t have an account yet?{" "}
                  <Link
                    href="/signup"
                    className="text-white font-semibold inline-block border-b-2 border-[#FB8122] pb-0.5"
                  >
                    Join the Us!
                  </Link>
                </p>
              </div>

              {/* Sign In Link */}
              <div className="flex items-center gap-4">
                {/* <LogIn size={22} /> */}
                <Image
                  src={"/images/reset-passcode2.png"}
                  alt="img"
                  width={20}
                  height={20}
                />

                <p className="text-sm text-gray-300">
                  Already have an account?{" "}
                  <Link
                    href="/signin"
                    className="text-white font-semibold inline-block border-b-2 border-[#FB8122] pb-0.5"
                  >
                    Sign in.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* POPUP */}
      {openPopup && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <button
            onClick={() => setOpenPopup(false)}
            className="absolute top-5 right-5 text-foreground hover:text-primary transition z-50"
          >
            <X size={24} />
          </button>

          <div className="bg-white rounded-2xl w-full max-w-sm py-12 px-8 text-center shadow-2xl">
            <div className="w-16 h-16 mx-auto rounded-full bg-blue-500 flex items-center justify-center mb-6">
              <Check size={32} className="text-white" strokeWidth={3} />
            </div>
            <h3 className="text-2xl font-bold text-black mb-3">Email Sent</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              You should get a password reset email within a few minutes!
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
