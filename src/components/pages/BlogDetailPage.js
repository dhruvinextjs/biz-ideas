// "use client";
// import React from "react";
// import { ArrowLeft, Calendar, ThumbsUp } from "lucide-react";

// export default function BlogDetailPage() {
//   // Mock Data for Comments
//   const comments = [
//     {
//       id: 1,
//       initials: "JD",
//       name: "John Doe",
//       time: "2 days ago",
//       text: "I built something similar last year. The hardest part wasn't the AI, it was the integration with existing tools like Zendesk. Make sure you handle that early.",
//       likes: 29,
//     },
//     {
//       id: 2,
//       initials: "AM",
//       name: "Alice M.",
//       time: "2 days ago",
//       text: "Great ideas! I think targeting local dentists or real estate agents could be a massive untapped market for this.",
//       likes: 12,
//     },
//     {
//       id: 3,
//       initials: "JD",
//       name: "John Doe",
//       time: "2 days ago",
//       text: "I built something similar last year. The hardest part wasn't the AI, it was the integration with existing tools like Zendesk. Make sure you handle that early.",
//       likes: 20,
//     },
//   ];

//   return (
//     // <div className="min-h-screen bg-background font-sans transition-colors duration-300 py-12 px-4 md:px-8 mt-20 max-w-7xl">
// <div className="min-h-screen bg-background font-sans transition-colors duration-300 py-12 px-4 md:px-8 mt-20">
//     {/* Container: Blog padhne ke liye max-w-3xl ya 4xl sabse best hota hai */}
//       {/* <div className="max-w-4xl mx-auto"> */}
//         <div className="max-w-7xl mx-auto">
//         {/* ========================================== */}
//         {/* 1. BACK BUTTON                             */}
//         {/* ========================================== */}
//         <button className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-10 group">
//           <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
//           Back to Blog
//         </button>

//         {/* ========================================== */}
//         {/* 2. BLOG HEADER                             */}
//         {/* ========================================== */}
//         <div className="mb-12">
//           <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
//             Top 10 AI Business Ideas for 2026
//           </h1>
//           <p className="text-icon opacity-90 mb-6 ">
//             Insights, trends, and guides to help you build and scale your next startup.
//           </p>

//             <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>

//           <div className="flex items-center flex-wrap gap-4 border-b-2 border-dashed border-gray-200 dark:border-[#1C234D] pb-6">
//             {/* Category Badge */}
//             <span className="bg-gray-200 dark:bg-[#2A3265] text-gray-700 dark:text-gray-300 text-xs font-bold tracking-wider px-4 py-1.5 rounded-full uppercase">
//               IDEAS
//             </span>
            
//             {/* Date & Author */}
//             <div className="flex items-center text-xs text-icon opacity-90 font-medium">
//               <Calendar size={16} className="mr-2" />
//               March 15, 2026<span className="mx-2">•</span>By ADMIN
//             </div>
//           </div>
//         </div>

//         {/* ========================================== */}
//         {/* 3. BLOG CONTENT                            */}
//         {/* ========================================== */}
//         <article className="prose prose-gray dark:prose-invert max-w-none mb-10">
//           <h3 className="text-xl font-normal text-icon mb-4">
//             Explore the most profitable AI-driven business opportunities this year.
//           </h3>
//           <p className="text-gray-600 dark:text-[#BACCDE] leading-relaxed mb-8 text-sm">
//             In the rapidly evolving landscape of 2026, artificial intelligence is no longer just a buzzword; it's the core engine driving the next generation of profitable businesses. From hyper-personalized services to automated industrial solutions, the opportunities are vast for those who know where to look.
//           </p>

//           {/* Section 1 */}
//           <h4 className="text-xl font-semibold text-icon mb-3">
//             1. AI-Powered Personal Finance
//           </h4>
//           <p className="text-gray-600 dark:text-[#BACCDE]  text-sm leading-relaxed mb-8">
//             Managing money has always been a complex task for the average individual. Traditional financial advisors are expensive, and generic budgeting apps often fail to provide actionable advice. AI-driven platforms can now analyze real-time spending data, predict future expenses, and suggest personalized investment strategies with unprecedented accuracy.
//           </p>

