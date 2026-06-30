"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { toggleBookmark, fetchBookmarks } from "@/redux/slices/BookMarkSlice";
import { toast } from "react-hot-toast";
import {
  fetchAppIdeaById,
  clearCurrentIdea,
  fetchCaptcha,
  submitContactForm,
  clearFormStatus,
  toggleLikeIdea,
  fetchComments,
  postComment,
  postReply,
} from "@/redux/slices/AppideasSLice";

import {
  ChevronRight,
  ThumbsUp,
  Bookmark,
  Share2,
  Download,
  CornerDownRight,
  RefreshCw,
  X,
  FileText,
} from "lucide-react";
import { FaDollarSign } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiSquaresFourBold } from "react-icons/pi";
import { BASE_URL } from "@/api/apiConfig";

const LIKED_IDEAS_KEY = "likedAppIdeasList";

const getLikedIdeasFromStorage = () => {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(LIKED_IDEAS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveLikedIdeasToStorage = (ids) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LIKED_IDEAS_KEY, JSON.stringify(ids));
  } catch { }
};

const initialContactState = {
  name: "",
  email: "",
  country: "",
  phone: "",
  requirement: "",
  captchaAnswer: "",
};

export default function DetailPage() {
  const params = useParams();
  const id = params?.id;
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialContactState);
  const [commentText, setCommentText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [likedIdeaIds, setLikedIdeaIds] = useState([]);

  // ✅ Reply state
  const [replyOpenId, setReplyOpenId] = useState(null);
  const [replyText, setReplyText] = useState("");

  useEffect(() => {
    setLikedIdeaIds(getLikedIdeasFromStorage());
  }, []);

  const { bookmarks, toggleLoading } = useSelector((state) => state.bookmarks);

  const {
    currentIdea,
    singleLoading,
    error,
    captchaData,
    captchaLoading,
    formSubmitting,
    comments,
    commentsCount,
    commentsLoading,
    commentPosting,
    likeLoading,
    replyLoading,
  } = useSelector((state) => state.appIdeas);

  const showLiked =
    (currentIdea?._id && likedIdeaIds.includes(currentIdea._id)) ||
    !!currentIdea?.isLiked;

  const isBookmarked = bookmarks.some(
    (b) => b.item?._id === currentIdea?._id
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchAppIdeaById(id));
      dispatch(fetchComments({ itemId: id, itemType: "idea" }));
    }
    dispatch(fetchCaptcha());
    dispatch(fetchBookmarks());

    return () => {
      dispatch(clearCurrentIdea());
    };
  }, [id, dispatch]);

  const handleRefreshCaptcha = () => {
    dispatch(fetchCaptcha());
    setFormData((prev) => ({ ...prev, captchaAnswer: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.country || !formData.phone) {
      toast.error("Please fill all required fields", { position: "top-right" });
      return;
    }
    if (!captchaData?.captchaId) {
      toast.error("Captcha not loaded, please wait", { position: "top-right" });
      dispatch(fetchCaptcha());
      return;
    }
    if (!formData.captchaAnswer.trim()) {
      toast.error("Please answer the captcha", { position: "top-right" });
      return;
    }

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      country: formData.country,
      phone: formData.phone.trim(),
      projectRequirement: formData.requirement.trim(),
      captchaId: captchaData.captchaId,
      captchaAnswer: Number(formData.captchaAnswer),
    };

    const result = await dispatch(submitContactForm(payload));

    if (submitContactForm.fulfilled.match(result)) {
      toast.success(result.payload?.message || "Message sent successfully", { position: "top-right" });
      setFormData(initialContactState);
      dispatch(clearFormStatus());
      dispatch(fetchCaptcha());
    } else {
      const errMsg =
        typeof result.payload === "string"
          ? result.payload
          : result.payload?.message || "Failed to send message";
      toast.error(errMsg, { position: "top-right" });
      dispatch(fetchCaptcha());
      setFormData((prev) => ({ ...prev, captchaAnswer: "" }));
    }
  };

  const handleLikeClick = async () => {
    if (!currentIdea?._id) return;

    const result = await dispatch(toggleLikeIdea(currentIdea._id));

    if (toggleLikeIdea.fulfilled.match(result)) {
      const liked = result.payload?.liked;
      toast.success(liked ? "Liked!" : "Like removed", { position: "top-right" });

      setLikedIdeaIds((prev) => {
        let updated;
        if (liked) {
          updated = prev.includes(currentIdea._id) ? prev : [...prev, currentIdea._id];
        } else {
          updated = prev.filter((ideaId) => ideaId !== currentIdea._id);
        }
        saveLikedIdeasToStorage(updated);
        return updated;
      });
    } else {
      toast.error("please login", { position: "top-right" });
    }
  };

  const handleSaveClick = async () => {
    if (!currentIdea?._id) return;

    const result = await dispatch(
      toggleBookmark({ itemId: currentIdea._id, itemType: "idea" })
    );

    if (toggleBookmark.fulfilled.match(result)) {
      toast.success(result.payload?.message || "Bookmark updated", { position: "top-right" });
      dispatch(fetchBookmarks());
    } else {
      toast.error("please login", { position: "top-right" });
    }
  };

  const handlePostComment = async () => {
    if (!commentText.trim()) {
      toast.error("Please write something before posting", { position: "top-right" });
      return;
    }

    const result = await dispatch(postComment({
      itemId: currentIdea._id,
      itemType: "idea",
      text: commentText.trim(),
    }));

    if (postComment.fulfilled.match(result)) {
      toast.success("Comment posted!", { position: "top-right" });
      setCommentText("");
    } else {
      toast.error("please login", { position: "top-right" });
    }
  };

  // ✅ Reply toggle handler
  const handleReplyToggle = (commentId) => {
    if (replyOpenId === commentId) {
      setReplyOpenId(null);
      setReplyText("");
    } else {
      setReplyOpenId(commentId);
      setReplyText("");
    }
  };

  // ✅ Reply submit handler
  const handleReplySubmit = async (commentId) => {
    if (!replyText.trim()) {
      toast.error("Please write a reply", { position: "top-right" });
      return;
    }

    const result = await dispatch(postReply({ commentId, text: replyText.trim() }));

    if (postReply.fulfilled.match(result)) {
      toast.success(result.payload?.message || "Reply added successfully", { position: "top-right" });
      setReplyText("");
      setReplyOpenId(null);
      dispatch(fetchComments({ itemId: id, itemType: "idea" }));
    } else {
      toast.error("please login", { position: "top-right" });
    }
  };

  const handleDownloadClick = () => { setIsModalOpen(true); setStep(1); };
 const handleModalFormSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");
  if (!token) {
    toast.error("Please login", { position: "top-right" });
    return;
  }

  if (!captchaData?.captchaId) {
    toast.error("Captcha not loaded, please wait", { position: "top-right" });
    dispatch(fetchCaptcha());
    return;
  }

  if (!formData.captchaAnswer.trim()) {
    toast.error("Please answer the captcha", { position: "top-right" });
    return;
  }

  const payload = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    country: formData.country,
    phone: formData.phone.trim(),
    projectRequirement: formData.requirement.trim(),
    captchaId: captchaData.captchaId,
    captchaAnswer: Number(formData.captchaAnswer),
  };

  const result = await dispatch(submitContactForm(payload));

  if (submitContactForm.fulfilled.match(result)) {
    toast.success(result.payload?.message || "Message sent successfully", { position: "top-right" });
    setFormData(initialContactState);
    dispatch(clearFormStatus());
    dispatch(fetchCaptcha());
    setStep(2);
  } else {
    const errMsg =
      typeof result.payload === "string"
        ? result.payload
        : result.payload?.message || "Failed to send message";
    toast.error(errMsg, { position: "top-right" });
    dispatch(fetchCaptcha());
    setFormData((prev) => ({ ...prev, captchaAnswer: "" }));
  }
};

  const closeModal = () => setIsModalOpen(false);

  if (singleLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading App Idea details...
      </div>
    );
  }

  if (error || !currentIdea) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-semibold">
        Error: {error || "App Idea not found"}
      </div>
    );
  }

  const displayImage = currentIdea.image?.startsWith("http")
    ? currentIdea.image
    : `${BASE_URL}${currentIdea.image}`;
  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 pb-20">

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#040926B2] backdrop-blur-[10px] transition-all duration-300">
          <div className="bg-card border border-gray-200 dark:border-white/10 w-full max-w-xl rounded-2xl shadow-2xl relative overflow-hidden">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10">
              <X size={24} />
            </button>

            {step === 1 ? (
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-icon mb-1">Want to download PDF?</h2>
                <p className="text-icon text-sm mb-6 font-light">Enter your details below to get instant access to the file.</p>

                <form onSubmit={handleModalFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-icon mb-1.5">Your name <span className="text-red-500">*</span></label>
                    <input
                      type="text" required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Type here..."
                      className="w-full dark:bg-[#1D2659] border border-gray-300 dark:border-[#3E4A92] rounded-lg p-3 text-sm text-icon placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-icon mb-1.5">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email" required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mail.com"
                      className="w-full dark:bg-[#1D2659] border border-gray-300 dark:border-[#3E4A92] rounded-lg p-3 text-sm text-icon placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-icon mb-1.5">Country <span className="text-red-500">*</span></label>
                      <select
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full dark:bg-[#1D2659] border border-gray-300 dark:border-[#3E4A92] rounded-lg p-3 text-sm text-icon focus:outline-none focus:ring-1 focus:ring-orange-500"
                      >
                        <option value="">Select</option>
                        <option value="India">India</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-icon mb-1.5">Phone number <span className="text-red-500">*</span></label>
                      <input
                        type="tel" required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Type here..."
                        className="w-full dark:bg-[#1D2659] border border-gray-300 dark:border-[#3E4A92] rounded-lg p-3 text-sm text-icon placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-icon mb-1.5">Project Requirement (optional)</label>
                    <textarea
                      rows="2"
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      placeholder="Type here..."
                      className="w-full dark:bg-[#1D2659] border border-gray-300 dark:border-[#3E4A92] rounded-lg p-3 text-sm text-icon placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none"
                    />
                  </div>

                  {/* Dynamic Captcha */}
                  <div className="bg-white rounded-lg p-3 w-fit flex flex-col gap-2">
                    <label className="text-[10px] font-bold text-black uppercase">Captcha <span className="text-red-500">*</span></label>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-800 font-medium">
                        {captchaLoading ? "Loading..." : captchaData?.question ? `What is ${captchaData.question} ?` : "Unavailable"}
                      </span>
                      <input
                        type="text" required
                        value={formData.captchaAnswer}
                        onChange={(e) => setFormData({ ...formData, captchaAnswer: e.target.value })}
                        className="w-16 border border-gray-300 rounded px-2 py-1 text-black text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full md:w-40 bg-[#FD7306] hover:bg-orange-600 text-white font-bold py-3 rounded-full transition-all text-sm uppercase tracking-wider disabled:opacity-50"
                  >
                    {formSubmitting ? "SUBMITTING..." : "Submit"}
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-10 flex flex-col items-center text-center">
                <div className="mb-6 relative">
                  <div className="w-20 h-24 bg-white rounded-md flex items-center justify-center shadow-lg">
                    <FileText size={48} className="text-red-600" />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 rounded-full p-1 border-2 border-[#101732]">
                      <Download size={16} className="text-white" />
                    </div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-icon mb-2">Your Download is Ready</h2>
                <p className="text-icon opacity-90 text-sm mb-8">Your file is ready. Click the button below to start downloading.</p>
                <button onClick={closeModal} className="bg-[#FD7306] hover:bg-orange-600 text-white font-bold px-10 py-3 rounded-full transition-all text-sm uppercase tracking-wider flex items-center gap-2">
                  <Download size={18} /> Download PDF
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gray-100 dark:bg-[#100A44] border-b border-gray-200 dark:border-white/10 pt-28 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span>Home</span>
              <ChevronRight size={14} className="mx-1" />
              <span>App Ideas</span>
              <ChevronRight size={14} className="mx-1" />
              <span className="text-gray-900 dark:text-white font-medium line-clamp-1">{currentIdea.title}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
              {currentIdea.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 text-icon bg-gray-300 dark:bg-[#3E3F65] px-4 py-2 rounded-md text-sm font-normal">
                <PiSquaresFourBold size={16} className="text-icon" /> {currentIdea.category || "General App"}
              </span>
              <span className="flex items-center gap-2 text-icon bg-gray-300 dark:bg-[#3E3F65] px-4 py-2 rounded-md text-sm font-normal">
                <FaDollarSign size={16} className="text-icon" /> ${currentIdea.investmentMin} - ${currentIdea.investmentMax} Investment
              </span>
              <span className="flex items-center gap-2 text-icon bg-gray-300 dark:bg-[#3E3F65] px-4 py-2 rounded-md text-sm font-normal">
                <BsGraphUpArrow size={16} className="text-icon" /> {currentIdea.profitMargin}% Profit Margin
              </span>
            </div>
          </div>
          <div className="w-full lg:w-[450px] shrink-0 h-[280px] relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/5">
            <Image src={displayImage} alt={currentIdea.title} fill className="object-cover" priority unoptimized />
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 flex flex-col lg:flex-row gap-12">
        <div className="flex-1 space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Business Overview
            </h2>
           <p className="text-sm md:text-base leading-relaxed text-gray-500 dark:text-[#BACCDE]">
  {currentIdea.businessOverview
    ?.replace("Business Overview", "")
    ?.trim()}
</p>
          </section>

          {/* Problem Box */}
          <div className="bg-[#370D25] border border-[#BD0B0B] rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              The Problem
            </h3>
           <p className="text-sm text-white leading-relaxed">
  {currentIdea.problem?.replace("The Problem", "").trim()}
</p>
          </div>

          {/* Solution Box */}
          <div className="bg-[#082846] border border-[#1C8D99] rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              The Solution
            </h3>
            <p className="text-sm text-white leading-relaxed">
  {currentIdea.solution?.replace("The Solution", "").trim()}
</p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-icon mb-4">
              How It Works
            </h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <ul className="space-y-3 text-sm md:text-base text-gray-700 dark:text-gray-300">
              {currentIdea.howItWorks
                ?.filter((item) => item?.trim() && !item.includes("How It Works"))
                .map((item, index) => (
                  <li
                    key={index}
                    className="dark:text-[#BACCDE] text-sm"
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-icon mb-4">
              Revenue Model
            </h2>

            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>

            <ul className="space-y-3 text-sm dark:text-[#BACCDE]">
              {currentIdea.revenueModel
                ?.filter((item) => item?.trim() && !item.includes("Revenue Model"))
                .map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </section>

          {/* Execution Breakdown Grid */}
          <section>
            <h2 className="text-xl font-semibold text-icon mb-6">
              Execution Breakdown
            </h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card border border-gray-300 dark:border-[#242F70] p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Investment Required
                </h4>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {currentIdea.executionBreakdown?.investmentRequired}
                </p>

              </div>
              <div className="bg-card border border-gray-300 dark:border-[#242F70] p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Timeline to Launch
                </h4>
                <p className="text-sm text-gray-600 dark:text-[#BACCDE]">
                  {currentIdea.executionBreakdown?.timeToLaunch}
                </p>

              </div>
              <div className="bg-card border border-gray-300 dark:border-[#242F70] p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Required Team
                </h4>
                <p className="text-sm text-gray-600 dark:text-[#BACCDE]">
                  {currentIdea.executionBreakdown?.requiredTeam}
                </p>

              </div>
              <div className="bg-card border border-gray-300 dark:border-[#242F70] p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Profit Margin
                </h4>
                <p className="text-sm text-gray-600 dark:text-[#BACCDE]">
                  {currentIdea.executionBreakdown?.profitMarginDetail}
                </p>

              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Tech Stack & Tools Required
            </h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <ul className="space-y-3 text-sm text-gray-700 dark:text-[#BACCDE]">
              {currentIdea.techStack
                ?.filter((item) => item?.trim() && !item.includes("Tech Stack"))
                .map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Marketing Strategy (How to get first 10 customers)
            </h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm text-gray-700 dark:text-[#BACCDE] leading-relaxed">
              {currentIdea.marketingStrategy
                ?.replace("Marketing Strategy (How to get first 10 customers)", "")
                ?.trim()}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Conclusion
            </h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
       <p className="text-sm text-gray-700 dark:text-[#BACCDE] leading-relaxed">
  {currentIdea.conclusion ||
    currentIdea.tags?.[0]?.replace("Conclusion", "") ||
    "No conclusion available."}
</p>
          </section>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pb-8 border-b border-gray-200 dark:border-white/10">
            <button
              onClick={handleLikeClick}
              disabled={likeLoading}
              className={`flex items-center gap-2 border px-4 py-2 text-sm font-normal transition-colors rounded-3xl ${showLiked
                ? "border-[#FD7306] text-[#FD7306] bg-[#FD7306]/5"
                : "text-icon border-gray-200 dark:border-[#363B57] hover:bg-gray-100 dark:hover:bg-white/5"
                }`}
            >
              <ThumbsUp size={16} fill={showLiked ? "currentColor" : "none"} />
              {likeLoading ? "..." : showLiked ? "Liked" : "Like"}
            </button>
            {/* Save Button - replace karo */}
            <button
              onClick={handleSaveClick}
              disabled={toggleLoading}
              className={`flex items-center gap-2 border px-4 py-2 text-sm font-normal transition-colors rounded-3xl ${isBookmarked
                ? "border-[#FD7306] text-[#FD7306] bg-[#FD7306]/5"
                : "text-icon border-gray-200 dark:border-[#363B57] hover:bg-gray-100 dark:hover:bg-white/5"
                }`}
            >
              <Bookmark size={16} fill={isBookmarked ? "currentColor" : "none"} />
              {toggleLoading ? "Saving..." : isBookmarked ? "Saved" : "Save"}
            </button>
            <button className="flex items-center gap-2 text-icon border border-gray-200 dark:border-[#363B57] hover:bg-gray-100 dark:hover:bg-white/5 px-4 py-2 text-sm font-normal transition-colors rounded-3xl">
              <Share2 size={16} /> Share
            </button>
            <button
              onClick={handleDownloadClick}
              className="flex items-center gap-2 text-white bg-[#2A357B] hover:bg-[#232e66] px-6 py-2 text-sm font-semibold transition-colors rounded-3xl shadow-lg shadow-blue-900/20"
            >
              <Download size={16} /> Download PDF
            </button>
          </div>

          {/* Discussions */}
          <section className="pt-0">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Discussions ({commentsCount})
            </h2>

            {/* Comment Input */}
            <div className="mb-8">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full bg-gray-100 dark:bg-[#1A2342] border border-gray-200 dark:border-white/10 rounded-lg p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px] mb-4 text-gray-900 dark:text-white placeholder-gray-500"
                placeholder="Share your thoughts or ask a question..."
              ></textarea>
              <button
                onClick={handlePostComment}
                disabled={commentPosting}
                className="bg-primary text-white px-8 py-3 rounded-full text-xs font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {commentPosting ? "POSTING..." : "POST COMMENT"}
              </button>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {commentsLoading ? (
                <p className="text-sm text-gray-500">Loading comments...</p>
              ) : comments.length === 0 ? (
                <p className="text-sm text-gray-500">No comments yet. Be the first to comment!</p>
              ) : (
                comments.map((comment, i) => (
                  <div key={comment._id || i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#2D3B82] flex items-center justify-center text-white font-bold shrink-0">
                      {comment.user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-900 dark:text-white text-sm">
                          {comment.user?.name || "Anonymous"}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(comment.createdAt).toLocaleDateString("en-US", {
                            year: "numeric", month: "short", day: "numeric"
                          })}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        {comment.text}
                      </p>
                      <button
                        onClick={() => handleReplyToggle(comment._id)}
                        className="flex items-center gap-1 text-xs text-gray-500 hover:text-primary transition-colors"
                      >
                        <CornerDownRight size={14} /> Reply ({comment.repliesCount ?? comment.replies?.length ?? 0})
                      </button>

                      {replyOpenId === comment._id && (
                        <div className="mt-3">
                          <textarea
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            className="w-full bg-gray-100 dark:bg-[#1A2342] border border-gray-200 dark:border-white/10 rounded-lg p-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary min-h-[60px] mb-2 text-gray-900 dark:text-white placeholder-gray-500"
                            placeholder="Write a reply..."
                          ></textarea>
                          <button
                            onClick={() => handleReplySubmit(comment._id)}
                            disabled={replyLoading}
                            className="bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {replyLoading ? "POSTING..." : "POST REPLY"}
                          </button>
                        </div>
                      )}

                      {/* Replies List (from GET comments API) */}
                      {comment.replies && comment.replies.length > 0 && (
                        <div className="mt-4 ml-2 space-y-4 border-l-2 border-gray-200 dark:border-white/10 pl-4">
                          {comment.replies.map((reply, j) => (
                            <div key={reply._id || j} className="flex gap-3">
                              <div className="w-8 h-8 rounded-full bg-[#2D3B82] flex items-center justify-center text-white font-bold text-xs shrink-0">
                                {reply.user?.name?.charAt(0)?.toUpperCase() || "U"}
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-bold text-gray-900 dark:text-white text-xs">
                                    {reply.user?.name || "Anonymous"}
                                  </span>
                                  <span className="text-[10px] text-gray-500">
                                    {new Date(reply.createdAt).toLocaleDateString("en-US", {
                                      year: "numeric", month: "short", day: "numeric"
                                    })}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-700 dark:text-gray-300">
                                  {reply.text}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>

        {/* Sidebar Form */}
        <aside className="w-full lg:w-[350px] shrink-0">
          <div className="dark:bg-[#1A2342] dark:bg-card rounded-xl p-6 shadow-xl sticky top-24 border border-transparent dark:border-white/5">
            <h2 className="text-xl font-bold text-icon mb-2">Start This Business With Us</h2>
            <p className="text-sm text-icon font-light mb-6 leading-relaxed">
              Don't know how to code? We can build this exact platform for you quickly and efficiently.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-normal text-icon mb-2">Your Name <span className="text-red-500">*</span></label>
                <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Type here..." className="w-full bg-gray-200 dark:bg-[#1D2659] border border-transparent dark:border-[#3E4A92] rounded-md p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary" required />
              </div>
              <div>
                <label className="block text-sm font-normal text-icon mb-2">Email <span className="text-red-500">*</span></label>
                <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="example@mail.com" className="w-full bg-gray-200 dark:bg-[#1D2659] border border-transparent dark:border-[#3E4A92] rounded-md p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary" required />
              </div>
              <div>
                <label className="block text-sm font-normal text-icon mb-2">Country <span className="text-red-500">*</span></label>
                <select value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} className="w-full bg-gray-200 dark:bg-[#1D2659] border border-transparent dark:border-[#3E4A92] rounded-md p-2.5 text-sm text-icon focus:outline-none focus:border-primary" required>
                  <option value="">Select</option>
                  <option value="United States">United States</option>
                  <option value="India">India</option>
                  <option value="United Kingdom">United Kingdom</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-normal text-icon mb-2">Phone number <span className="text-red-500">*</span></label>
                <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Type here..." className="w-full bg-gray-200 dark:bg-[#1D2659] border border-transparent dark:border-[#3E4A92] rounded-md p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary" required />
              </div>
              <div>
                <label className="block text-sm font-normal text-icon mb-2">Project Requirement (optional)</label>
                <textarea value={formData.requirement} onChange={(e) => setFormData({ ...formData, requirement: e.target.value })} placeholder="Type here..." rows="3" className="w-full bg-gray-200 dark:bg-[#1D2659] border border-transparent dark:border-white/10 rounded-md p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary resize-none"></textarea>
              </div>

              <div>
                <div className="bg-white w-full border border-gray-300 p-3 flex flex-col rounded-md shadow-sm">
                  <label className="block text-sm font-semibold text-black mb-1">Captcha <span className="text-red-500">*</span></label>
                  <div className="flex flex-row items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-800 min-h-[20px]">
                        {captchaLoading ? (
                          <span className="text-xs text-gray-400">Loading...</span>
                        ) : (
                          captchaData?.question ? `What is ${captchaData.question} ?` : "Failed to load"
                        )}
                      </span>
                    </div>
                    <input type="text" value={formData.captchaAnswer} onChange={(e) => setFormData({ ...formData, captchaAnswer: e.target.value })} className="w-20 h-9 border border-gray-400 px-2 py-1 text-sm text-gray-900 focus:outline-none focus:border-primary rounded-sm" required />
                  </div>
                </div>
              </div>

              <button type="submit" disabled={formSubmitting} className="w-40 bg-primary hover:bg-orange-500 text-white font-bold py-3 rounded-full mt-4 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed">
                {formSubmitting ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}