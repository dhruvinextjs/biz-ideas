import Link from "next/link";
import React from "react";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-background flex items-start justify-center pt-32 md:pt-40 px-4">
      <div className="flex flex-col items-center max-w-lg text-center">
        {/* Illustration */}
        <div className="mb-6">
          {/* Light Mode Image */}
          <img
            src="/images/errorlight.png"
            alt="Error Illustration Light"
            className="w-[220px] md:w-[260px] h-auto object-contain mx-auto block dark:hidden"
          />

          {/* Dark Mode Image */}
          <img
            src="/images/error.png"
            alt="Error Illustration Dark"
            className="w-[220px] md:w-[260px] h-auto object-contain mx-auto hidden dark:block"
          />
        </div>

        {/* Text */}
        <div className="mb-10 px-4">
          <h1 className="text-5xl font-bold text-icon mb-3">Page Not Found</h1>
          <p className="text-sm text-foreground leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
            <br />
            Let's get you back on track.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 w-full justify-center">
          <Link href={"/"}>
            {" "}
            <button className="flex-1 py-3.5 px-8 rounded-full border border-[#262C55] text-icon text-xs font-bold tracking-widest uppercase hover:bg-[#1A    204D] active:scale-95 transition-all">
              BACK TO HOME
            </button>
          </Link>

          <Link href={"/contact"}>
            {" "}
            <button className="flex-1 py-3.5 px-8 rounded-full bg-[#FD7306] text-white text-xs font-bold tracking-widest uppercase hover:opacity-90 active:scale-95 transition-all">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
