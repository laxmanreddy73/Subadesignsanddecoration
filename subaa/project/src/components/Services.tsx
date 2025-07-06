import React from 'react';
import { motion } from 'framer-motion';
import {
  Church, Utensils, Music, Camera, Flower2, Crown, Calendar,
  Users, Mic, Gift, Clock, Phone, Sparkles, Heart, Gem,
  MapPin, Disc, BookOpen, ChevronRight, Settings, Coffee,
  Scissors, Smile, Video, Bell, Mail, Watch, Award, Zap,
  Diamond, Star, Palette, VenetianMask, Castle, Home, 
  Film, Brush, User, Headphones, Image, Mic2, Theater
} from 'lucide-react';

const Services = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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

  // Color palette matching hero section
  const colors = {
    champagne: {
      50: "#fefdf8",
      100: "#fdf6e3",
      200: "#f7e6b7",
      300: "#f1d78b",
      400: "#e8c547",
      500: "#d4af37",
      600: "#b8941f",
      700: "#9a7c1a",
      800: "#7d6516",
      900: "#614f12"
    },
    cream: {
      50: "#FFFCF5",
      100: "#FFF8EB",
      200: "#FFF2D6",
    },
    accent: {
      roseGold: "#E0BFB8",
      platinum: "#E5E4E2",
    },
    blush: {
      400: "#f8b4c4",
      600: "#e91e63"
    }
  };

  // Hero section images
  const heroImages = {
    main: "https://res.cloudinary.com/djex6hliw/image/upload/v1751038841/flv16ko3frkbck7e7fdl.jpg",
    haldi: "https://i.postimg.cc/ZRD8nmLR/Screenshot-2025-06-27-234725.png",
    ceremony: "https://i.postimg.cc/Zq6KszRQ/pexels-dk121-3865895.jpg",
    reception: "https://i.postimg.cc/N0GBD93K/pexels-abhishek-nigam-582276386-30482897.jpg",
    sangeet: "https://i.postimg.cc/pL2pw7D1/pexels-anish-bindoriya-1957073-28200149.jpg",
    mehendi: "https://i.postimg.cc/8P8Hx3JZ/mehendi-artist.jpg",
    catering: "https://i.postimg.cc/8zV7JQJX/wedding-catering.jpg",
    decor: "https://i.postimg.cc/8C4bJYyL/wedding-decor.jpg",
    makeup: "https://i.postimg.cc/8zV7JQJX/bridal-makeup.jpg",
    invitations: "https://i.postimg.cc/8zV7JQJX/wedding-invitations.jpg",
    traditional: "https://i.postimg.cc/Zq6KszRQ/pexels-dk121-3865895.jpg",
    vedic: "https://i.postimg.cc/Zq6KszRQ/pexels-dk121-3865895.jpg",
    attire: "https://i.postimg.cc/N0GBD93K/pexels-abhishek-nigam-582276386-30482897.jpg"
  };

  // Service Data - Expanded with all requested services
  const weddingServices = {
    planning: [
      {
        icon: <Calendar className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Full Wedding Planning",
        description: "Comprehensive 12-month planning with our luxury wedding designers",
        highlight: "Includes 3 venue visits with helicopter transfers",
        premium: true,
        image: "https://i.postimg.cc/HsBmRTbJ/pexels-fliqaindia-30169488.jpg"
      },
      {
        icon: <Castle className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Venue Selection",
        description: "Access to exclusive palaces and five-star resorts worldwide",
        highlight: "Private showings before public availability",
        premium: true,
        image: "https://i.postimg.cc/pL2pw7D1/pexels-anish-bindoriya-1957073-28200149.jpg"
      },
      {
        icon: <BookOpen className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Custom Timeline",
        description: "Minute-by-minute orchestration with contingency planning",
        highlight: "Dedicated timeline manager on wedding day",
        premium: false,
        image: heroImages.ceremony
      }
    ],
    photography: [
      {
        icon: <Camera className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Premium Photography",
        description: "16-hour coverage with 4 photographers and 2 videographers",
        highlight: "Leica medium format cameras for ultimate quality",
        premium: false,
        image:"https://i.postimg.cc/Zq6KszRQ/pexels-dk121-3865895.jpg"
      },
      {
        icon: <Image className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Candid Photography",
        description: "Natural, unposed moments captured beautifully",
        highlight: "Includes pre-wedding shoot",
        premium: false,
        image: "https://i.postimg.cc/Zq6KszRQ/pexels-dk121-3865895.jpg"
      },
      {
        icon: <Camera className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Photo Booths",
        description: "Interactive photo stations with instant prints",
        highlight: "Custom themed backdrops available",
        premium: false,
        image: heroImages.reception
      }
    ],
    videography: [
      {
        icon: <Video className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Cinematic Wedding Films",
        description: "Hollywood-style wedding film with drone and underwater footage",
        highlight: "Director's cut with behind-the-scenes documentary",
        premium: true,
        image: heroImages.reception
      },
      {
        icon: <Film className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Sangeet & Reception Films",
        description: "Professional coverage of all pre-wedding events",
        highlight: "Same-day edit available",
        premium: false,
        image: "https://i.postimg.cc/Zq6KszRQ/pexels-dk121-3865895.jpg"
      },
      {
        icon: <Video className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Same Day Edit",
        description: "3-5 minute highlight film shown at reception",
        highlight: "Includes drone footage",
        premium: true,
        image: heroImages.reception
      }
    ],
    entertainment: [
      {
        icon: <Music className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Live Bands & DJs",
        description: "Top international performers and celebrity DJs",
        highlight: "Custom playlist creation",
        premium: true,
        image: heroImages.reception
      },
      {
        icon: <Mic className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Emcee Services",
        description: "Professional wedding hosts in multiple languages",
        highlight: "Custom script writing",
        premium: false,
        image: heroImages.reception
      },
      {
        icon: <Users className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Choreographers",
        description: "Bollywood and contemporary dance specialists",
        highlight: "Group dance coordination",
        premium: false,
        image: heroImages.sangeet
      }
    ],
    decor: [
      {
        icon: <Flower2 className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Themed Wedding Decor",
        description: "Complete venue transformation with custom themes",
        highlight: "3D rendering of design concepts",
        premium: true,
        image: "https://i.postimg.cc/pL2pw7D1/pexels-anish-bindoriya-1957073-28200149.jpg"
      },
      {
        icon: <Home className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Stage Setups",
        description: "Grand stages with LED walls and special effects",
        highlight: "Hydraulic lift options available",
        premium: true,
        image:"https://i.postimg.cc/ZRD8nmLR/Screenshot-2025-06-27-234725.png"
      },
      {
        icon: <Sparkles className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Lighting Design",
        description: "Professional lighting for ambiance and drama",
        highlight: "Intelligent moving lights",
        premium: false,
        image: heroImages.reception
      }
    ],
    catering: [
      {
        icon: <Utensils className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Gourmet Catering",
        description: "5-star culinary experiences with global cuisines",
        highlight: "Live cooking stations",
        premium: true,
        image:"https://i.postimg.cc/N0GBD93K/pexels-abhishek-nigam-582276386-30482897.jpg"
      },
      {
        icon: <Coffee className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Beverage Services",
        description: "Premium bar setups with mixologists",
        highlight: "Signature cocktail creation",
        premium: false,
        image: heroImages.reception
      },
      {
        icon: <Gift className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Wedding Cake",
        description: "Custom-designed cakes with premium ingredients",
        highlight: "Live cake decorating demonstration",
        premium: false,
        image: heroImages.reception
      }
    ],
    preWedding: [
      {
        icon: <Brush className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Haldi & Mehendi",
        description: "Complete traditional ceremony setups",
        highlight: "Organic haldi and henna provided",
        premium: false,
        image: heroImages.haldi
      },
      {
        icon: <User className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Mehendi Artists",
        description: "Award-winning henna artists with custom designs",
        highlight: "Bridal mehndi with gold/silver accents",
        premium: true,
        image: heroImages.mehendi
      },
      {
        icon: <Music className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Sangeet Packages",
        description: "Complete event planning for musical night",
        highlight: "Includes sound, lighting and stage",
        premium: true,
        image: heroImages.sangeet
      }
    ],
    traditions: [
       {
        icon: <Theater className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Traditional Ceremonies",
        description: "Expert guidance for cultural rituals",
        highlight: "Includes rare regional customs",
        premium: false,
        image: heroImages.traditional
      },
      {
        icon: <Mic2 className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Vedic Chanting Specialists",
        description: "Authentic pandits for traditional ceremonies",
        highlight: "Sanskrit scholars available",
        premium: true,
        image: heroImages.vedic
      },
      {
        icon: <Palette className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Regional Attire Styling",
        description: "Heritage clothing consultation",
        highlight: "Antique jewelry pairings",
        premium: false,
        image: heroImages.attire
      }
    ],
        
    bridal: [
      {
        icon: <Gem className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Bridal Makeup",
        description: "Professional artists with luxury cosmetics",
        highlight: "Trial sessions included",
        premium: false,
        image:"https://i.postimg.cc/N0GBD93K/pexels-abhishek-nigam-582276386-30482897.jpg"
      },
      {
        icon: <Mail className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Invitation Cards",
        description: "Custom-designed wedding stationery",
        highlight: "Foil stamping and laser cutting options",
        premium: false,
        image: heroImages.invitations
      },
      {
        icon: <Diamond className="w-6 h-6" style={{ color: colors.champagne[600] }} />,
        title: "Jewelry & Accessories",
        description: "Bridal jewelry consultation and rentals",
        highlight: "Heirloom pieces available",
        premium: true,
        image: "https://i.postimg.cc/Zq6KszRQ/pexels-dk121-3865895.jpg"
      }
    ]
  };

  const premiumPackages = [
    {
      name: "Imperial Majesty",

      features: [
        "24-month platinum planning service",
        "International palace venues",
        "Celebrity headline performer",
        "Unlimited guest capacity",
        "24/7 personal wedding concierge"
      ],
      icon: <Crown className="w-10 h-10" style={{ color: colors.champagne[500] }} />,
      bgColor: `bg-gradient-to-br from-champagne-400 to-champagne-600`,
      image: heroImages.reception
    },
    {
      name: "Platinum Elegance",

      features: [
        "18-month gold planning service",
        "Five-star resort venues",
        "Live orchestra with soloists",
        "Up to 500 guests",
        "Dedicated event manager"
      ],
      icon: <Award className="w-10 h-10" style={{ color: colors.champagne[500] }} />,
      bgColor: `bg-gradient-to-br from-champagne-400 to-champagne-600`,
      image: heroImages.ceremony
    },
    {
      name: "Golden Opulence",
      features: [
        "12-month silver planning service",
        "Luxury hotel venues",
        "Premium DJ entertainment",
        "Up to 250 guests",
        "Wedding day coordinator"
      ],
      icon: <Zap className="w-10 h-10" style={{ color: colors.champagne[500] }} />,
      bgColor: `bg-gradient-to-br from-rosegold-400 to-rosegold-600`,
      image: heroImages.haldi
    }
  ];

  // WhatsApp contact function
  const contactOnWhatsApp = () => {
    window.open(`https://wa.me/9035948632?text=Hi%20there,%20I'm%20interested%20in%20your%20wedding%20services`, '_blank');
  };

  return (
    <section 
      id="services" 
      className="relative py-32 overflow-hidden -mt-24"
      style={{ 
        background: `linear-gradient(${colors.cream[50]} 0%, ${colors.cream[100]} 50%, white 100%)`
      }}
    >
      {/* Decorative elements matching hero */}
      <div 
        className="absolute top-0 left-0 w-[40rem] h-[40rem] rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          background: `radial-gradient(${colors.champagne[300]}, transparent 70%)`,
          filter: 'blur(100px)'
        }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-[35rem] h-[35rem] rounded-full opacity-5 translate-x-1/2 translate-y-1/2 pointer-events-none "
        style={{
          background: `radial-gradient(${colors.champagne[400]}, transparent 70%)`,
          filter: 'blur(80px)'
        }}
      ></div>
      
      {/* Floating sparkles like hero */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Sparkles 
            key={i}
            className="absolute animate-float"
            style={{
              color: colors.champagne[400],
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.7
            }}
          />
        ))}
      </div>

      <div className="max-w-8xl mx-auto px-6 lg:px-8 relative z-10 ">

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
                Complete Wedding
              </span>
              <br />
              <span className="text-gray-800">Services & Solutions</span>
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
            From <span 
              className="font-medium"
              style={{ color: colors.champagne[600] }}
            >Haldi to Honeymoon</span> - we handle every aspect of your dream wedding with perfection
          </motion.p>
        </motion.div>

        {/* Services Grid with hero images */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32"
        >
          {Object.entries(weddingServices).map(([category, services]) => (
            <motion.div 
              key={category} 
              variants={item}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <div 
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"
                style={{
                  background: `linear-gradient(45deg, ${colors.champagne[300]}, ${colors.champagne[500]})`
                }}
              ></div>
              
              {/* Hero image background for each service card */}
              <div 
                className="relative h-full bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden"
                style={{
                  backgroundImage: `url(${services[0].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)'
                }}
              >
                <div 
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ background: colors.champagne[500] }}
                ></div>
                
                <h3 className="text-2xl font-serif font-medium mb-8 capitalize pb-4 relative">
                  <span 
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(45deg, ${colors.champagne[600]}, ${colors.champagne[800]})`
                    }}
                  >
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                  <div 
                    className="absolute bottom-0 left-0 w-16 h-0.5 rounded-full"
                    style={{ background: colors.champagne[400] }}
                  ></div>
                </h3>
                
                <div className="space-y-7">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-5 group">
                      <div 
                        className="p-3 rounded-xl flex-shrink-0 transition-all duration-300"
                        style={{
                          background: colors.champagne[100],
                          color: colors.champagne[600]
                        }}
                      >
                        {service.icon}
                      </div>
                      <div>
                        <div className="flex items-center space-x-3">
                          <h4 className="text-lg font-medium text-gray-800">{service.title}</h4>
                          {service.premium && (
                            <span 
                              className="text-xs font-bold px-2.5 py-1 rounded-full"
                              style={{
                                background: colors.champagne[100],
                                color: colors.champagne[700]
                              }}
                            >
                              PREMIUM
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mt-2">{service.description}</p>
                        {service.highlight && (
                          <p 
                            className="text-sm mt-2 flex items-center"
                            style={{ color: colors.champagne[600] }}
                          >
                            <Sparkles className="w-4 h-4 mr-2" />
                            {service.highlight}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="mt-8 flex items-center text-sm font-medium transition-colors duration-300 group"
                  style={{ color: colors.champagne[600] }}
                >
                  View all {category} services
                  <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium Packages with hero video background */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
          viewport={{ once: true }}
          className="rounded-4xl p-1 mb-28 relative overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${colors.champagne[300]}, ${colors.champagne[500]})`
          }}
        >
          {/* Hero video background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-20"
            >
              <source 
                src="https://res.cloudinary.com/djex6hliw/video/upload/v1751038841/flv16ko3frkbck7e7fdl.mp4" 
                type="video/mp4" 
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
          </div>
          
          <div className="relative bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl overflow-hidden z-10">
            <div className="relative z-10 p-12">
              <div className="text-center mb-16">
                <h3 className="text-4xl font-serif font-bold mb-6">
                  <span 
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(45deg, ${colors.champagne[600]}, ${colors.champagne[800]})`
                    }}
                  >
                    Signature Packages
                  </span>
                </h3>
                <div 
                  className="w-24 h-1 mx-auto mb-8 rounded-full"
                  style={{ background: colors.champagne[500] }}
                ></div>
                <p 
                  className="text-xl max-w-3xl mx-auto"
                  style={{ color: colors.champagne[700] }}
                >
                  Curated experiences for every scale of celebration
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {premiumPackages.map((pkg, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      y: -12,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    className="relative group"
                  >
                    <div 
                      className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(45deg, ${colors.champagne[400]}, ${colors.accent.roseGold})`
                      }}
                    ></div>
                    
                    {/* Package card with hero image */}
                    <div 
                      className="relative h-full bg-white p-8 rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
                      style={{
                        backgroundImage: `url(${pkg.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'overlay',
                        backgroundColor: 'rgba(255, 255, 255, 0.95)'
                      }}
                    >
                      <div className="flex justify-between items-start mb-8">
                        <div>
                          <h4 
                            className="text-2xl font-serif font-bold mb-2"
                            style={{ color: colors.champagne[700] }}
                          >
                            {pkg.name}
                          </h4>
                          <p 
                            className="text-xl font-medium"
                            style={{ color: colors.champagne[600] }}
                          >
                            {pkg.price}
                          </p>
                        </div>
                        <div 
                          className="p-3 rounded-xl"
                          style={{ 
                            background: colors.champagne[100],
                            color: colors.champagne[600]
                          }}
                        >
                          {pkg.icon}
                        </div>
                      </div>
                      
                      <ul className="space-y-4 mb-10">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <div 
                              className="p-1 rounded-full flex-shrink-0 mt-0.5"
                              style={{ 
                                background: colors.champagne[100],
                                color: colors.champagne[600]
                              }}
                            >
                              <Sparkles className="w-3 h-3" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button 
                        className="w-full py-4 rounded-xl font-medium transition-all duration-300 group-hover:shadow-lg"
                        style={{
                          background: `linear-gradient(45deg, ${colors.champagne[500]}, ${colors.champagne[600]})`,
                          color: 'white'
                        }}
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          <Mail className="w-5 h-5 mr-3" />
                          Request Proposal
                        </span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

       
      </div>

      {/* Custom animations matching hero */}
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

export default Services