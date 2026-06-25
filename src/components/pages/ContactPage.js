// "use client";
// import React, { useEffect } from "react";
// import { Mail, MessageCircle, Monitor } from "lucide-react";

// import {
//   FaFacebookF,
//   FaXTwitter,
//   FaInstagram,
//   FaLinkedinIn,
//   FaWhatsapp,
// } from "react-icons/fa6";
// import { BsMicrosoftTeams } from "react-icons/bs";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { getCaptchaData } from "@/redux/slices/ContactSlice";



// export default function ContactPage() {
//     const router = useRouter()
//     const dispatch = useDispatch()

//     // Redux store se dynamic captcha parameters nikalna
//   const { captchaData } = useSelector((state) => state.contact);

//   useEffect(() => {
//     dispatch(getCaptchaData());
//   }, [dispatch]);

//   const displayCaptchaText = captchaData?.text || "What is 1 x 8 ?";
//   return (
//     <div className="min-h-screen bg-background font-sans transition-colors duration-300 py-16 px-4 md:px-8 mt-20 relative overflow-hidden">
//       {/* Optional: Faint Network Background Pattern for Header (Can be replaced with an actual SVG) */}
//       <div className="absolute top-0 left-0 w-full h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FB8122]/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* ========================================== */}
//         {/* 1. PAGE HEADER                             */}
//         {/* ========================================== */}
//         <section className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-icon mb-4">
//             Get in <span className="text-[#FB8122]">Touch</span>
//           </h1>
//           <p className="text-sm md:text-base text-icon opacity-90 max-w-md mx-auto leading-relaxed">
//             Have a question, need a consultation, or ready to build your next
//             big idea? Reach out to our team.
//           </p>
//         </section>

//         {/* ========================================== */}
//         {/* 2. MAIN LAYOUT (FORM & SOCIALS)            */}
//         {/* ========================================== */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
//           {/* --- LEFT COLUMN: CONTACT FORM (bigger) --- */}
//           <div className="lg:col-span-8 bg-card border border-gray-200 dark:border-[#242F70] rounded-2xl p-6 md:p-10 shadow-sm">
//             <h2 className="text-2xl font-bold text-icon mb-8">
//               Send us a message
//             </h2>

//             <form className="space-y-6">
//               <div>
//                 <label className="block text-xs font-medium text-icon mb-2">
//                   Your name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Type here..."
//                   className="w-full bg-gray-50 dark:bg-[#1D2659] border border-gray-200 dark:border-white/10 rounded-lg p-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 transition-all"
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-medium text-icon mb-2">
//                   Email <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="example@mail.com"
//                   className="w-full bg-gray-50 dark:bg-[#1D2659] border border-gray-200 dark:border-white/10 rounded-lg p-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 transition-all"
//                 />
//               </div>

//               {/* Row 2: Country & Phone */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-xs font-medium text-icon mb-2">
//                     Country <span className="text-red-500">*</span>
//                   </label>
//                   <select className="w-full bg-gray-50 dark:bg-[#1D2659] border border-gray-200 dark:border-white/10 rounded-lg p-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 transition-all appearance-none">
//                     <option value="">Select</option>
//                     <option value="us">United States</option>
//                     <option value="in">India</option>
//                     <option value="uk">United Kingdom</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-xs font-medium text-icon mb-2">
//                     Phone number <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     placeholder="Type here..."
//                     className="w-full bg-gray-50 dark:bg-[#1D2659] border border-gray-200 dark:border-white/10 rounded-lg p-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 transition-all"
//                   />
//                 </div>
//               </div>

//               {/* Row 3: Requirement */}
//               <div>
//                 <label className="block text-xs font-medium text-icon mb-2">
//                   Project Requirement (optional)
//                 </label>
//                 <textarea
//                   rows="4"
//                   placeholder="Type here..."
//                   className="w-full bg-gray-50 dark:bg-[#1D2659] border border-gray-200 dark:border-white/10 rounded-lg p-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 transition-all resize-none"
//                 ></textarea>
//               </div>

