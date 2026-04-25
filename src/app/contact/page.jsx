"use client";

import React, { useState } from "react";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Visit Us",
      details: ["123 Hero Street, Dhaka", "Bangladesh - 1200"],
      color: "bg-blue-500"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Call Us",
      details: ["+880 1234 567890", "+880 9876 543210"],
      color: "bg-green-500"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email Us",
      details: ["info@herokidz.com", "support@herokidz.com"],
      color: "bg-purple-500"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Working Hours",
      details: ["Saturday - Thursday: 9AM - 8PM", "Friday: Closed"],
      color: "bg-orange-500"
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter", color: "hover:bg-blue-400" },
    { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-700" }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions about our products? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className={`${info.color} inline-block p-3 rounded-lg text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {info.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {info.title}
              </h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 dark:text-gray-300 text-sm">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Contact Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors resize-none"
                  placeholder="Tell us about your query..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn btn-primary py-3 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="alert alert-success shadow-lg mt-4">
                  <span>✅ Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}
            </form>
          </div>

          {/* Map & Social Links */}
          <div className="space-y-6">
            {/* Google Map Embed */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 md:h-80 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1x233668.947481944!2x90.27923687324215!3d23.78088775139033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa560bb896fb23b!2sDhaka!5e0!3m2!1sen!2sbd!4v1691234567890!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="HeroKidz Location"
                ></iframe>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                Connect With Us
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                Follow us on social media for updates, offers, and more!
              </p>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-xl transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ Quick Link */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Frequently Asked Questions?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Check our FAQ page for quick answers
              </p>
              <a href="/faq" className="btn btn-outline btn-sm">
                Visit FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;