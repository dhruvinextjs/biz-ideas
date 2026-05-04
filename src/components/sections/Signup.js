"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXFill } from "react-icons/ri";

export default function Signup() {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);

  const benefits = [
    {
      image: "/images/store.png",
      text: "Connect with other users running online businesses.",
    },
    {
      image: "/images/chats.png",
      text: "Get feedback on your business ideas, landing pages, and more.",
    },
    {
      image: "/images/new-message.png",
      text: "Get the best new stories from founders in your inbox.",
    },
    {
      image: "/images/fighter.png",
      text: "Help us build the best community for people like you.",
    },
    {
      image: "/images/chats.png",
      text: "See the best content and conversations, tailored to you.",
    },
    {
      image: "/images/charge.png",
      text: "Choose your login information to finish signing up.",
    },
    {
      image: "/images/fighter.png",
      text: "Drive into the community. Your first days are the most important!",
    },
  ];

  const optionsStep2 = [
    "No interest in starting a business",
    "Considering or planning to start a business",
    "Actively getting started on something new",
    "Working on a business, no revenue yet",
    "My business has paying customers, but doesn’t fully support me",
    "Earnings from my business fully support me",
  ];

  const optionsStep3 = [
    "No, and coding is totally unfamiliar",
    "Not, but I understand a few concepts",
    "Yes, and I'm beginner",
    "Yes, and I'm intermediate or a professional",
  ];

  const tags = [
    "Advertising", "AI", "Analytics", "APIs", "Art", "B2B", "B2C", "Books", "Bots",
    "Calendar", "Clothing", "Communication", "Community", "Content", "Crypto",
    "Design", "Ecommerce", "Education", "Email Marketing", "Events", "Fashion",
    "Finance", "Food & Drink", "Games", "Growth", "Hardware", "Health & Fitness",
    "Home Automation", "Investing", "Jobs & Hiring", "Kids", "Legal", "Mailing Lists",
    "Marketing", "Marketplaces", "Medical", "Movies & Video", "Music & Audio",
    "Open Source", "News & Magazines", "Outdoors", "Payments", "Photography",
    "Podcasting", "Politics", "Productivity", "Programming", "SaaS", "Sales",
    "Shopping", "Social Media", "Sports", "Task Management", "Transportation",
    "Travel", "Utilities", "Wearables", "Weather", "Web3", "WordPress", "Writing"
  ];

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };
  return (
    <section className="w-full flex justify-center items-center pt-36 pb-12 px-4 bg-background">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-start">

        {/* LEFT CARD */}
        <div className="bg-card rounded-lg relative shadow-lg p-6 md:p-8">
          <div className="absolute top-10 -right-2 w-4 h-4 bg-card rotate-45" />

          {step === 1 && (
            <>
              <div className="pb-5 mb-6 border-b border-foreground/30">
                <h2 className="text-icon text-lg font-bold">
                  Join a thriving community of entrepreneurs and developers.
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                {benefits.slice(0, 3).map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Image src={benefit.image} alt="" width={32} height={32} />
                    <p className="text-foreground/80 text-sm">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="pb-5 mb-6 border-b border-foreground/30">
                <h2 className="text-icon text-lg font-bold">
                  Tell us a little about yourself!
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                {benefits.slice(3, 5).map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Image src={benefit.image} alt="" width={26} height={26} />
                    <p className="text-foreground/80 text-sm">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="pb-5 mb-6 border-b border-foreground/30">
                <h2 className="text-icon text-lg font-bold">
                  Tell us a little about yourself!
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                {benefits.slice(3, 5).map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Image src={benefit.image} alt="" width={26} height={26} />
                    <p className="text-foreground/80 text-sm">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div className="pb-5 mb-6 border-b border-foreground/30">
                <h2 className="text-icon text-lg font-bold">
                  Tell us a little about yourself!
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                {benefits.slice(3, 5).map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Image src={benefit.image} alt="" width={26} height={26} />
                    <p className="text-foreground/80 text-sm">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

          {step === 5 && (
            <>
              <div className="pb-5 mb-6 border-b border-foreground/30">
                <h2 className="text-icon text-lg font-bold">
                  Tell us a little about yourself!
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                {benefits.slice(3, 5).map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Image src={benefit.image} alt="" width={26} height={26} />
                    <p className="text-foreground/80 text-sm">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

           {step === 6 && (
            <>
              <div className="pb-5 mb-6 border-b border-foreground/30">
                <h2 className="text-icon text-lg font-bold">
                  Almost Done!
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                {benefits.slice(5, 7).map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Image src={benefit.image} alt="" width={26} height={26} />
                    <p className="text-foreground/80 text-sm">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col justify-between">

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <div>
                <label className="text-foreground/80 text-sm mb-2 block">
                  Choose a username
                </label>

                <input
                  type="text"
                  placeholder="e.g. john506"
                  className="w-full rounded-lg px-4 py-3 bg-background text-foreground/80 border border-foreground/10"
                />

                <button
                  onClick={() => setStep(2)}
                  className="mt-4 flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full"
                >
                  Next <ArrowRight size={15} />
                </button>
              </div>
              <p className="text-foreground/50 text-sm mt-6">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-icon font-medium underline decoration-primary underline-offset-5 transition-colors"
                >
                  Sign in.
                </Link>
              </p>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <div>
                <h3 className="text-icon font-bold mb-4">
                  Which best describes your stage?
                </h3>

                <div className="flex flex-col gap-3">
                  {optionsStep2.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedOption(i)}
                      className={`text-left px-4 py-3 rounded-lg border transition
                      ${selectedOption === i
                          ? "bg-card border-card text-foreground dark:text-white"
                          : "border-foreground/20 text-foreground hover:bg-card/50"
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setStep(3)}
                  className="mt-6 flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full"
                >
                  Next <ArrowRight size={15} />
                </button>
              </div>
              <p className="text-foreground/50 text-sm mt-6">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-icon font-medium underline decoration-primary underline-offset-5 transition-colors"
                >
                  Sign in.
                </Link>
              </p>
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <div>
                <h3 className="text-icon font-bold mb-4">
                  Do you know how to code?
                </h3>

                <div className="flex flex-col gap-3">
                  {optionsStep3.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedOption(i)}
                      className={`text-left px-4 py-3 rounded-lg border transition
                      ${selectedOption === i
                          ? "bg-card border-card text-foreground dark:text-white"
                          : "border-foreground/20 text-foreground hover:bg-card/50"
                        }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setStep(4)}
                  className="mt-6 flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full"
                >
                  Next <ArrowRight size={15} />
                </button>
              </div>
              <p className="text-foreground/50 text-sm mt-6">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-icon font-medium underline decoration-primary underline-offset-5 transition-colors"
                >
                  Sign in.
                </Link>
              </p>
            </>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <>
              <div>
                <h3 className="text-icon font-bold mb-2">
                  What types of businesses are you most interested in running?
                </h3>

                <p className="text-icon text-sm mb-4">
                  Choose as many as you like.
                </p>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, i) => {
                    const isSelected = selectedTags.includes(tag);

                    return (
                      <button
                        key={i}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1.5 text-xs rounded-md border transition-all duration-200
  ${isSelected
                            ? "bg-card border-card text-foreground dark:text-white"
                            : "border-foreground/20 text-foreground hover:bg-card/50 hover:border-card"
                          }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>

                <button onClick={() => setStep(5)} className="mt-6 flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full">
                  Next <ArrowRight size={15} />
                </button>
              </div>
              <p className="text-foreground/50 text-sm mt-6">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-icon font-medium underline decoration-primary underline-offset-5 transition-colors"
                >
                  Sign in.
                </Link>
              </p>
            </>
          )}



          {step === 5 && (
            <>
              <div className="w-full max-w-md">

                {/* BIRTHDAY */}
                <div className="mb-4 bg-card rounded-md px-4 py-3">
                  <p className="text-[11px] text-foreground/60 uppercase mb-2 tracking-wide">
                    Birthday*
                  </p>

                  <div className="flex gap-2">
                    <input
                      placeholder="Month"
                      className="bg-transparent w-full text-sm outline-none placeholder:text-foreground/40"
                    />
                    <input
                      placeholder="Day"
                      className="bg-transparent w-full text-sm outline-none placeholder:text-foreground/40"
                    />
                    <input
                      placeholder="Year"
                      className="bg-transparent w-full text-sm outline-none placeholder:text-foreground/40"
                    />
                  </div>
                </div>

                {/* LOCATION */}
                <div className="mb-4 bg-card rounded-md px-4 py-3">
                  <p className="text-[11px] text-foreground/60 uppercase mb-2 tracking-wide">
                    Location*
                  </p>

                  <input
                    placeholder="Type your city name"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40"
                  />
                </div>

                {/* TWITTER */}
                <div className="mb-2 bg-card rounded-md px-4 py-3">
                  <p className="text-[11px] text-foreground/60 uppercase mb-2 tracking-wide">
                    Twitter Handle*
                  </p>

                  <input
                    placeholder="Enter your Twitter handle"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40"
                  />
                </div>

                {/* BUTTON */}
                <button onClick={() => setStep(6)} className="mt-6 flex items-center gap-2 bg-primary text-white text-sm font-semibold px-6 py-2.5 rounded-full uppercase tracking-wide">
                  Next <ArrowRight size={15} />
                </button>

              </div>
              <p className="text-foreground/50 text-sm mt-6">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-icon font-medium underline decoration-primary underline-offset-5 transition-colors"
                >
                  Sign in.
                </Link>
              </p>
            </>
          )}

         {step === 6 && (
  <>
    <div className="w-full max-w-md">
      {/* USER INFO */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center overflow-hidden">
          <Image
            src="/images/user.png"
            alt="user"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>

        <span className="text-sm font-semibold text-icon">
          john68
        </span>
      </div>

      {/* EMAIL */}
      <input
        type="email"
        placeholder="Enter email address"
        className="w-full h-11 px-4 rounded-md bg-card border border-foreground/10 text-sm text-foreground outline-none placeholder:text-foreground/40 mb-3"
      />

      {/* PASSWORD */}
      <input
        type="password"
        placeholder="Choose password"
        className="w-full h-11 px-4 rounded-md bg-card border border-foreground/10 text-sm text-foreground outline-none placeholder:text-foreground/40 mb-4"
      />

      {/* SUBMIT BUTTON */}
      <button className="bg-primary hover:bg-primary/90 text-white text-xs font-bold tracking-widest px-4 h-10 rounded-full flex items-center gap-2 uppercase transition">
        Submit <ArrowRight size={14} />
      </button>

      {/* DIVIDER */}
      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-foreground/15" />
        <span className="text-xs text-foreground/50">OR</span>
        <div className="flex-1 h-px bg-foreground/15" />
      </div>

      {/* SOCIAL LOGIN */}
      <div className="grid grid-cols-2 gap-3">
         <button className="h-11 rounded-md bg-white text-black text-sm font-medium flex items-center justify-center gap-2">
    <FcGoogle size={18} />
    Login with Google
  </button>

  {/* X BUTTON */}
  <button className="h-11 rounded-md bg-black text-white text-sm font-medium flex items-center justify-center gap-2">
    Login with <RiTwitterXFill size={16} />
  </button>
      </div>
    </div>

    <p className="text-foreground/50 text-sm mt-6">
      Already have an account?{" "}
      <Link
        href="/login"
        className="text-icon font-medium underline decoration-primary underline-offset-4"
      >
        Sign in.
      </Link>
    </p>
  </>
)}
        </div>
      </div>
    </section>
  );
} 