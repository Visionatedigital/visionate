"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type TabId = "projects" | "clients";
type CategoryId =
  | "all"
  | "branding"
  | "uxui"
  | "development"
  | "strategy"
  | "marketing"
  | "research"
  | "analytics"
  | "design"
  | "education"
  | "agriculture"
  | "beauty"
  | "transportation"
  | "finance";

interface TabCounts {
  projects: number;
  clients: number;
}

interface CategoryCount {
  projects: number;
  clients: number;
}

interface CategoryCounts {
  [key: string]: CategoryCount;
}

interface Project {
  id: number;
  name: string;
  video: string;
  title: string;
  description: string;
  category: CategoryId;
  size: string;
  imageHeight: string;
  industry: string;
  client: string;
}

interface Client {
  id: number;
  name: string;
  image: string;
  description: string;
  category: CategoryId;
}

const Hero = () => {
  const [activeTab, setActiveTab] = useState<TabId>("projects");
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");

  const clients = useMemo<Client[]>(() => [
    {
      id: 1,
      name: "Studio Six Inc",
      image: "/studiosix.svg",
      description: "A leading creative studio leveraging AI for innovative design solutions and digital experiences.",
      category: "design",
    },
    {
      id: 2,
      name: "Afro-Learn",
      image: "/afrolearn-logo.png",
      description: "Revolutionizing education through AI-powered personalized learning experiences.",
      category: "education",
    },
    {
      id: 3,
      name: "Agri AI Inc",
      image: "/agriai-logo.png",
      description: "Transforming agriculture with AI-driven precision farming and crop monitoring solutions.",
      category: "agriculture",
    },
    {
      id: 4,
      name: "Vido",
      image: "/vido-logo.png",
      description: "AI-enhanced financial platform revolutionizing banking with intelligent fraud detection and personalized recommendations.",
      category: "finance",
    }
  ], []);

  const projects = useMemo<Project[]>(() => [
    {
      id: 1,
      name: "Afro-Learn",
      video: "/student-reading.jpg",
      title: "AI-Powered E-Learning Platform",
      description: "Revolutionizing education through AI-powered personalized learning experiences.",
      category: "education",
      size: "col-span-12 md:col-span-4 row-span-1",
      imageHeight: "h-80",
      industry: "Education Technology",
      client: "Afro-Learn"
    },
    {
      id: 2,
      name: "Agri AI",
      video: "/Agri-ai-system.jpg",
      title: "Smart Agriculture System",
      description: "AI-driven precision farming and crop monitoring solutions.",
      category: "agriculture",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-48",
      industry: "Agricultural Technology",
      client: "Agri AI Inc"
    },
    {
      id: 3,
      name: "Studio Six",
      video: "/architect.jpg",
      title: "AI-Powered Creative Studio",
      description: "Revolutionizing creative design with AI automation and optimization.",
      category: "design",
      size: "col-span-12 md:col-span-4",
      imageHeight: "h-48",
      industry: "Creative Design",
      client: "Studio Six Inc"
    },
    {
      id: 4,
      name: "Vido",
      video: "/banking.jpg",
      title: "AI-Enhanced Financial Platform",
      description: "Revolutionizing banking with intelligent fraud detection and personalized recommendations.",
      category: "finance",
      size: "col-span-12 row-span-2",
      imageHeight: "h-[600px]",
      industry: "Financial Technology",
      client: "Vido"
    },
    {
      id: 5,
      name: "Traffic AI",
      video: "/traffic-ticketing-system.jpg",
      title: "Smart Traffic Management",
      description: "AI-powered traffic monitoring and automated ticketing system.",
      category: "transportation",
      size: "col-span-12 md:col-span-6 row-span-1",
      imageHeight: "h-80",
      industry: "Transportation & Law Enforcement",
      client: "Government Agency"
    }
  ], []);

  const { tabCounts, categoryCounts } = useMemo(() => {
    const projectCount = projects.length;
    const clientCount = clients.length;

    const categoryCount: CategoryCounts = {
      all: { projects: projectCount, clients: clientCount },
      branding: {
        projects: projects.filter((p) => p.category === "branding").length,
        clients: clients.filter((c) => c.category === "branding").length,
      },
      uxui: {
        projects: projects.filter((p) => p.category === "uxui").length,
        clients: clients.filter((c) => c.category === "uxui").length,
      },
      development: {
        projects: projects.filter((p) => p.category === "development").length,
        clients: clients.filter((c) => c.category === "development").length,
      },
      strategy: {
        projects: projects.filter((p) => p.category === "strategy").length,
        clients: clients.filter((c) => c.category === "strategy").length,
      },
      marketing: {
        projects: projects.filter((p) => p.category === "marketing").length,
        clients: clients.filter((c) => c.category === "marketing").length,
      },
      research: {
        projects: projects.filter((p) => p.category === "research").length,
        clients: clients.filter((c) => c.category === "research").length,
      },
      analytics: {
        projects: projects.filter((p) => p.category === "analytics").length,
        clients: clients.filter((c) => c.category === "analytics").length,
      },
      design: {
        projects: projects.filter((p) => p.category === "design").length,
        clients: clients.filter((c) => c.category === "design").length,
      },
      education: {
        projects: projects.filter((p) => p.category === "education").length,
        clients: clients.filter((c) => c.category === "education").length,
      },
      agriculture: {
        projects: projects.filter((p) => p.category === "agriculture").length,
        clients: clients.filter((c) => c.category === "agriculture").length,
      },
      beauty: {
        projects: projects.filter((p) => p.category === "beauty").length,
        clients: clients.filter((c) => c.category === "beauty").length,
      },
      transportation: {
        projects: projects.filter((p) => p.category === "transportation").length,
        clients: clients.filter((c) => c.category === "transportation").length,
      },
      finance: {
        projects: projects.filter((p) => p.category === "finance").length,
        clients: clients.filter((c) => c.category === "finance").length,
      },
    };

    return {
      tabCounts: {
        projects: projectCount,
        clients: clientCount,
      } as TabCounts,
      categoryCounts: categoryCount,
    };
  }, [projects, clients]);

  const tabs = [
    { id: "projects" as const, name: "Projects", count: tabCounts.projects },
    { id: "clients" as const, name: "Clients", count: tabCounts.clients },
  ];

  const categories = [
    { id: "all" as const, name: "All", count: categoryCounts.all[activeTab] },
    {
      id: "education" as const,
      name: "Education",
      count: categoryCounts.education[activeTab],
    },
    {
      id: "agriculture" as const,
      name: "Agriculture",
      count: categoryCounts.agriculture[activeTab],
    },
    {
      id: "design" as const,
      name: "Design",
      count: categoryCounts.design[activeTab],
    },
    {
      id: "finance" as const,
      name: "Finance",
      count: categoryCounts.finance[activeTab],
    },
    {
      id: "transportation" as const,
      name: "Transportation",
      count: categoryCounts.transportation[activeTab],
    }
  ];

  const filteredContent = useMemo(() => {
    const items = activeTab === "projects" ? projects : clients;
    return activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);
  }, [activeTab, activeCategory, projects, clients]);

  const renderContent = () => {
    if (activeTab === "clients") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredContent.map((item) => {
              const client = item as Client;
              return (
                <motion.div
                  layout
                  key={client.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-card p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src={`/${client.image}`}
                      alt={client.name}
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                    <h3 className="text-xl font-semibold">{client.name}</h3>
                  </div>
                  <p className="text-gray-600">{client.description}</p>
                  <div className="mt-4">
                    <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {client.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredContent.map((item) => {
            const project = item as Project;
            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`bg-card rounded-lg shadow-lg overflow-hidden ${project.size}`}
              >
                <div className={`relative ${project.imageHeight}`}>
                  <Image
                    src={project.video}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {project.industry}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                      {project.client}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div
      className="
    md:mx-auto   
     2xl:w-4/5 md:px-16

    
    px-6 py-40 "
    >
      {/* Main Navigation */}
      <div className="flex flex-wrap gap-8 mb-12 items-center">
        {tabs.map((tab, index) => (
          <React.Fragment key={tab.id}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`text-2xl md:text-4xl font-bold ${
                activeTab === tab.id
                  ? "border-b-2 border-black"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
              <span className="text-sm ml-1 align-super">{tab.count}</span>
            </motion.button>
            {index < tabs.length - 1 && (
              <div className=" p-2 rounded-full bg-black h-4 w-4 items-center flex justify-center"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-6 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 ${
              activeCategory === category.id ? "font-bold" : "text-gray-500"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
            <span className="text-xs ml-1 align-super text-gray-400">
              {category.count}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
};

export default Hero;
