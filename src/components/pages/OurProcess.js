"use client"
import {
  Rocket,
  Search,
  Settings,
  Code,
} from "lucide-react";
import { LuCodeXml } from "react-icons/lu";

function ProcessSection() {
  const processes = [
    {
      step: "1",
      title: "Idea",
      desc: "Brainstorming and validating your core concept.",
      icon: <Search size={25} className="text-icon" />,
    },
    {
      step: "2",
      title: "Planning",
      desc: "Defining features, tech stack, and roadmap.",
      icon: <Settings size={25} className="text-icon" />,
    },
    {
      step: "3",
      title: "Development",
      desc: "Building your product with agile methodology.",
      icon: <LuCodeXml size={25} className="text-icon" />,
    },
    {
      step: "4",
      title: "Launch",
      desc: "Deploying to production and scaling.",
      icon: <Rocket size={25} className="text-icon" />,
    },
  ];

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto relative z-10 border-t border-gray-200 dark:border-white/5">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-icon mb-3">
          Our Process
        </h2>
        <p className="text-icon text-xs md:text-base opacity-90">
          A structured approach to building and launching successful startups.
        </p>
      </div>

      <div className="relative">
        {/* Connecting Line (Desktop Only) */}
        <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-gray-300 dark:bg-white/20 border-dashed border-t border-gray-300 dark:border-white/20 z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 relative z-10">
          {processes.map((process, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon Circle */}
              <div className="w-18 h-18 rounded-full bg-card border-[3px] border-[#0B6CFD] flex items-center justify-center mb-5 relative">
                <div className="w-14 h-14 bg-card rounded-full flex items-center justify-center">
                  {process.icon}
                </div>
              </div>
              
              {/* Text */}
              <h3 className="text-lg font-bold text-icon mb-2">
                {process.step}. {process.title}
              </h3>
              <p className="text-sm text-icon max-w-[200px] opacity-80">
                {process.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default ProcessSection