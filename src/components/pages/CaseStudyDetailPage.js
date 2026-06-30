"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchCaseStudyById, submitContactForm, fetchCaptcha, toggleBookmark, toggleLike } from "@/redux/slices/CasesudieSlice";
import { BASE_URL } from "@/api/apiConfig"
import {
  ChevronRight,
  Download,
  Bookmark,
  Share2,
  ThumbsUp,
  X, FileText
} from "lucide-react";
import { toast } from "react-hot-toast";

export default function CaseStudyDetailPage() {
  const { id } = useParams(); // URL se dynamic ID fetch karna
  const dispatch = useDispatch();
  const [activeSection, setActiveSection] = useState("company-overview");

  // Redux se state extract karna
  const { currentCaseStudy, loading, error, captchaData, captchaLoading, formSubmitting, bookmarkLoading, likeLoading } = useSelector((state) => state.caseStudies);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    requirement: "",
    captchaAnswer: "",
  });

  useEffect(() => {
    if (id) {
      dispatch(fetchCaseStudyById(id));
      const saved = localStorage.getItem(`bookmarked_casestudy_${id}`);
      if (saved === "true") setIsBookmarked(true);

      // ← Like state localStorage se load karo
      const likedStatus = localStorage.getItem(`liked_casestudy_${id}`);
      if (likedStatus === "true") setIsLiked(true);
    }
    dispatch(fetchCaptcha());
  }, [dispatch, id]);

  useEffect(() => {
    if (currentCaseStudy) {
      setLikesCount(currentCaseStudy.upvotes || 0);
    }
  }, [currentCaseStudy]);

  // Smooth scrolling handler
  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleDownloadClick = () => { setIsModalOpen(true); setStep(1); };
  const closeModal = () => setIsModalOpen(false);

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
    setFormData({ name: "", email: "", country: "", phone: "", requirement: "", captchaAnswer: "" });
    dispatch(fetchCaptcha());
    setStep(2);
  } else {
    const errMsg = typeof result.payload === "string" ? result.payload : result.payload?.message || "Failed to send message";
    toast.error(errMsg, { position: "top-right" });
    dispatch(fetchCaptcha());
    setFormData((prev) => ({ ...prev, captchaAnswer: "" }));
  }
};
  const handleSaveClick = async () => {
  if (!id) return;

  const token = localStorage.getItem("token");
  if (!token) {
    toast.error("Please login", { position: "top-right" });
    return;
  }

  const result = await dispatch(toggleBookmark({
    itemId: currentCaseStudy._id,
    itemType: "case-study",
  }));

  if (toggleBookmark.fulfilled.match(result)) {
    const { bookmarked, message } = result.payload;
    setIsBookmarked(bookmarked);
    if (bookmarked) {
      localStorage.setItem(`bookmarked_casestudy_${id}`, "true");
    } else {
      localStorage.removeItem(`bookmarked_casestudy_${id}`);
    }
    toast.success(message, { position: "top-right" });
  } else {
    toast.error("Failed to update bookmark", { position: "top-right" });
  }
};

