"use client";

import React, { useState, useEffect } from 'react';
import { Plus, Minus, ChevronRight } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { getFaqs } from '@/redux/slices/CmsSlice';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const dispatch = useDispatch();
  const { faqs, loading } = useSelector((state) => state.cms);

  useEffect(() => {
    dispatch(getFaqs());
  }, [dispatch]);

  return (
    <section className="w-full py-3 px-4 bg-background transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        {/* Section Heading */}
        <h2 className="text-[#FB8122] text-2xl font-bold text-center mb-2">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="flex flex-col">
          {loading ? (
            <p className="text-sm text-foreground/50 italic text-center py-6">Loading...</p>
          ) : faqs.length === 0 ? (
            <p className="text-sm text-foreground/50 italic text-center py-6">No FAQs available.</p>
          ) : (
            faqs.map((faq, index) => (
              <div
                key={faq._id || index}
                className="border-b border-dotted border-foreground/15 last:border-0"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full py-4 flex items-center justify-between text-left group transition-all"
                >
                  <span className="text-md md:text-lg font-normal text-icon group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <div className="shrink-0 ml-4 p-1 rounded-full border border-[#4C4C4C] dark:border-[#9CB3C9] text-icon">
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
            ))
          )}
        </div>

        {/* View More Button */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 px-6 py-2 border border-[#BBC2C8] dark:border-[#4A5E71] text-sm font-normal hover:bg-foreground/5 transition-colors text-[#4C4C4C] dark:text-[#9CB3C9]">
            View more <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
