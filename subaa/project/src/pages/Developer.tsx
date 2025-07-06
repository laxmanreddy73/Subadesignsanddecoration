import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Globe, ArrowLeft, Home, Code, Award, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Developer = () => {
  const navigate = useNavigate();

  // Store the previous page in sessionStorage when component mounts
  useEffect(() => {
    const referrer = document.referrer;
    const currentDomain = window.location.origin;
    
    // If coming from the same domain, store the previous path
    if (referrer.startsWith(currentDomain)) {
      const previousPath = referrer.replace(currentDomain, '') || '/';
      sessionStorage.setItem('previousPage', previousPath);
    } else {
      // If coming from external or direct access, default to home
      sessionStorage.setItem('previousPage', '/');
    }
  }, []);

  const handleGoBack = () => {
    const previousPage = sessionStorage.getItem('previousPage') || '/';
    navigate(previousPage);
  };

  const developer = {
    name: "Laxman Reddy Kotta",
    role: "Full Stack Developer",
    bio: "Passionate full-stack developer with expertise in React, Node.js, and modern web technologies. Committed to creating efficient, scalable, and user-friendly applications that deliver exceptional user experiences.",
    image: "https://i.ibb.co/cRqjT7C/Whats-App-Image-2025-03-10-at-11-46-13-AM.jpg",
    experience: "3+ Years",
    location: "Hyderabad, India",
    skills: [
      "React.js", "Node.js", "TypeScript", "MongoDB", "Express.js",
      "Next.js", "Tailwind CSS", "GraphQL", "AWS", "Docker",
      "Python", "PostgreSQL", "Redis", "Microservices"
    ],
    contact: {
      email: "kottalaxmanreddyyoyo@gmail.com",
      phone: "+91 6302429077",
      github: "https://github.com/laxmanreddy2002",
      linkedin: "https://www.linkedin.com/in/laxman-reddy-kotta-1510512bb/",
      portfolio: "https://laxman-portfolio.vercel.app"
    },
    projects: [
      {
        name: "Suba Designs & Decorations",
        description: "A luxury wedding planning website with stunning animations, video backgrounds, and comprehensive service showcases. Features include contact forms, portfolio galleries, and responsive design.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "EmailJS"],
        status: "Live Production"
      },
      {
        name: "Visakha Tech Solutions",
        description: "A comprehensive website for an electro-mechanical solutions company featuring modern design, service catalogs, and client testimonials with full responsiveness.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        status: "Live Production"
      },
      {
        name: "Personal Portfolio",
        description: "Interactive portfolio showcasing projects and skills with 3D animations, dark mode, and modern UI/UX design principles.",
        tech: ["Next.js", "Tailwind CSS", "Three.js", "Framer Motion"],
        status: "Live Production"
      }
    ],
    achievements: [
      "Built 15+ production-ready web applications",
      "Specialized in modern React ecosystem",
      "Expert in responsive design and animations",
      "Strong focus on performance optimization"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Navigation Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-12"
        >
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group bg-white/5 px-4 py-2 rounded-full hover:bg-white/10"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Go Back</span>
          </button>
          
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group bg-white/5 px-4 py-2 rounded-full hover:bg-white/10"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative w-40 h-40 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <img
              src={developer.image}
              alt={developer.name}
              className="relative w-40 h-40 rounded-full object-cover border-4 border-white/20 shadow-2xl"
            />
            <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-gray-900 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {developer.name}
          </h1>
          <p className="text-xl text-gray-400 mb-2">{developer.role}</p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1">
              <Award className="w-4 h-4" />
              {developer.experience}
            </span>
            <span>•</span>
            <span>{developer.location}</span>
          </div>
          <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed">{developer.bio}</p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "Projects Completed", value: "15+", icon: Code },
            { label: "Years Experience", value: "3+", icon: Award },
            { label: "Technologies", value: "14+", icon: Star },
            { label: "Happy Clients", value: "10+", icon: Github }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {developer.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 text-blue-300"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developer.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white/5 to-white/10 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 bg-blue-500/10 rounded-full text-blue-400 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {developer.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${developer.contact.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 border border-blue-500/20 hover:border-blue-500/50"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href={`tel:${developer.contact.phone}`}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full hover:from-green-500/20 hover:to-blue-500/20 transition-all duration-300 border border-green-500/20 hover:border-green-500/50"
            >
              <Phone className="w-5 h-5" />
              <span>Call</span>
            </a>
            <a
              href={developer.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-500/10 to-gray-600/10 rounded-full hover:from-gray-500/20 hover:to-gray-600/20 transition-all duration-300 border border-gray-500/20 hover:border-gray-500/50"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href={developer.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/10 to-blue-700/10 rounded-full hover:from-blue-600/20 hover:to-blue-700/20 transition-all duration-300 border border-blue-600/20 hover:border-blue-600/50"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={developer.contact.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 border border-purple-500/20 hover:border-purple-500/50"
            >
              <Globe className="w-5 h-5" />
              <span>Portfolio</span>
            </a>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center mt-16"
        >
          <button
            onClick={handleGoBack}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-medium hover:scale-105"
          >
            Return to Previous Page
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Developer;