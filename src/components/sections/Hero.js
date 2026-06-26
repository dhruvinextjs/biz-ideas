"use client";
import Image from "next/image";
import { ThumbsUp, MessageSquare, Plus } from "lucide-react";
import Link from "next/link";
 
export default function Hero() {
  return (
    <section className="w-full pt-32 pb-8 px-4 bg-background transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        {/* Main 3-Column Grid */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-6"> */}
        {/* is div me border lagani hai */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 border-b-2 border-dotted border-[#E6E6E6] dark:border-[#1C234D] pb-6">
          {/* LEFT SIDEBAR: Text-based posts (col-3) */}
          <div className="lg:col-span-3 flex flex-col gap-6 pr-6 border-r-2 border-dotted border-[#E6E6E6] dark:border-[#1C234D]">
            {[
              {
                title:
                  "A simple way to keep AI automations from making bad decisions",
                likes: 9,
                comments: 5,
              },
              {
                title: "How to automate your SaaS sustainability for Earth Day",
                likes: 12,
                comments: 3,
              },
              {
                title:
                  "Cold emails stopped working for me... so I tried finding phone numbers for outreach",
                likes: 4,
                comments: 8,
              },
              { title: "Feedback for ListenDock", likes: 20, comments: 18 },
              {
                title: "$1,033 USD in 24 hours from our AppSumo launch.",
                likes: 13,
                comments: 26,
              },
              {
                title: "FeaturesVote: i built a tool i actually use myself",
                likes: 7,
                comments: 5,
              },
              {
                title:
                  "Day 3 update: 60+ cold DMs sent, 2 replies, 0 paying customers — here's what I've learnt and found.",
                likes: 17,
                comments: 49,
              },
              {
                title:
                  "redchecker.io: i built a tool that turns 5 hours of reddit marketing into 20 minutes (and it launched yesterday)",
                likes: 25,
                comments: 34,
              },
            ].map((post, i) => (
              <div
                key={i}
                className="group cursor-pointer border-b-2 border-dotted border-[#E6E6E6] dark:border-[#1C234D] pb-4 last:border-0"
                // className="group cursor-pointer border-b border-foreground/5 pb-4 last:border-0"
              >
                <h3 className="text-2xl text-icon leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                {/* Fixed Color: #4C4C4C for Light, #9CB3C9 for Dark */}
                <div className="flex gap-4 mt-2 text-[14px] text-[#4C4C4C] dark:text-[#9CB3C9]">
                  <span className="flex items-center gap-1">
                    <ThumbsUp size={14} /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare size={14} /> {post.comments}
                  </span>
                </div>
              </div>
            ))}
          </div>
 
          {/* CENTER CONTENT: Featured Image & Grid (col-6) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Main Featured Post */}
            <div className="relative overflow-hidden group cursor-pointer">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/images/startup-sketch.png" // Replace with your image
                  alt="Startup Sketch"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-xl text-icon md:text-2xl leading-tight">
                  Growing a GEO tool to a mid-five-figure MRR within a year
                </h2>
                <p className="text-md text-foreground mt-2">
                  Daniel Peris saw a trend and built for it. Less than a year
                  later, it's bringing in a mid-five-figure MRR. Here's how.
                </p>
                {/* Fixed Color: #4C4C4C for Light, #9CB3C9 for Dark */}
                <div className="flex gap-4 mt-2 text-[14px] text-[#4C4C4C] dark:text-[#9CB3C9]">
                  <span className="flex items-center gap-1">
                    <ThumbsUp  size={14} /> 20 Upvotes
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare size={14} /> 9 Comments
                  </span>
                </div>
              </div>
            </div>
 
            {/* Sub-grid (2 columns) */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 pb-6 border-b border-foreground/5"> */}
            <div className="relative mt-4 pb-6 border-t-2 border-b-2 border-dotted border-[#E6E6E6] dark:border-[#1C234D]">
              {/* Left + Right full height vertical borders */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 border-l-2 border-dotted border-[#E6E6E6] dark:border-[#1C234D]" />
 
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Left Post */}
                <div className="cursor-pointer group p-6 pr-8">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                    <Image
                      src="/images/startup-showcase.png"
                      alt="Showcase"
                      fill
                      className="object-cover"  
                    />
                  </div>
 
                  <h4 className="text-xl leading-tight text-icon group-hover:text-primary transition-colors">
                    Des Traynor on building and growing Intercom to $400M ARR
                  </h4>
 
                  <p className="text-md text-foreground mt-2">
                    Des Traynor and his team created a little company called
                    Intercom maybe you've heard of it. Then,...
                  </p>
 
                  <div className="flex gap-4 mt-2 text-[14px] text-[#4C4C4C] dark:text-[#9CB3C9]">
                    <span className="flex items-center gap-1">
                      <ThumbsUp  size={14} /> 40
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare size={14} /> 30
                    </span>
                  </div>
                </div>
 
                {/* Right Post */}
                <div className="cursor-pointer group p-6 pl-8">
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                    <Image
                      src="/images/media-brand.png"
                      alt="Media Brand"
                      fill
                      className="object-cover"
                    />
                  </div>
 
                  <h4 className="text-xl leading-tight text-icon group-hover:text-primary transition-colors">
                    Growing a blogging side hustle into a 7-figure media brand
                  </h4>
 
                  <p className="text-md text-foreground mt-2">
                    Harry Campbell built a side hustle of a side hustle -
                    blogging about driving for Uber. The blog then gre...
                  </p>
 
                  <div className="flex gap-4 mt-2 text-[14px] text-[#4C4C4C] dark:text-[#9CB3C9]">
                    <span className="flex items-center gap-1">
                      <ThumbsUp  size={14} /> 80
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare size={14} /> 63
                    </span>
                  </div>
                </div>
              </div>
            </div>
 
            {/* 3 Naye sections added here below Sub-grid */}
            {[
              {
                title:
                  "Growing a fully-autononus business to $500k/mo in 3 months",
                excerpt:
                  "Ben Broca built a tool to automate his businesses, then monetized it. Three months after launch, it's bringing in...",
                upvotes: 128,
                comments: 133,
                image: "/images/person1.jpg", // Replace with actual image path
              },
              {
                title: "Competing on price to carve out an $18k MRR foothold",
                excerpt:
                  "When Abhishek Chakravarty saw demand for another product, he sold his side project, and built it. Now, You...",
                upvotes: 93,
                comments: 99,
                image: "/images/person2.jpg", // Replace with actual image path
              },
              {
                title:
                  "Building a $15k+ MRR services company to fund SaaS development",
                excerpt:
                  "Günter Richter quit his job at 50 and built a consultancy to $15k+/mo in a matter of months. Now, he's using it to fun...",
                upvotes: 86,
                comments: 158,
                image: "/images/person3.jpg", // Replace with actual image path
              },
            ].map((post, i) => (
              <div
                key={i}
                className="flex gap-6 items-start group cursor-pointer border-b-2 border-dotted border-[#E6E6E6] dark:border-[#1C234D] pb-6 last:border-0"
              >
                <div className="flex-1">
                  <h3 className="text-lg leading-snug text-icon group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-md text-foreground mt-2">
                    {post.excerpt}
                  </p>
                  <div className="flex gap-4 mt-3 text-[14px] text-[#4C4C4C] dark:text-[#9CB3C9]">
                    <span className="flex items-center gap-1">
                      <ThumbsUp  size={14} /> {post.upvotes} upvotes
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare size={14} /> {post.comments} comments
                    </span>
                  </div>
                </div>
                <div className="relative w-[140px] h-[140px] overflow-hidden shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
 
          {/* RIGHT SIDEBAR: New Posts List (col-3) */}
         <div className="lg:col-span-3 flex flex-col gap-6 pl-6 border-l-2 border-dotted border-[#E6E6E6] dark:border-[#1C234D]">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-primary">New Posts</h3>
              <Link
                href="#"
                className="text-[12px] text-foreground hover:underline"
              >
                View All &gt;
              </Link>
            </div>
 
            <button className="w-full bg-[#1E2A78] hover:bg-[#2F3AB2] text-white py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-bold shadow-lg transition-all active:scale-95 mb-2">
              <Plus size={18} /> Submit a Post to TheBizIdeas
            </button>
 
            {[
              {
                title:
                  "11 Marketing Channels That Consistently Work for Founders",
                user: "@darkogjorgjievski",
                time: "1h",
              },
              {
                title:
                  "8 Ways to Build a List of Companies That Are Using Slack",
                user: "@amritakuls",
                time: "1h",
              },
              {
                title:
                  "I sent 10 cold DMs about failed Stripe payments. Here's what actually happened.",
                user: "@yoasoo",
                time: "4h",
              },
              {
                title:
                  "Week 12: shipped 6 features, had 20+ real conversations, learned more than the previous 3 weeks combined",
                user: "@byollicki",
                time: "6h",
              },
              {
                title:
                  "Evergreen Search: They show you what's popular, not what you should actually rank for.",
                user: "@markary",
                time: "6h",
              },
              {
                title:
                  "I bootstrapped for 4 months. Monday I'm going back to a 9-to-5.",
                user: "@0xprinc",
                time: "9h",
              },
              {
                title:
                  "HamiltonX Solver: How do you usually teach or visualize the Traveling Salesman Problem?",
                user: "@YumnaF",
                time: "1d",
              },
              {
                title:
                  "How do you handle the fact that your AI forgets everything between sessions?",
                user: "@Chloeally",
                time: "1d",
              },
              {
                title:
                  "Week 12: shipped 0 features, had 20+ real conversations, learned more than the previous 3 weeks combined",
                user: "@ItsKondrat",
                time: "6h",
              },
            ].map((post, index) => (
              <div
                key={index}
                // className="flex gap-3 group cursor-pointer items-start"
                className="flex gap-3 group cursor-pointer items-start border-b-2 border-dotted border-[#E6E6E6] dark:border-[#1C234D] pb-4"
              >
                <div className="flex-1">
                  <h4 className="text-md font-semibold text-icon leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 mt-1 text-[14px] text-foreground">
                    <span>{post.time}</span>
                    <span>{post.user}</span>
                  </div>
                </div>
                <div className="w-8 h-8 relative rounded-full overflow-hidden shrink-0 border border-foreground/10">
                  <Image
                    src="/images/avtar.png"
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
 