"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/experience', label: 'Experience' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-text hover:text-primary transition-colors duration-300 smooth-transition">
            Muhammad Athaqil Makarim
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-text/80 hover:text-text transition-colors duration-300 smooth-transition group"
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Sliding underline effect */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ease-out-expo ${
                  isActive(item.href) 
                    ? 'w-full opacity-100' 
                    : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                }`}></span>
                
                {/* Active state background */}
                <span className={`absolute inset-0 bg-primary/5 rounded-md transition-all duration-300 ease-out-expo ${
                  isActive(item.href) 
                    ? 'opacity-100' 
                    : 'opacity-0 group-hover:opacity-100'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-text/80 hover:text-text hover:bg-surface/50 transition-colors duration-200 smooth-transition"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-out-expo ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-1 border-t border-border">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-md transition-all duration-300 ease-out-expo smooth-transition ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10 border-l-4 border-primary'
                    : 'text-text/80 hover:text-text hover:bg-surface/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
