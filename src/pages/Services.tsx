import React from 'react';
import { MessageSquare, TrendingUp, Camera, PenTool, Megaphone, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export function Services() {
  const services = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Social Media Management",
      description: "Full-service management of your social media accounts with custom content creation and community engagement.",
      features: ["Content Calendar", "Community Management", "24/7 Monitoring", "Crisis Management"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth Strategy",
      description: "Data-driven strategies to grow your following and increase engagement across all platforms.",
      features: ["Audience Analysis", "Competitor Research", "Growth Tactics", "Performance Tracking"]
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Content Creation",
      description: "Professional content creation services including photography, videography, and graphic design.",
      features: ["Photography", "Video Production", "Graphic Design", "Animation"]
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Influencer Marketing",
      description: "Connect with relevant influencers to amplify your brand's message and reach new audiences.",
      features: ["Influencer Outreach", "Campaign Management", "ROI Tracking", "Partnership Strategy"]
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Paid Social Advertising",
      description: "Strategic paid social campaigns to reach your target audience and achieve your marketing goals.",
      features: ["Ad Strategy", "Campaign Setup", "Budget Management", "Performance Optimization"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and reporting to track your social media performance and ROI.",
      features: ["Custom Dashboards", "Monthly Reports", "ROI Analysis", "Competitive Analysis"]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4 text-purple-600">Our Services</h1>
          <p className="text-xl text-white-600">Comprehensive social media solutions to elevate your brand</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 
                hover:shadow-purple-200/50 transform hover:-translate-y-1"
            >
              <div className="text-purple-600 mb-4 transform hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-black hover:text-purple-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 hover:text-gray-800 transition-colors duration-300">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 hover:text-purple-600 transition-colors duration-300">
                    <span className="h-1.5 w-1.5 bg-purple-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}