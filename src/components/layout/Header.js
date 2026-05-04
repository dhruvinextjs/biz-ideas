"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "../common/ThemeToggle";
import {
  Search,
  Menu,
  X,
  User,
  Bookmark,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { FaCircleUser } from "react-icons/fa6";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  // ❌ TS hata diya
  const dropdownRef = useRef(null);

  const navLinks = [
    { name: "Business Ideas", href: "/business-ideas-listing" },
    { name: "App Ideas", href: "/app-ideas-listing" },
    { name: "Startup Ideas", href: "/startup-ideas-listing" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Tools", href: "/business-tools" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blogs" },
  ];

  // ✅ FIXED (no TS)
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const status = localStorage.getItem("isLoggedIn");
    if (status === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const profileMenuItems = [
    { name: "Profile", icon: <FaCircleUser size={18} />, href: "/profile" },
    { name: "Bookmarks", icon: <Bookmark size={18} />, href: "/bookmark" },
    { name: "Notifications", icon: <Bell size={18} />, href: "/notifications" },
    { name: "Settings", icon: <Settings size={18} />, href: "/settings" },
  ];

  return (
    <header className="w-full pt-4 md:pt-6 px-4 bg-transparent absolute top-0 z-50">
      <div className="container mx-auto max-w-7xl bg-card border border-[#E0E0E0] dark:border-[#2D3774] rounded-2xl px-4 md:px-6 h-[60px] flex items-center justify-between transition-colors">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center justify-center shrink-0 h-full"
        >
          <Image
            src="/images/Logo-light.png"
            alt="Logo"
            width={140}
            height={52}
            className="object-contain dark:hidden block"
          />
          <Image
            src="/images/Logo-dark.png"
            alt="Logo"
            width={140}
            height={52}
            className="object-contain hidden dark:block"
          />
        </Link>

        {/* Right */}
        <div className="flex items-center gap-6 lg:gap-8">
          <nav className="hidden xl:flex items-center gap-4 lg:gap-5">
            {navLinks.map((link, idx) => (
              <div key={link.name} className="flex items-center gap-4 lg:gap-3">
                <Link
                  href={link.href}
                  className="text-[13px] font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {link.name}
                </Link>
                {idx !== navLinks.length - 1 && (
                  <span className="text-foreground/20 text-xs">|</span>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-5">
            <button className="p-2 text-icon hover:text-primary transition-colors">
              <Search size={20} />
            </button>

            <ThemeToggle />

            {isLoggedIn ? (
              <div className="relative" ref={dropdownRef}>
                <div
                  className="w-10 h-10 rounded-full border-2 border-white/10 overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                >
                  <Image
                    src="/images/person1.jpg"
                    alt="Profile"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-3 w-56 bg-card border border-white/10 rounded-2xl py-3 shadow-2xl z-[100]">
                    <div className="flex flex-col">
                      {profileMenuItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`group flex items-center gap-4 px-5 py-3 text-[15px] transition-colors ${
                            pathname === item.href
                              ? "bg-[#1C2C5E] text-white"
                              : "text-icon hover:bg-[#1C2C5E] hover:text-white"
                          }`}
                        >
                          <span
                            className={`transition-colors ${
                              pathname === item.href
                                ? "text-white"
                                : "text-icon group-hover:text-white"
                            }`}
                          >
                            {item.icon}
                          </span>
                          {item.name}
                        </Link>
                      ))}

                      <div className="mt-2 pt-2 border-t border-white/5">
                        <button className="flex items-center gap-4 px-5 py-3 text-[15px] text-red-500 hover:bg-white/5 w-full">
                          <LogOut size={18} />
                          Sign out
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/signup">
                <button className="hidden sm:block bg-primary text-white px-7 py-2.5 rounded-full text-[13px] font-bold uppercase">
                  Join
                </button>
              </Link>
            )}

            <button
              className="xl:hidden p-2 text-icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[calc(100%+10px)] left-0 right-0 bg-card border border-[#E0E0E0] dark:border-[#2D3774] rounded-2xl p-4 flex flex-col gap-4 xl:hidden shadow-xl">
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
          </div>
        )}
      </div>
    </header>
  );
}
