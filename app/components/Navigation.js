'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Practice Areas', href: '/practice-areas' },
    { name: 'Attorneys', href: '/attorneys' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-navy shadow-2xl sticky top-0 z-40 border-b border-gold/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="text-cream text-xl sm:text-2xl font-bold tracking-wide">
                <span className="text-gold">AEQUITAS</span>
                <span className="text-cream font-light hidden sm:inline"> | </span>
                <span className="text-cream font-normal hidden sm:inline">LAW PARTNERS</span>
                <span className="text-cream font-normal sm:hidden">LP</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-cream hover:text-gold px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gold text-navy px-6 py-2 rounded-sm hover:bg-dark-gold transition-all duration-300 font-semibold text-sm tracking-widest uppercase shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cream hover:text-gold focus:outline-none transition-colors duration-300"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-navy border-t border-gold/20">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-cream hover:text-gold block px-3 py-2 text-base font-medium tracking-wide uppercase transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <button className="w-full bg-gold text-navy px-4 py-2 rounded-sm hover:bg-dark-gold transition-colors duration-300 font-semibold text-sm tracking-wide uppercase">
                  Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
