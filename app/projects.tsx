'use client'

import { Marquee } from "@/components/magicui/marquee";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Project {
  src: string;
  name: string;
  logo: string;
  description: string;
  className: string;
  details?: {
    fullDescription: string;
    services: string[];
  };
}

const projects: Project[] = [
    {
      src: "/student-reading.jpg",
      name: "AI-Powered E-Learning Platform",
      logo: "/afrolearn-logo.png",
      description: "Afro-Learn is an innovative e-learning platform that integrates AI tutors to provide personalized learning experiences.",
      className: "",
      details: {
        fullDescription: "Afro-Learn revolutionizes education through AI-powered personalized learning. Our platform uses advanced machine learning algorithms to adapt content delivery, track student progress, and provide real-time feedback. The AI tutors can understand student learning patterns and adjust teaching methods accordingly.",
        services: ["AI Tutoring", "Personalized Learning", "Progress Tracking", "Adaptive Content", "Real-time Analytics"]
      }
    },
    {
      src: "/Agri-ai-system.jpg",
      name: "Agri AI",
      logo: "/agriai-logo.png",
      description: "Smart Agriculture with AI for precision farming and crop monitoring",
      className: "",
      details: {
        fullDescription: "Agri AI leverages computer vision and machine learning to transform traditional farming. Our system provides real-time crop health monitoring, pest detection, and yield prediction. Farmers receive AI-driven insights for optimal irrigation, fertilization, and harvesting decisions.",
        services: ["Computer Vision", "Predictive Analytics", "Crop Monitoring", "Pest Detection", "Yield Prediction"]
      }
    },
    {
      src: "/architect.jpg",
      name: "Studiosix",
      logo: "/studiosix.svg",
      description: "AI-Powered Creative Studio",
      className: "",
      details: {
        fullDescription: "Studiosix combines artificial intelligence with creative design to revolutionize the creative industry. Our AI-powered platform assists designers with automated layout suggestions, color palette generation, and content optimization based on data-driven insights.",
        services: ["AI Design", "Layout Generation", "Color Analysis", "Content Optimization", "Design Automation"]
      }
    },
    {
      src: "/banking.jpg",
      name: "Vido",
      logo: "",
      description: "AI-Enhanced Financial Platform",
      className: "",
      details: {
        fullDescription: "Vido is a next-generation financial platform that integrates AI for fraud detection, risk assessment, and personalized financial recommendations. Our system uses advanced algorithms to provide real-time transaction monitoring and predictive analytics for better financial decision-making.",
        services: ["Fraud Detection", "Risk Assessment", "Financial Analytics", "Transaction Monitoring", "AI Recommendations"]
      }
    },
    {
      src: "/traffic-ticketing-system.jpg",
      name: "Smart Traffic Ticketing System",
      logo: "",
      description: "AI-powered traffic management system for automated ticketing and law enforcement",
      className: "",
      details: {
        fullDescription: "Our Smart Traffic Ticketing System uses AI and computer vision to automate traffic monitoring and enforcement. The system can detect traffic violations, identify vehicles, and generate tickets automatically while maintaining high accuracy and reducing manual intervention.",
        services: ["Computer Vision", "License Plate Recognition", "Violation Detection", "Automated Ticketing", "Real-time Monitoring"]
      }
    },
];

// Option 1: Display all projects in each column for better visual effect
const allProjects = [...projects, ...projects]; // Duplicate projects for continuous scroll
const firstRow = allProjects;
const secondRow = [...allProjects].reverse(); // Reverse order for variety
const thirdRow = allProjects;

const ReviewCard = ({
    src,
    name,
    description,
  }: Pick<Project, 'src' | 'name' | 'description'>) => {
    return (
      <motion.figure
        className="relative overflow-hidden group mb-6 aspect-square"
      >
        <div className="relative h-full">
          <Image
            width={500}
            height={500}
            src={src}
            alt={name}
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/60 to-transparent w-full">
            <h3 className="text-white text-xl font-semibold">{name}</h3>
            <p className="text-white/80 text-sm">{description}</p>
          </div>
        </div>
      </motion.figure>
    );
  };

const ProjectDetails = ({
    project,
    onClose,
  }: {
    project: Project;
    onClose: () => void;
  }) => {
    return (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 h-full  md:w-2/5 bg-white shadow-lg p-6 z-50 cursor-pointer overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
        >
          ×
        </button>
  
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">{project.name}</h2>
          <Image
            src={project.src}
            alt={project.name}
            width={500}
            height={300}
            className="w-full rounded-lg mb-6 object-cover h-60"
          />
          <p className="text-gray-600 mb-4">{project.details?.fullDescription || project.description}</p>
  
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <div className="flex flex-wrap gap-2">
              {project.details?.services ? (
                project.details.services.map((service, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    {service}
                  </span>
                ))
              ) : (
                <>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    Web Design
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    Branding
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                    UI/UX
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

export function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextProject = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
    };

    const previousProject = () => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <section className="w-full bg-white py-16 md:mx-auto 2xl:w-4/5 md:px-16">
        <div className="mx-auto mb-12 px-6 md:px-0">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore our projects
          </h2>
          <p className="text-[#7b7b7b] text-lg">
            Our projects showcase the best visuals and storytelling techniques.
          </p>
        </div>
  
        <div className="relative px-6 md:px-0">
          <div className="flex items-center justify-center">
            <button
              onClick={previousProject}
              className="absolute left-0 z-10 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors"
              aria-label="Previous project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <div className="w-full max-w-[500px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="cursor-pointer"
                  onClick={() => setSelectedProject(projects[currentIndex])}
                >
                  <ReviewCard {...projects[currentIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={nextProject}
              className="absolute right-0 z-10 p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors"
              aria-label="Next project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-black w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
  
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/40 z-40"
                onClick={() => setSelectedProject(null)}
              />
              <ProjectDetails
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            </>
          )}
        </AnimatePresence>
      </section>
    );
  }
  