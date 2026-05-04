// "use client";
 
// import React, { useState } from 'react';
// import { Bell } from 'lucide-react';
 
// const allNotifications = [
//   {
//     id: 1,
//     title: "Lorem Ipsum is simply dummy",
//     desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     time: "2 hours ago",
//   },
//   {
//     id: 2,
//     title: "What is Lorem Ipsum",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     time: "5 hours ago",
//   },
//   {
//     id: 3,
//     title: "Lorem Ipsum is simply dummy",
//     desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     time: "Yesterday",
//   },
//   {
//     id: 4,
//     title: "What is Lorem Ipsum",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     time: "Friday",
//   },
//   {
//     id: 5,
//     title: "Lorem Ipsum is simply dummy",
//     desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     time: "2 days ago",
//   },
//   {
//     id: 6,
//     title: "What is Lorem Ipsum",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     time: "2 days ago",
//   },
//   {
//     id: 7,
//     title: "Lorem Ipsum is simply dummy",
//     desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     time: "3 days ago",
//   },
//   {
//     id: 8,
//     title: "What is Lorem Ipsum",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     time: "3 days ago",
//   },
//   {
//     id: 9,
//     title: "Lorem Ipsum is simply dummy",
//     desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//     time: "5 days ago",
//   },
//   {
//     id: 10,
//     title: "What is Lorem Ipsum",
//     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     time: "5 days ago",
//   },
// ];
 
// const INITIAL_COUNT = 6;
 
// export default function Notification() {
//   const [visible, setVisible] = useState(INITIAL_COUNT);
 
//   const loadMore = () => setVisible((prev) => prev + 4);
 
//   return (
//     <main className="min-h-screen bg-background pt-32 md:pt-36 pb-28 px-4">
//       <div className="max-w-5xl mx-auto">
 
//         {/* Header */}
//         <div className="text-center mb-10">
//           <h1 className="text-3xl md:text-4xl font-bold text-icon">
//             Notifications
//           </h1>
//           <p className="text-sm text-foreground mt-2">
//             Stay updated with the latest alerts and updates.
//           </p>
//         </div>
 
//         {/* Notification List */}
//         <div className="flex flex-col gap-4">
//           {allNotifications.slice(0, visible).map((item) => (
//             <div
//               key={item.id}
//               className="group flex items-start gap-4 bg-card dark:hover:bg-[#111d55]
//                          border border-white/5 hover:border-white/10
//                          rounded-xl px-4 py-4 transition-all duration-200 cursor-pointer"
//             >
//               {/* Bell Icon */}
//               <div className="w-9 h-9 rounded-xl bg-background border border-white/10
//                               flex items-center justify-center flex-shrink-0 mt-0.5">
//                 <Bell size={18} className="text-icon" />
//               </div>
 
//               {/* Content */}
//               <div className="flex-1 min-w-0">
//                 <p className="text-sm font-semibold text-icon truncate">
//                   {item.title}
//                 </p>
//                 <p className="text-xs text-icon/80 mt-1 leading-relaxed line-clamp-2">
//                   {item.desc}
//                 </p>
//               </div>
 
//               {/* Time */}
//               <span className="text-[10px] text-icon/60 flex-shrink-0 mt-1 whitespace-nowrap">
//                 {item.time}
//               </span>
//             </div>
//           ))}
//         </div>
 
//         {/* Load More */}
//         {visible < allNotifications.length && (
//           <div className="flex justify-center mt-12">
//             <button
//               onClick={loadMore}
//               className="px-8 py-4 rounded-full border dark:border-[#46529A]
//                          text-icon text-xs font-semibold tracking-widest uppercase
//                          dark:hover:bg-[#111d55] dark:hover:border-white/15 transition-all duration-200"
//             >
//               LOAD MORE
//             </button>
//           </div>
//         )}
 
//       </div>
//     </main>
//   );
// }


"use client";

import React, { useState } from 'react';
import { Bell } from 'lucide-react';
import Image from 'next/image';

// Testing ke liye is array ko empty [] kar ke dekhein
const allNotifications = [
  {
    id: 1,
    title: "Lorem Ipsum is simply dummy",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    time: "2 hours ago",
  },
  {
    id: 2,
    title: "What is Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    time: "5 hours ago",
  },
  {
    id: 3,
    title: "Lorem Ipsum is simply dummy",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    time: "Yesterday",
  },
  {
    id: 4,
    title: "What is Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    time: "Friday",
  },
  {
    id: 5,
    title: "Lorem Ipsum is simply dummy",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    time: "2 days ago",
  },
  {
    id: 6,
    title: "What is Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    time: "2 days ago",
  },
  {
    id: 7,
    title: "Lorem Ipsum is simply dummy",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    time: "3 days ago",
  },
  {
    id: 8,
    title: "What is Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    time: "3 days ago",
  },
  {
    id: 9,
    title: "Lorem Ipsum is simply dummy",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    time: "5 days ago",
  },
  {
    id: 10,
    title: "What is Lorem Ipsum",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    time: "5 days ago",
  },
];

const INITIAL_COUNT = 6;

export default function Notification() {
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const hasNotifications = allNotifications.length > 0;

  const loadMore = () => setVisible((prev) => prev + 4);

  return (
    <main className="min-h-screen bg-background pt-32 md:pt-36 pb-28 px-4 font-sans transition-colors duration-300">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-icon">
            Notifications
          </h1>
          <p className="text-sm text-foreground mt-2 opacity-80">
            {hasNotifications 
              ? "Stay updated with the latest alerts and updates." 
              : "Your notification center is quiet for now."}
          </p>
        </div>

        {hasNotifications ? (
          <>
            {/* Notification List */}
            <div className="flex flex-col gap-4">
              {allNotifications.slice(0, visible).map((item) => (
                <div
                  key={item.id}
                  className="group flex items-start gap-4 bg-card dark:hover:bg-[#111d55]
                           border border-white/5 hover:border-white/10
                           rounded-xl px-4 py-4 transition-all duration-200 cursor-pointer"
                >
                  {/* Bell Icon */}
                  <div className="w-9 h-9 rounded-xl bg-background border border-white/10
                                flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bell size={18} className="text-icon" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-icon truncate">
                      {item.title}
                    </p>
                    <p className="text-xs text-icon/80 mt-1 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  {/* Time */}
                  <span className="text-[10px] text-icon/60 flex-shrink-0 mt-1 whitespace-nowrap">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visible < allNotifications.length && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={loadMore}
                  className="px-8 py-4 rounded-full border dark:border-[#46529A]
                             text-icon text-xs font-semibold tracking-widest uppercase
                             dark:hover:bg-[#111d55] dark:hover:border-white/15 transition-all duration-200"
                >
                  LOAD MORE
                </button>
              </div>
            )}
          </>
        ) : (
          /* --- NO DATA / EMPTY STATE --- */
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center min-h-[450px] bg-card rounded-2xl border border-dashed border-gray-300 dark:border-white/10">
            <div className="relative w-52 h-52 mb-6">
              {/* Light mode image */}
              <Image
                src="/images/notification-empty-light.png"
                alt="No notifications"
                fill
                className="object-contain dark:hidden"
              />
              {/* Dark mode image */}
              <Image
                src="/images/notification-empty-dark.png"
                alt="No notifications"
                fill
                className="object-contain hidden dark:block"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              No Notifications
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mx-auto text-sm leading-relaxed">
             You’ll see updates, activity, and alerts here once you
start exploring.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}