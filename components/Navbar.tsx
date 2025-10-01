"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

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
    <nav 
      className="sticky top-0 z-50 backdrop-blur-xl border-b"
      style={{ 
        backgroundColor: 'var(--background)', 
        opacity: '0.95',
        borderColor: 'var(--border)'
      }}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold transition-colors duration-300 smooth-transition" style={{ color: 'var(--text)' }}>
            Muhammad Athaqil Makarim
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 smooth-transition group"
                  style={{ color: 'var(--text)', opacity: '0.8' }}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Sliding underline effect */}
                  <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-out-expo ${
                    isActive(item.href) 
                      ? 'w-full opacity-100' 
                      : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                  }`}
                  style={{ backgroundColor: 'var(--primary)' }}></span>
                  
                  {/* Active state background */}
                  <span className={`absolute inset-0 rounded-md transition-all duration-300 ease-out-expo ${
                    isActive(item.href) 
                      ? 'opacity-100' 
                      : 'opacity-0 group-hover:opacity-100'
                  }`}
                  style={{ backgroundColor: 'var(--primary)', opacity: '0.1' }}></span>
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md transition-colors duration-200 smooth-transition"
              style={{ color: 'var(--text)', opacity: '0.8' }}
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
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-out-expo ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-4 space-y-1 border-t" style={{ borderColor: 'var(--border)' }}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-md transition-all duration-300 ease-out-expo smooth-transition ${
                  isActive(item.href)
                    ? 'border-l-4'
                    : ''
                }`}
                style={{
                  color: isActive(item.href) ? 'var(--primary)' : 'var(--text)',
                  opacity: isActive(item.href) ? '1' : '0.8',
                  backgroundColor: isActive(item.href) ? 'var(--primary)' : 'transparent',
                  borderLeftColor: isActive(item.href) ? 'var(--primary)' : 'transparent'
                }}
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
