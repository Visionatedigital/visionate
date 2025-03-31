'use client'

import React from "react";
import { motion } from "framer-motion";

const Impact = () => {
  const impacts = [
    {
      title: "AI-Powered Education",
      description: "Revolutionizing learning through personalized AI tutors and adaptive learning systems, making quality education accessible to all.",
      icon: "🎓",
      color: "bg-blue-100",
    },
    {
      title: "Smart Agriculture",
      description: "Transforming farming with AI-driven precision agriculture, optimizing crop yields and resource management for sustainable food production.",
      icon: "🌾",
      color: "bg-green-100",
    },
    {
      title: "Financial Innovation",
      description: "Enhancing banking security and user experience with AI-powered fraud detection and personalized financial recommendations.",
      icon: "💳",
      color: "bg-purple-100",
    },
    {
      title: "Creative Design",
      description: "Empowering designers with AI tools for automated design generation and optimization, accelerating creative workflows.",
      icon: "🎨",
      color: "bg-orange-100",
    },
    {
      title: "Smart Transportation",
      description: "Improving traffic management and law enforcement with AI-powered monitoring and automated ticketing systems.",
      icon: "🚦",
      color: "bg-red-100",
    },
    {
      title: "Digital Transformation",
      description: "Enabling businesses to thrive in the digital age through AI-driven automation and intelligent decision-making systems.",
      icon: "💻",
      color: "bg-indigo-100",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visionate Digital is transforming industries through innovative AI solutions, 
            making technology more accessible and efficient for businesses and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-lg ${impact.color} shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="text-4xl mb-4">{impact.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{impact.title}</h3>
              <p className="text-gray-600">{impact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
