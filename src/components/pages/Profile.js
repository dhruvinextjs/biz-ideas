// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { Plus, MoreVertical, X, Clock, Check, Pencil } from "lucide-react";
// import { TbEdit } from "react-icons/tb";
// import { MdOutlineMail } from "react-icons/md";
// import { FaLinkedinIn, FaFacebookF, FaRedditAlien, FaTwitch, FaPinterestP, FaDribbble, FaBehance, FaDiscord, FaTumblr } from "react-icons/fa";
// import { FaInstagram, FaXTwitter, FaTelegram, FaWhatsapp, FaYoutube, FaTiktok, FaSnapchat } from "react-icons/fa6";
// import { useDispatch, useSelector } from "react-redux";
// import { getSocialLinks , getUserProfile} from "@/redux/slices/ProfileSlice";
 
// const EmailIcon     = () => <MdOutlineMail size={28} color="white" />;
// const LinkedInIcon  = () => <FaLinkedinIn  size={28} color="white" />;
// const InstagramIcon = () => <FaInstagram   size={28} color="white" />;
// const XIcon         = () => <FaXTwitter    size={28} color="white" />;
 
// const ALL_SOCIALS = [
//   { key: "email",     label: "Email",     Icon: MdOutlineMail, bg: "#FD7306" },
//   { key: "linkedin",  label: "LinkedIn",  Icon: FaLinkedinIn,  bg: "#0D67AD" },
//   { key: "instagram", label: "Instagram", Icon: FaInstagram,   bg: "linear-gradient(135deg,#5C55CA,#9F39AB,#E34D6A,#FBB865)" },
//   { key: "twitter",   label: "X/Twitter", Icon: FaXTwitter,    bg: "#000000" },
//   { key: "facebook",  label: "Facebook",  Icon: FaFacebookF,   bg: "#1877F2" },
//   { key: "whatsapp",  label: "WhatsApp",  Icon: FaWhatsapp,    bg: "#25D366" },
//   { key: "telegram",  label: "Telegram",  Icon: FaTelegram,    bg: "#229ED9" },
//   { key: "reddit",    label: "Reddit",    Icon: FaRedditAlien, bg: "#FF4500" },
//   { key: "snapchat",  label: "Snapchat",  Icon: FaSnapchat,    bg: "#FFFC00", iconColor: "#000" },
//   { key: "twitch",    label: "Twitch",    Icon: FaTwitch,      bg: "#9146FF" },
//   { key: "youtube",   label: "YouTube",   Icon: FaYoutube,     bg: "#FF0000" },
//   { key: "tiktok",    label: "TikTok",    Icon: FaTiktok,      bg: "#010101" },
//   { key: "pinterest", label: "Pinterest", Icon: FaPinterestP,  bg: "#E60023" },
//   { key: "dribbble",  label: "Dribbble",  Icon: FaDribbble,    bg: "#EA4C89" },
//   { key: "behance",   label: "Behance",   Icon: FaBehance,     bg: "#1769FF" },
//   { key: "discord",   label: "Discord",   Icon: FaDiscord,     bg: "#5865F2" },
//   { key: "tumblr",    label: "Tumblr",    Icon: FaTumblr,      bg: "#35465C" },
// ];
 
// const initialSocialLinks = [
//   { key: "email",     Icon: EmailIcon,     bg: "#FD7306",                                                  label: "Email"     },
//   { key: "linkedin",  Icon: LinkedInIcon,  bg: "#0D67AD",                                                  label: "LinkedIn"  },
//   { key: "instagram", Icon: InstagramIcon, bg: "linear-gradient(135deg,#5C55CA,#9F39AB,#E34D6A,#FBB865)", label: "Instagram" },
//   { key: "twitter",   Icon: XIcon,         bg: "#000000",                                                  label: "X/Twitter" },
// ];
 
// const initialPosts = [
//   { id: 1, title: "Evergreen Search: They show you what's popular, not what you can actually rank for.",                              time: "2 hours ago"    },
//   { id: 2, title: "I bootstrapped for 4 months. Monday I'm going back to a 9 to 5.",                                                 time: "Apr 17th, 2026" },
//   { id: 3, title: "ReadMyAgent: I built a voice AI that speaks on your behalf because I was tired of both sides of the same problem", time: "Apr 6th, 2026"  },
//   { id: 4, title: "Hamilton-V Solve: How do you usually hash or visualize the Travelling Salesman Problem?",                          time: "Apr 26, 2026"   },
//   { id: 5, title: "How do you handle the fact that your AI forgets everything between sessions?",                                     time: "Apr 11, 2026"   },
// ];
 
// /* Shared Modal wrapper */
// function Modal({ onClose, children }) {
//   return (
//     <div
//       className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
//       onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
//     >
//       <div className="w-full max-w-lg bg-card rounded-2xl shadow-2xl overflow-hidden border border-icon/10">
//         {children}
//       </div>
//     </div>
//   );
// }
 
