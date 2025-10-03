"use client";
import React, { useEffect, useRef } from 'react';
import Link from "next/link";
import { ArrowRight, Code, Server, Globe, BookOpen } from 'lucide-react';
const HeroSection = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const phrases = ['Web Applications', 'MERN Stack', 'User Interfaces', 'AI & Data Science'];
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    const type = () => {
      if (!textRef.current) return;
      const current = phrases[currentPhrase];
      if (isDeleting) {
        textRef.current.textContent = current.substring(0, currentChar - 1);
        currentChar--;
        typingSpeed = 50;
      } else {
        textRef.current.textContent = current.substring(0, currentChar + 1);
        currentChar++;
        typingSpeed = 100;
      }
      if (!isDeleting && currentChar === current.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at the end
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        typingSpeed = 500; // Pause before typing next phrase
      }
      setTimeout(type, typingSpeed);
    };
    const timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, []);
  return <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-3/5 space-y-8 text-center md:text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-400 text-sm font-medium border border-orange-500/20">
            Full Stack Developer
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transforming ideas into <br />
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              digital reality
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            I develop <span ref={textRef} className="text-orange-400"></span>
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href="/contact" className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-lg hover:opacity-90 transition-all flex items-center gap-2 font-medium">
              Get in touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/about" className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all">
              Learn more about me
            </Link>
          </div>
          {/* Tech Cards */}
          <div className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <Code className="w-4 h-4 text-orange-400" />
              <span>Frontend</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <Server className="w-4 h-4 text-orange-400" />
              <span>Backend</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <Globe className="w-4 h-4 text-orange-400" />
              <span>Agentic AI & ML</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <BookOpen className="w-4 h-4 text-orange-400" />
              <span>Continuous Learner</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/5 relative">
          <div className="relative z-10">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-orange-500 to-pink-600 mx-auto bg-white/5 flex items-center justify-center">
              {/* <svg className="w-40 h-40 text-orange-400/30" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
              </svg> */}
             <svg xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-40 h-40 text-pink-400/30">
              <path d="M12 2c-3 0-6 2.5-6 6s3 6 6 6 6-2.5 6-6-3-6-6-6z" fill="currentColor" opacity="0.4"/>
              <path d="M4 22c0-4 4-7 8-7s8 3 8 7H4z"/>
              </svg>



            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full blur-md"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full blur-md"></div>
          </div>
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;