//           {/* Key Takeaway Box */}
//           <div className="bg-blue-50 dark:bg-[#082846] border border-blue-100 dark:border-[#1C8D99] rounded-xl p-6 md:p-6 my-10 shadow-sm">
//             <h4 className="text-blue-900 dark:text-blue-100 font-bold text-lg mb-2">
//               Key Takeaway
//             </h4>
//             <p className="text-blue-800 dark:text-blue-200 leading-relaxed text-sm m-0">
//               "The most successful AI businesses in 2026 will be those that solve specific, high-friction problems for a clearly defined audience."
//             </p>
//           </div>

//           {/* Section 2 */}
//           <h4 className="text-xl font-semibold text-icon mb-3">
//             2. Hyper-Local E-commerce Logistics
//           </h4>
//           <p className="text-gray-600 dark:text-[#BACCDE]  text-sm leading-relaxed mb-8">
//             As consumers demand faster delivery times, the focus is shifting from global supply chains to hyper-local fulfillment. AI algorithms can predict local demand, optimize inventory levels in neighborhood micro-warehouses, and coordinate autonomous delivery fleets to ensure products reach customers in under 30 minutes.
//           </p>

//           {/* Section 3 */}
//           <h4 className="text-xl font-semibold text-icon mb-3">
//             3. AI-Powered Personal Finance
//           </h4>
//           <p className="text-gray-600 dark:text-[#BACCDE]  text-sm leading-relaxed mb-8">
//             Managing money has always been a complex task for the average individual. Traditional financial advisors are expensive, and generic budgeting apps often fail to provide actionable advice. AI-driven platforms can now analyze real-time spending data, predict future expenses, and suggest personalized investment strategies with unprecedented accuracy.
//           </p>

//           {/* Section 4 */}
//           <h4 className="text-xl font-semibold text-icon mb-3">
//             4. Hyper-Local E-commerce Logistics
//           </h4>
//           <p className="text-gray-600 dark:text-[#BACCDE]  text-sm leading-relaxed mb-8">
//             As consumers demand faster delivery times, the focus is shifting from global supply chains to hyper-local fulfillment. AI algorithms can predict local demand, optimize inventory levels in neighborhood micro-warehouses, and coordinate autonomous delivery fleets to ensure products reach customers in under 30 minutes.
//           </p>

//           {/* Conclusion */}
//           <h3 className="text-xl font-semibold text-icon mb-3">
//             Conclusion
//           </h3>
//           <p className="text-gray-600 dark:text-[#BACCDE]  text-sm leading-relaxed mb-8">
//             The barrier to entry for starting an AI-driven business has never been lower, thanks to the proliferation of powerful APIs and no-code tools. However, the competition is also fiercer than ever. Success requires a deep understanding of the problem you're solving and a relentless focus on user experience.
//           </p>
//         </article>

//         {/* ========================================== */}
//         {/* 4. ENGAGEMENT (LIKE BUTTON)                */}
//         {/* ========================================== */}
//         <div className="flex items-center mb-12">
//           <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#222642] border border-gray-200 dark:border-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#232D45] transition-colors shadow-sm font-medium text-xs">
//             <ThumbsUp size={16} />
//             20 Likes
//           </button>
//         </div>

//         {/* Divider before comments */}
//         <div className="w-full h-px bg-gray-200 dark:bg-[#333852] mb-12"></div>

//         {/* ========================================== */}
//         {/* 5. COMMENTS SECTION                        */}
//         {/* ========================================== */}
//         <div>
//           <h3 className="text-2xl font-bold text-icon mb-6">
//             Comments <span className="text-icon font-normal text-lg">({comments.length})</span>
//           </h3>

