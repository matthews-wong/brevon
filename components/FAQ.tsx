'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-xl bg-white border border-gray-200 overflow-hidden transition-all hover:border-blue-200 hover:shadow-lg"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-gray-50"
          >
            <span className="text-base sm:text-lg font-semibold text-gray-900 pr-8">
              {item.question}
            </span>
            <ChevronDown
              className={`h-5 w-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
