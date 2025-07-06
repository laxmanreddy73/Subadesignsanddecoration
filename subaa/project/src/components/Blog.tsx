import React from 'react';
import { Calendar, ArrowRight, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: '10 Essential Tips for Planning Your Dream Wedding',
      excerpt: 'Planning your wedding can be overwhelming, but with the right guidance, it can be an enjoyable journey. Here are our top tips to help you create the perfect celebration.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Suba Team',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Planning Tips'
    },
    {
      title: 'Spring Wedding Color Palettes: Fresh Ideas for 2024',
      excerpt: 'Discover the most beautiful color combinations for spring weddings. From soft pastels to bold botanicals, find the perfect palette for your special day.',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Design Team',
      date: 'March 10, 2024',
      readTime: '7 min read',
      category: 'Design Trends'
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-champagne-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Wedding Inspiration Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get inspired with our latest wedding trends, planning tips, and behind-the-scenes 
            stories from our most memorable celebrations.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-rosegold-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <button className="inline-flex items-center text-rosegold-600 hover:text-rosegold-700 font-semibold transition-colors group">
                  Read Full Article
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Featured Topics */}
        <div className="bg-gradient-to-r from-blush-100 to-champagne-100 rounded-2xl p-8 md:p-12 animate-fade-in">
          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-gray-800 mb-6">
              Popular Wedding Topics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {['Planning Timeline', 'Budget Tips', 'Venue Selection', 'Decoration Ideas', 
                'Photography', 'Catering Guide', 'Music & Entertainment', 'Guest Management'].map((topic, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <span className="text-gray-700 font-medium">{topic}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Stay updated with our latest wedding insights and tips
            </p>
            <button className="bg-rosegold-500 hover:bg-rosegold-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All Articles
            </button>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mt-16 animate-fade-in">
          <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
            Never Miss Wedding Inspiration
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for weekly wedding tips and exclusive content
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-rosegold-500 focus:border-transparent"
            />
            <button className="bg-rosegold-500 hover:bg-rosegold-600 text-white px-6 py-3 rounded-r-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;