//           {/* Add Comment Input */}
//           <div className="mb-10">
//             <textarea
//               rows="3"
//               placeholder="Share your thoughts or as a question..."
//               className="w-full bg-white dark:bg-[#1D2659] border border-gray-200 dark:border-white/10 rounded-xl p-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 shadow-sm resize-none mb-4 text-sm"
//             ></textarea>
//             <button className="px-7 py-3 bg-primary hover:bg-[#e6751e] text-white rounded-full font-medium text-sm transition-colors shadow-md shadow-orange-500/20">
//               POST COMMENT
//             </button>
//           </div>

//           {/* Comments List */}
//           <div className="space-y-8">
//             {comments.map((comment) => (
//               <div key={comment.id} className="flex gap-4">
//                 {/* Avatar */}
//                 <div className="w-10 h-10 flex-shrink-0 bg-gray-200 dark:bg-[#222B62] rounded-full flex items-center justify-center font-bold text-icon text-sm">
//                   {comment.initials}
//                 </div>

//                 {/* Comment Content */}
//                 <div className="flex-1">
//                   <div className="flex items-center gap-3 mb-1">
//                     <h4 className="font-semibold text-icon text-md">
//                       {comment.name}
//                     </h4>
//                     <span className="text-xs text-gray-500 dark:text-gray-400">
//                       {comment.time}
//                     </span>
//                   </div>
//                   <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
//                     {comment.text}
//                   </p>
                  
//                   {/* Like Comment Action */}
//                   <button className="flex items-center gap-1.5 text-xs font-medium text-icon opacity-90 hover:text-[#FB8122] dark:hover:text-[#FB8122] transition-colors">
//                     <ThumbsUp size={14} />
//                     {comment.likes} Likes
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }


// "use client";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, useRouter } from "next/navigation";
// // Yahan fetchBlogDetails ki jagah fetchBlogById import kiya
// import { fetchBlogById, clearCurrentBlog } from "@/redux/slices/BlogSlice"; 
// import { ArrowLeft, Calendar, ThumbsUp } from "lucide-react";

// export default function BlogDetailPage() {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const { id } = useParams(); // URL parameters se id read karne ke liye

//   // Redux store se details fetch karna
//   const { currentBlog, loading } = useSelector((state) => state.blog);

//   useEffect(() => {
//     if (id) {
//       // Dispatch me bhi fetchBlogById pass kiya
//       dispatch(fetchBlogById(id));
//     }
    
//     // Cleanup function jab component leave karein
//     return () => {
//       dispatch(clearCurrentBlog());
//     };
//   }, [dispatch, id]);

//   // Date formatted converter
//   const formatDate = (dateString) => {
//     if (!dateString) return "June 4, 2026";
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   // Static comments list as requested in UI template
//   const comments = [
//     {
//       id: 1,
//       initials: "JD",
//       name: "John Doe",
//       time: "2 days ago",
//       text: "I built something similar last year. The hardest part wasn't the AI, it was the integration with existing tools like Zendesk. Make sure you handle that early.",
//       likes: 29,
//     },
//     {
//       id: 2,
//       initials: "AM",
//       name: "Alice M.",
//       time: "2 days ago",
//       text: "Great ideas! I think targeting local dentists or real estate agents could be a massive untapped market for this.",
//       likes: 12,
//     },
//     {
//       id: 3,
//       initials: "JD",
//       name: "John Doe",
//       time: "2 days ago",
//       text: "I built something similar last year. The hardest part wasn't the AI, it was the integration with existing tools like Zendesk. Make sure you handle that early.",
//       likes: 20,
//     },
//   ];

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-background text-gray-500">
//         Loading article details...
//       </div>
//     );
//   }