// export default function Profilepage() {
//   const { user } = useSelector((state) => state.profile);
//   const [posts,       setPosts]       = useState(initialPosts);
//   const [socialLinks, setSocialLinks] = useState(initialSocialLinks);
//   const [openMenu,    setOpenMenu]    = useState(null);
 
//   /* Bio modal */
//   const [bioOpen, setBioOpen] = useState(false);
//  const [profile, setProfile] = useState({
//     name: "Loading...",
//     bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
//     avatar: "/images/person1.jpg",
//   });
//   const [tmp, setTmp] = useState(profile);
//   const fileRef = useRef(null);
 
//   /* Add Social modal */
//   const [socialOpen,    setSocialOpen]    = useState(false);
//   const [selectedKey,   setSelectedKey]   = useState(null);
//   const [socialIdInput, setSocialIdInput] = useState("");
 
//   /* Edit Social modal */
//   const [editSocialOpen, setEditSocialOpen] = useState(false);
//   const [editingLink,    setEditingLink]    = useState(null); // the link being edited
//   const [editSelectedKey,   setEditSelectedKey]   = useState(null);
//   const [editSocialIdInput, setEditSocialIdInput] = useState("");
 
//   /* Bio handlers */
//   const openBio  = () => { setTmp(profile); setBioOpen(true); };
//   const handlePhoto = (e) => {
//     const file = e.target.files?.[0];
//     if (file) setTmp((p) => ({ ...p, avatar: URL.createObjectURL(file) }));
//   };
//   const handleBioSave = () => { setProfile(tmp); setBioOpen(false); };
 
//   /* Add Social handlers */
//   const openSocial = () => { setSelectedKey(null); setSocialIdInput(""); setSocialOpen(true); };
//   const handleSocialSave = () => {
//     if (!selectedKey) return;
//     const platform = ALL_SOCIALS.find((s) => s.key === selectedKey);
//     if (!platform) return;
//     if (!socialLinks.find((s) => s.key === selectedKey)) {
//       const { Icon, bg, label, key, iconColor } = platform;
//       const WrappedIcon = () => <Icon size={28} color={iconColor || "white"} />;
//       setSocialLinks((prev) => [...prev, { key, Icon: WrappedIcon, bg, label }]);
//     }
//     setSocialOpen(false);
//   };
 
//   /* Edit Social handlers */
//   const openEditSocial = (link) => {
//     setEditingLink(link);
//     setEditSelectedKey(link.key);
//     setEditSocialIdInput("");
//     setEditSocialOpen(true);
//   };
//   const handleEditSocialSave = () => {
//     if (!editSelectedKey || !editingLink) return;
//     const platform = ALL_SOCIALS.find((s) => s.key === editSelectedKey);
//     if (!platform) return;
//     const { Icon, bg, label, key, iconColor } = platform;
//     const WrappedIcon = () => <Icon size={28} color={iconColor || "white"} />;
//     setSocialLinks((prev) =>
//       prev.map((s) => s.key === editingLink.key ? { key, Icon: WrappedIcon, bg, label } : s)
//     );
//     setEditSocialOpen(false);
//   };
//   const handleDeleteSocial = () => {
//     setSocialLinks((prev) => prev.filter((s) => s.key !== editingLink.key));
//     setEditSocialOpen(false);
//   };
 
//   const handleDelete = (id) => {
//     setPosts((prev) => prev.filter((p) => p.id !== id));
//     setOpenMenu(null);
//   };
 
//   /* Reusable icon grid */
//   const IconGrid = ({ selectedK, onSelect }) => (
//     <div className="bg-background rounded-xl p-4 border border-icon/10">
//       <p className="text-[10px] font-semibold tracking-widest uppercase text-foreground opacity-60 mb-3">Select Icon</p>
//       <div className="flex flex-wrap gap-2.5">
//         {ALL_SOCIALS.map(({ key, label, Icon, bg, iconColor }) => (
//           <button
//             key={key} title={label}
//             onClick={() => onSelect(key)}
//             style={{ background: bg }}
//             className="relative w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-all duration-200 flex-shrink-0"
//           >
//             {selectedK === key && (
//               <div className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center">
//                 <Check size={16} color="white" strokeWidth={3} />
//               </div>
//             )}
//             <Icon size={20} color={iconColor || "white"} />
//           </button>
//         ))}
//       </div>
//     </div>
//   );
 
//   const dispatch = useDispatch();
// const { socialLinks: apiSocialLinks = [] } = useSelector(
//   (state) => state.profile
// );

// useEffect(() => {
//   dispatch(getSocialLinks());
//  dispatch(getUserProfile());
// }, [dispatch]);

// console.log("API SOCIAL LINKS:", apiSocialLinks);

