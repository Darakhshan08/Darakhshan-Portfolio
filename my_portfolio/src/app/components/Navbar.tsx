// import Image from "next/image";
"use client";
import React, { useEffect, useState } from 'react';
import { usePathname } from "next/navigation"; 
import Link from "next/link";
import { Github, Linkedin, Menu, X } from 'lucide-react';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const isActive = (path: string) => {
    return pathname === path;
  };
  return <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0d0b17]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <header className="w-full max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center text-2xl font-bold text-white group">
          <div className="w-8 h-8 mr-2 bg-gradient-to-br from-orange-500 to-pink-600 rounded-lg flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-12">
            D
          </div>
          <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            arakhshan
          </span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['/', '/about', '/contact'].map((path, index) => {
          const label = path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2);
          return <Link key={index} href={path} className={`relative py-2 text-white transition-all duration-300 hover:text-orange-400 ${isActive(path) ? 'text-orange-400' : ''}`}>
                {label}
                {isActive(path) && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></span>}
              </Link>;
        })}
        </nav>
        {/* Social Links */}
        <div className="hidden md:flex items-center gap-5">
          <a href="https://github.com/Darakhshan08" target="_blank" rel="noopener noreferrer" className="group">
            <Github className="w-5 h-5 text-gray-300 transition-all duration-300 group-hover:text-orange-400 group-hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/darakhshan-shah-4b0a79237" target="_blank" rel="noopener noreferrer" className="group">
            <Linkedin className="w-5 h-5 text-gray-300 transition-all duration-300 group-hover:text-orange-400 group-hover:scale-110" />
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>
      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden fixed inset-0 bg-[#0d0b17]/95 backdrop-blur-md z-40 pt-20">
          <nav className="flex flex-col items-center gap-8 p-8">
            {['/', '/about', '/contact'].map((path, index) => {
          const label = path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2);
          return <Link key={index} href={path} className={`text-2xl font-medium ${isActive(path) ? 'text-orange-400' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {label}
                </Link>;
        })}
            <div className="flex items-center gap-8 mt-8">
              <a href="https://github.com/Darakhshan08" target="_blank" rel="noopener noreferrer">
                <Github className="w-6 h-6 text-gray-300 hover:text-orange-400" />
              </a>
              <a href="https://www.linkedin.com/in/darakhshan-shah-4b0a79237" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 text-gray-300 hover:text-orange-400" />
              </a>
            </div>
          </nav>
        </div>}
    </div>;
};
export default Navbar;