//   if (!currentBlog) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-background text-gray-500">
//         <p className="mb-4">No article found.</p>
//         <button onClick={() => router.push("/blogs")} className="text-primary flex items-center text-sm font-semibold">
//           <ArrowLeft size={16} className="mr-2" /> Back to Blog
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background font-sans transition-colors duration-300 py-12 px-4 md:px-8 mt-20">
//       <div className="max-w-7xl mx-auto">
//         {/* ========================================== */}
//         {/* 1. BACK BUTTON                             */}
//         {/* ========================================== */}
//         <button 
//           onClick={() => router.push("/blogs")} 
//           className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-10 group"
//         >
//           <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
//           Back to Blog
//         </button>

//         {/* ========================================== */}
//         {/* 2. BLOG HEADER                             */}
//         {/* ========================================== */}
//         <div className="mb-12">
//           <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
//             {currentBlog.title}
//           </h1>
//           <p className="text-icon opacity-90 mb-6 ">
//             {currentBlog.excerpt}
//           </p>

//           <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>

//           <div className="flex items-center flex-wrap gap-4 border-b-2 border-dashed border-gray-200 dark:border-[#1C234D] pb-6">
//             {/* Category Badge */}
//             <span className="bg-gray-200 dark:bg-[#2A3265] text-gray-700 dark:text-gray-300 text-xs font-bold tracking-wider px-4 py-1.5 rounded-full uppercase">
//               {currentBlog.category || "IDEAS"}
//             </span>
            
//             {/* Date & Author */}
//             <div className="flex items-center text-xs text-icon opacity-90 font-medium">
//               <Calendar size={16} className="mr-2" />
//               {formatDate(currentBlog.publishedAt)}<span className="mx-2">•</span>By {currentBlog.author || "ADMIN"}
//             </div>
//           </div>
//         </div>

//         {/* ========================================== */}
//         {/* 3. BLOG CONTENT                            */}
//         {/* ========================================== */}
//         <article className="prose prose-gray dark:prose-invert max-w-none mb-10">
          
//           {/* Main API Body Content */}
//           <div className="text-gray-600 dark:text-[#BACCDE] leading-relaxed mb-8 text-sm whitespace-pre-line">
//             {currentBlog.content || "No details provided for this article."}
//           </div>

//           {/* Key Takeaway Box */}
//           <div className="bg-blue-50 dark:bg-[#082846] border border-blue-100 dark:border-[#1C8D99] rounded-xl p-6 md:p-6 my-10 shadow-sm">
//             <h4 className="text-blue-900 dark:text-blue-100 font-bold text-lg mb-2">
//               Key Takeaway
//             </h4>
//             <p className="text-blue-800 dark:text-blue-200 leading-relaxed text-sm m-0">
//               "The most successful AI businesses in 2026 will be those that solve specific, high-friction problems for a clearly defined audience."
//             </p>
//           </div>

//         </article>

//         {/* ========================================== */}
//         {/* 4. ENGAGEMENT (LIKE BUTTON)                */}
//         {/* ========================================== */}
//         <div className="flex items-center mb-12">
//           <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#222642] border border-gray-200 dark:border-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#232D45] transition-colors shadow-sm font-medium text-xs">
//             <ThumbsUp size={16} />
//             20 Likes
//           </button>
//         </div>

//         {/* Divider before comments */}
//         <div className="w-full h-px bg-gray-200 dark:bg-[#333852] mb-12"></div>

//         {/* ========================================== */}
//         {/* 5. COMMENTS SECTION                        */}
//         {/* ========================================== */}
//         <div>
//           <h3 className="text-2xl font-bold text-icon mb-6">
//             Comments <span className="text-icon font-normal text-lg">({comments.length})</span>
//           </h3>

//           {/* Add Comment Input */}
//           <div className="mb-10">
//             <textarea
//               rows="3"
//               placeholder="Share your thoughts or as a question..."
//               className="w-full bg-white dark:bg-[#1D2659] border border-gray-200 dark:border-white/10 rounded-xl p-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 shadow-sm resize-none mb-4 text-sm"
//             ></textarea>
//             <button className="px-7 py-3 bg-primary hover:bg-[#e6751e] text-white rounded-full font-medium text-sm transition-colors shadow-md shadow-orange-500/20">
//               POST COMMENT
//             </button>
//           </div>

