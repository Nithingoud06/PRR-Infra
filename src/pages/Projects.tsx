import { useState, memo, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Users, 
  Filter,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';

const Projects = memo(() => {
  const [activeFilter, setActiveFilter] = useState('all');

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: projectsRef, inView: projectsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = useMemo(() => [
    {
      id: 1,
      title: 'Green Valley Residences',
      category: 'residential',
      location: 'Banjara Hills, Hyderabad',
      completedDate: '2023',
      client: 'Green Valley Developers',
      description: 'Luxury residential complex with 150 apartments featuring modern amenities.',
      image: '/greenv.png',
      features: ['150 Apartments', 'Swimming Pool', 'Gym & Spa', 'Underground Parking']
    },
    {
      id: 2,
      title: 'Tech Park Phase 2',
      category: 'commercial',
      location: 'HITEC City, Hyderabad',
      completedDate: '2023',
      client: 'TechCorp Solutions',
      description: 'State-of-the-art commercial complex with modern office spaces.',
      image: '/hitech.png',
      features: ['50,000 sq ft', 'LEED Certified', 'Smart Building', 'Conference Centers']
    },
    {
      id: 3,
      title: 'Highway Bridge Construction',
      category: 'infrastructure',
      location: 'Outer Ring Road, Hyderabad',
      completedDate: '2022',
      client: 'HMDA',
      description: 'Major bridge construction project improving city connectivity.',
      image: '/bridge.jpg',
      features: ['2.5 km Length', 'Steel Structure', '6 Lanes', 'Seismic Resistant']
    },
    {
      id: 4,
      title: 'Metro Station Complex',
      category: 'infrastructure',
      location: 'Secunderabad, Hyderabad',
      completedDate: '2022',
      client: 'L&T Metro Rail',
      description: 'Modern metro station with integrated commercial spaces.',
      image: '/metro.jpg',
      features: ['Underground Station', 'Commercial Complex', 'Parking Facility', 'Accessibility Features']
    },
    {
      id: 5,
      title: 'Sunrise Apartments',
      category: 'residential',
      location: 'Gachibowli, Hyderabad',
      completedDate: '2023',
      client: 'Sunrise Builders',
      description: 'Affordable housing project with all modern amenities.',
      image: '/building.jpg',
      features: ['200 Units', 'Playground', 'Community Hall', 'Security Systems']
    },
    {
      id: 6,
      title: 'Shopping Mall Complex',
      category: 'commercial',
      location: 'Kukatpally, Hyderabad',
      completedDate: '2021',
      client: 'Retail Giants Pvt Ltd',
      description: 'Large-scale shopping complex with entertainment facilities.',
      image: '/ShoppingMallComplex.jpg',
      features: ['3 Floors', 'Food Court', 'Multiplex', '500 Parking Spaces']
    }
  ], []);

  const filterOptions = useMemo(() => [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'infrastructure', label: 'Infrastructure' }
  ], []);

  const filteredProjects = useMemo(() => 
    activeFilter === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeFilter),
    [activeFilter, projects]
  );

  return (
    <div className="min-h-screen pt-10">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="section-padding bg-gradient-to-r from-blue-700 to-orange-600 text-white"
      >
        <div className="container-custom">
          <div className={`text-center transition-opacity duration-500 ${heroInView ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-responsive-xl font-bold mb-6">
              Our <span className="text-orange-300">Projects</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful construction projects that showcase 
              our expertise, quality, and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600 font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setActiveFilter(option.value)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === option.value
                      ? 'bg-blue-700 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  projectsInView ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden">
                  <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    width={400}
                    height={192}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm">Completed: {project.completedDate}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm">Client: {project.client}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature) => (
                        <div key={feature} className="text-sm text-gray-600">
                          • {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                    <span>View Details</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
              Project <span className="gradient-text">Statistics</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself with successful project completions across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '853+', label: 'Total Projects', icon: Building2 },
              { number: '15+', label: 'Years Experience', icon: Calendar },
              { number: '1000+', label: 'Happy Clients', icon: Users },
              { number: '25+', label: 'Awards Won', icon: Building2 }
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-orange-500 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
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
              Let's discuss your construction needs and create something amazing together.
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
});

Projects.displayName = 'Projects';

export default Projects;