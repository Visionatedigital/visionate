import React from "react";

const Industries = () => {
  const industries = [
    {
      title: "Fintech",
      description:
        "Revolutionizing financial services with AI-powered marketing strategies, data insights, and personalized user experiences.",
      companies: "Discover, Stripe, CreditKarma, STC Bank, MoneyLion, Marqeta, Quicken, Lulo Bank, Earnin, Fundbox, StreetBeat, Q2",
    },
    {
      title: "Insurance",
      description:
        "Transforming the insurance industry with AI-driven risk assessment, customer engagement, and fraud detection solutions.",
      companies: "StateFarm, Progressive, Geico, Lemonade, Oscar Health, MetLife",
    },
    {
      title: "Energy",
      description:
        "Optimizing energy management and sustainability efforts with AI-driven solutions for the power sector.",
      companies: "Shell, BP, Chevron, NextEra Energy, Duke Energy, Siemens Energy",
    },
    {
      title: "B2B & Enterprise Software",
      description:
        "Enhancing enterprise operations with AI-powered solutions for automation, analytics, and security.",
      companies: "Slack, ADP, VMware, Okta, Splunk, Nutanix, Zenefits, Comscore, Papaya, TeamViewer, Cornerstone, WorkBoard, AppDynamics",
    },
    {
      title: "Crypto & Web3",
      description:
        "Driving blockchain innovation with AI-powered analytics and security solutions for decentralized applications.",
      companies: "Coinbase, Binance, Ripple, OpenSea, MetaMask, Alchemy",
    },
    {
      title: "Technology",
      description:
        "Positioning tech innovators as industry leaders through AI-based digital strategies and advanced analytics.",
      companies: "Microsoft, Google, Apple, Amazon, IBM, Intel, Oracle",
    },
    {
      title: "Ecommerce & Fashiotech",
      description:
        "Boosting online sales and engagement through AI-enhanced targeting, conversion optimization, and dynamic content strategies.",
      companies: "Shopify, ASOS, Farfetch, StitchFix, Rent the Runway, ThredUp",
    },
    {
      title: "Electronics",
      description:
        "Innovating the electronics industry with AI-driven automation, smart devices, and predictive analytics.",
      companies: "Samsung, Sony, LG, Panasonic, Xiaomi, TSMC",
    },
    {
      title: "Food & Beverages",
      description:
        "Enhancing the food and beverage industry with AI-driven customer engagement, logistics, and supply chain optimization.",
      companies: "Coca-Cola, PepsiCo, Nestlé, DoorDash, Uber Eats, Blue Apron",
    },
    {
      title: "Startups & VC",
      description:
        "Helping startups scale quickly with AI-enhanced digital marketing, from lead generation to brand positioning.",
      companies: "Sequoia, Andreessen Horowitz, Y Combinator, TechStars, 500 Startups",
    },
    {
      title: "Healthcare & Life Sciences",
      description:
        "Empowering healthcare providers and life sciences organizations with AI-driven solutions for marketing, patient engagement, and data analysis.",
      companies: "Johnson & Johnson, Pfizer, Moderna, Illumina, Epic Systems, Cerner",
    },
    {
      title: "Telecommunications",
      description:
        "Enhancing communication infrastructure with AI-powered network optimization and customer service automation.",
      companies: "AT&T, Verizon, T-Mobile, Vodafone, Orange, Deutsche Telekom",
    },
    {
      title: "Mobility",
      description:
        "Revolutionizing transportation with AI-driven fleet management, navigation, and ride-sharing solutions.",
      companies: "Uber, Lyft, Bird, Lime, Via, BlaBlaCar",
    },
    {
      title: "Logistics",
      description:
        "Optimizing supply chain and logistics operations with AI-powered predictive analytics and automation.",
      companies: "FedEx, UPS, DHL, Maersk, Flexport, XPO Logistics",
    },
    {
      title: "Manufacturing & Automotive",
      description:
        "Leveraging AI to streamline marketing efforts for automotive and manufacturing companies, optimizing lead generation and sales.",
      companies: "Tesla, Ford, BMW, Toyota, General Motors, Siemens",
    },
    {
      title: "Agriculture",
      description:
        "Innovating agricultural technology with AI-powered solutions for precision farming and crop monitoring.",
      companies: "John Deere, Corteva, Bayer, Indigo Ag, Farmers Business Network",
    },
    {
      title: "Architecture & Construction",
      description:
        "Advancing construction technology with AI-driven project management, design optimization, and safety monitoring.",
      companies: "Autodesk, Procore, PlanGrid, Trimble, Bentley Systems",
    },
    {
      title: "Government & Specialty Projects",
      description:
        "Supporting public sector initiatives with AI-powered data security, analytics, and digital transformation.",
      companies: "Palantir, Booz Allen Hamilton, SAIC, Leidos, CACI",
    },
    {
      title: "Non-Profits",
      description:
        "Enhancing impact-driven organizations with AI-powered fundraising, outreach, and engagement strategies.",
      companies: "Gates Foundation, Red Cross, UNICEF, World Wildlife Fund, Charity: Water",
    }
  ];

  return (
    <div className="min-h-screen bg-[#17191f] text-white px-6  py-16  ">
      <div className="mx-auto 2xl:w-4/5 md:px-10">
        {/* Header */}
        <h1 className="text-4xl  font-bold mb-8">Industries</h1>
        <p className="md:text-xl mb-24 max-w-2xl">
          We unite with big brands and startups in various industries to create
          award-winning work.
        </p>

        {/* Industries List */}
        <div className="space-y-12">
          {industries.map((industry, index) => (
            <div key={index} className="border-t border-gray-700 py-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Title Column - 4 columns wide */}
                <div className="md:col-span-4">
                  <h2 className="text-2xl font-semibold">{industry.title} \</h2>
                </div>

                {/* Description Column - 4 columns wide */}
                <div className="md:col-span-4">
                  <p className="text-gray-300">{industry.description}</p>
                </div>

                {/* Companies Column - 4 columns wide */}
                <div className="md:col-span-4">
                  <p className="text-gray-300">{industry.companies}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Industries;
