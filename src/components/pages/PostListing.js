"use client";
import React from "react";
import { Clock, Plus } from "lucide-react";
import Link from "next/link";

export default function PostListing() {
  // Dummy data matching your screenshot
  const feedPosts = [
    {
      id: 1,
      title: "11 Marketing Channels That Consistently Work for Founders",
      time: "22 minutes ago",
      author: "@Darko Gjorgjievski",
      avatar: "https://i.pravatar.cc/150?u=darko",
    },
    {
      id: 2,
      title: "Evergreen Search: They show you what's popular, not what you can actually rank for.",
      time: "38 minutes ago",
      author: "@Vamika",
      avatar: "https://i.pravatar.cc/150?u=vamika",
    },
    {
      id: 3,
      title: "I bootstrapped for 4 months. Monday I'm going back to a 9-to-5.",
      time: "1 hour ago",
      author: "@youse",
      avatar: "https://i.pravatar.cc/150?u=youse",
    },
    {
      id: 4,
      title: "ReachMyAgent: I built a voice AI that speaks on your behalf because I was frustrated from both sides of the...",
      time: "1 hour ago",
      author: "@tokondrat",
      avatar: "https://i.pravatar.cc/150?u=tokon",
    },
    {
      id: 5,
      title: "HamiltonX Solver: How do you usually teach or visualize the Traveling Salesman Problem?",
      time: "1 hour ago",
      author: "@markoss",
      avatar: "https://i.pravatar.cc/150?u=markoss",
    },
    {
      id: 6,
      title: "How do you handle the fact that your AI forgets everything between sessions?",
      time: "1 hour ago",
      author: "@Carterr",
      avatar: "https://i.pravatar.cc/150?u=carterr",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans transition-colors duration-300 py-12 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        
        {/* ========================================== */}
        {/* 1. HEADER SECTION                          */}
        {/* ========================================== */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-icon mb-2">
            Your Feed
          </h1>
          <p className="text-sm md:text-base text-icon opacity-90 mb-6">
            Stay updated with the latest ideas, insights, and trends.
          </p>
      <Link href={"/add-new-post"}>    <button className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#FB8122] hover:bg-[#e6751e] text-white rounded-full font-medium text-sm transition-all shadow-md shadow-[#FB8122]/20 hover:-translate-y-0.5">
            <Plus size={16} strokeWidth={2.5} />
            Add New Post
          </button></Link>
        </div>

        {/* ========================================== */}
        {/* 2. FEED LISTING                            */}
        {/* ========================================== */}
        <div className="space-y-3 md:space-y-4">
          {feedPosts.map((post) => (
            <Link
            href={`/post-listing/${post.id}`}
              key={post.id}
              className="group bg-card border border-gray-200 dark:border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 flex items-center justify-between gap-4 shadow-sm hover:shadow-md transition-all hover:border-[#FB8122]/30 dark:hover:border-[#FB8122]/30 cursor-pointer"
            >
              {/* Post Content */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1.5 truncate group-hover:text-[#FB8122] transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center text-[11px] md:text-xs text-gray-500 dark:text-gray-400 gap-2">
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="opacity-80" />
                    <span>{post.time}</span>
                  </div>
                  <span className="opacity-50">•</span>
                  <span className="font-medium hover:underline">
                    {post.author}
                  </span>
                </div>
              </div>

              {/* Author Avatar */}
              <img
                src={post.avatar}
                alt={post.author}
                className="w-10 h-10 md:w-11 md:h-11 rounded-full object-cover shrink-0 border border-gray-200 dark:border-gray-700"
                loading="lazy"
              />
            </Link>
          ))}
        </div>

        {/* ========================================== */}
        {/* 3. LOAD MORE BUTTON                        */}
        {/* ========================================== */}
        <div className="flex justify-center mt-10">
          <button className="px-8 py-3 rounded-full border border-gray-300 dark:border-[#46529A] text-icon opacity-90 hover:bg-gray-100 dark:hover:bg-white/5 text-xs font-semibold tracking-wider transition-all uppercase">
            Load More
          </button>
        </div>

      </div>
    </div>
  );
}