//               {/* Captcha */}
//               <div className="bg-white border border-gray-200 px-4 py-2 inline-block">
//                 <label className="block text-xs font-bold text-gray-900">
//                   Captcha <span className="text-red-500">*</span>
//                 </label>
//                 <div className="flex items-center gap-3">
//                   <span className="text-sm font-medium text-gray-800 select-none">
//                     {displayCaptchaText}
//                   </span>
//                   <input
//                     type="text"
//                     className="w-16 border border-gray-300 rounded p-1.5 text-sm text-center text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#FB8122]"
//                   />
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div className="pt-0">
//                 <button
//                   type="button"
//                   className="px-10 py-3 bg-[#FB8122] hover:bg-[#e6751e] text-white rounded-full font-medium text-sm transition-colors shadow-md shadow-[#FB8122]/20"
//                 onClick={() => router.push("/thank-you")}
//                 >
//                   SUBMIT
//                 </button>
//               </div>
//             </form>
//           </div>

//           {/* --- RIGHT COLUMN: OTHER WAYS TO CONNECT --- */}
//           <div className="lg:col-span-4 flex flex-col h-full gap-8 items-center text-center">
//             {/* Action Buttons */}
//             <div className="w-full max-w-[320px]">
//               <h3 className="text-2xl font-bold text-icon">
//                 Other ways to connect
//               </h3>

//               {/* ORANGE LINE ADDED HERE */}
//               <div className="w-12 h-1 bg-[#FB8122] mx-auto my-4 rounded-full"></div>

//               <p className="text-sm text-icon opacity-90 mb-8 max-w-[280px] mx-auto leading-relaxed">
//                 Whatsapp, Email whatever works for you. We'll be here.
//               </p>

//               <div className="space-y-4">
//                 <button className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary hover:bg-[#e6751e] text-white rounded-full font-medium text-sm transition-transform hover:-translate-y-0.5">
//                   <Mail size={22} />
//                   Email Us
//                 </button>

//                 <button className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#0B63BD] hover:bg-[#0052a3] text-white rounded-full font-medium text-sm transition-transform hover:-translate-y-0.5">
//                   <FaLinkedinIn size={22} />
//                   Send Message
//                 </button>

//                 <button className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#28B43E] hover:bg-[#1da851] text-white rounded-full font-medium text-sm transition-transform hover:-translate-y-0.5">
//                   <FaWhatsapp size={22} />
//                   Chat with WhatsApp
//                 </button>

//                 <button className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#5059C9] hover:bg-[#464aa8] text-white rounded-full font-medium text-sm transition-transform hover:-translate-y-0.5">
//                   <BsMicrosoftTeams size={22} />
//                   Chat with Teams
//                 </button>
//               </div>
//             </div>

//             {/* Social Icons */}
//             <div className="w-full flex flex-col items-center">
//               <h3 className="text-xl font-bold text-icon mb-4">
//                 Socialize with us.
//               </h3>

