'use client'

import React from "react";
import { motion } from "framer-motion";

interface Value {
  title: string;
  description: string;
}

const CultureValue: React.FC<Value> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} // This ensures the animation only happens once
      transition={{ duration: 0.5 }}
      className="py-6 border-t border-gray-200"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <h3 className="text-lg font-semibold w-full md:w-1/3">{title}</h3>
        <p className="text-[#7b7b7b] w-full md:w-1/2">{description}</p>
      </div>
    </motion.div>
  );
};

const Culture = () => {
  return (
    <div className="min-h-screen bg-white">
      <div
        className=" px-6 py-24 md:mx-auto 
      
       2xl:w-4/5 md:px-16
      "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">
            /Culture
          </p>
          <div className="text-[#7b7b7b] max-w-3xl">
            At Visionate Digital, we believe that artificial intelligence is the key to transforming businesses and society. Our culture is built on innovation, technical excellence, and a commitment to ethical AI development. Here are the core values that drive our mission to empower businesses with AI:
          </div>
        </motion.div>

        <div className="space-y-2">
          {[
            {
              title: "Innovation in AI",
              description: "We constantly push the boundaries of what's possible with artificial intelligence, developing cutting-edge solutions that solve real-world problems."
            },
            {
              title: "Technical Excellence",
              description: "Our team maintains the highest standards in AI development, ensuring robust, scalable, and efficient solutions that deliver measurable results."
            },
            {
              title: "Ethical AI",
              description: "We are committed to developing AI solutions that are fair, transparent, and aligned with ethical principles, ensuring responsible technology deployment."
            },
            {
              title: "Client Success",
              description: "We focus on delivering AI solutions that drive tangible business value, helping our clients achieve their goals through data-driven insights."
            },
            {
              title: "Continuous Learning",
              description: "In the rapidly evolving field of AI, we maintain a culture of continuous learning and adaptation to stay at the forefront of technological advancement."
            }
          ].map((value, index) => (
            <CultureValue
              key={index}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Culture;
