import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, Heart, Users, Award, Star, Calendar, Castle, 
  Camera, Flower2, Gift, Diamond, VenetianMask, MapPin, 
  Phone, Mail, ChevronRight 
} from 'lucide-react';

// Define your color palette
const colors = {
  champagne: {
    400: '#F7E7CE',
    600: '#D4AF37',
  },
  blush: {
    400: '#F8C8DC',
    600: '#E75480',
  },
  gold: {
    600: '#D4AF37',
  }
};

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="text-center mb-28 relative"
      >
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
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
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight relative">
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(45deg, ${colors.champagne[600]}, ${colors.blush[600]})`
              }}
            >
              Our Story
            </span>
          </h1>
        </div>
        
        <div 
          className="w-40 h-1.5 mx-auto mb-10 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${colors.champagne[400]}, ${colors.blush[400]})`
          }}
        ></div>
        
        <motion.p 
          className="text-2xl font-serif text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: { delay: 0.3 }
          }}
          viewport={{ once: true }}
        >
          From Childhood Dreams to Creating Fairy Tales
        </motion.p>
        
        <motion.p 
          className="text-xl text-gray-600 italic"
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: { delay: 0.6 }
          }}
          viewport={{ once: true }}
        >
          The journey of Suba Designs and Decorations - where love stories begin
        </motion.p>
      </motion.div>

      {/* The Beginning */}
      <motion.section 
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <div>
          <motion.h3 
            className="text-3xl font-serif font-bold mb-8"
            style={{ color: colors.gold[600] }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ 
              opacity: 1,
              x: 0,
              transition: { delay: 0.2 }
            }}
            viewport={{ once: true }}
          >
            The Seed Was Planted Early
          </motion.h3>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { delay: 0.4, staggerChildren: 0.1 }
            }}
            viewport={{ once: true }}
          >
            <motion.p className="text-lg text-gray-600">
              As a young boy growing up in Bangalore, Narasimhamurthy would spend hours arranging flowers from his grandmother's garden, creating intricate decorations for neighborhood festivals. His school notebooks were filled with detailed sketches of wedding mandaps and floral arrangements rather than math equations.
            </motion.p>
            
            <motion.p className="text-lg text-gray-600">
              By age 12, he was already the unofficial "event manager" of his neighborhood, coordinating everything from flower garlands to lighting for local weddings. His keen eye for detail and innate sense of rhythm—honed through years of observing Bengaluru’s blend of tradition and modernity—made even simple gatherings feel extraordinary.
            </motion.p>
            
            <motion.div 
              className="bg-gold-50 p-6 rounded-xl border-l-4"
              style={{ borderColor: colors.gold[600] }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1,
                y: 0,
                transition: { delay: 0.6 }
              }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 italic">
                "We didn't know it then, but we were already preparing for our life's work - creating magical moments that last lifetimes."
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="relative rounded-2xl overflow-hidden shadow-xl h-96"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ 
            opacity: 1,
            scale: 1,
            transition: { delay: 0.3, duration: 0.6 }
          }}
          viewport={{ once: true }}
        >
          <img 
            src="https://i.postimg.cc/rm3jKR6d/pexels-fotographiya-wedding-photography-823737813-29470577.jpg" 
            alt="Childhood memories" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
            <div className="text-white">
              <h4 className="text-xl font-serif mb-2">Early Inspirations</h4>
              <p>Suba Event's first wedding sketchbook</p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* How They Met */}
      <motion.section 
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"
        initial={{ opacity: 0 }}
        whileInView={{ 
          opacity: 1,
          transition: { duration: 0.8 }
        }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <motion.div 
          className="relative rounded-2xl overflow-hidden shadow-xl h-96 order-last lg:order-first"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ 
            opacity: 1,
            x: 0,
            transition: { delay: 0.2, duration: 0.6 }
          }}
          viewport={{ once: true }}
        >
          <img 
            src="https://i.postimg.cc/7h9qD2Qz/pexels-pramod-kumarva-475650-1182963.jpg" 
            alt="Meeting at university" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
            <div className="text-white">
              <h4 className="text-xl font-serif mb-2">Fateful Meeting</h4>
              <p>Inspired with Traditions</p>
            </div>
          </div>
        </motion.div>
        
        <div>
          <motion.h3 
            className="text-3xl font-serif font-bold mb-8"
            style={{ color: colors.gold[600] }}
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { delay: 0.4 }
            }}
            viewport={{ once: true }}
          >
            When Destiny Intervened
          </motion.h3>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { delay: 0.6, staggerChildren: 0.1 }
            }}
            viewport={{ once: true }}
          >
            <motion.p className="text-lg text-gray-600">
              In 2005, while studying design at Bangalore’s prestigious National Institute of Design, Narasimhamurthy was commissioned to transform a crumbling ancestral home into a wedding venue for a classmate’s sister. With no budget but boundless imagination.
            </motion.p>
            
            <motion.p className="text-lg text-gray-600">
              Their first project together was organizing their friend's wedding on a shoestring budget. The magical result, achieved through sheer creativity and determination, had guests asking who the "professional planners" were.
            </motion.p>
            
            <motion.p className="text-lg text-gray-600">
              The wedding became the talk of Bengaluru, with guests insisting the "magical" decor must have been designed by a luxury event company. That night, Suba Designs & Decorations was born—named after the Sanskrit "Suba" (auspicious beginnings), reflecting Narasimha’s belief that every wedding is a sacred canvas.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* The First Wedding */}
      <motion.section 
        className="mb-32 bg-white rounded-3xl shadow-xl p-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h3 
              className="text-3xl font-serif font-bold mb-8"
              style={{ color: colors.gold[600] }}
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { delay: 0.2 }
              }}
              viewport={{ once: true }}
            >
              Their Humble Beginning
            </motion.h3>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ 
                opacity: 1,
                transition: { delay: 0.4, staggerChildren: 0.1 }
              }}
              viewport={{ once: true }}
            >
              <motion.p className="text-lg text-gray-600">
                In 2011, armed with just ₹35,000 saved from designing festival installations across Bangalore and his grandmother's old sewing machine, Narasimhamurthy officially launched Suba Designs & Decorations. His first client was a French-Indian couple who discovered his work through his Instagram page (@FlowerBoyBangalore), where he posted experimental floral sculptures made with market leftovers.
              </motion.p>
              
              <motion.p className="text-lg text-gray-600">
                When the wedding was featured in Vogue India's "Most Inventive South Asian Weddings", the caption read: "Who is this Bangalore-based genius turning waste into wonder?"
              </motion.p>
              
              <motion.div 
                className="flex items-center space-x-4 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ 
                  opacity: 1,
                  transition: { delay: 0.6 }
                }}
                viewport={{ once: true }}
              >
                <div 
                  className="p-4 rounded-full"
                  style={{ backgroundColor: colors.champagne[400] }}
                >
                  <Sparkles className="w-8 h-8" style={{ color: colors.gold[600] }} />
                </div>
                <div>
                  <p className="font-semibold">That First Wedding</p>
                  <p className="text-sm text-gray-500">₹1.2 lakh budget • 75 guests • 3 months planning</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative h-96 rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ 
              opacity: 1,
              scale: 1,
              transition: { delay: 0.3, duration: 0.6 }
            }}
            viewport={{ once: true }}
          >
            <img 
              src="https://i.postimg.cc/28NW5R98/pexels-vireshstudio-2060240.jpg" 
              alt="First wedding" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
              <div className="text-white">
                <h4 className="text-xl font-serif mb-2">The Beginning</h4>
                <p>First official Suba Wedding, 2011</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Growth Section */}
      <motion.section 
        className="mb-32"
        initial={{ opacity: 0 }}
        whileInView={{ 
          opacity: 1,
          transition: { duration: 0.8 }
        }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
          }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-4xl font-serif font-bold mb-6"
            style={{ color: colors.gold[600] }}
          >
            Building a Legacy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a two-person team to one of India's most sought-after wedding planners
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              year: "2013", 
              title: "First Destination Wedding", 
              description: "Planned a beach wedding in Goa for a UK couple, marking their entry into international weddings",
              image: "https://i.postimg.cc/Zq6KszRQ/pexels-dk121-3865895.jpg"
            },
            { 
              year: "2016", 
              title: "Award Recognition", 
              description: "Won 'Best Wedding Planner - South India' at the National Wedding Awards",
              image: "https://i.postimg.cc/D0PjWy71/pexels-asadphoto-169198.jpg"
            },
            { 
              year: "2020", 
              title: "50+ Team", 
              description: "Expanded to a full-service agency with in-house designers, planners and coordinators",
              image: "https://i.postimg.cc/ZK4LMSLy/pexels-rani-sahu-3787395.jpg"
            }
          ].map((milestone, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1,
                y: 0,
                transition: { 
                  delay: index * 0.15,
                  duration: 0.6 
                }
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48">
                <img 
                  src={milestone.image} 
                  alt={milestone.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <span className="text-white font-serif font-bold text-xl">{milestone.year}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Philosophy Section */}
      <motion.section 
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32"
        initial={{ opacity: 0 }}
        whileInView={{ 
          opacity: 1,
          transition: { duration: 0.8 }
        }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <div>
          <motion.h3 
            className="text-3xl font-serif font-bold mb-8"
            style={{ color: colors.gold[600] }}
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { delay: 0.2 }
            }}
            viewport={{ once: true }}
          >
            Our Heartfelt Approach
          </motion.h3>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { delay: 0.4, staggerChildren: 0.1 }
            }}
            viewport={{ once: true }}
          >
            <motion.p className="text-lg text-gray-600">
              After 500+ weddings across 12 States, our philosophy remains unchanged: every wedding should be as unique as the love story it celebrates.
            </motion.p>
            
            <motion.p className="text-lg text-gray-600">
              We still personally oversee every wedding, maintaining the same hands-on approach we began with. That first wedding's scrapbook sits in our office, reminding us of where we started.
            </motion.p>
            
            <motion.div 
              className="p-6 rounded-xl border-l-4"
              style={{ 
                backgroundColor: colors.champagne[400] + '40',
                borderColor: colors.gold[600]
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1,
                y: 0,
                transition: { delay: 0.6 }
              }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 italic">
                "We don't just plan weddings - we craft the first chapter of your marriage. The care we put into your day reflects the care you'll put into your life together."
              </p>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="relative rounded-2xl overflow-hidden shadow-xl h-96"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ 
            opacity: 1,
            scale: 1,
            transition: { delay: 0.3, duration: 0.6 }
          }}
          viewport={{ once: true }}
        >
          <img 
            src="https://i.postimg.cc/85jyP1rK/Screenshot-2025-07-01-143823.png" 
            alt="Our philosophy" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
            <div className="text-white">
              <h4 className="text-xl font-serif mb-2">The Suba Difference</h4>
              <p>Personal attention to every detail</p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Final Message */}
      <motion.section 
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ 
          opacity: 1,
          transition: { duration: 0.8 }
        }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        <motion.div 
          className="rounded-3xl p-12 relative overflow-hidden"
          style={{ backgroundColor: colors.champagne[400] + '40' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.6 }
          }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            style={{ backgroundColor: colors.blush[400] }}
          ></div>
          
          <motion.h3 
            className="text-3xl font-serif font-bold mb-6 relative"
            style={{ color: colors.gold[600] }}
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { delay: 0.4 }
            }}
            viewport={{ once: true }}
          >
            Our Promise to You
          </motion.h3>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 relative"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { delay: 0.6 }
            }}
            viewport={{ once: true }}
          >
            To treat your wedding with the same love, care and attention to detail as we did that very first one - because every love story deserves its perfect beginning.
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-4 relative"
            initial={{ opacity: 0 }}
            whileInView={{ 
              opacity: 1,
              transition: { delay: 0.8 }
            }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="border-2 px-8 py-3 rounded-full text-lg font-semibold hover:bg-white transition-all"
              style={{ borderColor: colors.gold[600], color: colors.gold[600] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" /> Call Us
              </span>
            </motion.button>
            
            <motion.button 
              className="border-2 px-8 py-3 rounded-full text-lg font-semibold hover:bg-white transition-all"
              style={{ borderColor: colors.gold[600], color: colors.gold[600] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" /> Email Us
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutUs;