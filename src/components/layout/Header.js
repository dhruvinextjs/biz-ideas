"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "../common/ThemeToggle";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Business Ideas", href: "#" },
    { name: "App Ideas", href: "#" },
    { name: "Startup Ideas", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Tools", href: "#" },
    { name: "Services", href: "#" },
    { name: "Blog", href: "#" },
  ];

  return (
    <header className="w-full pt-4 md:pt-6 px-4 bg-transparent absolute top-0 z-50">
      <div className="container mx-auto max-w-7xl bg-card border border-[#E0E0E0] dark:border-[#2D3774] rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between transition-colors duration-300 relative">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center shrink-0">
          <div className="relative w-[110px] h-[35px] md:w-[140px] md:h-[45px]"> 
            <Image 
              src="/images/Logo-light.png" 
              alt="Logo"
              fill
              className="object-contain dark:hidden block" 
              priority
            />
            <Image 
              src="/images/Logo-dark.png" 
              alt="Logo"
              fill
              className="object-contain hidden dark:block" 
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-4">
          {navLinks.map((link, idx) => (
            <div key={link.name} className="flex items-center gap-4">
              <Link 
                href={link.href} 
                className="text-[13px] font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
              {idx !== navLinks.length - 1 && (
                <span className="text-foreground/20 font-light text-xs">|</span>
              )}
            </div>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="p-2 text-icon hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          
          <ThemeToggle />

          <button className="hidden sm:block bg-primary hover:opacity-90 text-white px-5 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all shadow-md shadow-orange-500/10">
            Join
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden p-2 text-icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-[#E0E0E0] dark:border-[#2D3774] rounded-2xl p-4 flex flex-col gap-4 xl:hidden shadow-xl animate-in fade-in zoom-in duration-200">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground py-2 border-b border-foreground/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-primary text-white w-full py-3 rounded-xl font-bold uppercase text-sm mt-2">
              Join Now
            </button>
          </div>
        )}
      </div>
    </header>
  );
}