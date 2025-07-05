import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Award, 
  Code, 
  Server, 
  Database,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'services', 'experience', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-blue-400">Cloud</span>Architect
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Services', 'Experience', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-slate-800 border-t border-slate-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About', 'Skills', 'Services', 'Experience', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1535557597501-0fee0a500c57')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-4"
          style={{ y: y1 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-400">Cloud</span> Solutions
            <br />
            <span className="text-gray-300">Architect</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming businesses through scalable cloud architecture, 
            DevOps excellence, and innovative infrastructure solutions.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Services
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-white w-8 h-8 opacity-70" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                About <span className="text-blue-400">Me</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                As a seasoned Cloud Solutions Architect with over 8 years of experience, 
                I specialize in designing and implementing scalable, secure, and cost-effective 
                cloud infrastructure across AWS, Azure, and Google Cloud Platform.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                My expertise spans cloud migration strategies, DevOps implementation, 
                security best practices, and enterprise-grade architecture design. 
                I've successfully led digital transformation initiatives for Fortune 500 
                companies and innovative startups alike.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <Award className="w-5 h-5" />
                  <span>8+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <Users className="w-5 h-5" />
                  <span>50+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <Cloud className="w-5 h-5" />
                  <span>Multi-Cloud Expert</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1596784326488-23581279e33d" 
                  alt="Professional workspace" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Technical <span className="text-blue-400">Skills</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Expertise across cloud platforms, infrastructure as code, 
              and modern DevOps practices.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Cloud className="w-8 h-8" />, title: "Cloud Platforms", skills: ["AWS", "Azure", "Google Cloud", "Multi-Cloud"] },
              { icon: <Code className="w-8 h-8" />, title: "Infrastructure as Code", skills: ["Terraform", "CloudFormation", "Pulumi", "ARM Templates"] },
              { icon: <Server className="w-8 h-8" />, title: "DevOps & CI/CD", skills: ["Jenkins", "GitLab CI", "GitHub Actions", "Azure DevOps"] },
              { icon: <Database className="w-8 h-8" />, title: "Databases", skills: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB"] },
              { icon: <Shield className="w-8 h-8" />, title: "Security", skills: ["IAM", "Security Groups", "VPC", "Compliance"] },
              { icon: <Zap className="w-8 h-8" />, title: "Monitoring", skills: ["CloudWatch", "Grafana", "Prometheus", "ELK Stack"] }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-blue-400 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{skill.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((s, i) => (
                    <span key={i} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <motion.img 
              src="https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg" 
              alt="Technology interface" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              My <span className="text-blue-400">Services</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive cloud solutions tailored to your business needs.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cloud Migration",
                description: "Seamless migration of your applications and data to the cloud with minimal downtime and maximum efficiency.",
                icon: <Cloud className="w-12 h-12" />
              },
              {
                title: "Architecture Design",
                description: "Scalable, secure, and cost-effective cloud architecture designed for your specific business requirements.",
                icon: <Server className="w-12 h-12" />
              },
              {
                title: "DevOps Implementation",
                description: "Complete DevOps pipeline setup with automated testing, deployment, and monitoring solutions.",
                icon: <Code className="w-12 h-12" />
              },
              {
                title: "Security & Compliance",
                description: "Robust security frameworks and compliance strategies to protect your cloud infrastructure.",
                icon: <Shield className="w-12 h-12" />
              },
              {
                title: "Cost Optimization",
                description: "Analyze and optimize your cloud spending while maintaining performance and reliability.",
                icon: <Zap className="w-12 h-12" />
              },
              {
                title: "Consulting & Training",
                description: "Expert guidance and team training to accelerate your cloud adoption journey.",
                icon: <Users className="w-12 h-12" />
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-slate-900 p-8 rounded-xl border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-blue-400 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <motion.img 
              src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f" 
              alt="Cloud architecture diagram" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Recent <span className="text-blue-400">Projects</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Successful cloud transformations and infrastructure implementations.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Enterprise Cloud Migration",
                company: "Fortune 500 Financial Services",
                duration: "2023 - 2024",
                description: "Led the migration of legacy systems to AWS, reducing infrastructure costs by 40% while improving performance and security.",
                technologies: ["AWS", "Terraform", "Docker", "Kubernetes"]
              },
              {
                title: "Multi-Cloud DevOps Platform",
                company: "Tech Startup",
                duration: "2022 - 2023",
                description: "Designed and implemented a multi-cloud CI/CD pipeline supporting rapid deployment across AWS, Azure, and GCP.",
                technologies: ["Jenkins", "GitLab CI", "Azure DevOps", "Prometheus"]
              },
              {
                title: "Serverless Architecture Redesign",
                company: "E-commerce Platform",
                duration: "2021 - 2022",
                description: "Transformed monolithic architecture to serverless microservices, achieving 60% cost reduction and improved scalability.",
                technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudFront"]
              },
              {
                title: "Hybrid Cloud Implementation",
                company: "Healthcare Provider",
                duration: "2020 - 2021",
                description: "Implemented secure hybrid cloud solution ensuring HIPAA compliance while enabling digital transformation.",
                technologies: ["Azure", "VPN Gateway", "Azure AD", "Compliance Center"]
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-400 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-blue-400 font-medium">{project.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm">{project.duration}</span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              <span className="text-blue-400">Certifications</span> & Achievements
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Industry-recognized certifications and professional achievements.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AWS Solutions Architect",
                level: "Professional",
                provider: "Amazon Web Services",
                year: "2023",
                color: "bg-orange-500"
              },
              {
                title: "Azure Solutions Architect",
                level: "Expert",
                provider: "Microsoft Azure",
                year: "2023",
                color: "bg-blue-500"
              },
              {
                title: "Google Cloud Architect",
                level: "Professional",
                provider: "Google Cloud",
                year: "2022",
                color: "bg-green-500"
              },
              {
                title: "Kubernetes Administrator",
                level: "Certified",
                provider: "CNCF",
                year: "2022",
                color: "bg-purple-500"
              },
              {
                title: "Terraform Associate",
                level: "Certified",
                provider: "HashiCorp",
                year: "2021",
                color: "bg-indigo-500"
              },
              {
                title: "DevOps Engineer",
                level: "Professional",
                provider: "AWS",
                year: "2021",
                color: "bg-red-500"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-12 h-12 ${cert.color} rounded-lg mb-4 flex items-center justify-center`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-blue-400 text-sm mb-1">{cert.level}</p>
                <p className="text-gray-400 text-sm mb-2">{cert.provider}</p>
                <p className="text-gray-500 text-sm">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Let's <span className="text-blue-400">Connect</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to transform your business with cloud solutions? 
              Let's discuss your project and explore how I can help.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-gray-300">architect@cloudexpert.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-gray-300">San Francisco, CA</p>
                  </div>
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <a 
                    href="#" 
                    className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-colors"
                  >
                    <LinkedIn className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-colors"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.form
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  placeholder="Project discussion"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 CloudArchitect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;