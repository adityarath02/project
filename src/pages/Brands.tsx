import React from 'react';
import { motion } from 'framer-motion';

export function Brands() {
  const brands = [
    {
      name: "TechStart Inc.",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80",
      description: "Leading technology startup"
    },
    {
      name: "GrowthBox",
      logo: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80",
      description: "E-commerce solutions provider"
    },
    {
      name: "Fashion Forward",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80",
      description: "Luxury fashion retailer"
    },
    {
      name: "EcoLife",
      logo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
      description: "Sustainable living products"
    },
    {
      name: "FitnessPro",
      logo: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
      description: "Health and wellness brand"
    },
    {
      name: "CulinaryArts",
      logo: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80",
      description: "Premium food service"
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
          <h1 className="text-4xl font-bold mb-4 text-purple-600">Brands We've Worked With</h1>
          <p className="text-xl text-white-600">Trusted by leading companies across industries</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 
                hover:shadow-purple-200/50 transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black hover:text-purple-600 transition-colors duration-300">
                  {brand.name}
                </h3>
                <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                  {brand.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}