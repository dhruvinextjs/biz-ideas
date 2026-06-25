

"use client";

import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { MdOutlineFileUpload } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { createPost, resetPostState } from "@/redux/slices/PostSlice";

export default function Newpost() {
  const dispatch = useDispatch();
  
  // Redux state access
  const { loading, success } = useSelector((state) => state.posts);

  // Form states
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  // static tags array as per your parameters requirements
  const [tags, setTags] = useState(["test", "xyz"]); 

  // Reset state on unmount or component mount
  useEffect(() => {
    dispatch(resetPostState());
  }, [dispatch]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("Please fill all required fields");
      return;
    }

    const payload = {
      title: title,
      content: content,
      tags: tags,
    };

    dispatch(createPost(payload));
  };
    
  const handleCreateAnother = () => {
    setTitle("");
    setContent("");
    setImage(null);
    dispatch(resetPostState());
  };

  /* Success Screen (Controlled by Redux Success State) */
  if (success) {
    return (
      <main className="bg-background text-foreground pt-32 flex py-2 items-center justify-center px-6">
        <div className="text-center">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto rounded-full bg-green-500 flex items-center justify-center mb-6">
            <Check size={34} className="text-white stroke-[3]" />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-icon mb-3">
            Post Published Successfully!
          </h1>

          {/* Text */}
          <p className="text-sm text-icon/70 leading-6 mb-8">
            Your idea has been shared with the community.
            <br />
            You can view it on your profile.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={handleCreateAnother}
              className="h-11 px-8 rounded-full bg-primary text-white text-sm font-semibold active:scale-95 transition"
            >
              CREATE ANOTHER POST
            </button>

            <button className="text-sm font-medium text-icon hover:text-primary transition">
              BACK TO HOME
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background text-foreground mt-20">
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

        {/* Form */}
        <div className="bg-card border border-icon/10 rounded-2xl p-6 md:p-8 shadow-xl">

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-icon">
              Idea Details
            </h2>

            <p className="text-xs text-icon mt-1">
              Provide enough detail so others can understand the value proposition.
            </p>
          </div>

          {/* Title */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-icon mb-2">
              Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Type here..."
              className="w-full h-11 rounded-lg px-4 dark:bg-[#1D2659] border border-icon/10 text-icon placeholder:text-icon/40 outline-none focus:border-primary transition"
            />
          </div>

          {/* Upload */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-icon mb-2">
              Upload Photo
            </label>

            <label className="w-full h-50 p-8 rounded-xl border border-dashed border-icon/20 dark:bg-[#1D2659] flex flex-col items-center justify-center cursor-pointer hover:border-primary transition">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImage}
              />

              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-xl"
                />
              ) : (
                <>
                  <div className="w-12 h-12 rounded-xl dark:bg-[#1D2659] border border-icon/10 flex items-center justify-center mb-3">
                    <MdOutlineFileUpload
                      size={26}
                      className="text-foreground"
                    />
                  </div>

                  <p className="text-sm font-medium text-icon">
                    Click to upload or drag and drop
                  </p>

                  <p className="text-xs text-foreground mt-1">
                    JPG, PNG and WEBP formats, up to 10MB
                  </p>
                </>
              )}
            </label>
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-icon mb-2">
              Description
            </label>

            <textarea
              rows="7"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Type here..."
              className="w-full rounded-xl px-4 py-3 dark:bg-[#1D2659] border border-icon/10 text-icon placeholder:text-gray-500 dark:placeholder:text-gray-400 outline-none resize-none focus:border-primary transition"
            />
          </div>

          {/* Post Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="h-11 px-9 rounded-full bg-primary text-white text-sm font-semibold active:scale-95 transition disabled:opacity-70 disabled:pointer-events-none"
          >
            {loading ? "POSTING..." : "POST"}
          </button>
        </div>
      </div>
    </main>
  );
}