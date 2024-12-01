import React from 'react';
import { Wand2, TrendingUp, Users, BarChart } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function Home() {
  const featuresRef = useRef(null);
  const statsRef = useRef(null);
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full gradient-bg opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>
          <div className="absolute inset-0 z-0">
            <DotLottieReact
              src="https://lottie.host/4aa06789-60e8-46ce-9bc9-25b42c9a7109/HskaOn91Dq.lottie"
              loop
              autoplay
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-purple-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transform Your Social Media Presence
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Turn your brand's social media into pure digital gold with our expert strategies
            </motion.p>
            <motion.a 
              href="/contact" 
              className="gradient-purple text-white px-8 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Social Alchemy Labs?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['Expert Strategy', 'Growth Focus', 'Community Building', 'Analytics & Insights'].map((title, index) => (
            <motion.div 
              key={index} 
              className="bg-dark-secondary rounded-xl p-6 hover:bg-dark-accent transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <div className="text-primary-light mb-4">
                {index === 0 && <Wand2 className="h-12 w-12" />}
                {index === 1 && <TrendingUp className="h-12 w-12" />}
                {index === 2 && <Users className="h-12 w-12" />}
                {index === 3 && <BarChart className="h-12 w-12" />}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
              <p className="text-gray-400">Customized social media strategies tailored to your brand's unique needs</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className="gradient-purple py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Clients Served' },
              { value: '10M+', label: 'Followers Gained' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '150%', label: 'Average ROI' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <motion.div 
                  className="text-4xl font-bold mb-2 text-white"
                  initial={{ scale: 0.5 }}
                  animate={isStatsInView ? { scale: 1 } : { scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-purple-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}