import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowRight, Star, Heart, Sparkles, Camera, Users, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const WeddingPage = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <WeddingSections />
    </div>
  );
};

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Check if mobile device
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));

    const video = videoRef.current;
    if (!video) return;

    // Configure video for instant playback
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.autoplay = true;
    video.setAttribute('playsinline', '');
    video.setAttribute('muted', '');
    video.setAttribute('autoplay', '');
    video.setAttribute('webkit-playsinline', '');

    // Optimized Cloudinary URLs for different devices
    const videoSrc = isMobile
      ? "https://res.cloudinary.com/djex6hliw/video/upload/f_auto,q_auto:eco,w_800,h_600/v1751038841/flv16ko3frkbck7e7fdl.mp4"
      : "https://res.cloudinary.com/djex6hliw/video/upload/f_auto,q_auto:good,w_1920,h_1080/v1751038841/flv16ko3frkbck7e7fdl.mp4";

    // Set video source immediately
    video.src = videoSrc;

    // Multiple event listeners for maximum compatibility
    const handleCanPlay = () => {
      setVideoLoaded(true);
      // Force play with multiple attempts
      const playVideo = () => {
        video.play()
          .then(() => console.log('Video playing'))
          .catch(() => {
            // Retry after short delay
            setTimeout(() => video.play().catch(console.error), 100);
          });
      };
      playVideo();
    };

    const handleLoadedData = () => {
      setVideoLoaded(true);
      video.play().catch(console.error);
    };

    // Add multiple event listeners for better compatibility
    video.addEventListener('canplay', handleCanPlay, { once: true });
    video.addEventListener('loadeddata', handleLoadedData, { once: true });
    video.addEventListener('canplaythrough', handleCanPlay, { once: true });
    
    // Start loading immediately
    video.load();

    // Force play on any user interaction
    const forcePlay = () => {
      if (video.paused) {
        video.play().catch(console.error);
      }
    };

    document.addEventListener('click', forcePlay, { once: true });
    document.addEventListener('touchstart', forcePlay, { once: true });

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplaythrough', handleCanPlay);
      document.removeEventListener('click', forcePlay);
      document.removeEventListener('touchstart', forcePlay);
    };
  }, [isMobile]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white mt-10">
      {/* Video Container */}
      <div className="absolute w-full h-full flex items-center justify-center px-4">
        <div className="relative w-full max-w-[2000px] h-[85vh] md:h-[85vh] rounded-[25px] border-4 border-white/20 overflow-hidden shadow-2xl">
          {/* Custom Background Image - Shows immediately */}
          <div 
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
            style={{
              backgroundImage: 'url(https://i.postimg.cc/90HH5Gq1/Screenshot-2025-07-02-141010.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          
          {/* Optimized Video Element - Loads instantly */}
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
            poster="https://i.postimg.cc/90HH5Gq1/Screenshot-2025-07-02-141010.png"
            disablePictureInPicture
            disableRemotePlayback
            style={{
              willChange: 'opacity',
              backfaceVisibility: 'hidden',
              transform: 'translateZ(0)'
            }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10"></div>
        </div>
      </div>

      {/* Content - Show immediately */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 mt-[10vh] md:mt-[0vh]">
        <div className="animate-fade-in-fast">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-champagne-300 mr-2 animate-float" />
            <span className="text-champagne-400 font-bold tracking-widest text-sm md:text-base">
              SUBA DESIGNS
            </span>
            <Sparkles className="h-6 w-6 text-champagne-300 ml-2 animate-float" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
            Luxury Wedding
            <span className="block text-champagne-300 animate-shimmer">Experiences</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light leading-relaxed">
            Bespoke decor that tells your unique love story with elegance and sophistication
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link
              to="/portfolio"
              className="group px-8 py-3 bg-champagne-300 hover:bg-champagne-400 text-gray-900 font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                View Our Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/contact"
              className="group px-8 py-3 border-2 border-white hover:bg-white/10 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center justify-center">
                Get In Touch
                <Heart className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 opacity-90">
            <div className="flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Users className="h-4 w-4 mr-2" />
              <span className="text-sm">Expert Team</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Star className="h-4 w-4 mr-2" />
              <span className="text-sm">Premium Quality</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">Full Planning</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm hover:border-champagne-300 transition-colors cursor-pointer"
             onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Reduced Floating Elements for Performance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-15"
            style={{
              left: `${15 + i * 20}%`,
              top: `${25 + (i % 2) * 30}%`,
              animationDelay: `${i * 1}s`
            }}
          >
            <Heart className="h-3 w-3 text-champagne-300" fill="currentColor" />
          </div>
        ))}
      </div>

      {/* Optimized Custom Styles */}
      <style jsx>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-fade-in-fast {
          animation: fadeInFast 0.8s ease-out forwards;
        }
        @keyframes fadeInFast {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
        @keyframes shimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
      `}</style>
    </section>
  );
};

const WeddingSections = () => {
  const socialRef = useRef(null);
  const storyRef = useRef(null);
  const promiseRef = useRef(null);
  const blogRef = useRef(null);
  const servicesRef = useRef(null);
  const experiencesRef = useRef(null);
  const portfolioRef = useRef(null);
  const ratingsRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const sections = [socialRef, storyRef, promiseRef, blogRef, servicesRef, experiencesRef, portfolioRef, ratingsRef];
    sections.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const socialWallImages = [
    "https://i.postimg.cc/N0GBD93K/pexels-abhishek-nigam-582276386-30482897.jpg",
    "https://i.postimg.cc/Z5tQwgM9/pexels-mastercowley-1128783.jpg",
    "https://i.postimg.cc/rm3jKR6d/pexels-fotographiya-wedding-photography-823737813-29470577.jpg",
    "https://i.postimg.cc/HsBmRTbJ/pexels-fliqaindia-30169488.jpg",
    "https://i.postimg.cc/pL2pw7D1/pexels-anish-bindoriya-1957073-28200149.jpg",
    "https://i.postimg.cc/Zq6KszRQ/pexels-dk121-3865895.jpg",
    "https://i.postimg.cc/D0PjWy71/pexels-asadphoto-169198.jpg",
    "https://i.postimg.cc/wBVfwjCM/pexels-kewal-nagda-1669654142-27824432.jpg",
    "https://i.postimg.cc/ZK4LMSLy/pexels-rani-sahu-3787395.jpg",
    "https://i.postimg.cc/6QJqM9dk/pexels-mattia-carboni-825343268-32705086.jpg",
    "https://i.postimg.cc/28NW5R98/pexels-vireshstudio-2060240.jpg",
    "https://i.postimg.cc/7h9qD2Qz/pexels-pramod-kumarva-475650-1182963.jpg"
  ];

  const portfolioImages = [
    {
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop",
      title: "Leela Palace",
      description: "A grand celebration filled with love and laughter"
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
      title: "Haldi & Mehendi",
      description: "Vibrant colors and joyful traditions"
    },
    {
      src: "https://images.unsplash.com/photo-1595257841889-eca2678454e2?w=600&h=400&fit=crop",
      title: "Sacred Vows",
      description: "Timeless moments of eternal love"
    },
    {
      src: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&h=400&fit=crop",
      title: "Reception Elegance",
      description: "Sophisticated celebrations with exquisite details"
    }
  ];

  return (
    <div className="bg-white">
      {/* Social Wall Section */}
      <section ref={socialRef} className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-champagne-400 to-transparent"></div>
              <Sparkles className="mx-4 h-6 w-6 text-champagne-400" />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-champagne-400 to-transparent"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-champagne-600 mb-4">Follow The Magic</h2>
            <h3 className="text-2xl md:text-3xl font-serif text-gray-600 mb-8">SOCIAL WALL</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {socialWallImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg aspect-square">
                <img 
                  src={image} 
                  alt={`Social ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-full transition-all duration-300">
              See More
            </button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">We Tell Your Story</h2>
            <p className="text-xl md:text-2xl font-light mb-12 leading-relaxed">
              PLEASE GET IN TOUCH WITH US AND PROVIDE AS MANY DETAILS AS YOU CAN
            </p>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-2 h-2 bg-champagne-300 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{animationDelay: '1s'}}>
          <div className="w-3 h-3 bg-champagne-300 rounded-full opacity-40"></div>
        </div>
      </section>

      {/* Promise Section */}
      <section ref={promiseRef} className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-700 mb-8">OUR PROMISE TO YOU</h2>
            <div className="w-24 h-px bg-champagne-400 mx-auto mb-8"></div>
            <h3 className="text-2xl md:text-3xl font-serif text-champagne-600 mb-12">
              ... Well Let's Hear It From The Mother Of Our Bride
            </h3>
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-champagne-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-champagne-600" />
              </div>
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed text-center font-light">
              "My daughter's wedding, as you can imagine, is the biggest event of our lives. We were so scared to trust anyone with this responsibility and never thought anyone could do it better than us. This was going to be difficult to organize because we had guests coming from all parts of the world, and soon realized we needed help. After going through reviews of many planners online, I came across one where a bride's father wrote glowing reviews of Narasimhamurthy. I was so curious to see who he was and what he could do. From the moment we met Archana and Sarang, we knew this would work – the confidence they give you is immense. I have fallen in love with these angels! The wedding went without a hitch. The decorations were out of this world!"
            </blockquote>
            
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 font-medium">— Mother of the Bride</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
<section ref={blogRef} className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-serif text-gray-700 mb-8">BLOG</h2>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8">
      {/* First Blog Card */}
      <Link to="/blog" className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-2xl mb-6">
          <img 
            src="https://i.postimg.cc/rm3jKR6d/pexels-fotographiya-wedding-photography-823737813-29470577.jpg"
            alt="Wedding postponement"
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <span className="text-sm font-medium">POSTPONING YOUR WEDDING?</span>
          </div>
        </div>
        <h3 className="text-xl font-serif text-gray-800 mb-2">Planning During Uncertain Times</h3>
        <p className="text-gray-600">Bad news can still look pretty</p>
      </Link>
      
      {/* Second Blog Card */}
      <Link to="/blog" className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-2xl mb-6">
          <img 
            src="https://i.postimg.cc/cLgkX6rs/pexels-dreamlensproduction-5829427.jpg"
            alt="Wedding dreams"
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        <h3 className="text-xl font-serif text-gray-800 mb-2">Dreaming of Your Perfect Day</h3>
        <p className="text-gray-600">Bringing your vision to life</p>
      </Link>
    </div>
  </div>
</section>

      {/* Services Section */}
      {/* Services Section */}
<section ref={servicesRef} className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 mb-4 tracking-tight">WEDDING STORIES CURATED BY SUBA</h2>
      <div className="w-32 h-1 bg-gradient-to-r from-champagne-300 to-champagne-600 mx-auto mb-8"></div>
      <h3 className="text-2xl md:text-3xl font-serif text-champagne-600 mb-8 italic font-light">
        Suba - Where Beautiful Beginnings Take Flight
      </h3>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-sans font-light tracking-wide">
        At Suba, we don't just plan weddings—we craft personalized love stories. Our artistry transforms your vision into breathtaking reality, 
        from exquisite themed weddings to mesmerizing stage designs and timeless photography. Serving discerning couples across Kerala and Karnataka, 
        we pour our passion into every detail so you can savor each magical moment.
      </p>
      <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-sans font-light tracking-wide mt-6">
        Imagine celebrations where every element whispers your unique love language—where the flowers know your favorite scent, the lights dance 
        to your rhythm, and even the napkins fold in harmony with your story. This is the Suba promise: meticulous perfection that lets you 
        be fully present, creating memories as extraordinary as your love.
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { 
          title: "Reception", 
          icon: Users, 
          image: "https://i.postimg.cc/N0GBD93K/pexels-abhishek-nigam-582276386-30482897.jpg",
          description: "Grand entrances that take their breath away"
        },
        { 
          title: "Ceremony", 
          icon: Heart, 
          image: "https://i.postimg.cc/Zq6KszRQ/pexels-dk121-3865895.jpg",
          description: "Sacred moments wrapped in perfection"
        },
        { 
          title: "Haldi & Mehendi", 
          icon: Sparkles, 
          image: "https://i.postimg.cc/ZRD8nmLR/Screenshot-2025-06-27-234725.png",
          description: "Vibrant celebrations of color and tradition"
        },
        { 
          title: "Sangeet", 
          icon: Camera, 
          image: "https://i.postimg.cc/pL2pw7D1/pexels-anish-bindoriya-1957073-28200149.jpg",
          description: "Nights where rhythm meets romance"
        }
      ].map((service, index) => (
        <div key={index} className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2">
          <div className="relative overflow-hidden rounded-2xl mb-4 h-80">
            <img 
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center justify-between text-white mb-2">
                <h3 className="text-2xl font-serif font-medium">{service.title}</h3>
                <service.icon className="h-6 w-6 text-champagne-300" />
              </div>
              <p className="text-champagne-100 font-sans text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Experiences Section */}
      {/* Experiences Section */}
<section ref={experiencesRef} className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-serif text-gray-700 mb-8">EXPERIENCES WITH SUBA</h2>
    </div>
    
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <video 
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-96 object-cover rounded-2xl shadow-xl"
        >
          <source src="https://res.cloudinary.com/djex6hliw/video/upload/v1751045226/afhxn1vcmuyf7df3zofg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-champagne-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-serif text-champagne-700 mb-4">Himani & Nihal's Boho Adventure!</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Have you heard of this ball of butterflies that few people can make you feel? This couple is just so much of that. 
            Nihal is a creative prodigy & for a change was shortlisting the color palettes etc...while Himani was the approval 
            section making just the perfect choices for the day. Their duo gets you flabbergasted. And the outcome was a 
            marvelous array of events. Colorful Carnival themed Sangeet, a Boho themed afternoon and countless memories we 
            carried along.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Perfect Sindhi wedding. Just as FUN it could get! All at our very own Bengaluru!
          </p>
          <div className="border-l-4 border-champagne-400 pl-4 italic text-gray-600 mb-4">
            "Wish we could give more than 5 stars! They are nothing short of amazing! Our wedding would not have been the 
            fairytale wonder it turned out to be without Suba and their full efforts" - Himani & Nihal
          </div>
          <p className="text-sm text-gray-500 font-medium">Venue: Fiesta resort, Bengaluru</p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Portfolio Carousel */}
<section ref={portfolioRef} className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-serif text-gray-700 mb-8">A CAROUSEL OF OUR WORK</h2>
      <div className="w-24 h-px bg-champagne-400 mx-auto mb-8"></div>
      <p className="text-lg text-champagne-600 max-w-2xl mx-auto">
        Experience the magic through these highlights from our recent weddings
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          src: "https://res.cloudinary.com/djex6hliw/video/upload/v1751054182/aspfhzksf2z7drgpkiw8.mp4",
          title: "Haldi & Mehendi",
          description: "Vibrant colors and joyful traditions",
          poster: "https://res.cloudinary.com/djex6hliw/image/upload/v1751054182/aspfhzksf2z7drgpkiw8.jpg"
        },
        {
          src: "https://res.cloudinary.com/djex6hliw/video/upload/v1751054182/ieep9bhcfb967m0v98al.mp4",
          title: "Sacred Vows",
          description: "Timeless moments of eternal love",
          poster: "https://res.cloudinary.com/djex6hliw/image/upload/v1751054182/ieep9bhcfb967m0v98al.jpg"
        },
        {
          src: "https://res.cloudinary.com/djex6hliw/video/upload/v1751054181/neorrynusqu43ejxwy42.mp4",
          title: "Traditional Kerala Wedding",
          description: "Three days of cultural celebrations",
          poster: "https://res.cloudinary.com/djex6hliw/image/upload/v1751054181/neorrynusqu43ejxwy42.jpg"
        },
        {
          src: "https://res.cloudinary.com/djex6hliw/video/upload/v1751054183/wwzctffmwdqich3gjpak.mp4",
          title: "Grand Palace Wedding",
          description: "Traditional celebration",
          poster: "https://res.cloudinary.com/djex6hliw/image/upload/v1751054183/wwzctffmwdqich3gjpak.jpg"
        }
      ].map((item, index) => (
        <div key={index} className="group">
          <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5]">
            {/* Video Element */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster={item.poster}
            >
              <source src={item.src} type="video/mp4" />
              {/* Fallback content */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-rosegold-500/30 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <Sparkles className="w-12 h-12 mx-auto mb-4 animate-pulse" />
                  <p className="text-xl md:text-2xl font-light">Video not available</p>
                </div>
              </div>
            </video>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10"></div>
            
            {/* Title and Description */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-lg font-serif mb-2">{item.title}</h3>
              <p className="text-sm opacity-90">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Ratings Section */}
      <section ref={ratingsRef} className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-700 mb-8">TOP RATED WEDDING PLANNER</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { platform: "WedMeGood", reviews: 89, rating: 4.8 },
              { platform: "Google", reviews: 71, rating: 4.9 },
              { platform: "Instagram", reviews: 8000, rating: 4.8 },
              { platform: "JustDial", reviews: 200, rating: 4.9 }
            ].map((rating, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center border border-champagne-200">
                <div className="text-2xl font-serif text-champagne-600 mb-2">{rating.platform}</div>
                <div className="flex justify-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {rating.reviews} Reviews {rating.rating} of 5 Stars
                </div>
              </div>
            ))}
          </div>
          
          
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-champagne-100 to-champagne-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://i.postimg.cc/rm3jKR6d/pexels-fotographiya-wedding-photography-823737813-29470577.jpg"
            alt="Wedding planning"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-8">Planning A Dream Wedding?</h2>
          <div className="w-32 h-px bg-champagne-400 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            We love visualizing the little many details that make your event exceptional. You can be rest assured that even the tiniest elements would be taken into consideration so you can enjoy your event as much as your guests. Whether We are planning a once-in-a-lifetime wedding, a Mehendi, a Haldi or a 50th wedding anniversary, we are here to help into weaving a beautiful tapestry of events that will linger in the minds of the families and guests alike. We look forward to getting to know you – and how we could help you plan your big day.
          </p>
          <div className="text-right">
            <p className="text-xl font-serif text-champagne-700 mb-2">Narasimhamurthy,</p>
            <p className="text-lg text-champagne-600">Founder And Creative Head – Suba Designs & Decoration</p>
          </div>
          <div className="mt-12">
            <button className="px-8 py-4 bg-champagne-600 hover:bg-champagne-700 text-white font-medium rounded-full transition-all duration-300 flex items-center mx-auto">
              Meet the Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .champagne-50 { background-color: #fefdf8; }
        .champagne-100 { background-color: #fdf6e3; }
        .champagne-200 { background-color: #f7e6b7; }
        .champagne-300 { background-color: #f1d78b; }
        .champagne-400 { background-color: #e8c547; }
        .champagne-500 { background-color: #d4af37; }
        .champagne-600 { background-color: #b8941f; }
        .champagne-700 { background-color: #9a7c1a; }
        .champagne-800 { background-color: #7d6516; }
        .champagne-900 { background-color: #614f12; }
      `}</style>
    </div>
  );
};

export default WeddingPage;