// useEffect(() => {
//     if (user) {
//       setProfile({
//         name: user.name || "No Name",
//         bio: user.description || user.bio || "",
//         avatar: user.Profilephoto || user.avatar || "/images/person1.jpg",
//       });
//     }
//   }, [user]);
// useEffect(() => {
//   if (apiSocialLinks?.length > 0) {
//     const mapped = apiSocialLinks.map((item) => {
//       const platform = ALL_SOCIALS.find(
//         (s) => s.key === item.type // ⚠️ API key check करो
//       );

//       if (!platform) return null;

//       const { Icon, bg, label, key, iconColor } = platform;

//       const WrappedIcon = () => (
//         <Icon size={28} color={iconColor || "white"} />
//       );

//       return {
//         key,
//         Icon: WrappedIcon,
//         bg,
//         label,
//       };
//     }).filter(Boolean);

//     setSocialLinks(mapped);
//   }
// }, [apiSocialLinks]);
//   return (
//     <main className="min-h-screen bg-background text-foreground pt-24 md:pt-28">
//       <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
 
//         {/* ── Profile Header — no card bg, just bottom border ── */}
//         <div className="pb-6 border-b border-dashed border-icon/20 relative">
//           <button onClick={openBio} className="absolute top-0 right-0 flex items-center gap-1.5 text-sm border border-[#36568D] text-icon rounded-lg px-3 py-1.5 hover:opacity-80 transition-all">
//             <TbEdit size={14} /> Edit
//           </button>

//           <div className="flex items-start gap-5">
//             <div className="relative flex-shrink-0">
//               <div className="w-28 h-32 rounded-xl overflow-hidden shadow-lg bg-[#C0E1FF]">
//                 <img 
//                   src={profile.avatar} 
//                   alt="Profile" 
//                   className="w-full h-full object-cover" 
//                 />
//               </div>
//             </div>
//             <div className="flex-1 min-w-0 pt-5">
//               <h1 className="text-xl font-bold text-icon leading-tight">
//                 {profile.name}
//               </h1>
//               <p className="text-sm text-icon opacity-80 mt-1 leading-relaxed">
//                 {profile.bio}
//               </p>
//             </div>
//           </div>
//         </div>
 
//         {/* ── Social Links — no card bg, just bottom border ── */}
//        <div className="pb-6 border-b border-dashed border-icon/20">
//           <div className="flex items-center justify-between mb-5">
//             <h2 className="text-base font-semibold text-icon">Social Links</h2>
//             <button onClick={openSocial}
//               className="flex items-center gap-1.5 text-xs border border-[#36568D] text-icon rounded-lg px-3 py-1.5 hover:opacity-80 transition-all">
//               <Plus size={14} /> Add New
//             </button>
//           </div>
//           <div className="flex items-center gap-3 flex-wrap">
//             {socialLinks.map((link) => {
//               const { Icon, bg, label } = link;
//               return (
//                 <div key={label} className="relative group">
//                   <button
//                     title={label}
//                     style={{ background: bg }}
//                     className="w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:scale-110 hover:opacity-90 transition-all duration-200"
//                   >
//                     <Icon />
//                   </button>
//                   {/* Edit pencil overlay on hover */}
//                   <button
//                     onClick={() => openEditSocial(link)}
//                     className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
//                   >
//                     <Pencil size={16} color="white" />
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
 
//         {/* ── Recent Posts — no card bg ── */}
//         <div className="pb-6">
//           <div className="flex items-center justify-between mb-5">
//             <h2 className="text-xl font-semibold text-icon">Recent Posts</h2>
//             <button className="flex items-center gap-1.5 text-xs border border-[#36568D] text-icon rounded-lg px-3 py-1.5 hover:opacity-80 transition-all">
//               <Plus size={14} /> Add New
//             </button>
//           </div>
//           <ul className="space-y-1">
//             {posts.map((post, idx) => (
//               <li key={post.id}
//                 className={`relative flex items-start justify-between gap-3 py-4 group ${idx !== posts.length - 1 ? "pb-6 border-b border-dashed border-icon/20" : ""}`}>
//                 <div className="flex-1 min-w-0">
//                   <p className="text-sm text-icon leading-snug font-medium group-hover:text-primary transition-colors cursor-pointer">{post.title}</p>
//                   <div className="flex items-center gap-1.5 mt-2">
//                     <Clock size={11} className="text-foreground opacity-50" />
//                     <span className="text-xs text-foreground opacity-50">{post.time}</span>
//                   </div>
//                 </div>
//                 <div className="relative flex-shrink-0 mt-0.5">
//                   <button onClick={() => setOpenMenu(openMenu === post.id ? null : post.id)}
//                     className="w-7 h-7 rounded-lg flex items-center justify-center text-icon opacity-50 hover:bg-icon/10 transition-all">
//                     <MoreVertical size={18} />
//                   </button>
//                   {openMenu === post.id && (
//                     <div className="absolute right-0 top-8 z-50 bg-card border border-icon/10 rounded-xl shadow-xl overflow-hidden w-36">
//                       <button className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-icon hover:bg-icon/5 transition-colors" onClick={() => setOpenMenu(null)}>View post</button>
//                       <button className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-icon hover:bg-icon/5 transition-colors" onClick={() => handleDelete(post.id)}>Delete post</button>
//                     </div>
//                   )}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
 
