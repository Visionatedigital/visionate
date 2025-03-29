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
    },
    {
      src: "/agri-ai(2).jpg",
      name: "Agri AI",
      logo: "/agriai-logo.png",
      description: "Smart Agriculture with AI for precision farming and crop monitoring",
      className: "",
    },
    {
      src: "/architect.jpg",
      name: "Studiosix",
      logo: "/studiosix.svg",
      description: "AI-Powered Creative Studio",
      className: "",
    },
    {
      src: "/banking.jpg",
      name: "Vido",
      logo: "",
      description: "Integrated payment gateway",
      className: "",
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
        className="relative overflow-hidden group mb-6"
      >
        <div className="relative">
          <Image
            width={500}
            height={500}
            src={src}
            alt={name}
            className="object-cover w-full h-[300px] rounded-lg"
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
  
        <div className="w-full h-[800px] flex items-center justify-center overflow-hidden py-8">
          <Marquee
            vertical
            pauseOnHover
            className="[--duration:40s] px-2"
          >
            {firstRow.map((project, index) => (
              <ReviewCard
                key={index}
                {...project}
              />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            className="[--duration:50s] px-2"
          >
            {secondRow.map((project, index) => (
              <ReviewCard
                key={index}
                {...project}
              />
            ))}
          </Marquee>
          <Marquee
            vertical
            pauseOnHover
            className="[--duration:45s] hidden md:flex px-2"
          >
            {thirdRow.map((project, index) => (
              <ReviewCard
                key={index}
                {...project}
              />
            ))}
          </Marquee>
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
  