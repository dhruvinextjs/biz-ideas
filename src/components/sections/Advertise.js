// import React from 'react';
// import { ArrowRight } from 'lucide-react';
 
// export default function Advertise() {
//   return (
//     <section className="w-full py-20 px-4 bg-background transition-colors duration-300">
//       <div className="container mx-auto max-w-7xl">
//         {/* Main Card Container */}
//         <div className="relative overflow-hidden rounded-[40px] px-6 py-16 md:py-14 text-center
//          bg-[#F0F0F0] dark:bg-[linear-gradient(135deg,#0B1E6D,#08154D)]"
//         >
//           {/* Subtle Diagonal Lines for Dark Mode */}
//            <div className="absolute inset-0 pointer-events-none opacity-40
//   bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.06)_0px,rgba(0,0,0,0.06)_1px,transparent_2px,transparent_22px)]
//   dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_1px,transparent_2px,transparent_22px)]"
// />
 
//           <div className="relative z-10 flex flex-col items-center">
//             {/* Heading - Changes based on theme per screenshots */}
//             <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-icon">
//               <span className="dark:inline hidden">Stay informed</span>
//               <span className="inline dark:hidden">Stop overthinking. Start building.</span>
//             </h2>
 
//             {/* Subtext */}
//             <p className="text-sm md:text-lg text-[#4C4C4C] dark:text-[#9CB3C9] mb-10 max-w-2xl">
//               Market insights that help you start and grow your business.
//             </p>
 
//             {/* Email Input Field */}
//             <div className="relative w-full max-w-lg">
//               <input
//                 type="email"
//                 placeholder="Enter email address"
//                 className="w-full h-14 md:h-16 pl-6 pr-16 rounded-full border border-foreground/10
//                   bg-white dark:bg-[#192468]
//                   text-icon placeholder:text-[#AFD0F2]
//                   focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
//               />
//               <button
//                 className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12
//                   bg-[#FB8122] hover:bg-[#e6731a] text-white rounded-full
//                   flex items-center justify-center transition-transform active:scale-95 shadow-lg"
//               >
//                 <ArrowRight size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subscribeNewsletter } from '@/redux/slices/AdvertiseSlice'; 
import { ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast'; 

export default function Advertise() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  // Redux state access karna
  const { loading } = useSelector((state) => state.advertise || {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    try {
      const response = await dispatch(subscribeNewsletter(email)).unwrap();
      
      // Pehle se chal rahe saare duplicates ko force clear karega
      toast.dismiss(); 
      
      if (response?.success) {
        toast.success(response.message || "Successfully subscribed!", {position: "top-center",});
      } else {
        toast.error("Something went wrong!" ,{position: "top-center",});
      }
      
      setEmail(""); 
    } catch (err) {
      // Force clear for error duplicates too
      toast.dismiss(); 
      toast.error(err || "Something went wrong!",{position: "top-center",});
    }
  };

  return (
    <section className="w-full py-20 px-4 bg-background transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        {/* Main Card Container */}
        <div className="relative overflow-hidden rounded-[40px] px-6 py-16 md:py-14 text-center
           bg-[#F0F0F0] dark:bg-[linear-gradient(135deg,#0B1E6D,#08154D)]"
        >
          {/* Subtle Diagonal Lines for Dark Mode */}
          <div className="absolute inset-0 pointer-events-none opacity-40
            bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.06)_0px,rgba(0,0,0,0.06)_1px,transparent_2px,transparent_22px)]
            dark:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.08)_0px,rgba(255,255,255,0.08)_1px,transparent_2px,transparent_22px)]"
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-icon">
              <span className="dark:inline hidden">Stay informed</span>
              <span className="inline dark:hidden">Stop overthinking. Start building.</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-lg text-[#4C4C4C] dark:text-[#9CB3C9] mb-10 max-w-2xl">
              Market insights that help you start and grow your business.
            </p>

            {/* Email Input Form */}
            <form onSubmit={handleSubmit} className="relative w-full max-w-lg">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full h-14 md:h-16 pl-6 pr-16 rounded-full border border-foreground/10
                  bg-white dark:bg-[#192468]
                  text-icon placeholder:text-[#AFD0F2]
                  focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all shadow-sm"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12
                  bg-[#FB8122] hover:bg-[#e6731a] text-white rounded-full
                  flex items-center justify-center transition-transform active:scale-95 shadow-lg disabled:opacity-50"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}