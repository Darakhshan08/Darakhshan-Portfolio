import React from "react";
// import Image from "next/image";
import Link from "next/link";
import { Code, Server, Laptop, Database, BookOpen, GraduationCap, Award, Brain, ChartBar } from 'lucide-react';

function About() {
  const skills = [
       {
      name: 'Agentic AI , AI Chatbot & Data Science',
      icon: <Database className="w-5 h-5 text-orange-400" />,
      description: 'Working with Agentic AI, AI Chatbot and Machine Learning using Python'
    },
    {
      name: 'Backend Development',
      icon: <Server className="w-5 h-5 text-orange-400" />,
      description: 'Building robust server-side applications with Node.js, Express.js, FastAPI'
    },
    {
      name: 'Full Stack Development',
      icon: <Laptop className="w-5 h-5 text-orange-400" />,
      description: 'End-to-end application development with MERN stack'
    },
 
    {
      name: 'Frontend Development',
      icon: <Code className="w-5 h-5 text-orange-400" />,
      description: 'Creating responsive and interactive user interfaces with React.js, Next.js'
    }
  ];

  const education = [
    {
      degree: 'GIAIC (Governor&#39;s Initiative for Agentic AI & Computing)',
      institution: 'Governor House Sindh',
      period: 'Expected 2026',
      description:'A government-backed program specializing in Agentic AI and advanced computing technologies.',
    },
    {
      degree: 'Software Engineering Diploma (ACCP PRIME 2.0)',
      institution: 'Aptech',
      period: 'Completed',
      description: 'Focusing on practical software engineering skills and modern development practices.'
    },
    {
      degree: "Master&#39;s in International Relations",
      institution: 'Karachi University',
      period: 'Completed',
      description: 'Studied international politics, diplomacy, and global affairs.'
    },
    {
      degree: 'Bachelor of Arts',
      institution: 'HRH Aga Khan Govt Girls Degree College',
      period: 'Completed',
      description: 'Foundation in arts and humanities with focus on critical thinking and analysis.'
    }
  ];

  const professionalGoals = [
    {
      title: 'Full Stack Developer',
      icon: <Laptop className="w-5 h-5 text-orange-400" />,
      description: 'Building expertise in end-to-end web development with modern frameworks and technologies to create scalable, user-friendly applications.'
    },
    {
      title: 'Agentic AI Specialist',
      icon: <Brain className="w-5 h-5 text-orange-400" />,
      description: 'Developing intelligent agent systems that can autonomously perform tasks, make decisions, and adapt to changing environments.'
    },
    {
      title: 'Data Science Professional',
      icon: <ChartBar className="w-5 h-5 text-orange-400" />,
      description: 'Analyzing complex datasets to extract meaningful insights and build predictive models that solve real-world problems.'
    }
  ];

  return (
    <div className="bg-[#191624] text-white pt-32 pb-20">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-400 text-sm font-medium border border-orange-500/20 mb-4">
            About Me
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Passionate{' '}
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              Developer & AI Enthusiast
            </span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            With expertise in modern web technologies and a growing focus on AI
            and data science applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Left Column */}
          <div className="md:col-span-1">
            <div className="sticky top-32">
              <div className="relative">
                <div className="rounded-xl overflow-hidden border-2 border-white/10 relative z-10 bg-white/5 h-80 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-48 h-48 text-pink-400/30">
                    <path d="M12 2c-3 0-6 2.5-6 6s3 6 6 6 6-2.5 6-6-3-6-6-6z" fill="currentColor" opacity="0.4"/>
                    <path d="M4 22c0-4 4-7 8-7s8 3 8 7H4z"/>
                  </svg>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-1/2 h-1/2 bg-gradient-to-r from-orange-500/30 to-pink-600/30 rounded-xl -z-10 blur-md"></div>
                <div className="absolute -bottom-4 -left-4 w-1/2 h-1/2 bg-gradient-to-r from-orange-500/30 to-pink-600/30 rounded-xl -z-10 blur-md"></div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                  <BookOpen className="w-6 h-6 text-orange-400" />
                  <div>
                    <h3 className="font-medium">Education</h3>
                    <p className="text-sm text-gray-300">Software Engineer</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                  <Award className="w-6 h-6 text-orange-400" />
                  <div>
                    <h3 className="font-medium">Aspirations</h3>
                    <p className="text-sm text-gray-300">Agentic AI, Data Science & MERN Stack</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-16">
            {/* Journey */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-6 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></span>
                My Journey
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                I am a passionate developer with a strong focus on Agentic AI, Data Science (ML),
                and AI-powered Chatbots, exploring how intelligent systems can transform education,
                career guidance, and real-world problem solving. My journey revolves around building 
                AI-driven solutions that go beyond automation — delivering meaningful insights,
                personalized assistance, and innovative user experiences.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                I also work with the MERN Stack to build efficient and scalable web applications.
                With knowledge of both front-end and back-end technologies, I aim to develop 
                solutions that are technically robust as well as user-friendly.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My approach to development combines technical skills with creative problem-solving,
                enabling me to create applications that integrate modern web development with 
                artificial intelligence. As a fresh software engineer with a diploma,
                I am continuously learning and exploring new technologies to deliver innovative 
                and practical solutions.
              </p>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-6 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></span>
                Education
              </h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-gradient-to-r before:from-orange-400 before:to-pink-500 before:rounded-full after:content-[''] after:absolute after:left-1.5 after:top-5 after:w-[1px] after:h-full after:bg-gradient-to-b after:from-orange-400/50 after:to-transparent">
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="w-5 h-5 text-orange-400" />
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                      <span>{edu.institution}</span>
                      <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                      <span>{edu.period}</span>
                    </div>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-6 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></span>
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/30 transition-all">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                    <p className="text-gray-300 text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Goals */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-6 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></span>
                Professional Goals
              </h2>
              <div className="space-y-6">
                {professionalGoals.map((goal, index) => (
                  <div key={index} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/30 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        {goal.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{goal.title}</h3>
                        <p className="text-gray-300">{goal.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="w-6 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></span>
                Let&#39;s Connect
              </h2>
              <p className="text-gray-300 mb-6">
                I&#39;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <Link href="/contact">
                <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-lg hover:opacity-90 transition-all font-medium" aria-label="Contact me">
                  Get In Touch
                </button>
              </Link>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