//           {/* Comments List */}
//           <div className="space-y-8">
//             {comments.map((comment) => (
//               <div key={comment.id} className="flex gap-4">
//                 {/* Avatar */}
//                 <div className="w-10 h-10 flex-shrink-0 bg-gray-200 dark:bg-[#222B62] rounded-full flex items-center justify-center font-bold text-icon text-sm">
//                   {comment.initials}
//                 </div>

//                 {/* Comment Content */}
//                 <div className="flex-1">
//                   <div className="flex items-center gap-3 mb-1">
//                     <h4 className="font-semibold text-icon text-md">
//                       {comment.name}
//                     </h4>
//                     <span className="text-xs text-gray-500 dark:text-gray-400">
//                       {comment.time}
//                     </span>
//                   </div>
//                   <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
//                     {comment.text}
//                   </p>
                  
//                   {/* Like Comment Action */}
//                   <button className="flex items-center gap-1.5 text-xs font-medium text-icon opacity-90 hover:text-[#FB8122] dark:hover:text-[#FB8122] transition-colors">
//                     <ThumbsUp size={14} />
//                     {comment.likes} Likes
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import {
  fetchBlogById,
  clearCurrentBlog,
  toggleLikeBlog,
  fetchComments,
  postComment,
  postReply,
} from "@/redux/slices/BlogSlice";
import { toast } from "react-hot-toast";
import { ArrowLeft, Calendar, ThumbsUp, CornerDownRight } from "lucide-react";

// ✅ Like persistence helpers
const LIKED_BLOGS_KEY = "likedBlogsList";

const getLikedBlogsFromStorage = () => {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem(LIKED_BLOGS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveLikedBlogsToStorage = (ids) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(LIKED_BLOGS_KEY, JSON.stringify(ids));
  } catch {}
};

