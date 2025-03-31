'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";

const projects = [
  {
    id: 1,
    title: "Afro-Learn",
    description: "AI-Powered E-Learning Platform",
    image: "/afro-learn.jpg",
    category: "Education",
    industry: "Education Technology",
    client: "Afro-Learn",
    services: [
      "AI Tutoring",
      "Learning Analytics",
      "Smart Content",
      "Performance Tracking"
    ]
  },
  {
    id: 2,
    title: "Agri AI",
    description: "Smart Agriculture System",
    image: "/Agri-ai-system.jpg",
    category: "Agriculture",
    industry: "Agricultural Technology",
    client: "Agri AI Inc",
    services: [
      "Crop Monitoring",
      "Yield Prediction",
      "Resource Management",
      "Pest Detection"
    ]
  },
  {
    id: 3,
    title: "Studio Six",
    description: "AI-Powered Creative Studio",
    image: "/studiosix.jpg",
    category: "Design",
    industry: "Creative Design",
    client: "Studio Six Inc",
    services: [
      "AI Design Tools",
      "Content Generation",
      "Workflow Automation",
      "Design Optimization"
    ]
  },
  {
    id: 4,
    title: "Vido",
    description: "AI-Enhanced Financial Platform",
    image: "/vido.jpg",
    category: "Finance",
    industry: "Financial Technology",
    client: "Vido",
    services: [
      "Fraud Detection",
      "Smart Banking",
      "Risk Assessment",
      "Customer Insights"
    ]
  },
  {
    id: 5,
    title: "Smart Traffic",
    description: "AI Traffic Management System",
    image: "/traffic-ticketing-system.jpg",
    category: "Transportation",
    industry: "Transportation & Law Enforcement",
    client: "Government Agency",
    services: [
      "Traffic Monitoring",
      "Automated Ticketing",
      "Flow Optimization",
      "Safety Systems"
    ]
  }
];

const ProjectsSection = () => {
  return (
    <div className="py-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-2">Our Projects</h2>
          <p className="text-gray-600">Explore our AI-powered solutions</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {project.category}
                </span>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">
                  {project.industry}
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Client: {project.client}</p>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={`/projects/${project.id}`}
                className="mt-4 inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                Learn more
                <PiArrowRight className="ml-2" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
  