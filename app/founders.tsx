'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";
import {
  PiArrowArcLeft,
  PiArrowArcRight,
  PiGlobe,
  PiLinkedinLogo,
  PiTwitterLogo,
} from "react-icons/pi";


interface Social {
    linkedin: string;
    twitter: string;
    website?: string;
  }



interface Founder {
    name: string;
    role: string;
    image: string;
    description: string;
    social: Social;
  }


const founders: Founder[] = [
    {
      name: "Kibuuka Mark Brian",
      role: "CEO & Co-Founder",
      image: "/kibuuka-mark.jpg",
      description:
        "Leading our vision with expertise in AI and business strategy, driving innovation and growth across our projects.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        website: "https://website.com",
      },
    },
    {
      name: "Shammah Kahnagi Gordon",
      role: "CFO & Co-Founder",
      image: "/shammah-gordon.jpg",
      description:
        "Managing our financial strategy and operations, ensuring sustainable growth and business excellence.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        website: "https://website.com",
      },
    },
  ];





const Founders = () => {

    const [startIndex, setStartIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(2);
    const [isMobile, setIsMobile] = useState(false);


    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0,
          },
        },
        exit: {
          opacity: 0,
          transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
            duration: 0.2,
          },
        },
      };
    
      const item = {
        hidden: {
          opacity: 0,
          y: 20,
          scale: 0.95,
        },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            duration: 0.5,
            bounce: 0.4,
          },
        },
        exit: {
          opacity: 0,
          y: -20,
          scale: 0.95,
          transition: {
            duration: 0.3,
          },
        },
      };

      



    useEffect(() => {
        const handleResize = () => {
          const mobile = window.innerWidth < 768;
          setIsMobile(mobile);
          setItemsToShow(mobile ? 1 : 2);
          setStartIndex((prev) => {
            const maxStart = founders.length - (mobile ? 1 : 2);
            return prev > maxStart ? maxStart : prev;
          });
        };
    
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);


      const next = () => {
        setStartIndex((prev) => {
          const nextIndex = prev + 1;
          const maxStart = founders.length - itemsToShow;
          return nextIndex > maxStart ? 0 : nextIndex;
        });
      };
    
      const prev = () => {
        setStartIndex((prev) => {
          const nextIndex = prev - 1;
          return nextIndex < 0 ? founders.length - itemsToShow : nextIndex;
        });
      };
    
      type PanInfo = {
        offset: {
          x: number;
          y: number;
        };
        velocity: {
          x: number;
        };
      };

      const handleDragEnd = (_event: never, info: PanInfo) => {
        const swipeThreshold = 50;
        if (
          info.offset.x < -swipeThreshold &&
          startIndex < founders.length - itemsToShow
        ) {
          next();
        } else if (info.offset.x > swipeThreshold && startIndex > 0) {
          prev();
        }
      };
    
      const visibleFounders = founders.slice(startIndex, startIndex + itemsToShow);

      


    return ( 
        <div
        className="px-6 
      mx-auto 2xl:w-4/5 md:px-16
      
      py-16 md:py-32"
      >
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Meet Our Founders
            </h2>
            <p className="text-gray-600">
              The visionaries behind Visionate Digital
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <motion.button onClick={prev}>
              <PiArrowArcLeft className="text-black border rounded-full flex items-center justify-center text-5xl p-3 hover:bg-black/10 transition-colors" />
            </motion.button>
            <motion.button onClick={next}>
              <PiArrowArcRight className="text-black border rounded-full flex items-center justify-center text-5xl p-3 hover:bg-black/10 transition-colors" />
            </motion.button>
          </div>
        </div>
  
        <div className="relative max-w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
              key={startIndex}
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
              drag={isMobile ? "x" : false}
              dragSnapToOrigin
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              style={{
                touchAction: "none",
                x: 0,
              }}
            >
              {visibleFounders.map((founder, index) => (
                <motion.div
                  key={`${founder.name}-${index}`}
                  variants={item}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-gray-100 aspect-square w-full max-w-[300px] mb-6 overflow-hidden rounded-lg">
                    <Image
                      priority
                      width={500}
                      height={500}
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{founder.name}</h3>
                  <p className="text-[#7b7b7b] text-base mb-3">{founder.role}</p>
                  <p className="text-gray-700 text-base mb-6 max-w-md">
                    {founder.description}
                  </p>
                  <div className="flex gap-6">
                    <motion.a
                      href={founder.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <PiLinkedinLogo className="w-6 h-6 text-[#7b7b7b] hover:text-gray-900 cursor-pointer" />
                    </motion.a>
                    <motion.a
                      href={founder.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <PiTwitterLogo className="w-6 h-6 text-[#7b7b7b] hover:text-gray-900 cursor-pointer" />
                    </motion.a>
                    {founder.social.website && (
                      <motion.a
                        href={founder.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <PiGlobe className="w-6 h-6 text-[#7b7b7b] hover:text-gray-900 cursor-pointer" />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    
);
}
 
export default Founders;