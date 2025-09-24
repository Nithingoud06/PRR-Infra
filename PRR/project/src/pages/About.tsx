import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Target, 
  Eye, 
  Users, 
  Award, 
  Clock, 
  Shield,
  CheckCircle,
  Star
} from 'lucide-react';

const About = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: valuesRef, inView: valuesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We never compromise on quality and always deliver excellence in every project.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect deadlines and ensure all projects are completed on time.',
    },
    {
      icon: Shield,
      title: 'Safety Standards',
      description: 'Maintaining highest safety standards is our top priority in all operations.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our skilled professionals bring years of experience to every project.',
    },
  ];

  const achievements = [
    { number: '15+', text: 'Years of Excellence' },
    { number: '853+', text: 'Projects Completed' },
    { number: '1000+', text: 'Satisfied Clients' },
    { number: '25+', text: 'Industry Awards' },
  ];

  const team = [
    {
      name: 'Pradeep Reddy',
      position: 'Founder & CEO',
      description: 'With over 20 years in construction industry, leading PRR INFRA PROJECTS to excellence.',
      
    },
    {
      name: 'Kiran P',
      position: 'Chief Engineer',
      description: 'Expert in civil engineering and project management with 15+ years of experience.',
      
    },
    {
      name: 'Shyam Lal',
      position: 'Operations Manager',
      description: 'Ensures smooth execution of all projects with meticulous planning and coordination.',
    
    },
    {
      name: 'Ravali P',
      position: 'Sales Manager',
      description: 'Leading our sales team with expertise in client relations and business development.',
  
    },
    {
      name: 'Sirivennela',
      position: 'Sales Executive',
      description: 'Specialized in customer engagement and project consultation services.',
      
    },
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
              About <span className="text-orange-300">PRR INFRA PROJECTS</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Building dreams into reality since 2009, we are Hyderabad's trusted 
              construction partner, delivering excellence in every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-responsive-lg font-bold text-gray-900 mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, PRR INFRA PROJECTS began as a small construction 
                  company with a big vision - to transform the construction landscape 
                  in Hyderabad through quality, innovation, and unwavering commitment 
                  to excellence.
                </p>
                <p>
                  Over the years, we have grown from a local contractor to a 
                  recognized name in the construction industry, completing over 250 
                  projects ranging from residential buildings to large infrastructure 
                  developments.
                </p>
                <p>
                  Our success is built on the foundation of trust, quality workmanship, 
                  and customer satisfaction. Every project we undertake reflects our 
                  commitment to building not just structures, but lasting relationships 
                  with our clients.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={achievement.text}
                    className="text-center animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl font-bold text-orange-500 mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {achievement.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fadeInRight">
              <div className="relative">
                <img
                  src="/prr3.jpg"
                  alt="Construction Progress"
                  className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fadeInLeft">
              <div className="bg-white p-8 rounded-xl shadow-lg hover-lift">
                <div className="bg-blue-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver exceptional construction services that exceed client expectations 
                  while maintaining the highest standards of quality, safety, and 
                  environmental responsibility. We strive to build sustainable structures 
                  that contribute positively to our community.
                </p>
              </div>
            </div>
            <div className="animate-fadeInRight">
              <div className="bg-white p-8 rounded-xl shadow-lg hover-lift">
                <div className="bg-orange-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted and preferred construction company in India, 
                  known for innovation, quality, and customer satisfaction. We envision 
                  a future where our projects contribute to building stronger, more 
                  sustainable communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={valuesRef} className="section-padding bg-white">
        <div className="container-custom">
          <div className={`text-center mb-16 transition-all duration-800 ${valuesInView ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and shape our approach to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`text-center bg-gray-50 p-6 rounded-xl hover-lift transition-all duration-800 ${
                  valuesInView ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-blue-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
              Meet Our <span className="gradient-text">Leadership Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced leaders bring decades of expertise to guide every project to success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`bg-white p-6 rounded-xl shadow-lg hover-lift text-center animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-orange-500 bg-gray-200 flex items-center justify-center">
                    <div className="text-gray-500 text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-medium mb-3">+
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
              <span className="gradient-text">Certifications</span> & Awards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is recognized through various certifications and awards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl text-center hover-lift animate-fadeInUp">
              <Award className="h-16 w-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                ISO 9001:2015
              </h3>
              <p className="text-gray-600">
                Quality Management System Certification
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl text-center hover-lift animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <Shield className="h-16 w-16 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Safety Excellence
              </h3>
              <p className="text-gray-600">
                Zero Accident Safety Award 2023
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl text-center hover-lift animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <Star className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Best Contractor
              </h3>
              <p className="text-gray-600">
                Hyderabad Construction Excellence Award
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;