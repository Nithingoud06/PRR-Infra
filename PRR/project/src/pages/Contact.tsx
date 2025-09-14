import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Send WhatsApp message
      const whatsappMessage = `New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`;
      
      // Open WhatsApp with message
      const whatsappUrl = `https://wa.me/91966690333543210?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['12-11-1558, Boudha Nagar, Bank Colony, Boudhanagar Colony, Secunderabad, Hyderabad, Telangana 500061 Construction Avenue', 'Banjara Hills, Hyderabad', 'Telangana 500034'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 9666903335', '+91 9666903335', 'Mon-Sat: 9 AM - 6 PM'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['prrinfraprojects@gmail.com', 'projects@prrinfra.com', 'We reply within 24 hours'],
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Monday - Friday: 9 AM - 6 PM', 'Saturday: 9 AM - 4 PM', 'Sunday: Closed'],
    },
  ];

  const services = [
    'Concrete Works',
    'Civil Construction', 
    'Road Projects',
    'Residential Construction',
    'Commercial Construction',
    'Infrastructure Development',
    'Building Maintenance',
    'Other'
  ];

  return (
    <div className="min-h-screen pt-10">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="section-padding bg-gradient-to-r from-blue-700 to-orange-600 text-white"
      >
        <div className="container-custom">
          <div className={`text-center transition-all duration-1000 ${heroInView ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h1 className="text-responsive-xl font-bold mb-6">
              Contact <span className="text-orange-300">Us</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Ready to start your construction project? Get in touch with our expert team 
              for professional consultation and personalized solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className={`text-center bg-gray-50 p-6 rounded-xl hover-lift animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-blue-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section ref={contactRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`transition-all duration-800 ${contactInView ? 'animate-fadeInLeft' : 'opacity-0'}`}>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a <span className="gradient-text">Message</span>
                </h2>
                
                {isSubmitted && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p className="text-green-800">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="form-textarea"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary group flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className={`transition-all duration-800 ${contactInView ? 'animate-fadeInRight' : 'opacity-0'}`}>
              <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Find <span className="gradient-text">Our Location</span>
                </h2>
                
                {/* Map Placeholder */}
                <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">Banjara Hills, Hyderabad</p>
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Quick Contact
                  </h3>
                  
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Phone className="h-5 w-5 text-blue-700" />
                    <div>
                      <p className="font-medium text-gray-900">Call Now</p>
                      <a href="tel:+919666903335" className="text-blue-700 hover:text-blue-800">
                        +91 9666903335
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-green-700" />
                    <div>
                      <p className="font-medium text-gray-900">WhatsApp</p>
                      <a 
                        href="https://wa.me/919666903335"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-700 hover:text-green-800"
                      >
                        Chat with us instantly
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                    <Mail className="h-5 w-5 text-orange-700" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a 
                        href="mailto:prrinfraprojects@gmail.com"
                        className="text-orange-700 hover:text-orange-800"
                      >
                        prrinfraprojects@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some common questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How do I get a quote for my project?',
                answer: 'Simply fill out our contact form or call us directly. We provide free, detailed quotes within 24 hours.'
              },
              {
                question: 'What types of construction projects do you handle?',
                answer: 'We handle residential, commercial, and infrastructure projects including concrete works, civil construction, and road projects.'
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary based on scope and complexity. We provide detailed timelines during the planning phase.'
              },
              {
                question: 'Do you provide maintenance services?',
                answer: 'Yes, we offer comprehensive maintenance and repair services for all types of construction projects.'
              }
            ].map((faq, index) => (
              <div
                key={faq.question}
                className={`bg-gray-50 p-6 rounded-xl hover-lift animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;