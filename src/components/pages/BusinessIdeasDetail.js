"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchIdeaById,
  fetchComments,
  postComment,
  fetchCaptcha,
  submitContactForm,
  resetContactStatus,
  toggleLikeIdea,
  postReply,
} from "@/redux/slices/BusinessideasSlice";
import { toggleBookmark, fetchBookmarks } from "@/redux/slices/BookMarkSlice";
import { toast } from "react-hot-toast";
import Image from "next/image";
import {
  ChevronRight,
  ThumbsUp,
  Bookmark,
  Share2,
  Download,
  CornerDownRight,
  X,
  FileText
} from "lucide-react";
import { FaDollarSign } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiSquaresFourBold } from "react-icons/pi";
import { useParams } from "next/navigation";
import {BASE_URL} from "@/api/apiConfig"

const initialContactState = {
  name: "",
  email: "",
  country: "",
  phone: "",
  projectRequirement: "",
  captchaAnswer: "",
};

// ✅ Like persistence helpers (sirf isi component ke liye, slice me kuch nahi)
const LIKED_IDEAS_KEY = "likedIdeasList";

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
  } catch {
    // ignore storage errors
  }
};

export default function DetailPage({ params }) {
  // const ideaId = params?.id || "6a210c3838b45075398b4a68";
  const { id: ideaId } = useParams();

  const dispatch = useDispatch();
  const {
    currentIdea,
    loading,
    error,
    comments,
    commentsCount,
    commentsLoading,
    commentPosting,
    captchaData,
    captchaLoading,
    contactLoading,
    contactSuccess,
    contactError,
    likeLoading,
    replyLoading,
  } = useSelector((state) => state.businessIdeas);
  const [commentText, setCommentText] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  // useSelector me bookmarks state bhi lo
  const { bookmarks, toggleLoading } = useSelector((state) => state.bookmarks);

  // Contact form (sidebar) state
  const [contactForm, setContactForm] = useState(initialContactState);

  // Reply box state (which comment's reply box is open + its text)
  const [replyOpenId, setReplyOpenId] = useState(null);
  const [replyText, setReplyText] = useState("");

  // ✅ Local (localStorage backed) liked idea ids — refresh ke baad bhi persist rahenge
  const [likedIdeaIds, setLikedIdeaIds] = useState([]);

  useEffect(() => {
    setLikedIdeaIds(getLikedIdeasFromStorage());
  }, []);

  // ✅ Final "liked" state jo UI me dikhana hai — local storage OR server, jo bhi true ho
  const showLiked =
    (currentIdea?._id && likedIdeaIds.includes(currentIdea._id)) ||
    !!currentIdea?.isLiked;

  // Current idea bookmark check karo
  const isBookmarked = bookmarks.some(
    (b) => b.item?._id === currentIdea?._id
  );

  useEffect(() => {
    if (ideaId) {
      dispatch(fetchIdeaById(ideaId));
    }
  }, [dispatch, ideaId]);

  useEffect(() => {
    if (ideaId) {
      dispatch(fetchIdeaById(ideaId));
      dispatch(fetchComments({ itemId: ideaId, itemType: "idea" }));
    }
    dispatch(fetchBookmarks());
  }, [dispatch, ideaId]);

  // ✅ Load captcha for the contact form on mount
  useEffect(() => {
    dispatch(fetchCaptcha());
  }, [dispatch]);

  const handleDownloadClick = () => {
    setIsModalOpen(true);
    setStep(1);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!captchaData?.captchaId) {
      toast.error("Captcha not loaded, please wait", { position: "top-right" });
      dispatch(fetchCaptcha());
      return;
    }

    const payload = {
      name: contactForm.name.trim(),
      email: contactForm.email.trim(),
      country: contactForm.country,
      phone: contactForm.phone.trim(),
      projectRequirement: contactForm.projectRequirement.trim(),
      captchaId: captchaData.captchaId,
      captchaAnswer: Number(contactForm.captchaAnswer),
    };

    const result = await dispatch(submitContactForm(payload));

    if (submitContactForm.fulfilled.match(result)) {
      toast.success(result.payload?.message || "Message sent successfully", { position: "top-right" });
      setContactForm(initialContactState);
      dispatch(resetContactStatus());
      dispatch(fetchCaptcha());
      setStep(2); // ← success pe step 2 dikhao
    } else {
      const errMsg = typeof result.payload === "string"
        ? result.payload
        : result.payload?.message || "Failed to send message";
      toast.error(errMsg, { position: "top-right" });
      dispatch(fetchCaptcha());
      setContactForm((prev) => ({ ...prev, captchaAnswer: "" }));
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePostComment = async () => {
    if (!commentText.trim()) {
      toast.error("Please write something before posting", { position: "top-right" });
      return;
    }

    const payload = {
      itemId: currentIdea._id,
      itemType: "idea",
      text: commentText.trim(),
    };

    const result = await dispatch(postComment(payload));

    if (postComment.fulfilled.match(result)) {
      toast.success("Comment posted!", { position: "top-right" });
      setCommentText(""); // ✅ Input clear
    } else {
      toast.error("Failed to post comment", { position: "top-right" });
    }
  };
  // useEffect me fetchBookmarks bhi dispatch karo
  useEffect(() => {
    if (ideaId) {
      dispatch(fetchIdeaById(ideaId));
    }
    dispatch(fetchBookmarks()); // ✅ GET call on mount
  }, [dispatch, ideaId]);

  // handleSaveClick function replace karo
  const handleSaveClick = async () => {
    if (!currentIdea?._id) return;

    const payload = {
      itemId: currentIdea._id,
      itemType: "idea",
    };

    const result = await dispatch(toggleBookmark(payload));

    if (toggleBookmark.fulfilled.match(result)) {
      const message = result.payload?.message || "Bookmark updated";
      toast.success(message, { position: "top-right" });
      dispatch(fetchBookmarks()); // ✅ UI refresh karo GET se
    } else {
      toast.error("Failed to update bookmark", { position: "top-right" });
    }
  };

  // ✅ Contact form (sidebar) handlers
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    if (
      !contactForm.name.trim() ||
      !contactForm.email.trim() ||
      !contactForm.country ||
      !contactForm.phone.trim()
    ) {
      toast.error("Please fill all required fields", { position: "top-right" });
      return;
    }

    if (!captchaData?.captchaId) {
      toast.error("Captcha not loaded, please wait a moment", { position: "top-right" });
      dispatch(fetchCaptcha());
      return;
    }

    if (!contactForm.captchaAnswer.trim()) {
      toast.error("Please answer the captcha", { position: "top-right" });
      return;
    }

    const payload = {
      name: contactForm.name.trim(),
      email: contactForm.email.trim(),
      country: contactForm.country,
      phone: contactForm.phone.trim(),
      projectRequirement: contactForm.projectRequirement.trim(),
      captchaId: captchaData.captchaId,
      captchaAnswer: Number(contactForm.captchaAnswer),
    };

    const result = await dispatch(submitContactForm(payload));

    if (submitContactForm.fulfilled.match(result)) {
      toast.success(result.payload?.message || "Message sent successfully", {
        position: "top-right",
      });
      setContactForm(initialContactState);
      dispatch(resetContactStatus());
      dispatch(fetchCaptcha()); // refresh captcha for next submission
    } else {
      const errMsg =
        typeof result.payload === "string"
          ? result.payload
          : result.payload?.message || "Failed to send message";
      toast.error(errMsg, { position: "top-right" });
      dispatch(fetchCaptcha()); // refresh captcha so answer isn't stale
      setContactForm((prev) => ({ ...prev, captchaAnswer: "" }));
    }
  };

  // ✅ Like / Unlike handler
  const handleLikeClick = async () => {
    if (!currentIdea?._id) return;

    const result = await dispatch(toggleLikeIdea(currentIdea._id));

    if (toggleLikeIdea.fulfilled.match(result)) {
      const liked = result.payload?.liked;
      const message = liked ? "Liked!" : "Like removed";
      toast.success(message, { position: "top-right" });

      // ✅ localStorage me persist karo — sirf dislike par hi id remove hogi
      setLikedIdeaIds((prev) => {
        let updated;
        if (liked) {
          updated = prev.includes(currentIdea._id)
            ? prev
            : [...prev, currentIdea._id];
        } else {
          updated = prev.filter((id) => id !== currentIdea._id);
        }
        saveLikedIdeasToStorage(updated);
        return updated;
      });
    } else {
      toast.error("Failed to update like", { position: "top-right" });
    }
  };

  // ✅ Reply handlers
  const handleReplyToggle = (commentId) => {
    if (replyOpenId === commentId) {
      setReplyOpenId(null);
      setReplyText("");
    } else {
      setReplyOpenId(commentId);
      setReplyText("");
    }
  };

  const handleReplySubmit = async (commentId) => {
    if (!replyText.trim()) {
      toast.error("Please write a reply", { position: "top-right" });
      return;
    }

    const result = await dispatch(postReply({ commentId, text: replyText.trim() }));

    if (postReply.fulfilled.match(result)) {
      toast.success(result.payload?.message || "Reply added successfully", {
        position: "top-right",
      });
      setReplyText("");
      setReplyOpenId(null);
      dispatch(fetchComments({ itemId: ideaId, itemType: "idea" })); // refresh so new reply shows up
    } else {
      toast.error("Failed to post reply", { position: "top-right" });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <p className="text-lg font-medium">Loading details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-red-500">
        <p className="text-lg font-medium">Error: {error}</p>
      </div>
    );
  }

  if (!currentIdea) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <p className="text-lg font-medium">No business details found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 pb-20">
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#040926B2] backdrop-blur-[10px] transition-all duration-300">
          <div className="bg-card border border-gray-200 dark:border-white/10 w-full max-w-xl rounded-2xl shadow-2xl relative overflow-hidden">

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            {step === 1 ? (
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold text-icon mb-1">Want to download PDF?</h2>
                <p className="text-icon text-sm mb-6 font-light">Enter your details below to get instant access to the file.</p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-icon mb-1.5">Your name <span className="text-red-500">*</span></label>
                    <input
                      type="text" name="name" required
                      value={contactForm.name} onChange={handleContactChange}
                      placeholder="Type here..."
                      className="w-full dark:bg-[#1D2659] border border-gray-300 dark:border-[#3E4A92] rounded-lg p-3 text-sm text-icon placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-icon mb-1.5">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email" name="email" required
                      value={contactForm.email} onChange={handleContactChange}
                      placeholder="example@mail.com"
                      className="w-full dark:bg-[#1D2659] border border-gray-300 dark:border-[#3E4A92] rounded-lg p-3 text-sm text-icon placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-icon mb-1.5">Country <span className="text-red-500">*</span></label>
                      <select
                        name="country" required
                        value={contactForm.country} onChange={handleContactChange}
                        className="w-full dark:bg-[#1D2659] border border-gray-300 dark:border-[#3E4A92] rounded-lg p-3 text-sm text-icon focus:outline-none focus:ring-1 focus:ring-orange-500"
                      >
                        <option value="">Select</option>
                        <option>India</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-icon mb-1.5">Phone number <span className="text-red-500">*</span></label>
                      <input
                        type="tel" name="phone" required
                        value={contactForm.phone} onChange={handleContactChange}
                        placeholder="Type here..."
                        className="w-full dark:bg-[#1D2659] border border-gray-300 dark:border-[#3E4A92] rounded-lg p-3 text-sm text-icon placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-icon mb-1.5">Project Requirement (optional)</label>
                    <textarea
                      name="projectRequirement" rows="2"
                      value={contactForm.projectRequirement} onChange={handleContactChange}
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
                        type="text" name="captchaAnswer" required
                        value={contactForm.captchaAnswer} onChange={handleContactChange}
                        className="w-16 border border-gray-300 rounded px-2 py-1 text-black text-sm focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit" disabled={contactLoading}
                    className="w-full md:w-40 bg-[#FD7306] hover:bg-orange-600 text-white font-bold py-3 rounded-full transition-all text-sm uppercase tracking-wider disabled:opacity-50"
                  >
                    {contactLoading ? "SUBMITTING..." : "Submit"}
                  </button>
                </form>
              </div>
            ) : (
              /* STEP 2: DOWNLOAD FILE */
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

                <button
                  onClick={closeModal}
                  className="bg-[#FD7306] hover:bg-orange-600 text-white font-bold px-10 py-3 rounded-full transition-all text-sm uppercase tracking-wider flex items-center gap-2"
                >
                  <Download size={18} /> Download PDF
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Hero Section (Top Banner) */}
      <div className="bg-gray-100 dark:bg-[#100A44] border-b border-gray-200 dark:border-white/10 pt-28 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-center justify-between">
          <div className="flex-1">
            {/* Breadcrumbs */}
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span>Home</span>
              <ChevronRight size={14} className="mx-1" />
              <span>Business Ideas</span>
              <ChevronRight size={14} className="mx-1" />
              <span className="text-gray-900 dark:text-white font-medium truncate max-w-[200px]">
                {currentIdea.title}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
              {currentIdea.title}
            </h1>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 text-icon bg-gray-300 dark:bg-[#3E3F65] px-4 py-2 rounded-md text-sm font-normal">
                <PiSquaresFourBold size={16} className="text-icon" /> {currentIdea.category}
              </span>
              <span className="flex items-center gap-2 text-icon bg-gray-300 dark:bg-[#3E3F65] px-4 py-2 rounded-md text-sm font-normal">
                <FaDollarSign size={16} className="text-icon" /> ${currentIdea.investmentMin} - ${currentIdea.investmentMax} Investment
              </span>
              <span className="flex items-center gap-2 text-icon bg-gray-300 dark:bg-[#3E3F65] px-4 py-2 rounded-md text-sm font-normal">
                <BsGraphUpArrow size={16} className="text-icon" /> {currentIdea.profitMargin}% Profit Margin
              </span>
            </div>
          </div>

          {/* Hero Image - Dynamic URL Set Here */}
          <div className="w-full lg:w-[450px] shrink-0 h-[280px] relative rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/5">
            <Image
              src={
                currentIdea.image
                  ? `${BASE_URL}${currentIdea.image}`
                  : "/images/startup-sketch.png"
              }
              alt={currentIdea.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 flex flex-col lg:flex-row gap-12">
        {/* Left Column (Content) */}
        <div className="flex-1 space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Business Overview
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-500 dark:text-[#BACCDE]">
              {currentIdea.businessOverview}
            </p>
          </section>

          {/* Problem Box */}
          <div className="bg-[#370D25] border border-[#BD0B0B] rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              The Problem
            </h3>
            <p className="text-sm text-white leading-relaxed">
              {currentIdea.problem}
            </p>
          </div>

          {/* Solution Box */}
          <div className="bg-[#082846] border border-[#1C8D99] rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              The Solution
            </h3>
            <p className="text-sm text-white leading-relaxed">
              {currentIdea.solution}
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-icon mb-4">
              How It Works
            </h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <ul className="space-y-3 text-sm md:text-base text-gray-700 dark:text-gray-300">
              {currentIdea.howItWorks?.map((item, index) => (
                <li
                  key={index}
                  className="dark:text-[#BACCDE] text-sm"
                >
                  {/* <strong className="text-icon font-semibold">
                        Step {index + 1} :
                      </strong>{" "} */}
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
            <p className="text-sm dark:text-[#BACCDE] mb-4">
              Subscription-based model with tiered pricing based on ticket
              volume.
            </p>
            <ul className="space-y-2 text-sm dark:text-[#BACCDE]">
              {currentIdea.revenueModel?.map((item, index) => (
                <li key={index}>
                  <strong className="text-icon font-semibold">
                    Revenue {index + 1} :
                  </strong>{" "}
                  {item}
                </li>
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
            <ul className="space-y-2 text-sm text-gray-700 dark:text-[#BACCDE]">
              {currentIdea.techStack?.map((item, index) => (
                <li key={index}>
                  <strong className="text-gray-900 dark:text-white font-semibold">
                    Tool {index + 1} :
                  </strong>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Marketing Strategy (How to get first 10 customers)
            </h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm text-gray-700 dark:text-[#BACCDE] leading-relaxed">
              {currentIdea.marketingStrategy}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Conclusion
            </h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm text-gray-700 dark:text-[#BACCDE] leading-relaxed">
              {currentIdea.conclusion}
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

        {/* Right Column (Sidebar Form) */}
        <aside className="w-full lg:w-[350px] shrink-0">
          <div className="dark:bg-[#1A2342] dark:bg-card rounded-xl p-6 shadow-xl sticky top-24 border border-transparent dark:border-white/5">
            <h2 className="text-xl font-bold text-icon mb-2">
              Start This Business With Us
            </h2>
            <p className="text-sm text-icon font-light mb-6 leading-relaxed">
              Don't know how to code? We can build this exact platform for you
              quickly and efficiently.
            </p>

            <form className="space-y-4" onSubmit={handleContactSubmit}>
              <div>
                <label className="block text-sm font-normal text-icon mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  placeholder="Type here..."
                  className="w-full bg-gray-200 dark:bg-[#1D2659] border border-transparent dark:border-[#3E4A92] rounded-md p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-normal text-icon mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  placeholder="example@mail.com"
                  className="w-full bg-gray-200 dark:bg-[#1D2659] border border-transparent dark:border-[#3E4A92] rounded-md p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-normal text-icon mb-2">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  name="country"
                  value={contactForm.country}
                  onChange={handleContactChange}
                  className="w-full bg-gray-200 dark:bg-[#1D2659] border border-transparent dark:border-[#3E4A92] rounded-md p-2.5 text-sm text-icon focus:outline-none focus:border-primary"
                >
                  <option value="">Select</option>
                  <option>United States</option>
                  <option>India</option>
                  <option>United Kingdom</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-normal text-icon mb-2">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleContactChange}
                  placeholder="Type here..."
                  className="w-full bg-gray-200 dark:bg-[#1D2659] border border-transparent dark:border-[#3E4A92] rounded-md p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-normal text-icon mb-2">
                  Project Requirement (optional)
                </label>
                <textarea
                  name="projectRequirement"
                  value={contactForm.projectRequirement}
                  onChange={handleContactChange}
                  placeholder="Type here..."
                  rows="3"
                  className="w-full bg-gray-200 dark:bg-[#1D2659] border border-transparent dark:border-white/10 rounded-md p-2.5 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-primary resize-none"
                ></textarea>
              </div>

              <div>
                {/* Main Captcha Box */}
                <div className="bg-white w-50 border border-gray-300 p-3 flex flex-col sm:flex-nowrap">
                  <label className="block text-sm font-semibold text-black">
                    Captcha <span className="text-red-500">*</span>
                  </label>

                  <div className="flex flex-row items-center gap-3">
                    {/* Question */}
                    <span className="text-sm text-black whitespace-nowrap">
                      {captchaLoading
                        ? "Loading..."
                        : captchaData?.question
                          ? `What is ${captchaData.question} ?`
                          : "Unavailable"}
                    </span>

                    {/* Answer Input */}
                    <input
                      type="text"
                      name="captchaAnswer"
                      value={contactForm.captchaAnswer}
                      onChange={handleContactChange}
                      className="w-16 h-9 border border-gray-400 px-2 py-1 text-sm text-gray-900 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={contactLoading}
                className="w-40 bg-primary hover:bg-orange-500 text-white font-bold py-3 rounded-full mt-4 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {contactLoading ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}