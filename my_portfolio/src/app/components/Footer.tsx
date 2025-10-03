import React from 'react';
import  Link  from "next/link"; ;
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center text-2xl font-bold text-white group mb-6">
              <div className="w-8 h-8 mr-2 bg-gradient-to-br from-orange-500 to-pink-600 rounded-lg flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-12">
                D
              </div>
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                arakhshan
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Full Stack Developer specializing in creating beautiful,
              functional, and user-friendly applications that deliver
              exceptional experiences.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Darakhshan08" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all">
                <Github className="w-5 h-5 text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/in/darakhshan-shah-4b0a79237" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all">
                <Linkedin className="w-5 h-5 text-gray-300" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all">
                <Twitter className="w-5 h-5 text-gray-300" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <p>Karachi, Pakistan</p>
              <p>darakhshanshah8@gmail.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-sm">
            © {currentYear} Darakhshan Shah. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-gray-300 text-sm">
            Designed and built {' '}
            {/* <Heart className="w-4 h-4 text-orange-500 fill-orange-500" /> by */}
            Darakhshan Shah
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;