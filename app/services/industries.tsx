'use client'

import React from "react";
import { motion } from "framer-motion";

const Industries = () => {
  const industries = [
    {
      title: "Education",
      description: "Transforming learning experiences with AI-powered personalized tutoring, adaptive learning systems, and intelligent content delivery.",
      solutions: "AI Tutors, Learning Analytics, Smart Content, Performance Tracking",
      icon: "🎓",
      color: "bg-blue-100"
    },
    {
      title: "Agriculture",
      description: "Revolutionizing farming with AI-driven precision agriculture, crop monitoring, and resource optimization for sustainable food production.",
      solutions: "Crop Monitoring, Yield Prediction, Resource Management, Pest Detection",
      icon: "🌾",
      color: "bg-green-100"
    },
    {
      title: "Financial Services",
      description: "Enhancing banking and financial operations with AI-powered fraud detection, personalized recommendations, and automated services.",
      solutions: "Fraud Detection, Smart Banking, Risk Assessment, Customer Insights",
      icon: "💳",
      color: "bg-purple-100"
    },
    {
      title: "Creative Design",
      description: "Empowering designers with AI tools for automated design generation, content optimization, and creative workflow enhancement.",
      solutions: "AI Design Tools, Content Generation, Workflow Automation, Design Optimization",
      icon: "🎨",
      color: "bg-orange-100"
    },
    {
      title: "Transportation",
      description: "Improving traffic management and law enforcement with AI-powered monitoring systems and automated ticketing solutions.",
      solutions: "Traffic Monitoring, Automated Ticketing, Flow Optimization, Safety Systems",
      icon: "🚦",
      color: "bg-red-100"
    },
    {
      title: "Digital Transformation",
      description: "Enabling businesses to thrive in the digital age through AI-driven automation, analytics, and intelligent decision-making systems.",
      solutions: "Process Automation, Data Analytics, Smart Decision Making, Digital Integration",
      icon: "💻",
      color: "bg-indigo-100"
    }
  ];

  return (
    <div className="min-h-screen bg-[#17191f] text-white px-6 py-16">
      <div className="mx-auto 2xl:w-4/5 md:px-10">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8">Industries We Transform</h1>
        <p className="md:text-xl mb-24 max-w-2xl">
          Visionate Digital specializes in integrating cutting-edge AI solutions across various industries, 
          helping businesses innovate and thrive in the digital age.
        </p>

        {/* Industries List */}
        <div className="space-y-12">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-t border-gray-700 py-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Title and Icon Column - 4 columns wide */}
                <div className="md:col-span-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{industry.icon}</span>
                    <h2 className="text-2xl font-semibold">{industry.title}</h2>
                  </div>
                </div>

                {/* Description Column - 4 columns wide */}
                <div className="md:col-span-4">
                  <p className="text-gray-300">{industry.description}</p>
                </div>

                {/* Solutions Column - 4 columns wide */}
                <div className="md:col-span-4">
                  <div className="flex flex-wrap gap-2">
                    {industry.solutions.split(", ").map((solution, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                      >
                        {solution}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
