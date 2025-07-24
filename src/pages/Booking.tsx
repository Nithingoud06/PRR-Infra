import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle,
  Building2
} from 'lucide-react';
import { sendEmail } from '../utils/emailService';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    projectBudget: '',
    projectDescription: '',
    urgency: '',
    location: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: formRef, inView: formInView } = useInView({
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

    // Send form data to backend via email
    const result = await sendEmail(formData, 'booking');
    setIsSubmitting(false);
    setIsSubmitted(result.success);

    if (result.success) {
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        preferredDate: '',
        preferredTime: '',
        projectBudget: '',
        projectDescription: '',
        urgency: '',
        location: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      // Optionally show error message (already handled by isSubmitted false)
    }
  };

  const services = [
    'Concrete Works',
    'Civil Construction',
    'Road Projects',
    'Residential Construction',
    'Commercial Construction',
    'Infrastructure Development',
    'Building Maintenance',
    'Site Preparation',
    'Consultation Only'
  ];

  const budgetRanges = [
    'Under ₹5 Lakhs',
    '₹5 - ₹15 Lakhs',
    '₹15 - ₹50 Lakhs',
    '₹50 Lakhs - ₹1 Crore',
    '₹1 - ₹5 Crores',
    'Above ₹5 Crores',
    'Prefer to discuss'
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM'
  ];

  const urgencyLevels = [
    'Not urgent - Planning phase',
    'Somewhat urgent - Within 3 months',
    'Urgent - Within 1 month',
    'Very urgent - Within 2 weeks',
    'Emergency - ASAP'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="section-padding bg-gradient-to-r from-blue-700 to-orange-600 text-white"
      >
        <div className="container-custom">
          <div className={`text-center transition-all duration-1000 ${heroInView ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <h1 className="text-responsive-xl font-bold mb-6">
              Book Your <span className="text-orange-300">Consultation</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Schedule a consultation with our construction experts. We'll discuss your project requirements 
              and provide personalized solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
              Simple <span className="gradient-text">Booking Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures you get the consultation you need quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { step: '1', title: 'Fill the Form', description: 'Provide your project details and preferred schedule.' },
              { step: '2', title: 'Confirmation', description: 'We confirm your booking and send appointment details.' },
              { step: '3', title: 'Consultation', description: 'Meet with our experts to discuss your project.' },
              { step: '4', title: 'Proposal', description: 'Receive a detailed proposal with timeline and costs.' }
            ].map((process, index) => (
              <div
                key={process.step}
                className={`text-center animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-r from-blue-700 to-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
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

      {/* Booking Form */}
      <section ref={formRef} className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className={`bg-white p-8 md:p-12 rounded-xl shadow-lg transition-all duration-800 ${formInView ? 'animate-fadeInUp' : 'opacity-0'}`}>
              <div className="text-center mb-8">
                <div className="bg-blue-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Book Your Consultation
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <p className="text-green-800">
                    Thank you! Your booking request has been submitted successfully. We'll contact you soon to confirm your appointment.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <User className="h-5 w-5 text-blue-700" />
                    <span>Personal Information</span>
                  </h3>
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
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Location *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Enter project location"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <Building2 className="h-5 w-5 text-blue-700" />
                    <span>Service Details</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type *
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        required
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
                    <div>
                      <label htmlFor="projectBudget" className="block text-sm font-medium text-gray-700 mb-2">
                        Estimated Budget
                      </label>
                      <select
                        id="projectBudget"
                        name="projectBudget"
                        value={formData.projectBudget}
                        onChange={handleInputChange}
                        className="form-input"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Urgency *
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      >
                        <option value="">Select urgency level</option>
                        {urgencyLevels.map((urgency) => (
                          <option key={urgency} value={urgency}>
                            {urgency}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Scheduling */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-blue-700" />
                    <span>Preferred Schedule</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time *
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      >
                        <option value="">Select time slot</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-blue-700" />
                    <span>Project Description</span>
                  </h3>
                  <div>
                    <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="form-textarea"
                      placeholder="Please provide details about your construction project, including scope, specific requirements, timeline expectations, and any other relevant information..."
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary group flex items-center justify-center space-x-2 mx-auto min-w-48"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-spinner"></div>
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="h-5 w-5" />
                        <span>Book Consultation</span>
                      </>
                    )}
                  </button>
                  <p className="text-sm text-gray-500 mt-3">
                    We'll contact you within 24 hours to confirm your appointment.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-responsive-lg font-bold text-gray-900 mb-4">
              What to <span className="gradient-text">Expect</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here's what happens after you book your consultation with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Initial Consultation',
                description: 'We discuss your project requirements, budget, and timeline in detail.',
                features: ['Site assessment if needed', 'Technical feasibility review', 'Initial cost estimation']
              },
              {
                title: 'Detailed Proposal',
                description: 'Receive a comprehensive proposal with project plan and accurate pricing.',
                features: ['Detailed work breakdown', 'Material specifications', 'Project timeline']
              },
              {
                title: 'Project Kickoff',
                description: 'Once approved, we begin work with regular updates and quality checks.',
                features: ['Project manager assigned', 'Regular progress updates', 'Quality assurance']
              }
            ].map((expectation, index) => (
              <div
                key={expectation.title}
                className={`bg-gray-50 p-6 rounded-xl hover-lift animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {expectation.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {expectation.description}
                </p>
                <ul className="space-y-2">
                  {expectation.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;