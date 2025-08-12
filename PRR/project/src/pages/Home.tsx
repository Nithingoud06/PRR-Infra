import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { 
  Building2, 
  Users, 
  Trophy, 
  Clock, 
  ArrowRight, 
  CheckCircle,
  Star,
  PlayCircle
} from 'lucide-react';

const Home = () => {
  const [counters, setCounters] = useState({
    experience: 2,
    projects: 0,
    clients: 0,
    awards: 0,
  });

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Animated Counter Effect
  useEffect(() => {
    if (statsInView) {
      const targets = {
        experience: 15,
        projects: 250,
        clients: 150,
        awards: 25,
      };

      const duration = 2000;
      const increment = 50;

      Object.keys(targets).forEach((key) => {
        let current = 0;
        const target = targets[key as keyof typeof targets];
        const step = target / (duration / increment);

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, increment);
      });
    }
  }, [statsInView]);

  const services = [
    {
      icon: Building2,
      title: 'Concrete Works',
      description: 'High-quality concrete solutions for residential and commercial projects.',
    },
    {
      icon: Users,
      title: 'Civil Construction',
      description: 'Complete civil engineering and construction services.',
    },
    {
      icon: Trophy,
      title: 'Road Projects',
      description: 'Professional road construction and infrastructure development.',
    },
  ];

  const features = [
    'ISO 9001:2015 Certified',
    '24/7 Customer Support',
    'Experienced Team',
    'Quality Materials',
    'Timely Delivery',
    'Competitive Pricing',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden parallax transform-3d"
        style={{
          backgroundImage: 'linear-gradient(rgba(47, 96, 193, 0.15), rgba(249, 116, 22, 0)), url("/PRR.jpg")',
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-orange-600/60 layer-back"></div> */}
        
        {/* 3D Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 animate-rotate3d">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover-3d animate-glowing">
              <Building2 className="h-12 w-12 text-orange-400" />
            </div>
          </div>
          <div className="absolute top-32 right-16 animate-bounce3d" style={{ animationDelay: '1s' }}>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover-3d animate-morphing">
              <Trophy className="h-12 w-12 text-orange-400" />
            </div>
          </div>
          <div className="absolute bottom-32 left-20 animate-flip3d" style={{ animationDelay: '2s' }}>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover-3d">
              <Users className="h-12 w-12 text-orange-400" />
            </div>
          </div>
          <div className="absolute bottom-40 right-32 animate-cube3d" style={{ animationDelay: '0.5s' }}>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover-3d">
              <Clock className="h-12 w-12 text-orange-400" />
            </div>
          </div>
        </div>
        
        <div className="relative z-10 container-custom text-center text-white layer-front">
          <div className={`transition-all duration-1000 ${heroInView ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h1 className="text-responsive-xl font-bold mb-6 leading-tight animate-textGlow">
              Building the Future with{' '}
              <span className="text-orange-400 animate-bounce3d inline-block transform-3d">Strength</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Your trusted construction partner in Hyderabad, delivering excellence in 
              concrete works, civil construction, and infrastructure development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/booking"
                className="btn-secondary btn-3d group flex items-center space-x-2 hover-lift-3d"
              >
                <span>Book Now</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline btn-3d group flex items-center space-x-2 hover-lift-3d"
              >
                <span>Get in Touch</span>
                <PlayCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={`text-center transition-all duration-800 hover-3d ${statsInView ? 'animate-slideInRotate' : 'opacity-0'}`}>
              <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                {counters.experience}+
              </div>
              <div className="text-gray-300 font-medium flex items-center justify-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Years Experience</span>
              </div>
            </div>
            <div className={`text-center transition-all duration-800 hover-3d ${statsInView ? 'animate-slideInRotate' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                {counters.projects}+
              </div>
              <div className="text-gray-300 font-medium flex items-center justify-center space-x-2">
                <Building2 className="h-5 w-5" />
                <span>Projects Completed</span>
              </div>
            </div>
            <div className={`text-center transition-all duration-800 hover-3d ${statsInView ? 'animate-slideInRotate' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                {counters.clients}+
              </div>
              <div className="text-gray-300 font-medium flex items-center justify-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Happy Clients</span>
              </div>
            </div>
            <div className={`text-center transition-all duration-800 hover-3d ${statsInView ? 'animate-slideInRotate' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                {counters.awards}+
              </div>
              <div className="text-gray-300 font-medium flex items-center justify-center space-x-2">
                <Trophy className="h-5 w-5" />
                <span>Awards Won</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section ref={servicesRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className={`text-center mb-16 transition-all duration-800 ${servicesInView ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
              Our <span className="gradient-text-3d animate-textGlow">Core Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive construction solutions with a focus on quality, 
              innovation, and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flip-card h-80 transition-all duration-800 ${
                  servicesInView ? 'animate-zoomInRotate' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center justify-center">
                    <div className="bg-blue-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 animate-bounce3d">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-center">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Back */}
                  <div className="flip-card-back bg-gradient-to-br from-blue-700 to-orange-600 p-8 rounded-xl shadow-lg text-white flex flex-col items-center justify-center">
                    <div className="bg-white/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 animate-rotate3d">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-center">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-center mb-4">
                      Professional {service.title.toLowerCase()} services with quality guarantee
                    </p>
                    <Link
                      to="/services"
                      className="bg-white text-blue-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="btn-primary btn-3d group inline-flex items-center space-x-2 hover-lift-3d"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft transform-3d">
              <h2 className="text-responsive-lg font-bold text-gray-900 mb-6">
                Why Choose <span className="gradient-text-3d animate-textGlow">PRR INFRA?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 15 years of experience in the construction industry, 
                we have built a reputation for delivering high-quality projects 
                on time and within budget.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center space-x-3 animate-fadeInUp hover-tilt"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fadeInRight transform-3d">
              <div className="relative hover-3d">
                <img
                  src="/prr 098.jpg"
                  alt="Nithin Goud"
                  className="rounded-xl shadow-2xl w-full h-[400px] object-cover animate-glowing"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-3d p-4 rounded-lg hover-lift-3d">
                    <div className="flex items-center space-x-2 text-yellow-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-white font-semibold">
                      "Outstanding quality and professional service!"
                    </p>
                    <p className="text-white/80 text-sm">- Satisfied Client</p>
                  </div>
                </div>
              </div>
            </div>
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
              Get in touch with our expert team today for a free consultation 
              and quote for your construction needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg btn-3d hover-lift-3d"
              >
                Get Free Quote
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold py-3 px-8 rounded-lg btn-3d hover-lift-3d"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;