import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Social Alchemy Labs</h3>
            <p className="text-gray-400">Transforming social media presence into digital gold.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/services" className="hover:text-primary-light">Services</a></li>
              <li><a href="/testimonials" className="hover:text-primary-light">Testimonials</a></li>
              <li><a href="/brands" className="hover:text-primary-light">Our Clients</a></li>
              <li><a href="/contact" className="hover:text-primary-light">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>contact@socialalchemylabs.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Digital Avenue</li>
              <li>San Francisco, CA 94105</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-light">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-light">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-light">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-light">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Social Alchemy Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}