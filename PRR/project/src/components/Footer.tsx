import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Phone, Mail, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Concrete Works',
    'Civil Construction',
    'Road Projects',
    'Infrastructure Development',
    'Building Construction',
    'Site Preparation',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="animate-fadeInUp">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white">
                    PRR INFRA
                  </span>
                  <span className="text-sm text-gray-300 font-medium">
                    PROJECTS
                  </span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Building the future with strength through quality construction and infrastructure development. Your trusted partner in Hyderabad for all construction needs.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/prr-infra-projects-047999377/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/rmc_in_hyderabad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/9666903335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-green-600 transition-colors duration-300"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-semibold mb-6 text-orange-500">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-orange-500 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-6 text-orange-500">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-gray-300 hover:text-orange-500 transition-colors duration-300 cursor-pointer">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-semibold mb-6 text-orange-500">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      12-11-1558, Boudha Nagar, Bank Colony<br />
                      Boudhanagar Colony, Secunderabad<br />
                      Hyderabad, Telangana 500061
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <a
                    href="tel:+"
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                  >
                    +91 9666903335
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <a
                    href="mailto:prrinfraprojects@gmail.com"
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300"
                  >
                    prrinfraprojects@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} PRR INFRA PROJECTS. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;