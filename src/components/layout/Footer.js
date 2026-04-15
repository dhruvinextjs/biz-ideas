import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';
import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-background border-t border-dotted border-foreground/10 pt-16 pb-10 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              {/* Logo placeholder - ensure path is correct */}
              <Image 
                src="/logo.png" 
                alt="TheBizIdeas Logo" 
                width={150} 
                height={40} 
                className="dark:filter dark:brightness-200"
              />
            </div>
            <p className="text-sm leading-relaxed text-[#4C4C4C] dark:text-[#9CB3C9] mb-6 max-w-sm">
              Follow <span className="inline-flex items-center bg-[#FB8122] text-white px-1.5 py-0.5 rounded text-[10px] font-bold mx-1">@TheBizIdeas</span> on X for stories and insights about founders building profitable online businesses, and to connect with others in the TheBizIdeas community.
            </p>
            <div className="flex flex-col gap-4">
               <p className="text-[12px] text-foreground/40">
                © {currentYear} TheBizIdeas. FAQ · Terms · Privacy · Cookie Settings
              </p>
              <div className="flex items-center gap-5 text-foreground/60">
                {/* Replaced with react-icons */}
                <FaFacebookF size={18} className="cursor-pointer hover:text-primary transition-colors" />
                <FaXTwitter size={18} className="cursor-pointer hover:text-primary transition-colors" />
                <FaInstagram size={19} className="cursor-pointer hover:text-primary transition-colors" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-4 text-[14px] text-[#4C4C4C] dark:text-[#9CB3C9]">
              {['Home', 'Case Studies', 'Tools', 'Services', 'Blog'].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-primary transition-colors">{link}</Link>
                </li>
              ))}
              <li>
                <Link href="#" className="text-[#FB8122] font-bold flex items-center gap-2">
                  Join <MoveRight size={16} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-foreground">Services</h4>
            <ul className="space-y-4 text-[14px] text-[#4C4C4C] dark:text-[#9CB3C9]">
              {[
                'Business Consultation', 
                'Business Plan Preparation', 
                'Scope Document Preparation', 
                'Idea Validation', 
                'Domain & Hosting Setup'
              ].map((service) => (
                <li key={service}>
                  <Link href="#" className="hover:text-primary transition-colors">{service}</Link>
                </li>
              ))}
              <li>
                <Link href="#" className="text-[#FB8122] font-bold flex items-center gap-2">
                  View more <MoveRight size={16} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Databases */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6 text-foreground">Databases</h4>
            <ul className="space-y-4 text-[14px] text-[#4C4C4C] dark:text-[#9CB3C9]">
              {['Business Ideas', 'App Ideas', 'Startup Ideas'].map((db) => (
                <li key={db}>
                  <Link href="#" className="hover:text-primary transition-colors">{db}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}