//       {/* ══════ Bio Edit Modal ══════ */}
//       {bioOpen && (
//         <Modal onClose={() => setBioOpen(false)}>
//           <div className="flex items-center justify-between px-6 pt-5 pb-4">
//             <h2 className="text-base font-semibold text-icon">Bio</h2>
//             <button onClick={() => setBioOpen(false)} className="text-foreground hover:text-icon transition-colors"><X size={20} /></button>
//           </div>
//           <div className="px-6 pb-6 space-y-3">
//             <div className="flex items-center gap-4 bg-background rounded-xl px-4 py-3 cursor-pointer hover:opacity-90 transition-opacity border border-icon/10"
//               onClick={() => fileRef.current?.click()}>
//               <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#C0E1FF] flex-shrink-0">
//                 <img src={tmp.avatar} alt="Preview" className="w-full h-full object-cover" />
//               </div>
//               <div>
//                 <p className="text-sm font-semibold text-icon">Upload New Photo</p>
//                 <p className="text-xs text-foreground opacity-60 mt-0.5">Click to choose a photo from your computer.</p>
//               </div>
//               <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
//             </div>
//             <div className="bg-background rounded-xl px-4 pt-3 pb-3 border border-icon/10 focus-within:border-primary/60 transition-colors">
//               <label className="block text-[10px] font-semibold tracking-widest uppercase text-foreground opacity-60 mb-1">Enter Your Name</label>
//               <input type="text" value={tmp.name} onChange={(e) => setTmp((p) => ({ ...p, name: e.target.value }))}
//                 className="w-full bg-transparent text-icon text-sm outline-none" placeholder="Your name" />
//             </div>
//             <div className="bg-background rounded-xl px-4 pt-3 pb-3 border border-icon/10 focus-within:border-primary/60 transition-colors">
//               <label className="block text-[10px] font-semibold tracking-widest uppercase text-foreground opacity-60 mb-1">Describe Your Self</label>
//               <textarea rows={4} value={tmp.bio} onChange={(e) => setTmp((p) => ({ ...p, bio: e.target.value }))}
//                 className="w-full bg-transparent text-icon text-sm outline-none resize-none leading-relaxed" placeholder="Write something about yourself..." />
//             </div>  
//             <div className="pt-1">
//               <button onClick={handleBioSave}
//                 className="bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-3xl px-9 py-2.5 hover:opacity-90 active:scale-95 transition-all">
//                 SAVE
//               </button>
//             </div>
//           </div>
//         </Modal>
//       )}
 
//       {/* ══════ Add Social Modal ══════ */}
//       {socialOpen && (
//         <Modal onClose={() => setSocialOpen(false)}>
//           <div className="flex items-center justify-between px-6 pt-5 pb-4">
//             <h2 className="text-base font-semibold text-icon">Add Social Link</h2>
//             <button onClick={() => setSocialOpen(false)} className="text-foreground hover:text-icon transition-colors"><X size={20} /></button>
//           </div>
//           <div className="px-6 pb-6 space-y-4">
//             <IconGrid selectedK={selectedKey} onSelect={setSelectedKey} />
//             <div className="bg-background rounded-xl px-4 pt-3 pb-3 border border-icon/10 focus-within:border-primary/60 transition-colors">
//               <label className="block text-[10px] font-semibold tracking-widest uppercase text-foreground opacity-60 mb-1">Enter Your ID</label>
//               <input type="text" value={socialIdInput} onChange={(e) => setSocialIdInput(e.target.value)}
//                 className="w-full bg-transparent text-icon text-sm outline-none placeholder-foreground/40" placeholder="Type here..." />
//             </div>
//             <div>
//               <button onClick={handleSocialSave} disabled={!selectedKey}
//                 className="bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-3xl px-9 py-2.5 hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed">
//                 SAVE
//               </button>
//             </div>
//           </div>
//         </Modal>
//       )}
 
//       {/* ══════ Edit Social Modal ══════ */}
//       {editSocialOpen && (
//         <Modal onClose={() => setEditSocialOpen(false)}>
//           <div className="flex items-center justify-between px-6 pt-5 pb-4">
//             <h2 className="text-base font-semibold text-icon">Edit Social Link</h2>
//             <button onClick={() => setEditSocialOpen(false)} className="text-foreground hover:text-icon transition-colors"><X size={20} /></button>
//           </div>
//           <div className="px-6 pb-6 space-y-4">
//             <IconGrid selectedK={editSelectedKey} onSelect={setEditSelectedKey} />
//             <div className="bg-background rounded-xl px-4 pt-3 pb-3 border border-icon/10 focus-within:border-primary/60 transition-colors">
//               <label className="block text-[10px] font-semibold tracking-widest uppercase text-foreground opacity-60 mb-1">Enter Your ID</label>
//               <input type="text" value={editSocialIdInput} onChange={(e) => setEditSocialIdInput(e.target.value)}
//                 className="w-full bg-transparent text-icon text-sm outline-none placeholder-foreground/40" placeholder="Type here..." />
//             </div>
//             <div className="flex items-center gap-3">
//               <button onClick={handleEditSocialSave} disabled={!editSelectedKey}
//                 className="bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-3xl px-9 py-2.5 hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed">
//                 SAVE
//               </button>
//               <button onClick={handleDeleteSocial}
//                 className="text-red-400 border border-red-400/30 text-xs font-bold tracking-widest uppercase rounded-3xl px-7 py-2.5 hover:bg-red-500/10 transition-all">
//                 REMOVE
//               </button>
//             </div>
//           </div>
//         </Modal>
//       )}
//     </main>
//   );
// }