//               <div className="flex items-center justify-center gap-4">
//                 <a
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-card border border-gray-300 dark:border-[#0B6CFD] flex items-center justify-center text-icon hover:bg-[#FB8122] hover:text-white hover:border-[#FB8122] transition-all"
//                 >
//                   <FaFacebookF size={18} />
//                 </a>

//                 <a
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-card  border border-gray-300 dark:border-[#0B6CFD] flex items-center justify-center text-icon hover:bg-[#FB8122] hover:text-white hover:border-[#FB8122] transition-all"
//                 >
//                   <FaXTwitter size={18} />
//                 </a>

//                 <a
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-card  border border-gray-300 dark:border-[#0B6CFD] flex items-center justify-center text-icon hover:bg-[#FB8122] hover:text-white hover:border-[#FB8122] transition-all"
//                 >
//                   <FaInstagram size={18} />
//                 </a>

//                 <a
//                   href="#"
//                   className="w-10 h-10 rounded-full bg-card  border border-gray-300 dark:border-[#0B6CFD] flex items-center justify-center text-icon hover:bg-[#FB8122] hover:text-white hover:border-[#FB8122] transition-all"
//                 >
//                   <FaLinkedinIn size={18} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";
import React, { useEffect, useState } from "react";
import { Mail, MessageCircle, Monitor } from "lucide-react";

import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import { BsMicrosoftTeams } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getCaptchaData, submitContactForm } from "@/redux/slices/ContactSlice";

export default function ContactPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  // Local state form controls ko dynamic chalane ke liye
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    projectRequirement: "",
  });

  const [captchaInput, setCaptchaInput] = useState("");

  // Redux selectors global loading aur post methods tracking ke liye
  const { captchaData, submitLoading, submitSuccess, loading, error } = useSelector((state) => state.contact);
  console.log("captchaData", captchaData);
  console.log("loading", loading);
  console.log("error", error);
  useEffect(() => {
    dispatch(getCaptchaData());
  }, [dispatch]);

  // Response dynamically trigger hone par router action follow karne ke liye
  useEffect(() => {
    if (submitSuccess) {
      router.push("/thank-you");
    }
  }, [submitSuccess]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.country ||
      !formData.phone
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (!captchaInput) {
      alert("Please enter captcha answer");
      return;
    }

    const payload = {
      ...formData,

      captchaId:
        captchaData?.captchaId,

      captchaAnswer:
        captchaInput,
    };

    console.log("PAYLOAD", payload);

    dispatch(
      submitContactForm(payload)
    );
  };

  const displayCaptchaText = captchaData?.question || "";

  return (
    <div className="min-h-screen bg-background font-sans transition-colors duration-300 py-16 px-4 md:px-8 mt-20 relative overflow-hidden">
      {/* Optional: Faint Network Background Pattern for Header */}
      <div className="absolute top-0 left-0 w-full h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FB8122]/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ========================================== */}
        {/* 1. PAGE HEADER                             */}
        {/* ========================================== */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-icon mb-4">
            Get in <span className="text-[#FB8122]">Touch</span>
          </h1>
          <p className="text-sm md:text-base text-icon opacity-90 max-w-md mx-auto leading-relaxed">
            Have a question, need a consultation, or ready to build your next
            big idea? Reach out to our team.
          </p>
        </section>

        {/* ========================================== */}
        {/* 2. MAIN LAYOUT (FORM & SOCIALS)            */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* --- LEFT COLUMN: CONTACT FORM (bigger) --- */}
          <div className="lg:col-span-8 bg-card border border-gray-200 dark:border-[#242F70] rounded-2xl p-6 md:p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-icon mb-8">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-medium text-icon mb-2">
                  Your name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Type here..."
                  className="w-full bg-gray-50 dark:bg-[#1D2659] border border-gray-200 dark:border-white/10 rounded-lg p-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-icon mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@mail.com"
                  className="w-full bg-gray-50 dark:bg-[#1D2659] border border-gray-200 dark:border-white/10 rounded-lg p-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 transition-all"
                />
              </div>

              {/* Row 2: Country & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-icon mb-2">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 dark:bg-[#1D2659] border border-gray-200 dark:border-white/10 rounded-lg p-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 transition-all appearance-none"
                  >
                    <option value="">Select</option>
                    <option value="united states">United States</option>
                    <option value="india">India</option>
                    <option value="united kingdom">United Kingdom</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-icon mb-2">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Type here..."
                    className="w-full bg-gray-50 dark:bg-[#1D2659] border border-gray-200 dark:border-white/10 rounded-lg p-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Requirement */}
              <div>
                <label className="block text-xs font-medium text-icon mb-2">
                  Project Requirement (optional)
                </label>
                <textarea
                  rows="4"
                  name="projectRequirement"
                  value={formData.projectRequirement}
                  onChange={handleInputChange}
                  placeholder="Type here..."
                  className="w-full bg-gray-50 dark:bg-[#1D2659] border border-gray-200 dark:border-white/10 rounded-lg p-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 transition-all resize-none"
                ></textarea>
              </div>

              {/* Captcha */}
              <div className="bg-white border border-gray-200 px-4 py-2 inline-block">
                <label className="block text-xs font-bold text-gray-900">
                  Captcha <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-800 select-none">
                    {displayCaptchaText}
                  </span>
                  <input
                    type="text"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                    className="w-16 border border-gray-300 rounded p-1.5 text-sm text-center text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#FB8122]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-0">
                <button
                  type="submit"
                  disabled={submitLoading}
                  className="px-10 py-3 bg-[#FB8122] hover:bg-[#e6751e] text-white rounded-full font-medium text-sm transition-colors shadow-md shadow-[#FB8122]/20 disabled:opacity-60"
                >
                  {submitLoading ? "SUBMITTING..." : "SUBMIT"}
                </button>
              </div>
            </form>
          </div>

          {/* --- RIGHT COLUMN: OTHER WAYS TO CONNECT --- */}
          <div className="lg:col-span-4 flex flex-col h-full gap-8 items-center text-center">
            {/* Action Buttons */}
            <div className="w-full max-w-[320px]">
              <h3 className="text-2xl font-bold text-icon">
                Other ways to connect
              </h3>

              <div className="w-12 h-1 bg-[#FB8122] mx-auto my-4 rounded-full"></div>

              <p className="text-sm text-icon opacity-90 mb-8 max-w-[280px] mx-auto leading-relaxed">
                Whatsapp, Email whatever works for you. We'll be here.
              </p>

              <div className="space-y-4">
                <button className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary hover:bg-[#e6751e] text-white rounded-full font-medium text-sm transition-transform hover:-translate-y-0.5">
                  <Mail size={22} />
                  Email Us
                </button>

                <button className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#0B63BD] hover:bg-[#0052a3] text-white rounded-full font-medium text-sm transition-transform hover:-translate-y-0.5">
                  <FaLinkedinIn size={22} />
                  Send Message
                </button>

                <button className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#28B43E] hover:bg-[#1da851] text-white rounded-full font-medium text-sm transition-transform hover:-translate-y-0.5">
                  <FaWhatsapp size={22} />
                  Chat with WhatsApp
                </button>

                <button className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#5059C9] hover:bg-[#464aa8] text-white rounded-full font-medium text-sm transition-transform hover:-translate-y-0.5">
                  <BsMicrosoftTeams size={22} />
                  Chat with Teams
                </button>
              </div>
            </div>

            {/* Social Icons */}
            <div className="w-full flex flex-col items-center">
              <h3 className="text-xl font-bold text-icon mb-4">
                Socialize with us.
              </h3>

              <div className="flex items-center justify-center gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-card border border-gray-300 dark:border-[#0B6CFD] flex items-center justify-center text-icon hover:bg-[#FB8122] hover:text-white hover:border-[#FB8122] transition-all"
                >
                  <FaFacebookF size={18} />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-card  border border-gray-300 dark:border-[#0B6CFD] flex items-center justify-center text-icon hover:bg-[#FB8122] hover:text-white hover:border-[#FB8122] transition-all"
                >
                  <FaXTwitter size={18} />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-card  border border-gray-300 dark:border-[#0B6CFD] flex items-center justify-center text-icon hover:bg-[#FB8122] hover:text-white hover:border-[#FB8122] transition-all"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-card  border border-gray-300 dark:border-[#0B6CFD] flex items-center justify-center text-icon hover:bg-[#FB8122] hover:text-white hover:border-[#FB8122] transition-all"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}