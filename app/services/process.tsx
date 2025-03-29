import React from "react";

const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Discovery & Needs Assessment",
      description:
        "We start by understanding your business, challenges, and goals. Our team listens carefully to your needs, ensuring we tailor our AI solutions to fit seamlessly with your objectives.",
    },
    {
      number: "2",
      title: "Data Analysis & AI Strategy",
      description:
        "Using advanced data analysis and AI capabilities, we dive into market trends, audience behavior, and your data. This research guides us in crafting a custom AI strategy that maximizes results.",
    },
    {
      number: "3",
      title: "AI Design & Development",
      description:
        "With a robust strategy, we develop AI-driven solutions that integrate with your existing systems. Our team ensures each solution is scalable, efficient, and designed to bring you a competitive edge.",
    },
    {
      number: "4",
      title: "Deployment & Continuous Optimization",
      description:
        "We deploy your AI solution and closely monitor its performance. Our team uses real-time data and insights to optimize and fine-tune the system, ensuring it evolves and delivers consistent, measurable results.",
    },
];

  return (
    <div className="2xl:w-4/5 md:mx-auto py-32 md:pb-32  px-6 md:px-16 ">
      <div className="mx-auto mb-12">
        <h2 className="text-4xl    font-bold text-black mb-4">
          We keep it simple
        </h2>
        <p className="text-[#7b7b7b] text-lg">
          Our process is designed to deliver exceptional results and ensure a
          seamless experience from start to finish.
        </p>
      </div>
      <div className="space-y-12">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-8">
            <div className="flex-none">
              <div className="text-3xl font-bold text-gray-900">
                {step.number}.
              </div>
            </div>
            <div className="flex-1 border-t border-gray-200 pt-3">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-[#7b7b7b] leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
