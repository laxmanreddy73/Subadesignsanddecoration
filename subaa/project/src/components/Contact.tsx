import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Phone, Mail, MapPin, Send, Facebook, Instagram, Twitter, 
  MessageCircle, ChevronDown, ChevronUp, Sparkles, Heart,
  CheckCircle, AlertCircle, Loader2
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    venue: '',
    eventType: '',
    guestCount: '',
    budget: '',
    message: ''
  });

  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_9aspror';
  const EMAILJS_TEMPLATE_ID = 'template_s207awp'; // Contact Us template
  const EMAILJS_AUTO_REPLY_TEMPLATE_ID = 'template_ak02mxm'; // Auto-Reply template
  const EMAILJS_PUBLIC_KEY = 'Zczjags9REiNlv8J7'; // You'll need to provide this

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Initialize EmailJS (you'll need to add your public key)
      emailjs.init('Zczjags9REiNlv8J7');

      // Prepare template parameters for the main contact email
      const contactTemplateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        event_date: formData.eventDate,
        venue: formData.venue,
        event_type: formData.eventType,
        guest_count: formData.guestCount,
        budget: formData.budget,
        message: formData.message,
        to_email: 'subadesigndecoration@gmail.com'
      };

      // Send main contact email to your business
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        contactTemplateParams
      );

      // Prepare template parameters for auto-reply to customer
      const autoReplyTemplateParams = {
        to_name: formData.name,
        to_email: formData.email,
        event_type: formData.eventType,
        event_date: formData.eventDate,
        from_name: 'Suba Designs & Decorations',
        from_email: 'subadesigndecoration@gmail.com'
      };

      // Send auto-reply email to customer
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTO_REPLY_TEMPLATE_ID,
        autoReplyTemplateParams
      );

      setSubmitStatus('success');
      setSubmitMessage('Thank you for your inquiry! We\'ve received your message and will get back to you within 24 hours. Please check your email for a confirmation.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventDate: '',
        venue: '',
        eventType: '',
        guestCount: '',
        budget: '',
        message: ''
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly at subadesigndecoration@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does Suba Designs & Decorations offer?",
      answer: "We specialize in complete wedding decor, including mandap designs, floral arrangements, lighting, and venue transformations. We also handle engagements, receptions, naming ceremonies, baby showers, and corporate events."
    },
    {
      question: "How far in advance should we book your services?",
      answer: "We recommend booking at least 6-9 months in advance for weddings, especially during peak season (October-February). For other events, 3-6 months is ideal."
    },
    {
      question: "Do you work with specific venues in Bangalore?",
      answer: "Yes! We have extensive experience with popular venues across Bangalore including HSR Layout, Nagasandra, and Kengeri areas. We can also create magic at unconventional spaces."
    },
    {
      question: "What makes Suba Designs different from other decorators?",
      answer: "Our signature lies in transforming ordinary spaces into extraordinary experiences using locally-sourced flowers, sustainable materials, and innovative designs that reflect your personality while honoring tradition."
    },
    {
      question: "Can we see samples of your previous work?",
      answer: "Absolutely! Visit our Instagram @subadesigns_n_decoration with 7.2K+ followers showcasing our portfolio, or contact us for a curated lookbook of our designs."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-amber-50">
      {/* Hero Section with Background Image */}
      <section className="relative py-32 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 to-amber-700/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block relative">
            <Sparkles className="absolute -top-8 -left-8 w-12 h-12 text-amber-300 animate-pulse" />
            <Sparkles className="absolute -bottom-6 -right-6 w-10 h-10 text-amber-200 animate-pulse" style={{ animationDelay: '0.5s' }} />
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white">
              Create Golden Moments
            </h1>
          </div>
          
          <div className="w-40 h-1.5 mx-auto mb-8 rounded-full bg-gradient-to-r from-amber-300 to-amber-500"></div>
          
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Since 2011, Suba Designs & Decorations has transformed over 500+ events across Bangalore into unforgettable golden experiences.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-amber-100">
                <div className="flex items-center mb-8">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Send className="h-6 w-6 text-amber-600" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-gray-800">
                    Send Your Inquiry
                  </h2>
                </div>

                {/* Success/Error Messages */}
                {submitStatus !== 'idle' && (
                  <div className={`mb-6 p-4 rounded-lg flex items-start space-x-3 ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-red-50 border border-red-200'
                  }`}>
                    {submitStatus === 'success' ? (
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    )}
                    <p className={`text-sm ${
                      submitStatus === 'success' ? 'text-green-800' : 'text-red-800'
                    }`}>
                      {submitMessage}
                    </p>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        required
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select event type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Engagement">Engagement</option>
                      <option value="Reception">Reception</option>
                      <option value="Naming Ceremony">Naming Ceremony</option>
                      <option value="Baby Shower">Baby Shower</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Venue (if known)
                      </label>
                      <input
                        type="text"
                        name="venue"
                        value={formData.venue}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                        placeholder="Event venue location"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Guest Count
                      </label>
                      <select
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                      >
                        <option value="">Select guest count</option>
                        <option value="50-100">50-100 guests</option>
                        <option value="100-200">100-200 guests</option>
                        <option value="200-300">200-300 guests</option>
                        <option value="300+">300+ guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                    >
                      <option value="">Select budget range</option>
                      <option value="1-2L">₹1-2 Lakhs</option>
                      <option value="2-5L">₹2-5 Lakhs</option>
                      <option value="5-10L">₹5-10 Lakhs</option>
                      <option value="10L+">₹10 Lakhs+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell Us About Your Vision
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
                      placeholder="Describe your dream event, color preferences, theme ideas, or any special requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center shadow-amber-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information & FAQ */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-amber-100">
                <div className="flex items-center mb-8">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <MessageCircle className="h-6 w-6 text-amber-600" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-gray-800">
                    Contact Details
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 rounded-full p-3 flex-shrink-0">
                      <Phone className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                      <p className="text-gray-600">+91 90359 48632</p>
                      <p className="text-gray-600">+91 77021 99767</p>
                      <p className="text-sm text-gray-500 mt-1">Mon-Sun 9AM-8PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 rounded-full p-3 flex-shrink-0">
                      <Mail className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">subadesignsanddecorations@gmail.com</p>
                      <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 rounded-full p-3 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Our Locations</h4>
                      <p className="text-gray-600">
                        <span className="font-medium">HSR Layout Studio:</span><br />
                        #123, 1st Cross, Sector 2, HSR Layout, Bangalore
                      </p>
                      <p className="text-gray-600 mt-2">
                        <span className="font-medium">Nagasandra Office:</span><br />
                        #21, 2nd Cross, Seshadri Nagar, Bagalagunte, Bangalore
                      </p>
                      <p className="text-sm text-gray-500 mt-2">By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-amber-100">
                <div className="flex items-center mb-8">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Instagram className="h-6 w-6 text-amber-600" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-gray-800">
                    Follow Our Work
                  </h2>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://www.instagram.com/subadesigns_n_decoration?igsh=OG5vNzc1ZnZ5ZXFq" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 bg-amber-50 hover:bg-amber-100 p-4 rounded-lg transition-colors border border-amber-100"
                  >
                    <Instagram className="h-6 w-6 text-amber-600" />
                    <span className="font-medium text-amber-600">Instagram</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-center space-x-3 bg-amber-50 hover:bg-amber-100 p-4 rounded-lg transition-colors border border-amber-100"
                  >
                    <Facebook className="h-6 w-6 text-amber-600" />
                    <span className="font-medium text-amber-600">Facebook</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center justify-center space-x-3 bg-amber-50 hover:bg-amber-100 p-4 rounded-lg transition-colors border border-amber-100"
                  >
                    <MessageCircle className="h-6 w-6 text-amber-600" />
                    <span className="font-medium text-amber-600">WhatsApp</span>
                  </a>
                  <a 
                    href="https://www.wedmegood.com/profile/Suba-Event-D..." 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 bg-amber-50 hover:bg-amber-100 p-4 rounded-lg transition-colors border border-amber-100"
                  >
                    <svg className="h-6 w-6 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 12c0 2.481-2.019 4.5-4.5 4.5S7.5 14.481 7.5 12 9.519 7.5 12 7.5s4.5 2.019 4.5 4.5z"/>
                    </svg>
                    <span className="font-medium text-amber-600">WedMeGood</span>
                  </a>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-amber-100">
                <div className="flex items-center mb-8">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <svg className="h-6 w-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-gray-800">
                    Frequently Asked Questions
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-amber-100 pb-4 last:border-0">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="flex justify-between items-center w-full text-left font-medium text-gray-800 hover:text-amber-600 focus:outline-none"
                      >
                        <span>{faq.question}</span>
                        {activeFAQ === index ? (
                          <ChevronUp className="h-5 w-5 text-amber-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-amber-400" />
                        )}
                      </button>
                      {activeFAQ === index && (
                        <div className="mt-2 text-gray-600">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;