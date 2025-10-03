"use client";
import React, { useState } from 'react';
import { ExternalLink, Github, Code, Star, Layers } from 'lucide-react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  category: string;
  liveLink: string;
  githubLink: string;
  featured?: boolean;
}
interface FilterOption {
  id: string;
  name: string;
}
const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const filters: FilterOption[] = [{
    id: 'all',
    name: 'All Projects'
  }, {
    id: 'frontend',
    name: 'Frontend'
  }, {
    id: 'fullstack',
    name: 'Full Stack'
  }, {
    id: 'ai',
    name: 'AI & ML'
  }];
  const projects: Project[] = [{
    title: 'AI Agents (Career Mentor, Game Master, Travel Guide)',
    description: 'A suite of intelligent Agents designed to make life easier and more engaging — the Career Mentor Agent offers career guidance and growth tips, the Game Master Agent brings interactive fun and storytelling, while the Travel Agent helps plan seamless and personalized journeys.',
    // image: 'https://images.unsplash.com/photo-1555952494-efd681c7e3f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    image: '/images/agent.jpg',
    techStack: ['Python', 'OpenAI'],
    category: 'ai',
    liveLink: '#',
    githubLink: 'https://github.com/Darakhshan08/AI-Assignments',
    featured: false
  }, {
    title: 'EventSphere Management',
    description: 'Built a full-stack Expo management platform with MERN stack for creating and managing events with user authentication and admin dashboard.',
    image: '/images/hero.jpg',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    category: 'fullstack',
    liveLink: '#',
    githubLink: 'https://github.com/Darakhshan08/EventSphere_Management',
  }, {
    title: 'EduNex-AI (Data Science, AI Chatbot)',
    description: 'Created an AI-powered educational project with an AI Chatbot, integrating ML models with FastAPI backend and React frontend for personalized learning experiences. The chatbot predicts student performance, provides career counseling, assists in studies, and offers dedicated functionalities for teachers and admins',
    // image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    image: '/images/ml.png',
    techStack: ['React.js', 'FastAPI', 'Python', 'Machine Learning', 'Node.js'],
    category: 'ai',
    liveLink: '#',
    githubLink: 'https://github.com/Darakhshan08/EduNex-AI',
    featured: true
  }, {
    title: 'Marketplace Hackathon E-commerce',
    description: 'Developed a hackathon-based e-commerce platform using Next.js with backend integration, featuring product listings, cart functionality, and user authentication.',
    image: '/images/hacathon.png',
    techStack: ['Next.js','Tailwind CSS',"Sanity(CMS)"],
    category: 'fullstack',
    liveLink: 'https://marketplace-hackathon-ecommerce.vercel.app/',
    githubLink: 'https://github.com/Darakhshan08/Marketplace-Hackathon-3/tree/main/heckathon3',
    featured: true
  }, {
    title: 'COVID Test & Vaccination Booking System',
    description: 'Created a PHP/MySQL-based system to allow users to book COVID tests and vaccinations online securely with admin management features.',
    image: '/images/covid.png',   
    techStack: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'Bootstrap'],
    category: 'fullstack',
    liveLink: '#',
    githubLink: 'https://github.com/Darakhshan08/Covid_Test_and_Vaccination_Booking_System',
    featured: false
  }, {
    title: 'React Flowbite Dashboard Clone',
    description: 'A feature-rich React Flowbite Dashboard clone with data charts, real-time updates, and seamless navigation.',
    image: '/images/dash.png',  
    techStack: ["React.js", "Flowbite",  "Tailwind CSS"],
    category: 'frontend',
    liveLink: 'https://react-flowbite-dashboard-clone.vercel.app/',
    githubLink: 'https://github.com/Darakhshan08/React-Flowbite-Dashboard-Clone/tree/main/Dashboard',
    featured: false
  }, {
    title: 'eBay Home Page Clone',
    description: 'Developed a responsive e-commerce homepage clone with React.js, showcasing reusable components and modern UI design.',
    image: '/images/clon-1.png',
    techStack: ['React.js', 'CSS3', 'JavaScript'],
    category: 'frontend',
    liveLink: 'https://react-ebay-clone.vercel.app/',
    githubLink: 'https://github.com/Darakhshan08/React-Ebay-Clone/tree/main/ebay',
    featured: false
  },
  {
    title: 'Eventify – Event Management System ',
    description: 'Designed a full-stack application using PHP & MySQL to manage event registrations and bookings.',
    image: '/images/event.png',
    techStack: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'Bootstrap'],
    category: 'fullstack',
    liveLink: '#',
    githubLink: 'https://github.com/Darakhshan08/Eventify',
    featured: false
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  // Get featured projects
  const featuredProjects = filteredProjects.filter(project => project.featured);
  // Get regular projects (non-featured)
  const regularProjects = filteredProjects.filter(project => !project.featured);
  return <section className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-pink-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-pink-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="text-center mb-16">
        <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-400 text-sm font-medium border border-orange-500/20 mb-4">
          Portfolio
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          My Project Showcase
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore my latest works spanning web development and AI integration
        </p>
      </div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.id ? 'bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-lg shadow-orange-500/20' : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'}`}>
            {filter.name}
          </button>)}
      </div>
      {/* Featured Projects - Showcase Style */}
      {featuredProjects.length > 0 && <>
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-5 h-5 text-orange-400" />
            <h3 className="text-xl font-semibold">Featured Projects</h3>
          </div>
          <div className="grid grid-cols-1 gap-8 mb-16">
            {featuredProjects.map((project, index) => <div key={index} className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-orange-500/30 transition-all duration-300" onMouseEnter={() => setHoveredProject(`featured-${index}`)} onMouseLeave={() => setHoveredProject(null)}>
                <div className="flex flex-col lg:flex-row h-full">
                  <div className="w-full lg:w-1/2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          style={{ aspectRatio: "16/9", objectFit: "cover" }}
        />
                    {/* Tech stack overlay on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => <span key={i} className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/10 rounded-full">
                            {tech}
                          </span>)}
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-6">
                        {project.description}
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-lg hover:opacity-90 transition-all text-sm font-medium">
                        Live Demo <ExternalLink className="w-4 h-4" />
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-sm">
                        Source Code <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Hover effect corner accent */}
                {hoveredProject === `featured-${index}` && <div className="absolute top-0 right-0 w-16 h-16">
                    <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
                      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-r from-orange-500 to-pink-600 w-16 h-2"></div>
                    </div>
                  </div>}
              </div>)}
          </div>
        </>}
      {/* Regular Projects - Grid Style */}
      {regularProjects.length > 0 && <>
          <div className="flex items-center gap-3 mb-8">
            <Layers className="w-5 h-5 text-orange-400" />
            <h3 className="text-xl font-semibold">All Projects</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map((project, index) => <div key={index} className="group flex flex-col overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-orange-500/30 transition-all duration-300 h-full" onMouseEnter={() => setHoveredProject(`regular-${index}`)} onMouseLeave={() => setHoveredProject(null)}>
                {/* Image container with overlay */}
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
                </div>
                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech, i) => <span key={i} className="px-2 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full">
                        {tech}
                      </span>)}
                    {project.techStack.length > 3 && <span className="px-2 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full">
                        +{project.techStack.length - 3}
                      </span>}
                  </div>
                  {/* Links */}
                  <div className="flex gap-3 mt-auto">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-lg hover:opacity-90 transition-all text-xs font-medium">
                      Live <ExternalLink className="w-3 h-3" />
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-xs">
                      Code <Github className="w-3 h-3" />
                    </a>
                  </div>
                </div>
                {/* Hover effect corner accent */}
                {hoveredProject === `regular-${index}` && <div className="absolute top-0 right-0 w-12 h-12">
                    <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
                      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-r from-orange-500 to-pink-600 w-12 h-1.5"></div>
                    </div>
                  </div>}
              </div>)}
          </div>
        </>}
      <div className="text-center mt-16">
        <a href="https://github.com/Darakhshan08" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500/20 to-pink-600/20 border border-white/10 rounded-lg hover:border-orange-500/30 transition-all">
          View All Projects on GitHub <Code className="w-4 h-4" />
        </a>
      </div>
    </section>;
};
export default ProjectsSection;