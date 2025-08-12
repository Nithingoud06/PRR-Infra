import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Building2, Hammer, Loader as Road, Home, Factory, Wrench, CheckCircle, ArrowRight, Users, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      icon: Building2,
      title: 'Concrete Works',
      description: 'Professional concrete solutions for all types of construction projects.',
      features: [
        'Ready Mix Concrete Supply',
        'Concrete Pumping Services',
        'Foundation Work',
        'Structural Concrete',
        'Decorative Concrete',
        'Concrete Repair & Restoration'
      ],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Hammer,
      title: 'Civil Construction',
      description: 'Complete civil engineering and construction services for various projects.',
      features: [
        'Building Construction',
        'Structural Engineering',
        'Site Development',
        'Excavation Services',
        'Utility Installation',
        'Project Management'
      ],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Road,
      title: 'Road Projects',
      description: 'Professional road construction and infrastructure development services.',
      features: [
        'Highway Construction',
        'Street Paving',
        'Bridge Construction',
        'Drainage Systems',
        'Traffic Infrastructure',
        'Road Maintenance'
      ],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Home,
      title: 'Residential Projects',
      description: 'Custom home construction and residential development services.',
      features: [
        'Custom Home Building',
        'Renovation & Remodeling',
        'Apartment Complexes',
        'Villa Construction',
        'Interior Finishing',
        'Landscaping'
      ],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Factory,
      title: 'Commercial Construction',
      description: 'Large-scale commercial and industrial construction solutions.',
      features: [
        'Office Buildings',
        'Retail Spaces',
        'Warehouses',
        'Industrial Facilities',
        'Shopping Centers',
        'Mixed-Use Developments'
      ],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: Wrench,
      title: 'Maintenance Services',
      description: 'Ongoing maintenance and repair services for existing structures.',
      features: [
        'Building Maintenance',
        'Structural Repairs',
        'Preventive Maintenance',
        'Emergency Repairs',
        'Facility Management',
        'Renovation Services'
      ],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience in construction industry.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We ensure all projects are completed on time without compromising quality.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'ISO certified processes and materials ensure the highest quality standards.'
    }
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
              Our <span className="text-orange-300">Services</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive construction services with a commitment to quality, 
              innovation, and customer satisfaction across all project types.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-800 ${
                  servicesInView ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="bg-blue-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-responsive-md font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="btn-primary group inline-flex items-center space-x-2"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="relative hover-lift">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
              Why Choose Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results through our commitment to quality, innovation, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`bg-white p-8 rounded-xl shadow-lg hover-lift text-center animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-orange-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
              Our Service <span className="gradient-text">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Initial discussion about your project requirements and goals.' },
              { step: '02', title: 'Planning', description: 'Detailed project planning, design, and timeline development.' },
              { step: '03', title: 'Execution', description: 'Professional execution with regular progress updates.' },
              { step: '04', title: 'Delivery', description: 'Final inspection, handover, and ongoing support.' }
            ].map((process, index) => (
              <div
                key={process.step}
                className={`text-center animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-blue-700 to-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-700 to-orange-600 text-white">
        <div className="container-custom text-center">
          <div className="animate-fadeInUp">
            <h2 className="text-responsive-lg font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Contact us today to discuss your construction needs and get a free quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free Quote
              </Link>
              <Link
                to="/booking"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;