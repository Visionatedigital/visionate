'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem : React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-xl font-medium">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          <Plus className="w-6 h-6 " />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-neutral-600">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: "What does Visionate Digital specialize in?",
      answer: "Visionate Digital specializes in AI-powered software solutions that enhance business efficiency, automate processes, and provide data-driven insights. Our products range from AI-driven analytics to intelligent automation tools designed to help businesses scale."
    },
    {
      question: "How can AI improve my business operations?",
      answer: "AI can optimize workflows, reduce manual tasks, enhance customer interactions, and provide predictive insights for better decision-making. Our AI solutions are tailored to various industries, ensuring maximum efficiency and competitive advantage."
    },
    {
      question: "Is AI difficult to integrate into my existing systems?",
      answer: "No, our AI solutions are designed for seamless integration. Whether you need automation, predictive analytics, or AI-enhanced customer support, our team ensures a smooth implementation process with minimal disruptions to your operations."
    },
    {
      question: "Is AI secure, and how does Visionate Digital handle data privacy?",
      answer: "Security and privacy are top priorities for us. Our AI systems comply with industry standards and regulations, utilizing advanced encryption and security protocols to protect your data. We also offer customizable privacy controls to fit your specific needs."
    },
    {
      question: "Can AI replace human jobs in my company?",
      answer: "AI is meant to enhance productivity, not replace human workers. Our solutions automate repetitive tasks, allowing employees to focus on strategic and creative work, improving overall business performance and job satisfaction."
    },
    {
      question: "What industries benefit most from AI solutions?",
      answer: "AI is versatile and can be applied across multiple industries, including finance, healthcare, retail, logistics, and customer service. Our AI-powered solutions are tailored to meet industry-specific challenges, driving efficiency and innovation."
    }
  ];

  return (
    <div className="mx-auto 2xl:w-4/5 md:px-16 px-6 py-16 pb-32">
      <h1 className="text-4xl font-bold mb-12">Frequently Asked Questions</h1>
      <div className="space-y-2">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;