"use client";
import React, { useState, useRef, useEffect } from "react";
import { Plus, MoreVertical, X, Clock, Check, Pencil } from "lucide-react";
import { TbEdit } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedinIn, FaFacebookF, FaRedditAlien, FaTwitch, FaPinterestP, FaDribbble, FaBehance, FaDiscord, FaTumblr } from "react-icons/fa";
import { FaInstagram, FaXTwitter, FaTelegram, FaWhatsapp, FaYoutube, FaTiktok, FaSnapchat } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { getSocialLinks, getUserProfile, getUserPosts, deletePost  } from "@/redux/slices/ProfileSlice";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
 
const EmailIcon     = () => <MdOutlineMail size={28} color="white" />;
const LinkedInIcon  = () => <FaLinkedinIn  size={28} color="white" />;
const InstagramIcon = () => <FaInstagram   size={28} color="white" />;
const XIcon         = () => <FaXTwitter    size={28} color="white" />;
 
const ALL_SOCIALS = [
  { key: "email",     label: "Email",     Icon: MdOutlineMail, bg: "#FD7306" },
  { key: "linkedin",  label: "LinkedIn",  Icon: FaLinkedinIn,  bg: "#0D67AD" },
  { key: "instagram", label: "Instagram", Icon: FaInstagram,   bg: "linear-gradient(135deg,#5C55CA,#9F39AB,#E34D6A,#FBB865)" },
  { key: "twitter",   label: "X/Twitter", Icon: FaXTwitter,    bg: "#000000" },
  { key: "facebook",  label: "Facebook",  Icon: FaFacebookF,   bg: "#1877F2" },
  { key: "whatsapp",  label: "WhatsApp",  Icon: FaWhatsapp,    bg: "#25D366" },
  { key: "telegram",  label: "Telegram",  Icon: FaTelegram,    bg: "#229ED9" },
  { key: "reddit",    label: "Reddit",    Icon: FaRedditAlien, bg: "#FF4500" },
  { key: "snapchat",  label: "Snapchat",  Icon: FaSnapchat,    bg: "#FFFC00", iconColor: "#000" },
  { key: "twitch",    label: "Twitch",    Icon: FaTwitch,      bg: "#9146FF" },
  { key: "youtube",   label: "YouTube",   Icon: FaYoutube,     bg: "#FF0000" },
  { key: "tiktok",    label: "TikTok",    Icon: FaTiktok,      bg: "#010101" },
  { key: "pinterest", label: "Pinterest", Icon: FaPinterestP,  bg: "#E60023" },
  { key: "dribbble",  label: "Dribbble",  Icon: FaDribbble,    bg: "#EA4C89" },
  { key: "behance",   label: "Behance",   Icon: FaBehance,     bg: "#1769FF" },
  { key: "discord",   label: "Discord",   Icon: FaDiscord,     bg: "#5865F2" },
  { key: "tumblr",    label: "Tumblr",    Icon: FaTumblr,      bg: "#35465C" },
];
 
const initialSocialLinks = [
  { key: "email",     Icon: EmailIcon,     bg: "#FD7306",                                                   label: "Email"     },
  { key: "linkedin",  Icon: LinkedInIcon,  bg: "#0D67AD",                                                   label: "LinkedIn"  },
  { key: "instagram", Icon: InstagramIcon, bg: "linear-gradient(135deg,#5C55CA,#9F39AB,#E34D6A,#FBB865)", label: "Instagram" },
  { key: "twitter",   Icon: XIcon,         bg: "#000000",                                                   label: "X/Twitter" },
];

/* Helper function to format response date */
const formatPostDate = (dateString) => {
  if (!dateString) return "Just now";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
 
/* Shared Modal wrapper */
function Modal({ onClose, children }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="w-full max-w-lg bg-card rounded-2xl shadow-2xl overflow-hidden border border-icon/10">
        {children}
      </div>
    </div>
  );
}
 
