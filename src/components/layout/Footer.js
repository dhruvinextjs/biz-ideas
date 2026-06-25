// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { MoveRight } from "lucide-react";
// import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="w-full bg-background border-t border-dotted border-foreground/10 pt-16 pb-10 transition-colors duration-300">
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"> */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.4fr_1fr_1fr_1fr] gap-12 mb-16">
//           {/* Brand Section */}
//           <div className="lg:col-span-1">
//             <Link href="/" className="inline-flex items-center mb-4">
//               <div className="relative w-[150px] h-[45px]">
//                 {/* Light Logo */}
//                 <Image
//                   src="/images/Logo-light.png"
//                   alt="Logo"
//                   fill
//                   className="object-contain dark:hidden"
//                   priority
//                 />

//                 {/* Dark Logo */}
//                 <Image
//                   src="/images/Logo-dark.png"
//                   alt="Logo"
//                   fill
//                   className="object-contain hidden dark:block"
//                   priority
//                 />
//               </div>
//             </Link>
//             <p className="text-sm leading-relaxed text-[#4C4C4C] dark:text-[#9CB3C9] mb-4 max-w-lg">
//               Follow{" "}
//               <span className="inline-flex items-center bg-[#FB8122] text-white px-1.5 py-0.5 rounded text-[10px] font-bold mx-1">
//                 @TheBizIdeas
//               </span>{" "}
//               on X for stories and insights about founders building profitable
//               online businesses, and to connect with others in the TheBizIdeas
//               community.
//             </p>
//             <div className="flex flex-col gap-4">
//               <p className="text-[14px] text-[#4C4C4C] dark:text-[#9CB3C9]">
//                 <Link href="/about">About</Link> · <Link href="/faqs">FAQ</Link>{" "}
//                 · <Link href={"/terms-conditions"}>Terms</Link> · <Link href={"/privacy-policy"}>Privacy</Link> · <Link href="/contact">Contact</Link>
//               </p>
//               <div className="flex items-center gap-2 text-[#4C4C4C] dark:text-[#9CB3C9]">
//                 <p className="text-[12px] text-[#4C4C4C] dark:text-[#9CB3C9]">
//                   © TheBizIdeas.
//                 </p>
//                 <div className="gap-5 flex">
//                   {/* Replaced with react-icons */}
//                   <FaFacebookF
//                     size={18}
//                     className="cursor-pointer hover:text-primary transition-colors"
//                   />
//                   <FaXTwitter
//                     size={18}
//                     className="cursor-pointer hover:text-primary transition-colors"
//                   />
//                   <FaInstagram
//                     size={19}
//                     className="cursor-pointer hover:text-primary transition-colors"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-foreground">
//               Quick Links
//             </h4>
//             <ul className="space-y-2 text-[14px] text-[#4C4C4C] dark:text-[#9CB3C9]">
//               {[
//                 { name: "Home", href: "/" },
//                 { name: "Case Studies", href: "/case-studies" },
//                 { name: "Tools", href: "/business-tools" },
//                 { name: "Services", href: "/services" },
//                 { name: "Blog", href: "/blogs" },
//               ].map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     href={link.href}
//                     className="hover:text-primary transition-colors"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//               <li>
//                 <Link
//                   href="#"
//                   className="text-[#FB8122] font-bold flex items-center gap-2"
//                 >
//                   Join <MoveRight size={16} />
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-foreground">
//               Services
//             </h4>
//             <ul className="space-y-2 text-[14px] text-[#4C4C4C] dark:text-[#9CB3C9]">
//               {[
//                 "Business Consultation",
//                 "Business Plan Preparation",
//                 "Scope Document Preparation",
//                 "Idea Validation",
//                 "Domain & Hosting Setup",
//               ].map((service) => (
//                 <li key={service}>
//                   <Link
//                     href="#"
//                     className="hover:text-primary transition-colors"
//                   >
//                     {service}
//                   </Link>
//                 </li>
//               ))}
//               <li>
//                 <Link
//                   href="#"
//                   className="text-[#FB8122] font-bold flex items-center gap-2"
//                 >
//                   View more <MoveRight size={16} />
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Databases */}
//           <div>
//             <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-foreground">
//               Databases
//             </h4>
//             <ul className="space-y-4 text-[14px] text-[#4C4C4C] dark:text-[#9CB3C9]">
//               {[
//                 { name: "Business Ideas", href: "/business-ideas-listing" },
//                 { name: "App Ideas", href: "/app-ideas-listing" },
//                 { name: "Startup Ideas", href: "/startup-ideas-listing" },
//               ].map((db) => (
//                 <li key={db.name}>
//                   <Link href={db.href} className="hover:text-primary">
//                     {db.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }



import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
 
export default function Footer() {
  const currentYear = new Date().getFullYear();
 
  return (
    <footer className="w-full bg-background  pt-8 pb-10 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.4fr_1fr_1fr_1fr] gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4">
              <div className="relative w-[150px] h-[45px]">
                {/* Light Logo */}
                <Image
                  src="/images/Logo-light.png"
                  alt="Logo"
                  fill
                  className="object-contain dark:hidden"
                  priority
                />
 
                {/* Dark Logo */}
                <Image
                  src="/images/Logo-dark.png"
                  alt="Logo"
                  fill
                  className="object-contain hidden dark:block"
                  priority
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-[#4C4C4C] dark:text-[#9CB3C9] mb-4 max-w-lg">
              Follow{" "}
              <span className="inline-flex items-center bg-[#FB8122] text-white px-1.5 py-0.5 rounded text-[10px] font-bold mx-1">
                @TheBizIdeas
              </span>{" "}
              on X for stories and insights about founders building profitable
              online businesses, and to connect with others in the TheBizIdeas
              community.
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-[14px] text-[#4C4C4C] dark:text-[#9CB3C9]">
                <Link href="/about">About</Link> · <Link href="/faqs">FAQ</Link>{" "}
                · <Link href={"/terms-conditions"}>Terms</Link> · <Link href={"/privacy-policy"}>Privacy</Link> · <Link href="/contact">Contact</Link>
              </p>
              <div className="flex items-center gap-2 text-[#4C4C4C] dark:text-[#9CB3C9]">
                <p className="text-[12px] text-[#4C4C4C] dark:text-[#9CB3C9]">
                  © TheBizIdeas.
                </p>
                <div className="gap-5 flex">
                  {/* Replaced with react-icons */}
                  <FaFacebookF
                    size={18}
                    className="cursor-pointer hover:text-primary transition-colors"
                  />  
                  <FaXTwitter
                    size={18}
                    className="cursor-pointer hover:text-primary transition-colors"
                  />
                  <FaInstagram
                    size={19}
                    className="cursor-pointer hover:text-primary transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>
 
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[14px] text-[#4C4C4C] dark:text-[#9CB3C9]">
              {[
                { name: "Home", href: "/" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Tools", href: "/business-tools" },
                { name: "Services", href: "/services" },
                { name: "Blog", href: "/blogs" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#"
                  className="text-[#FB8122] font-bold flex items-center gap-2"
                >
                  Join <MoveRight size={16} />
                </Link>
              </li>
            </ul>
          </div>
 
          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-foreground">
              Services
            </h4>
            <ul className="space-y-2 text-[14px] text-[#4C4C4C] dark:text-[#9CB3C9]">
              {[
                "Business Consultation",
                "Business Plan Preparation",
                "Scope Document Preparation",
                "Idea Validation",
                "Domain & Hosting Setup",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#"
                  className="text-[#FB8122] font-bold flex items-center gap-2"
                >
                  View more <MoveRight size={16} />
                </Link>
              </li>
            </ul>
          </div>
 
          {/* Databases */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-foreground">
              Databases
            </h4>
            <ul className="space-y-2 text-[14px] text-[#4C4C4C] dark:text-[#9CB3C9]">
              {[
                { name: "Business Ideas", href: "/business-ideas-listing" },
                { name: "App Ideas", href: "/app-ideas-listing" },
                { name: "Startup Ideas", href: "/startup-ideas-listing" },
              ].map((db) => (
                <li key={db.name}>
                  <Link href={db.href} className="hover:text-primary">
                    {db.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}