export default function BlogDetailPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = useParams();

  const {
    currentBlog,
    loading,
    comments,
    commentsCount,
    commentsLoading,
    commentPosting,
    likeLoading,
    replyLoading,
  } = useSelector((state) => state.blog);

  const [commentText, setCommentText] = useState("");
  const [likedBlogIds, setLikedBlogIds] = useState([]);

  // ✅ Reply state
  const [replyOpenId, setReplyOpenId] = useState(null);
  const [replyText, setReplyText] = useState("");

  useEffect(() => {
    setLikedBlogIds(getLikedBlogsFromStorage());
  }, []);

  // ✅ Like state — localStorage OR server
  const showLiked =
    (currentBlog?._id && likedBlogIds.includes(currentBlog._id)) ||
    !!currentBlog?.isLiked;

  useEffect(() => {
    if (id) {
      dispatch(fetchBlogById(id));
      dispatch(fetchComments({ itemId: id, itemType: "blog" }));
    }
    return () => {
      dispatch(clearCurrentBlog());
    };
  }, [dispatch, id]);

  const formatDate = (dateString) => {
    if (!dateString) return "June 4, 2026";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // ✅ Like handler with localStorage persistence
  const handleLikeClick = async () => {
    if (!currentBlog?._id) return;

    const result = await dispatch(toggleLikeBlog(currentBlog._id));

    if (toggleLikeBlog.fulfilled.match(result)) {
      const liked = result.payload?.liked;
      toast.success(liked ? "Liked!" : "Like removed", { position: "top-right" });

      setLikedBlogIds((prev) => {
        let updated;
        if (liked) {
          updated = prev.includes(currentBlog._id) ? prev : [...prev, currentBlog._id];
        } else {
          updated = prev.filter((blogId) => blogId !== currentBlog._id);
        }
        saveLikedBlogsToStorage(updated);
        return updated;
      });
    } else {
      toast.error("Failed to update like", { position: "top-right" });
    }
  };

  // ✅ Post comment handler
  const handlePostComment = async () => {
    if (!commentText.trim()) {
      toast.error("Please write something before posting", { position: "top-right" });
      return;
    }

    const result = await dispatch(postComment({
      itemId: currentBlog._id,
      itemType: "blog",
      text: commentText.trim(),
    }));

    if (postComment.fulfilled.match(result)) {
      toast.success("Comment posted!", { position: "top-right" });
      setCommentText("");
    } else {
      toast.error("Failed to post comment", { position: "top-right" });
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
      dispatch(fetchComments({ itemId: id, itemType: "blog" }));
    } else {
      toast.error("Failed to post reply", { position: "top-right" });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-gray-500">
        Loading article details...
      </div>
    );
  }

  if (!currentBlog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-gray-500">
        <p className="mb-4">No article found.</p>
        <button onClick={() => router.push("/blogs")} className="text-primary flex items-center text-sm font-semibold">
          <ArrowLeft size={16} className="mr-2" /> Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans transition-colors duration-300 py-12 px-4 md:px-8 mt-20">
      <div className="max-w-7xl mx-auto">

        {/* 1. BACK BUTTON */}
        <button
          onClick={() => router.push("/blogs")}
          className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-10 group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </button>

        {/* 2. BLOG HEADER */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {currentBlog.title}
          </h1>
          <p className="text-icon opacity-90 mb-6">{currentBlog.excerpt}</p>

          <div className="w-full border-t-2 border-dashed border-gray-300 dark:border-[#1C234D] mb-6"></div>

          <div className="flex items-center flex-wrap gap-4 border-b-2 border-dashed border-gray-200 dark:border-[#1C234D] pb-6">
            <span className="bg-gray-200 dark:bg-[#2A3265] text-gray-700 dark:text-gray-300 text-xs font-bold tracking-wider px-4 py-1.5 rounded-full uppercase">
              {currentBlog.category || "IDEAS"}
            </span>
            <div className="flex items-center text-xs text-icon opacity-90 font-medium">
              <Calendar size={16} className="mr-2" />
              {formatDate(currentBlog.publishedAt)}<span className="mx-2">•</span>By {currentBlog.author || "ADMIN"}
            </div>
          </div>
        </div>

        {/* 3. BLOG CONTENT */}
        <article className="prose prose-gray dark:prose-invert max-w-none mb-10">
          <div className="text-gray-600 dark:text-[#BACCDE] leading-relaxed mb-8 text-sm whitespace-pre-line">
            {currentBlog.content || "No details provided for this article."}
          </div>

          <div className="bg-blue-50 dark:bg-[#082846] border border-blue-100 dark:border-[#1C8D99] rounded-xl p-6 md:p-6 my-10 shadow-sm">
            <h4 className="text-blue-900 dark:text-blue-100 font-bold text-lg mb-2">Key Takeaway</h4>
            <p className="text-blue-800 dark:text-blue-200 leading-relaxed text-sm m-0">
              "The most successful AI businesses in 2026 will be those that solve specific, high-friction problems for a clearly defined audience."
            </p>
          </div>
        </article>

        {/* 4. ENGAGEMENT — ✅ Dynamic Like Button */}
        <div className="flex items-center mb-12">
          <button
            onClick={handleLikeClick}
            disabled={likeLoading}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-colors shadow-sm font-medium text-xs ${
              showLiked
                ? "bg-[#FD7306]/10 border-[#FD7306] text-[#FD7306]"
                : "bg-white dark:bg-[#222642] border-gray-200 dark:border-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#232D45]"
            }`}
          >
            <ThumbsUp size={16} fill={showLiked ? "currentColor" : "none"} />
           {likeLoading ? "..." : "Liked"}
          </button>
        </div>

        <div className="w-full h-px bg-gray-200 dark:bg-[#333852] mb-12"></div>

        {/* 5. COMMENTS SECTION — ✅ Fully Dynamic */}
        <div>
          <h3 className="text-2xl font-bold text-icon mb-6">
            Comments <span className="text-icon font-normal text-lg">({commentsCount})</span>
          </h3>

          {/* Add Comment Input */}
          <div className="mb-10">
            <textarea
              rows="3"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Share your thoughts or ask a question..."
              className="w-full bg-white dark:bg-[#1D2659] border border-gray-200 dark:border-white/10 rounded-xl p-4 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 shadow-sm resize-none mb-4 text-sm"
            ></textarea>
            <button
              onClick={handlePostComment}
              disabled={commentPosting}
              className="px-7 py-3 bg-primary hover:bg-[#e6751e] text-white rounded-full font-medium text-sm transition-colors shadow-md shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {commentPosting ? "POSTING..." : "POST COMMENT"}
            </button>
          </div>

          {/* Comments List */}
          <div className="space-y-8">
            {commentsLoading ? (
              <p className="text-sm text-gray-500">Loading comments...</p>
            ) : comments.length === 0 ? (
              <p className="text-sm text-gray-500">No comments yet. Be the first to comment!</p>
            ) : (
              comments.map((comment, i) => (
                <div key={comment._id || i} className="flex gap-4">
                  {/* Avatar */}
                  <div className="w-10 h-10 flex-shrink-0 bg-gray-200 dark:bg-[#222B62] rounded-full flex items-center justify-center font-bold text-icon text-sm">
                    {comment.user?.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>

                  {/* Comment Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-semibold text-icon text-md">
                        {comment.user?.name || "Anonymous"}
                      </h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(comment.createdAt).toLocaleDateString("en-US", {
                          year: "numeric", month: "short", day: "numeric",
                        })}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                      {comment.text}
                    </p>

                    {/* ✅ Reply toggle button */}
                    <button
                      onClick={() => handleReplyToggle(comment._id)}
                      className="flex items-center gap-1.5 text-xs font-medium text-icon opacity-90 hover:text-[#FB8122] dark:hover:text-[#FB8122] transition-colors"
                    >
                      <CornerDownRight size={14} />
                      Reply ({comment.repliesCount ?? comment.replies?.length ?? 0})
                    </button>

                    {/* ✅ Reply input box */}
                    {replyOpenId === comment._id && (
                      <div className="mt-3">
                        <textarea
                          rows="2"
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder="Write a reply..."
                          className="w-full bg-white dark:bg-[#1D2659] border border-gray-200 dark:border-white/10 rounded-xl p-3 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FB8122]/50 shadow-sm resize-none mb-2 text-xs"
                        ></textarea>
                        <button
                          onClick={() => handleReplySubmit(comment._id)}
                          disabled={replyLoading}
                          className="px-4 py-1.5 bg-primary hover:bg-[#e6751e] text-white rounded-full font-medium text-[10px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {replyLoading ? "POSTING..." : "POST REPLY"}
                        </button>
                      </div>
                    )}
                    {/* ✅ Replies list */}
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="mt-4 ml-2 space-y-4 border-l-2 border-gray-200 dark:border-white/10 pl-4">
                        {comment.replies.map((reply, j) => (
                          <div key={reply._id || j} className="flex gap-3">
                            <div className="w-8 h-8 flex-shrink-0 bg-gray-200 dark:bg-[#222B62] rounded-full flex items-center justify-center font-bold text-icon text-xs">
                              {reply.user?.name?.charAt(0)?.toUpperCase() || "U"}
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-icon text-xs">
                                  {reply.user?.name || "Anonymous"}
                                </span>
                                <span className="text-[10px] text-gray-500 dark:text-gray-400">
                                  {new Date(reply.createdAt).toLocaleDateString("en-US", {
                                    year: "numeric", month: "short", day: "numeric",
                                  })}
                                </span>
                              </div>
                              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
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
        </div>

      </div>
    </div>
  );
}