export default function Profilepage() {
  const dispatch = useDispatch();
const router = useRouter();
  // Redux state hooks
  const { user, posts: apiPosts = [] } = useSelector((state) => state.profile);

  // Component local UI managing state wrappers
  const [posts, setPosts] = useState([]);   
  const [socialLinks, setSocialLinks] = useState(initialSocialLinks);
  const [openMenu, setOpenMenu] = useState(null);
 
  /* Bio modal */
  const [bioOpen, setBioOpen] = useState(false);
  const [profile, setProfile] = useState({
    name: "Loading...",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    avatar: "/images/person1.jpg",
  });
  const [tmp, setTmp] = useState(profile);
  const fileRef = useRef(null);
 
  /* Add Social modal */
  const [socialOpen,    setSocialOpen]    = useState(false);
  const [selectedKey,   setSelectedKey]   = useState(null);
  const [socialIdInput, setSocialIdInput] = useState("");
 
  /* Edit Social modal */
  const [editSocialOpen, setEditSocialOpen] = useState(false);
  const [editingLink,    setEditingLink]    = useState(null); 
  const [editSelectedKey,   setEditSelectedKey]   = useState(null);
  const [editSocialIdInput, setEditSocialIdInput] = useState("");
 
  /* Bio handlers */
  const openBio  = () => { setTmp(profile); setBioOpen(true); };
  const handlePhoto = (e) => {
    const file = e.target.files?.[0];
    if (file) setTmp((p) => ({ ...p, avatar: URL.createObjectURL(file) }));
  };
  const handleBioSave = () => { setProfile(tmp); setBioOpen(false); };
 
  /* Add Social handlers */
  const openSocial = () => { setSelectedKey(null); setSocialIdInput(""); setSocialOpen(true); };
  const handleSocialSave = () => {
    if (!selectedKey) return;
    const platform = ALL_SOCIALS.find((s) => s.key === selectedKey);
    if (!platform) return;
    if (!socialLinks.find((s) => s.key === selectedKey)) {
      const { Icon, bg, label, key, iconColor } = platform;
      const WrappedIcon = () => <Icon size={28} color={iconColor || "white"} />;
      setSocialLinks((prev) => [...prev, { key, Icon: WrappedIcon, bg, label }]);
    }
    setSocialOpen(false);
  };
 
  /* Edit Social handlers */
  const openEditSocial = (link) => {
    setEditingLink(link);
    setEditSelectedKey(link.key);
    setEditSocialIdInput("");
    setEditSocialOpen(true);
  };
  const handleEditSocialSave = () => {
    if (!editSelectedKey || !editingLink) return;
    const platform = ALL_SOCIALS.find((s) => s.key === editSelectedKey);
    if (!platform) return;
    const { Icon, bg, label, key, iconColor } = platform;
    const WrappedIcon = () => <Icon size={28} color={iconColor || "white"} />;
    setSocialLinks((prev) =>
      prev.map((s) => s.key === editingLink.key ? { key, Icon: WrappedIcon, bg, label } : s)
    );
    setEditSocialOpen(false);
  };
  const handleDeleteSocial = () => {
    setSocialLinks((prev) => prev.filter((s) => s.key !== editingLink.key));
    setEditSocialOpen(false);
  };
 
 // ✅ NAYA - API call karega, toast dikhayega
const handleDelete = async (id) => {
  setOpenMenu(null);

  const result = await dispatch(deletePost(id));

  if (deletePost.fulfilled.match(result)) {
    toast.success(result.payload?.message || "Post deleted successfully", {
      position: "top-right",
    });
  } else {
    toast.error("Failed to delete post. Please try again.", {
      position: "top-right",
    });
  }
};
 
  /* Reusable icon grid */
  const IconGrid = ({ selectedK, onSelect }) => (
    <div className="bg-background rounded-xl p-4 border border-icon/10">
      <p className="text-[10px] font-semibold tracking-widest uppercase text-foreground opacity-60 mb-3">Select Icon</p>
      <div className="flex flex-wrap gap-2.5">
        {ALL_SOCIALS.map(({ key, label, Icon, bg, iconColor }) => (
          <button
            key={key} title={label}
            onClick={() => onSelect(key)}
            style={{ background: bg }}
            className="relative w-11 h-11 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-all duration-200 flex-shrink-0"
          >
            {selectedK === key && (
              <div className="absolute inset-0 rounded-full bg-black/40 flex items-center justify-center">
                <Check size={16} color="white" strokeWidth={3} />
              </div>
            )}
            <Icon size={20} color={iconColor || "white"} />
          </button>
        ))}
      </div>
    </div>
  );
 
  const { socialLinks: apiSocialLinks = [] } = useSelector(
    (state) => state.profile
  );

  useEffect(() => {
    dispatch(getSocialLinks());
    dispatch(getUserProfile());
    dispatch(getUserPosts()); // Fetch dynamic parameters via backend
  }, [dispatch]);

  console.log("API SOCIAL LINKS:", apiSocialLinks);

  useEffect(() => {
    if (user) {
      setProfile({
        name: user.name || "No Name",
        bio: user.description || user.bio || "",
        avatar: user.Profilephoto || user.avatar || "/images/person1.jpg",
      });
    }
  }, [user]);

  // Sync state cleanly when dynamic API posts are captured
  useEffect(() => {
    if (apiPosts) {
      setPosts(apiPosts);
    }
  }, [apiPosts]);

  useEffect(() => {
    if (apiSocialLinks?.length > 0) {
      const mapped = apiSocialLinks.map((item) => {
        const platform = ALL_SOCIALS.find(
          (s) => s.key === item.type 
        );

        if (!platform) return null;

        const { Icon, bg, label, key, iconColor } = platform;

        const WrappedIcon = () => (
          <Icon size={28} color={iconColor || "white"} />
        );

        return {
          key,
          Icon: WrappedIcon,
          bg,
          label,
        };
      }).filter(Boolean);

      setSocialLinks(mapped);
    }
  }, [apiSocialLinks]);

  return (
    <main className="min-h-screen bg-background text-foreground pt-24 md:pt-28">
      <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
 
        {/* Profile Header */}
        <div className="pb-6 border-b border-dashed border-icon/20 relative">
          <button onClick={openBio} className="absolute top-0 right-0 flex items-center gap-1.5 text-sm border border-[#36568D] text-icon rounded-lg px-3 py-1.5 hover:opacity-80 transition-all">
            <TbEdit size={14} /> Edit
          </button>

          <div className="flex items-start gap-5">
            <div className="relative flex-shrink-0">
              <div className="w-28 h-32 rounded-xl overflow-hidden shadow-lg bg-[#C0E1FF]">
                <img 
                  src={profile.avatar} 
                  alt="Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
            <div className="flex-1 min-w-0 pt-5">
              <h1 className="text-xl font-bold text-icon leading-tight">
                {profile.name}
              </h1>
              <p className="text-sm text-icon opacity-80 mt-1 leading-relaxed">
                {profile.bio}
              </p>
            </div>
          </div>
        </div>
 
        {/* Social Links */}
       <div className="pb-6 border-b border-dashed border-icon/20">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-semibold text-icon">Social Links</h2>
            <button onClick={openSocial}
              className="flex items-center gap-1.5 text-xs border border-[#36568D] text-icon rounded-lg px-3 py-1.5 hover:opacity-80 transition-all">
              <Plus size={14} /> Add New
            </button>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {socialLinks.map((link) => {
              const { Icon, bg, label } = link;
              return (
                <div key={label} className="relative group">
                  <button
                    title={label}
                    style={{ background: bg }}
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-md hover:scale-110 hover:opacity-90 transition-all duration-200"
                  >
                    <Icon />
                  </button>
                  <button
                    onClick={() => openEditSocial(link)}
                    className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    <Pencil size={16} color="white" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
 
        {/* ── Recent Posts (Now Dynamic) ── */}
        <div className="pb-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold text-icon">Recent Posts</h2>
           <button
  onClick={() => router.push("/add-new-post")}
  className="flex items-center gap-1.5 text-xs border border-[#36568D] text-icon rounded-lg px-3 py-1.5 hover:opacity-80 transition-all"
>
  <Plus size={14} /> Add New
</button>
          </div>

          {posts.length === 0 ? (
            <p className="text-sm text-icon opacity-60 italic">No posts submitted yet.</p>
          ) : (
            <ul className="space-y-1">
              {posts.map((post, idx) => (
                <li key={post._id}
                  className={`relative flex items-start justify-between gap-3 py-4 group ${idx !== posts.length - 1 ? "pb-6 border-b border-dashed border-icon/20" : ""}`}>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-icon leading-snug font-medium group-hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <Clock size={11} className="text-foreground opacity-50" />
                      <span className="text-xs text-foreground opacity-50">
                        {formatPostDate(post.createdAt)}
                      </span>
                    </div>
                  </div>
                  <div className="relative flex-shrink-0 mt-0.5">
                    <button onClick={() => setOpenMenu(openMenu === post._id ? null : post._id)}
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-icon opacity-50 hover:bg-icon/10 transition-all">
                      <MoreVertical size={18} />
                    </button>
                    {openMenu === post._id && (
                      <div className="absolute right-0 top-8 z-50 bg-card border border-icon/10 rounded-xl shadow-xl overflow-hidden w-36">
                        <button className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-icon hover:bg-icon/5 transition-colors" onClick={() => setOpenMenu(null)}>View post</button>
                        <button className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-icon hover:bg-icon/5 transition-colors" onClick={() => handleDelete(post._id)}>Delete post</button>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
 
      {/* ══════ Bio Edit Modal ══════ */}
      {bioOpen && (
        <Modal onClose={() => setBioOpen(false)}>
          <div className="flex items-center justify-between px-6 pt-5 pb-4">
            <h2 className="text-base font-semibold text-icon">Bio</h2>
            <button onClick={() => setBioOpen(false)} className="text-foreground hover:text-icon transition-colors"><X size={20} /></button>
          </div>
          <div className="px-6 pb-6 space-y-3">
            <div className="flex items-center gap-4 bg-background rounded-xl px-4 py-3 cursor-pointer hover:opacity-90 transition-opacity border border-icon/10"
              onClick={() => fileRef.current?.click()}>
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#C0E1FF] flex-shrink-0">
                <img src={tmp.avatar} alt="Preview" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-icon">Upload New Photo</p>
                <p className="text-xs text-foreground opacity-60 mt-0.5">Click to choose a photo from your computer.</p>
              </div>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handlePhoto} />
            </div>
            <div className="bg-background rounded-xl px-4 pt-3 pb-3 border border-icon/10 focus-within:border-primary/60 transition-colors">
              <label className="block text-[10px] font-semibold tracking-widest uppercase text-foreground opacity-60 mb-1">Enter Your Name</label>
              <input type="text" value={tmp.name} onChange={(e) => setTmp((p) => ({ ...p, name: e.target.value }))}
                className="w-full bg-transparent text-icon text-sm outline-none" placeholder="Your name" />
            </div>
            <div className="bg-background rounded-xl px-4 pt-3 pb-3 border border-icon/10 focus-within:border-primary/60 transition-colors">
              <label className="block text-[10px] font-semibold tracking-widest uppercase text-foreground opacity-60 mb-1">Describe Your Self</label>
              <textarea rows={4} value={tmp.bio} onChange={(e) => setTmp((p) => ({ ...p, bio: e.target.value }))}
                className="w-full bg-transparent text-icon text-sm outline-none resize-none leading-relaxed" placeholder="Write something about yourself..." />
            </div>  
            <div className="pt-1">
              <button onClick={handleBioSave}
                className="bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-3xl px-9 py-2.5 hover:opacity-90 active:scale-95 transition-all">
                SAVE
              </button>
            </div>
          </div>
        </Modal>
      )}
 
      {/* ══════ Add Social Modal ══════ */}
      {socialOpen && (
        <Modal onClose={() => setSocialOpen(false)}>
          <div className="flex items-center justify-between px-6 pt-5 pb-4">
            <h2 className="text-base font-semibold text-icon">Add Social Link</h2>
            <button onClick={() => setSocialOpen(false)} className="text-foreground hover:text-icon transition-colors"><X size={20} /></button>
          </div>
          <div className="px-6 pb-6 space-y-4">
            <IconGrid selectedK={selectedKey} onSelect={setSelectedKey} />
            <div className="bg-background rounded-xl px-4 pt-3 pb-3 border border-icon/10 focus-within:border-primary/60 transition-colors">
              <label className="block text-[10px] font-semibold tracking-widest uppercase text-foreground opacity-60 mb-1">Enter Your ID</label>
              <input type="text" value={socialIdInput} onChange={(e) => setSocialIdInput(e.target.value)}
                className="w-full bg-transparent text-icon text-sm outline-none placeholder-foreground/40" placeholder="Type here..." />
            </div>
            <div>
              <button onClick={handleSocialSave} disabled={!selectedKey}
                className="bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-3xl px-9 py-2.5 hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed">
                SAVE
              </button>
            </div>
          </div>
        </Modal>
      )}
 
      {/* ══════ Edit Social Modal ══════ */}
      {editSocialOpen && (
        <Modal onClose={() => setEditSocialOpen(false)}>
          <div className="flex items-center justify-between px-6 pt-5 pb-4">
            <h2 className="text-base font-semibold text-icon">Edit Social Link</h2>
            <button onClick={() => setEditSocialOpen(false)} className="text-foreground hover:text-icon transition-colors"><X size={20} /></button>
          </div>
          <div className="px-6 pb-6 space-y-4">
            <IconGrid selectedK={editSelectedKey} onSelect={setEditSelectedKey} />
            <div className="bg-background rounded-xl px-4 pt-3 pb-3 border border-icon/10 focus-within:border-primary/60 transition-colors">
              <label className="block text-[10px] font-semibold tracking-widest uppercase text-foreground opacity-60 mb-1">Enter Your ID</label>
              <input type="text" value={editSocialIdInput} onChange={(e) => setEditSocialIdInput(e.target.value)}
                className="w-full bg-transparent text-icon text-sm outline-none placeholder-foreground/40" placeholder="Type here..." />
            </div>
            <div className="flex items-center gap-3">
              <button onClick={handleEditSocialSave} disabled={!editSelectedKey}
                className="bg-primary text-white text-xs font-bold tracking-widest uppercase rounded-3xl px-9 py-2.5 hover:opacity-90 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed">
                SAVE
              </button>
              <button onClick={handleDeleteSocial}
                className="text-red-400 border border-red-400/30 text-xs font-bold tracking-widest uppercase rounded-3xl px-7 py-2.5 hover:bg-red-500/10 transition-all">
                REMOVE
              </button>
            </div>
          </div>
        </Modal>
      )}
    </main>
  );
}