import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      content: "Social Alchemy Labs transformed our social media presence completely. Our engagement rates have increased by 300% since working with them.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "GrowthBox",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      content: "The team's strategic approach and attention to detail have helped us build a strong community around our brand. Couldn't be happier with the results!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Brand Manager",
      company: "Fashion Forward",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      content: "Working with Social Alchemy Labs has been a game-changer for our brand. They truly understand our vision and have helped us achieve remarkable growth.",
      rating: 5
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
          <h1 className="text-4xl font-bold mb-4">Client Success Stories</h1>
          <p className="text-xl text-gray-600">Don't just take our word for it - hear what our clients have to say</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 
                hover:shadow-purple-200/50 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6 hover:scale-105 transition-transform duration-300">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-black hover:text-purple-600 transition-colors duration-300">{testimonial.name}</h3>
                  <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">{testimonial.role}</p>
                  <p className="text-purple-600">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current hover:scale-110 transition-transform duration-300" />
                ))}
              </div>
              <p className="text-gray-700 italic hover:text-gray-900 transition-colors duration-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}