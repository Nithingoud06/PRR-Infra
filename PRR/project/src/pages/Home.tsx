import { useState, useEffect, memo, useMemo } from 'react';
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

const Home = memo(() => {
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

  // Simplified Counter Effect for maximum performance
  useEffect(() => {
    if (statsInView) {
      const targets = {
        experience: 15,
        projects: 853,
        clients: 1000,
        awards: 25,
      };

      // Use requestAnimationFrame for better performance
      let startTime = Date.now();
      const duration = 1000; // Reduced duration

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        Object.keys(targets).forEach((key) => {
          const target = targets[key as keyof typeof targets];
          const current = Math.floor(target * progress);
          setCounters(prev => ({
            ...prev,
            [key]: current
          }));
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [statsInView]);

  const services = useMemo(() => [
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
  ], []);

  const features = useMemo(() => [
    'ISO 9001:2015 Certified',
    '24/7 Customer Support',
    'Experienced Team',
    'Quality Materials',
    'Timely Delivery',
    'Competitive Pricing',
  ], []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden parallax transform-3d"
        style={{
          backgroundImage: 'url("/PRR.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-150/60 to-orange-150/60 layer-back"></div>
        
        {/* Simplified Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 animate-float">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <Building2 className="h-8 w-8 text-orange-400" />
            </div>
          </div>
          <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <Trophy className="h-8 w-8 text-orange-400" />
            </div>
          </div>
          <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <Users className="h-8 w-8 text-orange-400" />
            </div>
          </div>
          <div className="absolute bottom-40 right-32 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <Clock className="h-8 w-8 text-orange-400" />
            </div>
          </div>
        </div>
        
        <div className="relative z-10 container-custom text-center text-white layer-front">
          <div className={`transition-all duration-1000 ${heroInView ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h1 className="text-responsive-xl font-bold mb-6 leading-tight">
              Building the Future with{' '}
              <span className="text-orange-400">Strength</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Your trusted construction partner in Hyderabad, delivering excellence in 
              concrete works, civil construction, and infrastructure development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/booking"
                className="btn-secondary group flex items-center space-x-2"
              >
                <span>Book Now</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="btn-outline group flex items-center space-x-2"
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
            <div className={`text-center transition-opacity duration-500 ${statsInView ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                {counters.experience}+
              </div>
              <div className="text-gray-300 font-medium flex items-center justify-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Years Experience</span>
              </div>
            </div>
            <div className={`text-center transition-opacity duration-500 ${statsInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.1s' }}>
              <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                {counters.projects}+
              </div>
              <div className="text-gray-300 font-medium flex items-center justify-center space-x-2">
                <Building2 className="h-5 w-5" />
                <span>Projects Completed</span>
              </div>
            </div>
            <div className={`text-center transition-opacity duration-500 ${statsInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
              <div className="text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
                {counters.clients}+
              </div>
              <div className="text-gray-300 font-medium flex items-center justify-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Happy Clients</span>
              </div>
            </div>
            <div className={`text-center transition-opacity duration-500 ${statsInView ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
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
          <div className={`text-center mb-16 transition-opacity duration-500 ${servicesInView ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Core Services</span>
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
                className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 h-80 flex flex-col items-center justify-center ${
                  servicesInView ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-blue-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center mb-6">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-blue-600 text-white hover:bg-blue-400 font-semibold py-3 px-8 rounded-lg transition-colors duration-30 group inline-flex items-center space-x-2"
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
            <div>
              <h2 className="text-responsive-lg font-bold text-gray-900 mb-6">
                Why Choose <span className="gradient-text">PRR INFRA?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 15 years of experience in the construction industry, 
                we have built a reputation for delivering high-quality projects 
                on time and within budget.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="relative">
                <img
                  src="/prr 098.jpg"
                  alt="Nithin Goud"
                  className="rounded-xl shadow-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                    <div className="flex items-center space-x-2 text-yellow-500 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-900 font-semibold">
                      "Outstanding quality and professional service!"
                    </p>
                    <p className="text-gray-600 text-sm">- Satisfied Client</p>
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
          <div>
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
                className="bg-white text-blue-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Get Free Quote
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

Home.displayName = 'Home';

export default Home;