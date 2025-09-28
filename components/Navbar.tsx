"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-3 md:py-4 border-b border-border">
      <div className="container max-w-7xl flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-text focus-outline">
          Aqil Makarim
        </Link>

        <div className="hidden md:flex space-x-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link key={link.name} href={link.href} className="relative group">
                <div className={`px-4 py-2 rounded-[var(--radius)] transition-all duration-300 ease-out ${
                  active 
                    ? 'bg-primary/15 text-primary border border-primary/30' 
                    : 'text-text hover:bg-border/40 hover:text-primary'
                }`}>
                  <span className="relative z-10">{link.name}</span>
                  {active && (
                    <div className="absolute inset-0 bg-primary/5 rounded-[var(--radius)] animate-pulse"></div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        <button
          className="md:hidden text-text focus-outline p-2 rounded-md transition-transform duration-300 ease-out-expo"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ease-out-expo ${isOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm border-b border-border shadow-lg py-4">
            <div className="flex flex-col items-center space-y-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`w-full text-center px-4 py-2 rounded-[var(--radius)] transition-all duration-300 ease-out ${
                      active 
                        ? 'bg-primary/15 text-primary border border-primary/30' 
                        : 'text-text hover:bg-border/40 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
