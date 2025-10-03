"use client";
import React, { useState } from 'react';
import { Code, Server, Database, Brain, Globe } from 'lucide-react';
interface Technology {
  name: string;
  icon: string;
}
interface TechCategory {
  category: string;
  title: string;
  icon: JSX.Element;
  technologies: Technology[];
}
interface CategoryFilter {
  id: string;
  name: string;
  icon: JSX.Element;
}
const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories: CategoryFilter[] = [{
    id: 'all',
    name: 'All',
    icon: <Globe className="w-4 h-4" />
  }, {
    id: 'languages',
    name: 'Languages',
    icon: <Code className="w-4 h-4" />
  }, {
    id: 'frontend',
    name: 'Frontend',
    icon: <Code className="w-4 h-4" />
  }, {
    id: 'backend',
    name: 'Backend',
    icon: <Server className="w-4 h-4" />
  }, {
    id: 'database',
    name: 'Database',
    icon: <Database className="w-4 h-4" />
  }, {
    id: 'ai',
    name: 'AI & ML',
    icon: <Brain className="w-4 h-4" />
  }, {
    id: 'tools',
    name: 'Tools',
    icon: <div className="w-4 h-4" />
  }];
  const techStack: TechCategory[] = [{
    category: 'languages',
    title: 'Programming Languages',
    icon: <Code className="w-6 h-6 text-orange-400" />,
    technologies: [{
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    }, {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    }, {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    }, {
      name: 'PHP',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    }]
  }, {
    category: 'frontend',
    title: 'Frontend Development',
    icon: <Globe className="w-6 h-6 text-orange-400" />,
    technologies: [{
      name: 'React.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    }, {
      name: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
    }, {
      name: 'HTML5',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    }, {
      name: 'CSS3',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    }]
  }, {
    category: 'backend',
    title: 'Backend Development',
    icon: <Server className="w-6 h-6 text-orange-400" />,
    technologies: [{
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    }, {
      name: 'Express.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    }, {
      name: 'FastAPI',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg'
    }]
  }, {
    category: 'database',
    title: 'Databases',
    icon: <Database className="w-6 h-6 text-orange-400" />,
    technologies: [{
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    }, {
      name: 'MySQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    }, {
      name: 'MSSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'
    }]
  }, {
    category: 'ai',
    title: 'AI & Data Science',
    icon: <Brain className="w-6 h-6 text-orange-400" />,
    technologies: [{
      name: 'Agentic AI',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    }, {
      name: 'Machine Learning',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
    }]
  }, {
    category: 'tools',
    title: 'Tools & Platforms',
    icon: <div className="w-6 h-6 text-orange-400" />,
    technologies: [{
      name: 'GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    }, {
      name: 'Vercel',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
    }, {
      name: 'Bootstrap',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
    }, {
      name: 'MS Office',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg'
    }]
  }];
  const filteredTechStack = activeCategory === 'all' ? techStack : techStack.filter(category => category.category === activeCategory);
  return <section className="py-24 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-pink-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-pink-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="text-center mb-16">
        <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-400 text-sm font-medium border border-orange-500/20 mb-4">
          Technologies
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          My Technical Expertise
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A comprehensive showcase of technologies I use to build modern,
          scalable applications
        </p>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id ? 'bg-gradient-to-r from-orange-500 to-pink-600 text-white shadow-lg shadow-orange-500/20' : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10'}`}>
            {category.icon}
            {category.name}
          </button>)}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredTechStack.map((category, idx) => <div key={idx} className="relative overflow-hidden group">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 group-hover:border-orange-500/30">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-pink-600/20 rounded-xl flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                  {category.title}
                </h3>
              </div>
              {/* Technology Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.technologies.map((tech, index) => <div key={index} className="flex items-center gap-3 group/tech hover:-translate-y-1 transition-all duration-300">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center p-2 group-hover/tech:bg-gradient-to-br group-hover/tech:from-orange-500/20 group-hover/tech:to-pink-600/20 transition-all duration-300">
                      <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                    </div>
                    <span className="text-gray-300 group-hover/tech:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>)}
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -top-2 -right-2 w-16 h-16 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
                  <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-r from-orange-500 to-pink-600 w-16 h-2"></div>
                </div>
              </div>
            </div>
          </div>)}
      </div>
      {/* Skills progression bars - only show when "all" is selected */}
      {activeCategory === 'all' && <div className="mt-20 bg-white/5 border border-white/10 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Proficiency Levels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>React.js & Next.js</span>
                <span className="text-orange-400">90%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[90%] bg-gradient-to-r from-orange-500 to-pink-600 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Agentic AI & ML</span>
                <span className="text-orange-400">85%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[85%] bg-gradient-to-r from-orange-500 to-pink-600 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Node.js & Express.js</span>
                <span className="text-orange-400">80%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[80%] bg-gradient-to-r from-orange-500 to-pink-600 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>MongoDB & MySQL</span>
                <span className="text-orange-400">75%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[75%] bg-gradient-to-r from-orange-500 to-pink-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>}
    </section>;
};
export default TechStackSection;