import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles, Play, Pause, Volume2, VolumeX, Eye, Heart, Share2, Download, Filter, Grid, List, Search, Star, Award, Crown, Gem, Diamond, Camera, Video, Palette, MapPin, Calendar, Users, Clock } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVideoPlaying, setIsVideoPlaying] = useState<{ [key: string]: boolean }>({});
  const [isMuted, setIsMuted] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Golden color palette
  const colors = {
    gold: {
      50: "#FFFEF7",
      100: "#FFFAEB", 
      200: "#FFF2CC",
      300: "#FFE999",
      400: "#FFD700",
      500: "#F4C430",
      600: "#DAA520",
      700: "#B8860B",
      800: "#996515",
      900: "#7A4F0A"
    },
    accent: {
      rose: "#E8B4B8",
      champagne: "#F7E7CE",
      platinum: "#E5E4E2",
      bronze: "#CD7F32"
    }
  };

  // Enhanced portfolio data with more details
  const portfolioItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Royal Garden Wedding',
      description: 'Enchanted garden ceremony with golden mandap and crystal chandeliers',
      category: 'ceremony',
      location: 'Udaipur Palace, Rajasthan',
      date: 'October 2023',
      guests: 350,
      duration: '3 days',
      
      tags: ['luxury', 'traditional', 'outdoor'],
      awards: ['Best Ceremony Design 2023', 'Excellence in Floral Art'],
      photographer: 'Suba Creative Team',
      likes: 247,
      views: 1850
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Grand Reception Hall',
      description: 'Opulent ballroom with 24k gold accents and Swarovski crystal installations',
      category: 'reception',
      location: 'Taj Palace, Mumbai',
      date: 'September 2023',
      guests: 500,
      duration: '1 day',
      
      tags: ['luxury', 'indoor', 'crystal'],
      awards: ['Luxury Wedding of the Year'],
      photographer: 'Elite Wedding Films',
      likes: 389,
      views: 2340
    },
    {
      id: 3,
      type: 'video',
      src: "https://res.cloudinary.com/djex6hliw/video/upload/v1751054182/aspfhzksf2z7drgpkiw8.mp4",
      poster: "https://res.cloudinary.com/djex6hliw/image/upload/v1751054182/aspfhzksf2z7drgpkiw8.jpg",
      title: 'Haldi & Mehendi Celebration',
      description: 'Vibrant pre-wedding festivities with marigold installations',
      category: 'pre-wedding',
      location: 'Heritage Resort, Jaipur',
      date: 'August 2023',
      guests: 200,
      duration: '2 days',
      
      tags: ['colorful', 'traditional', 'outdoor'],
      awards: ['Best Pre-Wedding Design'],
      photographer: 'Suba Creative Team',
      likes: 156,
      views: 980
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=800&h=900&fit=crop',
      title: 'Intimate Table Setting',
      description: 'Romantic dining setup with golden charger plates and crystal stemware',
      category: 'reception',
      location: 'Private Villa, Goa',
      date: 'July 2023',
      guests: 80,
      duration: '1 day',
     
      tags: ['intimate', 'romantic', 'beachside'],
      awards: ['Best Intimate Wedding'],
      photographer: 'Coastal Weddings',
      likes: 92,
      views: 650
    },
    {
      id: 5,
      type: 'video',
      src: "https://res.cloudinary.com/djex6hliw/video/upload/v1751054182/ieep9bhcfb967m0v98al.mp4",
      poster: "https://res.cloudinary.com/djex6hliw/image/upload/v1751054182/ieep9bhcfb967m0v98al.jpg",
      title: 'Sacred Vows Exchange',
      description: 'Timeless moments of eternal love with traditional rituals',
      category: 'ceremony',
      location: 'Temple Complex, Kerala',
      date: 'June 2023',
      guests: 300,
      duration: '1 day',
      
      tags: ['traditional', 'spiritual', 'cultural'],
      awards: ['Cultural Heritage Award'],
      photographer: 'Divine Moments',
      likes: 203,
      views: 1420
    },
    {
      id: 6,
      type: 'image',
      src: 'https://i.postimg.cc/28NW5R98/pexels-vireshstudio-2060240.jpg',
      title: 'Bridal Suite Decoration',
      description: 'Luxurious bridal preparation area with golden mirrors and silk draping',
      category: 'bridal',
      location: 'Luxury Resort, Udaipur',
      date: 'May 2023',
      guests: 25,
      duration: '4 hours',
      
      tags: ['luxury', 'bridal', 'intimate'],
      awards: ['Best Bridal Suite Design'],
      photographer: 'Bridal Elegance',
      likes: 134,
      views: 890
    },
    {
      id: 7,
      type: 'video',
      src: "https://res.cloudinary.com/djex6hliw/video/upload/v1751054181/neorrynusqu43ejxwy42.mp4",
      poster: "https://res.cloudinary.com/djex6hliw/image/upload/v1751054181/neorrynusqu43ejxwy42.jpg",
      title: 'Traditional Kerala Wedding',
      description: 'Three days of authentic cultural celebrations',
      category: 'ceremony',
      location: 'Backwater Resort, Kerala',
      date: 'April 2023',
      guests: 400,
      duration: '3 days',
      
      tags: ['traditional', 'cultural', 'multi-day'],
      awards: ['Best Traditional Wedding'],
      photographer: 'Kerala Traditions',
      likes: 278,
      views: 1650
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.pexels.com/photos/1779414/pexels-photo-1779414.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
      title: 'Ceremony Aisle Design',
      description: 'Stunning aisle decoration with rose petals and golden lanterns',
      category: 'ceremony',
      location: 'Garden Palace, Mysore',
      date: 'March 2023',
      guests: 250,
      duration: '1 day',
     
      tags: ['outdoor', 'romantic', 'floral'],
      awards: ['Best Aisle Design'],
      photographer: 'Garden Weddings',
      likes: 167,
      views: 1120
    }
  ];

  // Social wall images with enhanced data
  const socialWallImages = [
    {
      id: 9,
      type: 'image',
      src: "https://i.postimg.cc/N0GBD93K/pexels-abhishek-nigam-582276386-30482897.jpg",
      title: "Traditional Ceremony Moments",
      description: "Cultural rituals captured in golden hour",
      category: 'ceremony',
      location: 'Heritage Palace',
      likes: 89,
      views: 456
    },
    {
      id: 10,
      type: 'image',
      src: "https://i.postimg.cc/Z5tQwgM9/pexels-mastercowley-1128783.jpg",
      title: "Bridal Portrait Session",
      description: "Elegant bridal moments with golden jewelry",
      category: 'bridal',
      location: 'Royal Suite',
      likes: 145,
      views: 723
    },
    {
      id: 11,
      type: 'image',
      src: "https://i.postimg.cc/rm3jKR6d/pexels-fotographiya-wedding-photography-823737813-29470577.jpg",
      title: "Wedding Celebration Joy",
      description: "Joyful moments of celebration and dance",
      category: 'reception',
      location: 'Grand Ballroom',
      likes: 201,
      views: 934
    },
    {
      id: 12,
      type: 'image',
      src: "https://i.postimg.cc/HsBmRTbJ/pexels-fliqaindia-30169488.jpg",
      title: "Cultural Performance",
      description: "Traditional dance and music performances",
      category: 'entertainment',
      location: 'Cultural Center',
      likes: 76,
      views: 412
    }
  ];

  const allItems = [...portfolioItems, ...socialWallImages];

  // Filter items based on category and search
  const filteredItems = allItems.filter(item => {
    const matchesFilter = filter === 'all' || item.category === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Projects', icon: Grid, count: allItems.length },
    { id: 'ceremony', name: 'Ceremonies', icon: Crown, count: allItems.filter(i => i.category === 'ceremony').length },
    { id: 'reception', name: 'Receptions', icon: Sparkles, count: allItems.filter(i => i.category === 'reception').length },
    { id: 'pre-wedding', name: 'Pre-Wedding', icon: Heart, count: allItems.filter(i => i.category === 'pre-wedding').length },
    { id: 'bridal', name: 'Bridal', icon: Gem, count: allItems.filter(i => i.category === 'bridal').length }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const handleLike = (id: number) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleVideo = (id: string) => {
    setIsVideoPlaying(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  // Parallax effect for background elements
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.8, 0.3]);

  return (
    <section 
      ref={containerRef}
      id="portfolio" 
      className="relative py-32 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.gold[50]} 0%, white 30%, ${colors.gold[100]} 70%, ${colors.gold[200]} 100%)`
      }}
    >
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y: y1, opacity: opacityBg }}
        className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-20 pointer-events-none"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div 
        style={{ y: y2, opacity: opacityBg }}
        className="absolute bottom-20 right-10 w-24 h-24 rounded-full opacity-15 pointer-events-none"
        animate={{
          rotate: -360,
          scale: [1, 0.8, 1]
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Floating golden particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            background: colors.gold[300],
            opacity: 0.1,
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2
          }}
        />
      ))}

      <div className="max-w-8xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
          }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -top-12 -left-12"
            >
              <Sparkles 
                className="w-16 h-16 opacity-30"
                style={{ color: colors.gold[400] }}
              />
            </motion.div>
            <motion.div
              animate={{
                rotate: -360
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -bottom-8 -right-8"
            >
              <Diamond 
                className="w-12 h-12 opacity-25"
                style={{ color: colors.gold[500] }}
              />
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight">
              <span 
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(45deg, ${colors.gold[600]}, ${colors.gold[800]}, ${colors.gold[600]})`
                }}
              >
                Golden
              </span>
              <br />
              <span className="text-gray-800">Portfolio</span>
            </h2>
          </div>
          
          <motion.div 
            className="w-48 h-2 mx-auto mb-12 rounded-full relative overflow-hidden"
            style={{ background: colors.gold[200] }}
            initial={{ width: 0 }}
            whileInView={{ width: 192 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${colors.gold[400]}, ${colors.gold[600]}, ${colors.gold[400]})`
              }}
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Discover our collection of <span 
              className="font-medium"
              style={{ color: colors.gold[700] }}
            >award-winning weddings</span> where every detail shines with perfection. 
            From intimate ceremonies to grand celebrations, each project tells a unique love story.
          </motion.p>
        </motion.div>

        {/* Enhanced Filter and Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          
        </motion.div>

        {/* Enhanced Portfolio Grid */}
        {filteredItems.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className={
              viewMode === 'masonry' 
                ? "columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            }
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
                className={`${viewMode === 'masonry' ? 'break-inside-avoid' : ''} group cursor-pointer relative`}
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-xl bg-white">
                  {/* Image/Video Container */}
                  <div className="relative overflow-hidden">
                    {item.type === 'video' ? (
                      <div className="relative">
                        <video
                          autoPlay
                          loop
                          muted={isMuted}
                          playsInline
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                          poster={item.poster}
                        >
                          <source src={item.src} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredItem === index ? 1 : 0 }}
                          className="absolute top-4 right-4 flex space-x-2"
                        >
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setIsMuted(!isMuted);
                            }}
                            className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                          >
                            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                          </button>
                        </motion.div>
                      </div>
                    ) : (
                      <div className="relative">
                        <img
                          src={item.src}
                          alt={item.title}
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                    )}

                    {/* Overlay Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredItem === index ? 1 : 0,
                        y: hoveredItem === index ? 0 : 20
                      }}
                      className="absolute inset-0 flex flex-col justify-between p-6"
                    >
                      {/* Top Actions */}
                      <div className="flex justify-between items-start">
                        <div className="flex space-x-2">
                          {item.type === 'video' && (
                            <div className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full flex items-center">
                              <Video className="w-3 h-3 mr-1" />
                              VIDEO
                            </div>
                          )}
                          {'awards' in item && item.awards && item.awards.length > 0 && (
                            <div 
                              className="px-3 py-1 text-white text-xs font-bold rounded-full flex items-center"
                              style={{ background: colors.gold[600] }}
                            >
                              <Award className="w-3 h-3 mr-1" />
                              AWARD
                            </div>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLike(item.id);
                            }}
                            className={`p-2 rounded-full transition-colors ${
                              likedItems.has(item.id) 
                                ? 'bg-red-500 text-white' 
                                : 'bg-black/50 text-white hover:bg-red-500'
                            }`}
                          >
                            <Heart className={`w-4 h-4 ${likedItems.has(item.id) ? 'fill-current' : ''}`} />
                          </button>
                          <button
                            onClick={(e) => e.stopPropagation()}
                            className="p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                          >
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Bottom Content */}
                      <div className="text-white">
                        <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                        <p className="text-sm opacity-90 mb-3">{item.description}</p>
                        
                        {/* Stats */}
                        <div className="flex items-center space-x-4 text-xs">
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {item.views || 0}
                          </div>
                          <div className="flex items-center">
                            <Heart className="w-3 h-3 mr-1" />
                            {item.likes || 0}
                          </div>
                          {'location' in item && (
                            <div className="flex items-center">
                              <MapPin className="w-3 h-3 mr-1" />
                              {item.location}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-serif font-semibold text-gray-800 group-hover:text-gold-700 transition-colors">
                        {item.title}
                      </h3>
                      <div 
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: colors.gold[100],
                          color: colors.gold[700]
                        }}
                      >
                        {item.category.toUpperCase()}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                    
                    {/* Enhanced Details */}
                    {'guests' in item && (
                      <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {item.guests} guests
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {item.duration}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.date}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          {item.budget}
                        </div>
                      </div>
                    )}

                    {/* Tags */}
                    {'tags' in item && item.tags && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {item.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs rounded-full"
                            style={{
                              background: colors.gold[50],
                              color: colors.gold[600]
                            }}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                      style={{
                        background: `linear-gradient(45deg, ${colors.gold[400]}, ${colors.gold[600]})`,
                        color: 'white'
                      }}
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-serif font-medium text-gray-600 mb-4">
              No items found matching your criteria
            </h3>
            <button
              onClick={() => {
                setFilter('all');
                setSearchQuery('');
              }}
              className="px-6 py-3 rounded-xl font-medium text-white"
              style={{
                background: `linear-gradient(45deg, ${colors.gold[500]}, ${colors.gold[700]})`
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <div 
            className="relative rounded-4xl p-1 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${colors.gold[400]}, ${colors.gold[600]}, ${colors.gold[400]})`
            }}
          >
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-12">
              <motion.div
                animate={{
                  rotate: 360
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-8 right-8 opacity-10"
              >
                <Crown 
                  className="w-16 h-16"
                  style={{ color: colors.gold[500] }}
                />
              </motion.div>
              
              <h3 className="text-4xl font-serif font-bold mb-6">
                <span 
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(45deg, ${colors.gold[600]}, ${colors.gold[800]})`
                  }}
                >
                  Ready to Create Magic?
                </span>
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's design your dream wedding that will be featured in our next golden portfolio
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 rounded-2xl font-semibold text-lg text-white shadow-xl"
                style={{
                  background: `linear-gradient(45deg, ${colors.gold[500]}, ${colors.gold[700]})`
                }}
              >
                Start Your Golden Journey
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-full bg-white rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image/Video */}
              <div className="relative">
                {filteredItems[selectedImage].type === 'video' ? (
                  <video
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="max-w-full max-h-[70vh] object-contain"
                    poster={filteredItems[selectedImage].poster}
                  >
                    <source src={filteredItems[selectedImage].src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={filteredItems[selectedImage].src}
                    alt={filteredItems[selectedImage].title}
                    className="max-w-full max-h-[70vh] object-contain"
                  />
                )}
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-gray-800 mb-2">
                      {filteredItems[selectedImage].title}
                    </h3>
                    <p className="text-gray-600 text-lg">{filteredItems[selectedImage].description}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleLike(filteredItems[selectedImage].id)}
                      className={`p-3 rounded-full transition-colors ${
                        likedItems.has(filteredItems[selectedImage].id) 
                          ? 'bg-red-500 text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-red-500 hover:text-white'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${likedItems.has(filteredItems[selectedImage].id) ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-3 bg-gray-100 rounded-full text-gray-600 hover:bg-gray-200 transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Enhanced Details */}
                {'guests' in filteredItems[selectedImage] && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                    <div className="text-center">
                      <div 
                        className="text-2xl font-bold mb-1"
                        style={{ color: colors.gold[600] }}
                      >
                        {filteredItems[selectedImage].guests}
                      </div>
                      <div className="text-sm text-gray-500">Guests</div>
                    </div>
                    <div className="text-center">
                      <div 
                        className="text-2xl font-bold mb-1"
                        style={{ color: colors.gold[600] }}
                      >
                        {filteredItems[selectedImage].duration}
                      </div>
                      <div className="text-sm text-gray-500">Duration</div>
                    </div>
                    <div className="text-center">
                      <div 
                        className="text-2xl font-bold mb-1"
                        style={{ color: colors.gold[600] }}
                      >
                        {filteredItems[selectedImage].budget}
                      </div>
                      <div className="text-sm text-gray-500">Investment</div>
                    </div>
                    <div className="text-center">
                      <div 
                        className="text-2xl font-bold mb-1"
                        style={{ color: colors.gold[600] }}
                      >
                        {filteredItems[selectedImage].views}
                      </div>
                      <div className="text-sm text-gray-500">Views</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation and Close */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-3 bg-white/90 hover:bg-white rounded-full text-gray-600 hover:text-gray-800 transition-colors shadow-lg"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full text-gray-600 hover:text-gray-800 transition-colors shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full text-gray-600 hover:text-gray-800 transition-colors shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;