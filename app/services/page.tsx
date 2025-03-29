import { Separator } from "@/components/ui/separator";
import Navbar from "../navbar";
import Brands from "./brands";
import Image from "next/image";
import Process from "./process";
import Impact from "./impact";
import Industries from "./industries";
import Footer from "../footer";

const services = [
  {
    title: "AI & Machine Learning",
    description: `Transform your business with our cutting-edge AI solutions. We develop and implement custom machine learning models, natural language processing systems, and computer vision applications that drive automation, enhance decision-making, and create intelligent experiences for your users.`,
    benefits: [
      "Custom AI Models",
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Deep Learning",
      "AI Automation",
    ],
    image: "/AI.jpg",
  },
  {
    title: "Digital Transformation",
    description: `Navigate your organization's digital evolution with our comprehensive transformation services. We help businesses modernize their operations, implement cloud solutions, and create data-driven strategies that drive growth and innovation in the digital age.`,
    benefits: [
      "Cloud Migration",
      "Process Automation",
      "Data Strategy",
      "Digital Workflows",
      "Legacy Modernization",
      "Change Management",
    ],
    image: "/digital-transformation.jpg",
  },
  {
    title: "Software Development",
    description: `Build powerful, scalable software solutions that drive your business forward. Our expert development team creates custom applications, enterprise systems, and innovative digital products using the latest technologies and best practices in software engineering.`,
    benefits: [
      "Custom Software",
      "API Development",
      "Cloud Applications",
      "Mobile Apps",
      "Enterprise Solutions",
      "DevOps Integration",
    ],
    image: "/software-development.jpg",
  },
  {
    title: "Data Analytics & BI",
    description: `Turn your data into actionable insights with our advanced analytics and business intelligence solutions. We help you collect, process, and visualize data to uncover valuable insights, optimize operations, and make data-driven decisions.`,
    benefits: [
      "Data Visualization",
      "Business Intelligence",
      "Big Data Processing",
      "Real-time Analytics",
      "Predictive Modeling",
      "Data Integration",
    ],
    image: "/Data-analytics.jpg",
  },
  {
    title: "Cybersecurity",
    description: `Protect your digital assets with our comprehensive cybersecurity services. We implement robust security measures, conduct thorough assessments, and provide ongoing monitoring to safeguard your systems, data, and users from evolving cyber threats.`,
    benefits: [
      "Security Assessment",
      "Threat Detection",
      "Incident Response",
      "Cloud Security",
      "Compliance Management",
      "Security Training",
    ],
    image: "/Cybersecurity.jpg",
  },
  {
    title: "IoT Solutions",
    description: `Connect and optimize your physical operations with our Internet of Things (IoT) solutions. We design and implement smart systems that collect real-time data, automate processes, and create interconnected ecosystems for enhanced efficiency and innovation.`,
    benefits: [
      "IoT Architecture",
      "Sensor Integration",
      "Edge Computing",
      "Real-time Monitoring",
      "Smart Automation",
      "IoT Analytics",
    ],
    image: "/IoT.jpg",
  },
];

const Services = () => {
  return (
    <div className="md:min-h-screen bg-white">
      <Navbar />

      {/* hero section */}

      <div className="pt-32 pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <div className="mx-auto flex items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold mb-8">
              Innovative Technology Solutions for the Digital Age
            </h1>
            <p className="text-xl text-neutral-500">
              Empowering businesses with cutting-edge AI, cloud solutions, and digital transformation services to drive growth and innovation
            </p>
          </div>
        </div>
      </div>

      <Brands />
      <Separator className="my-16" />

      {/* services section */}

      <div className="md:py-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        <h2 className="text-xl font-bold text-[#7b7b7b] mb-10">
          / Our Services
        </h2>

        <div className="space-y-16 md:space-y-32">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {/* image section */}
              <div className="w-full">
                <Image
                  priority
                  width={1200}
                  height={675}
                  src={service.image}
                  alt="image"
                  className="shadow-lg md:w-[640px] h-[400px] object-cover"
                />
              </div>

              {/* content section */}
              <div className="w-full">
                <h2 className="text-2xl font-bold mb-8">{service.title}</h2>
                <p className="text-[#7b7b7b] mb-12">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div
                      className="flex items-center space-x-2"
                      key={benefitIndex}
                    >
                      <span className="text-[#7b7b7b]">/ {benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Process />
      <Impact />
      <Industries />
      <Footer />

      
    </div>
  );
};

export default Services;
