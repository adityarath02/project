import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white">Get in Touch</h1>
          <p className="text-xl text-white">Ready to transform your social media presence? Let's talk!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-black mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-black">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-purple-600 mr-4" />
                  <div>
                    <p className="font-medium text-black">Email</p>
                    <p className="text-black">contact@socialalchemylabs.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-purple-600 mr-4" />
                  <div>
                    <p className="font-medium text-black">Phone</p>
                    <p className="text-black">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-purple-600 mr-4" />
                  <div>
                    <p className="font-medium text-black">Address</p>
                    <p className="text-black">
                      123 Digital Avenue<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-black">Business Hours</h3>
              <div className="space-y-2 text-black">
                <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM PST</p>
                <p><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM PST</p>
                <p><span className="font-medium">Sunday:</span> Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}