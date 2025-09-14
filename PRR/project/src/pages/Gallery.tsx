import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { X, ZoomIn, Calendar, MapPin } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: galleryRef, inView: galleryInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const galleryImages = [
    {
      id: 1,
      src: '/building.jpg',
      category: 'residential',
      title: 'Modern Apartment Complex',
      location: 'Banjara Hills, Hyderabad',
      date: '2023'
    },
    {
      id: 2,
      src: '/software.jpg',
      category: 'commercial',
      title: 'Corporate Office Building',
      location: 'HITEC City, Hyderabad',
      date: '2023'
    },
    {
      id: 3,
      src: '/ringroad.jpg',
      category: 'infrastructure',
      title: 'Highway Bridge Construction',
      location: 'Outer Ring Road, Hyderabad',
      date: '2022'
    },
    {
      id: 4,
      src: '/villa.jpg',
      category: 'residential',
      title: 'Luxury Villa Development',
      location: 'Jubilee Hills, Hyderabad',
      date: '2023'
    },
    {
      id: 5,
      src: '/ShoppingMallComplex.jpg',
      category: 'commercial',
      title: 'Shopping Mall Complex',
      location: 'Kukatpally, Hyderabad',
      date: '2021'
    },
    {
      id: 6,
      src: '/metro.jpg',
      category: 'infrastructure',
      title: 'Metro Station Development',
      location: 'Secunderabad, Hyderabad',
      date: '2022'
    },
    {
      id: 7,
      src: '/housing.jpg',
      category: 'residential',
      title: 'Affordable Housing Project',
      location: 'Gachibowli, Hyderabad',
      date: '2023'
    },
    {
      id: 8,
      src: '/war.jpg',
      category: 'commercial',
      title: 'Industrial Warehouse',
      location: 'Medchal, Hyderabad',
      date: '2022'
    },
    {
      id: 9,
      src: '/road.jpg',
      category: 'infrastructure',
      title: 'Road Development Project',
      location: 'Cyberabad, Hyderabad',
      date: '2023'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'infrastructure', label: 'Infrastructure' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const selectedImageData = selectedImage 
    ? galleryImages.find(img => img.id === selectedImage)
    : null;

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
              Project <span className="text-orange-300">Gallery</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Take a visual journey through our completed projects and see the quality 
              and craftsmanship that defines PRR INFRA PROJECTS.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.value
                    ? 'bg-blue-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={galleryRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group relative overflow-hidden rounded-xl shadow-lg hover-lift cursor-pointer transition-all duration-800 ${
                  galleryInView ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(image.id)}
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  width={400}
                  height={256}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-white/90 mb-1">
                      <MapPin className="h-4 w-4" />
                      <span>{image.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-white/90">
                      <Calendar className="h-4 w-4" />
                      <span>{image.date}</span>
                    </div>
                  </div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                      <ZoomIn className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors duration-300 z-10"
            >
              <X className="h-6 w-6" />
            </button>
            
            <OptimizedImage
              src={selectedImageData.src}
              alt={selectedImageData.title}
              className="max-w-full max-h-full object-contain rounded-lg"
              priority={true}
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedImageData.title}
              </h3>
              <div className="flex items-center space-x-4 text-white/90">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{selectedImageData.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{selectedImageData.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
              Our Work in <span className="gradient-text">Numbers</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every image tells a story of dedication, quality, and successful project completion.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '250+', label: 'Projects Photographed' },
              { number: '50+', label: 'Different Locations' },
              { number: '15+', label: 'Years of Experience' },
              { number: '1000+', label: 'Happy Moments Captured' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center bg-gray-50 p-6 rounded-xl hover-lift animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">
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
    </div>
  );
};

export default Gallery;