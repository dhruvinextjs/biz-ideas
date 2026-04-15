"use client";

import React, { useState } from 'react';
import { Plus, Minus, ChevronRight } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Why should I use this instead of brainstorming myself?",
      answer: "Because it saves hours. You can go from idea → name → domain → rough cost in minutes instead of days."
    },
    {
      question: "Are the generated names actually usable?",
      answer: "Yes, we check for basic availability and ensure they are brandable and relevant to your industry."
    },
    {
      question: "Can I instantly check domain availability?",
      answer: "Absolutely. We integrate with major domain registrars to give you real-time availability status."
    },
    {
      question: "Does it support modern startup domains like .io or .ai?",
      answer: "Yes, it supports all popular TLDs including .com, .io, .ai, .co, and many others."
    },
    {
      question: "How accurate is the app cost calculator?",
      answer: "It provides a realistic estimate based on industry standards for development, design, and infrastructure."
    },
    {
      question: "Can I use this before validating my idea?",
      answer: "Yes, it's a great tool for early-stage exploration to help you visualize the potential of your idea."
    },
    {
      question: "Is this useful if I'm a solo founder?",
      answer: "Perfectly so. It acts as a digital co-founder to help you iterate quickly on your own."
    },
    {
      question: "Do I need technical knowledge to use these tools?",
      answer: "No technical skills are required. The interface is designed for entrepreneurs of all backgrounds."
    },
    {
      question: "Can I use this for side projects and MVPs?",
      answer: "Yes, it's optimized for rapid prototyping and getting your initial concepts off the ground."
    },
    {
      question: "What makes this different from other tools?",
      answer: "Our focus is on the complete journey from a raw idea to a structured business concept in one place."
    }
  ];

  return (
    <section className="w-full py-16 px-4 bg-background transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <h2 className="text-[#FB8122] text-2xl md:text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-dotted border-foreground/15 last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full py-6 flex items-center justify-between text-left group transition-all"
              >
                <span className="text-md md:text-lg font-medium text-foreground/90 group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <div className="shrink-0 ml-4 p-1 rounded-full border border-foreground/10 text-foreground/60">
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              {/* Accordion Content */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 pb-6' : 'max-h-0'
                }`}
              >
                <p className="text-sm md:text-base text-[#4C4C4C] dark:text-[#9CB3C9] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 px-6 py-2 border border-foreground/10 rounded-md text-sm font-medium hover:bg-foreground/5 transition-colors text-foreground/70">
            View more <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}