const handleLikeClick = async () => {
  if (!currentCaseStudy?._id) return;

  const token = localStorage.getItem("token");
  if (!token) {
    toast.error("Please login", { position: "top-right" });
    return;
  }

  const result = await dispatch(toggleLike(currentCaseStudy._id));

  if (toggleLike.fulfilled.match(result)) {
    const { upvoted, upvotes } = result.payload;
    setIsLiked(upvoted);
    setLikesCount(upvotes);
    if (upvoted) {
      localStorage.setItem(`liked_casestudy_${id}`, "true");
    } else {
      localStorage.removeItem(`liked_casestudy_${id}`);
    }
    toast.success(upvoted ? "Liked!" : "Like removed", { position: "top-right" });
  } else {
    toast.error("Failed to update like", { position: "top-right" });
  }
};

  const contents = [
    { id: "company-overview", title: "1. Company Overview" },
    { id: "founder-story", title: "2. Founder Story" },
    { id: "problem", title: "3. Problem" },
    { id: "solution", title: "4. Solution" },
    { id: "business-model", title: "5. Business Model" },
    { id: "revenue", title: "6. Revenue" },
    { id: "funding", title: "7. Funding" },
    { id: "growth", title: "8. Growth" },
    { id: "marketing-strategy", title: "9. Marketing Strategy" },
    { id: "first-customers", title: "10. How They Got First Customers" },
    { id: "lessons", title: "11. Lessons" },
    { id: "similar-business", title: "12. How You Can Start Similar Business" },
  ];

  // Loading State UI
  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center font-sans">
        <div className="text-center py-20 text-gray-500 text-sm font-medium">
          Loading case study details...
        </div>
      </div>
    );
  }

  // Error State UI
  if (error || !currentCaseStudy) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center font-sans p-4">
        <div className="text-center py-20 bg-card rounded-xl border border-dashed border-red-300 p-8 max-w-md">
          <h2 className="text-xl font-bold text-red-500 mb-2">Failed to Load</h2>
          <p className="text-gray-500 text-sm mb-4">
            {typeof error === "string" ? error : "Case study data not found or invalid route ID."}
          </p>
        </div>
      </div>
    );
  }

  // Destructure dynamic API response data
  const {
    title,
    excerpt,
    content,
    founderName,
    companyName,
    industry,
    monthlyRevenue,
    companySize,
    image,
    createdAt
  } = currentCaseStudy;

  // Format date readable format me badalne ke liye
  const formattedDate = createdAt
    ? new Date(createdAt).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' })
    : "Recent Date";

  // Image URL configuration setup (check dynamic image validation)
  const finalImageUrl = image && image.startsWith("http") ? image : `${BASE_URL}${image || '/images/startup-sketch.png'}`;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 pb-20 mt-20">
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

      {/* Hero Header Section (Layout se upar ka hissa bilkul Dynamic hai) */}
      <div className="pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-start justify-between">
          <div className="flex-1">
            {/* Breadcrumbs */}
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6 flex-wrap">
              <span>Home</span>
              <ChevronRight size={14} className="mx-1 shrink-0" />
              <span>Case Studies</span>
              <ChevronRight size={14} className="mx-1 shrink-0" />
              <span className="text-gray-900 dark:text-white font-medium line-clamp-1">
                {title}
              </span>
            </div>

            {/* Dynamic Main Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4 max-w-3xl">
              {title}
            </h1>

            {/* Dynamic Excerpt / Description */}
            <p className="text-base text-gray-600 dark:text-gray-300 mb-4 max-w-2xl italic">
              {excerpt}
            </p>

            <p className="text-sm text-icon">
              By Admin<br />
              {formattedDate}
            </p>
          </div>

          {/* Dynamic Hero Image */}
          <div className="w-full lg:w-[400px] shrink-0 h-[240px] relative rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/5">
            <Image
              src={finalImageUrl}
              alt={title || "Case Study Illustration"}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Main Content Layout with Sidebar */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col lg:flex-row gap-12 items-start">

        {/* Left Sidebar (Sticky) */}
        <aside className="w-full lg:w-[360px] shrink-0 lg:sticky top-24 order-2 lg:order-1 mt-10 lg:mt-0">

          {/* Dynamic Sidebar Metadata */}
          <div className="mb-10 space-y-3">
            <div className="grid grid-cols-[100px_1fr]">
              <span className="text-sm font-medium text-icon">Company:</span>
              <span className="text-sm font-semibold text-icon opacity-80">{companyName || "N/A"}</span>
            </div>
            <div className="grid grid-cols-[100px_1fr]">
              <span className="text-sm font-medium text-icon">Founder:</span>
              <span className="text-sm font-semibold text-icon opacity-80">{founderName || "N/A"}</span>
            </div>
            <div className="grid grid-cols-[100px_1fr]">
              <span className="text-sm font-medium text-icon">Industry:</span>
              <span className="text-sm font-semibold text-icon opacity-80">{industry || "N/A"}</span>
            </div>
            <div className="grid grid-cols-[100px_1fr]">
              <span className="text-sm font-medium text-icon">Company Size:</span>
              <span className="text-sm font-semibold text-icon opacity-80">{companySize || 0} Members</span>
            </div>
            <div className="grid grid-cols-[100px_1fr]">
              <span className="text-sm font-medium text-icon">Revenue:</span>
              <span className="text-sm font-semibold text-icon opacity-80">${monthlyRevenue || 0}k/m</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-10 pb-8 border-b-2 border-dotted border-gray-200 dark:border-white/10">
            <div className="flex gap-3 w-full">
              <button
                onClick={handleDownloadClick}
                className="flex items-center gap-2 bg-[#2D3B82] hover:bg-[#232e66] text-white px-1 py-2 rounded-2xl text-xs font-medium transition-colors w-40 justify-center"
              >
                <Download size={16} /> Download PDF
              </button>

              <button
                onClick={handleSaveClick}
                disabled={bookmarkLoading}
                className={`flex-1 flex items-center justify-center gap-2 border px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${isBookmarked
                  ? "bg-[#2D3B82] border-[#FD7306] text-[#FD7306]"
                  : "bg-[#2D3B82] hover:bg-[#232e66] border-gray-200 dark:border-white/10 text-white"
                  }`}
              >
                <Bookmark size={16} fill={isBookmarked ? "currentColor" : "none"} />
                {bookmarkLoading ? "Saving..." : isBookmarked ? "Saved" : "Save"}
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-[#2D3B82] hover:bg-[#232e66] border border-gray-200 dark:border-white/10 px-4 py-2 rounded-2xl text-sm font-medium transition-colors text-white">
                <Share2 size={16} /> Share
              </button>
            </div>
          </div>

          {/* Table of Contents */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Contents</h3>
            <ul className="space-y-3">
              {contents.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm text-left transition-colors hover:text-primary ${activeSection === item.id
                      ? "text-primary font-semibold"
                      : "text-gray-600 dark:text-gray-400"
                      }`}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Right Main Content Area */}
        <div className="flex-1 space-y-10 order-1 lg:order-2 w-full max-w-7xl">

          <section id="company-overview">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Company Overview</h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              {content || "No detailed overview available for this study."}
            </p>
          </section>

          <section id="founder-story">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Founder Story</h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              {companyName} was founded by <span className="font-semibold">{founderName || "an exceptional founder"}</span> who realized the growing demand within the {industry} industry. With a clear problem to solve and a focus on scalability, they initiated operations with a team of {companySize} members.
            </p>
          </section>

          {/* Problem Box */}
          <section id="problem">
            <div className="bg-[#370D25] border border-[#BD0B0B] p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-white mb-2">Problem</h3>
              <p className="text-sm text-white leading-relaxed">
                The business encountered initial scaling issues in the {industry} sector, struggling to maximize user engagement and capture stable monthly traction while managing operational size overheads.
              </p>
            </div>
          </section>

          {/* Solution Box */}
          <section id="solution">
            <div className="bg-green-950 dark:bg-[#00E6FF1F] border border-[#1C8D99] p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold text-white mb-2">Solution</h3>
              <p className="text-sm text-white leading-relaxed">
                By optimizing execution workflows under {founderName || "leadership"} and tailoring modern platform methodologies, they successfully expanded profitability metrics to hit robust milestones.
              </p>
            </div>
          </section>

          <section id="business-model">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Business Model</h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              {companyName} operates on custom business architectures optimized for {industry} workflows. Revenue flows smoothly through core monetization pathways built tailored for standard industry demographics.
            </p>
          </section>

          <section id="revenue">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Revenue</h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              The project reached a recurring monthly volume milestone of <span className="font-bold text-[#38D051]">${monthlyRevenue}K/month</span> by leveraging strict B2B pipelines and continuous active client loops.
            </p>
          </section>

          <section id="funding">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Funding</h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Initially managed via bootstrapped mechanisms, the platform expanded infrastructure channels efficiently using internal operational revenue cash flows without major dilution hooks.
            </p>
          </section>

          <section id="growth">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Growth</h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Scaling momentum followed clear organic acquisition loops centered on reliable performance milestones across specialized application verticals.
            </p>
          </section>

          <section id="marketing-strategy">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Marketing Strategy</h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              The strategy relied on high-intent inbound acquisition funnels alongside direct product optimization targeting active operations inside the {industry} market tier.
            </p>
          </section>

          <section id="first-customers">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How They Got First Customers</h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
              Initial customer pools were secured via active alpha testing parameters, localized community feedback, and strategic value validation offers.
            </p>
          </section>

          <section id="lessons">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Lessons</h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-gray-700 dark:text-gray-300">
              <li>Address structural gaps inside {industry} explicitly.</li>
              <li>Iterate core mechanics closely with early enterprise or local accounts.</li>
              <li>Optimize overhead size to keep early operations nimble.</li>
            </ul>
          </section>

          <section id="similar-business">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">How You Can Start Similar Business</h2>
            <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              Analyze the operational structure of {companyName || "this company"}, focus target demographics on specific validation metrics, and structure robust pricing logic around core problems.
            </p>
            <button
              onClick={handleLikeClick}
              disabled={likeLoading}
              className={`flex items-center gap-2 bg-card border hover:bg-gray-100 dark:hover:bg-white/5 px-4 py-2 rounded-4xl text-sm font-medium transition-colors ${isLiked
                  ? "border-[#FD7306] text-[#FD7306]"
                  : "text-icon border-gray-200 dark:border-white/10"
                }`}
            >
              <ThumbsUp size={16} fill={isLiked ? "currentColor" : "none"} />
              {likeLoading ? "..." : `${likesCount} Likes`}
            </button>
          </section>

        </div>
      </div>
    </div>
  );
}