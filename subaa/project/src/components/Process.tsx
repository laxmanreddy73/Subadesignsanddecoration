import React from 'react';
import { MessageCircle, PenTool, Calendar, Sparkles, PartyPopper, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Process = () => {
  // Color palette matching Services component
  const colors = {
    champagne: {
      100: "#fdf6e3",
      200: "#f7e6b7",
      300: "#f1d78b",
      400: "#e8c547",
      500: "#d4af37",
      600: "#b8941f",
    },
    blush: {
      100: "#fce4ec",
      200: "#f8bbd0",
      300: "#f48fb1",
      400: "#f06292",
      500: "#ec407a",
      600: "#d81b60",
    },
    roseGold: {
      100: "#fae9e5",
      200: "#f5d3cc",
      300: "#f0bdb3",
      400: "#e0bfb8",
      500: "#d4a59a",
      600: "#c68b7c",
    }
  };

  // WhatsApp contact function
  const contactOnWhatsApp = () => {
    window.open(`https://wa.me/919035948632?text=Hi%20there,%20I'm%20interested%20in%20your%20wedding%20services`, '_blank');
  };


  const steps = [
    {
      icon: MessageCircle,
      title: 'Initial Consultation',
      description: 'We discuss your vision, preferences, and budget to understand your dream wedding',
      color: 'blush',
      image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
    },
    {
      icon: PenTool,
      title: 'Design & Planning',
      description: 'Our designers create detailed plans and mood boards tailored to your style',
      color: 'champagne',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      icon: Calendar,
      title: 'Timeline Creation',
      description: 'We develop a comprehensive timeline ensuring every detail is perfectly coordinated',
      color: 'roseGold',
      image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      icon: Sparkles,
      title: 'Setup & Styling',
      description: 'Our team transforms your venue with exquisite decorations and attention to detail',
      color: 'blush',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    },
    {
      icon: PartyPopper,
      title: 'Your Perfect Day',
      description: 'Relax and enjoy your magical celebration while we ensure everything runs smoothly',
      color: 'champagne',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="relative py-32 overflow-hidden -mt-48" style={{ 
      background: `linear-gradient(white 0%, ${colors.champagne[100]} 100%)`
    }}>
      {/* Decorative elements */}
      <div 
        className="absolute top-0 left-0 w-[30rem] h-[30rem] rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background: `radial-gradient(${colors.champagne[300]}, transparent 70%)`,
          filter: 'blur(80px)'
        }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-[25rem] h-[25rem] rounded-full opacity-5 translate-x-1/2 translate-y-1/2 pointer-events-none"
        style={{
          background: `radial-gradient(${colors.blush[300]}, transparent 70%)`,
          filter: 'blur(60px)'
        }}
      ></div>

      <div className="max-w-8xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-center mb-28"
        >
          <div className="inline-block relative">
            <Sparkles 
              className="absolute -top-8 -left-8 w-12 h-12 animate-pulse"
              style={{ color: colors.champagne[400] }} 
            />
            <Sparkles 
              className="absolute -bottom-6 -right-6 w-10 h-10 animate-pulse"
              style={{ 
                color: colors.blush[400],
                animationDelay: '0.5s'
              }} 
            />
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight relative">
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(45deg, ${colors.champagne[600]}, ${colors.blush[600]})`
                }}
              >
                Our Golden
              </span>
              <br />
              <span className="text-gray-800">Wedding Process</span>
            </h2>
          </div>
          <div 
            className="w-40 h-1.5 mx-auto mb-10 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${colors.champagne[400]}, ${colors.blush[400]})`
            }}
          ></div>
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto font-light"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { delay: 0.3 }
            }}
            viewport={{ once: true }}
          >
            From initial consultation to your perfect day, we guide you through every step of creating your <span 
              className="font-medium"
              style={{ color: colors.champagne[600] }}
            >dream wedding</span>
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1.5 transform -translate-y-1/2" 
            style={{
              background: `linear-gradient(90deg, ${colors.blush[200]}, ${colors.champagne[200]}, ${colors.roseGold[300]})`,
              boxShadow: `0 0 10px rgba(232, 197, 71, 0.3)`
            }}>
          </div>
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-1.5" 
            style={{
              background: `linear-gradient(to bottom, ${colors.blush[200]}, ${colors.champagne[200]}, ${colors.roseGold[300]})`,
              boxShadow: `0 0 10px rgba(232, 197, 71, 0.3)`
            }}>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colorMap = {
                blush: colors.blush,
                champagne: colors.champagne,
                roseGold: colors.roseGold
              };
              const color = colorMap[step.color as keyof typeof colorMap];

              return (
                <motion.div 
                  key={index} 
                  variants={item}
                  className="relative"
                >
                  <div className="flex md:flex-col items-center md:items-center text-center h-full">
                    {/* Step Card */}
                    <div className="relative h-full w-full bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden group"
                      style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${step.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'overlay'
                      }}
                    >
                      <div 
                        className="absolute top-0 left-0 w-full h-1"
                        style={{ background: color[500] }}
                      ></div>

                      {/* Icon Circle */}
                      <div className={`
                        relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center 
                        mx-auto mb-6 transition-transform duration-300 group-hover:scale-110
                      `}
                        style={{
                          backgroundColor: color[100],
                          color: color[600],
                          boxShadow: `0 4px 15px ${color[200]}`
                        }}
                      >
                        <Icon className="h-8 w-8 md:h-10 md:w-10" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 md:flex-none">
                        <h3 className="text-xl md:text-2xl font-serif font-semibold text-gray-800 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Step Number */}
                      <div className="hidden md:block absolute -top-3 -right-3 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-sm font-bold"
                        style={{ color: color[600] }}>
                        {index + 1}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }}
        viewport={{ once: true }}
        className="text-center mt-28"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={contactOnWhatsApp}  // Changed to use WhatsApp function
          className="relative overflow-hidden px-16 py-6 rounded-full font-medium text-lg shadow-xl group"
          style={{
            background: `linear-gradient(45deg, ${colors.champagne[500]}, ${colors.blush[500]})`,
            color: 'white'
          }}
        >
          <span className="relative z-10 flex items-center justify-center">
            <Phone className="w-6 h-6 mr-3" />  {/* Changed from MessageCircle to Phone */}
            Begin Your Journey
          </span>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-white bg-opacity-10"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/gold-scale.png')] opacity-10"></div>
          </div>
        </motion.button>
        <p 
          className="mt-8 text-sm"
          style={{ color: colors.champagne[600] }}
        >
          Limited availability for 2024-2025 weddings
        </p>
      </motion.div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Process;