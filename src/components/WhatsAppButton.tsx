import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const [isOnline, setIsOnline] = useState(true);
  
  const whatsappNumber = '919666903335';
  const defaultMessages = [
    'Hello! I need information about your construction services.',
    'I would like to get a quote for my project.',
    'Can you help me with concrete works?',
    'I want to book a consultation.',
  ];

  // Simulate online status
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.1); // 90% online
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = (customMessage = '') => {
    const finalMessage = customMessage || message || defaultMessages[0];
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;
    
    // Open WhatsApp
    window.open(url, '_blank');
    
    // Close chat widget
    setShowChat(false);
    setMessage('');
    
    // Show success feedback
    const button = document.querySelector('.whatsapp-button');
    if (button) {
      button.classList.add('animate-pulse');
      setTimeout(() => {
        button.classList.remove('animate-pulse');
      }, 2000);
    }
  };

  const handleQuickMessage = (quickMessage) => {
    handleWhatsAppClick(quickMessage);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Widget */}
      {showChat && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-fadeInUp">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                    isOnline ? 'bg-green-400' : 'bg-gray-400'
                  }`}></div>
                </div>
                <div>
                  <h3 className="font-semibold">PRR INFRA Support</h3>
                  <p className="text-xs text-green-100">
                    {isOnline ? 'Online now' : 'Usually replies quickly'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Chat Content */}
          <div className="p-4">
            <div className="mb-4">
              <div className="bg-gray-100 p-3 rounded-lg mb-3">
                <p className="text-sm text-gray-700">
                  👋 Hi there! How can we help you with your construction needs?
                </p>
              </div>
            </div>

            {/* Quick Messages */}
            <div className="space-y-2 mb-4">
              <p className="text-xs text-gray-500 font-medium">Quick messages:</p>
              {defaultMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickMessage(msg)}
                  className="w-full text-left p-2 text-sm bg-gray-50 hover:bg-green-50 hover:text-green-700 rounded-lg transition-colors duration-200 border border-transparent hover:border-green-200"
                >
                  {msg}
                </button>
              ))}
            </div>

            {/* Custom Message */}
            <div className="space-y-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                rows={3}
              />
              <button
                onClick={() => handleWhatsAppClick()}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main WhatsApp Button */}
      <div
        className="relative whatsapp-button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip */}
        <div
          className={`absolute bottom-16 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all duration-300 transform ${
            isHovered && !showChat
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>

        {/* WhatsApp Button */}
        <button
          onClick={() => setShowChat(!showChat)}
          className={`relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 group ${
            showChat ? 'bg-green-600 scale-110' : ''
          }`}
          aria-label="Open WhatsApp chat"
        >
          <MessageCircle className="h-7 w-7" />
          
          {/* Online indicator */}
          {isOnline && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
          )}
          
          {/* Ripple effect */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-30"></div>
        </button>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-green-400 rounded-full opacity-60 animate-float`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + i * 0.5}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;