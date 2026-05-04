"use client";
 
import React, { useState } from "react";
import { X } from "lucide-react";
 
export default function Deletepost() {
    const [showImage, setShowImage] = useState(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
 
    const handleDelete = () => {
        // DELETE logic here (API call, etc.)
        setShowDeleteModal(false);
    };
 
    return (
        <main className="min-h-screen bg-background text-foreground pt-32 md:pt-36">
 
            {/* Delete Confirmation Modal */}
            {showDeleteModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
   
    {/* Popup Box */}
    <div className="w-full max-w-sm rounded-2xl bg-card border border-icon/10 shadow-2xl p-6 relative transition-colors duration-300">
 
      {/* Close Icon */}
      <button
        onClick={() => setShowDeleteModal(false)}
        className="absolute top-4 right-4 text-icon/50 hover:text-icon transition"
      >
        <X size={18} />
      </button>
 
      {/* Modal Content */}
      <div className="text-center mt-2 mb-6">
        <h2 className="text-lg font-semibold text-icon mb-2">
          Want to delete this post?
        </h2>
 
        <p className="text-sm text-foreground/70">
          Deleted posts cannot be recovered.
        </p>
      </div>
 
      {/* Buttons */}
      <div className="flex gap-3">
 
        {/* No Button */}
        <button
          onClick={() => setShowDeleteModal(false)}
          className="w-full h-10 rounded-lg border border-icon/20 bg-background text-icon text-sm font-semibold hover:bg-icon/5 active:scale-95 transition"
        >
          NO
        </button>
 
        {/* Delete Button */}
        <button
          onClick={handleDelete}
          className="w-full h-10 rounded-lg  border border-icon/20 bg-background  text-icon text-sm font-semibold  active:scale-95 hover:bg-icon/5 transition"
        >
          DELETE
        </button>
 
      </div>
    </div>
  </div>
)}
 
            <div className="max-w-2xl mx-auto px-6 py-12">
 
                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-icon">
                        Share Your Thoughts
                    </h1>
                    <p className="text-sm text-icon mt-2">
                        Post your startup insights, learnings, or updates.
                    </p>
                </div>
 
                {/* Card */}
                <div className="bg-card border border-icon/10 rounded-2xl p-6 md:p-8 shadow-xl">
 
                    {/* Top */}
                    <div className="mb-6">
                        <h2 className="text-lg font-semibold text-icon">Idea Details</h2>
                        <p className="text-xs text-icon mt-1">
                            Provide enough detail so others can understand the value proposition.
                        </p>
                    </div>
 
                    {/* Title */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-icon mb-2">
                            Title *
                        </label>
                        <div className="w-full min-h-11 rounded-lg px-4 py-3 dark:bg-[#1D2659] border border-icon/10 text-icon text-sm flex items-center">
                            11 Marketing Channels That Consistently Work for Founders
                        </div>
                    </div>
 
                    {/* Upload Photo */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-icon mb-2">
                            Upload Photo *
                        </label>
                        <div className="relative rounded-xl border border-icon/10 dark:bg-[#1D2659] h-56 flex items-center justify-center overflow-hidden">
                            {showImage && (
                                <div className="relative w-[92%] h-[88%]">
                                    <img
                                        src="/images/person1.jpg"
                                        alt="Post"
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    <button
                                        onClick={() => setShowImage(false)}
                                        className="absolute -top-2 -right-2 z-20 w-7 h-7 rounded-full bg-red-500 flex items-center justify-center shadow-lg hover:scale-105 transition"
                                    >
                                        <X size={15} className="text-white stroke-[3]" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
 
                    {/* Description */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-icon mb-2">
                            Description *
                        </label>
                        <div className="rounded-xl px-4 py-4 dark:bg-[#1D2659] border border-icon/10 text-sm text-icon leading-7">
                            I've analyzed all 497 founder interviews on Indie Hackers and
                            uncovered the marketing channels that worked consistently for founders.
                            <br /><br />
                            This article will be a hub article with detailed strategies.
                            <br /><br />
                            <span className="font-semibold">The Criteria</span>
                        </div>
                    </div>
 
                    {/* Delete Button */}
                    <button
                        onClick={() => setShowDeleteModal(true)}
                        className="h-11 px-8 rounded-full border border-red-500 text-red-500 text-sm font-semibold hover:bg-red-500/10 active:scale-95 transition"
                    >
                        DELETE POST
                    </button>
                </div>
            </div>
        </main>
    );
}