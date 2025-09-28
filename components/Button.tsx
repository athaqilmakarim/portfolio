import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', href, onClick, className, target, rel }) => {
  const baseStyles = "relative overflow-hidden rounded-[var(--radius)] px-4 py-2 font-medium transition-all duration-300 ease-out focus-outline active:scale-[0.98] group";
  const primaryStyles = "bg-primary text-text/90 border border-border hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5";
  const ghostStyles = "bg-transparent text-text border border-transparent hover:bg-border/60 hover:border-primary/30 hover:text-primary hover:shadow-md hover:-translate-y-0.5";

  const content = (
    <span className={`relative z-10 transition-all duration-300 ${variant === 'primary' ? 'text-text/90' : 'text-text'}`}>
      {children}
    </span>
  );

  const buttonElement = (
    <button
      className={`${baseStyles} ${variant === 'primary' ? primaryStyles : ghostStyles} ${className || ''}`}
      onClick={onClick}
    >
      {variant === 'primary' && (
        <span className="absolute inset-0 block bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shine"></span>
      )}
      {content}
    </button>
  );

  if (href) {
    if (target || rel) {
      return <a href={href} target={target} rel={rel} className="group">{buttonElement}</a>;
    }
    return <Link href={href} className="group">{buttonElement}</Link>;
  }

  return <span className="group">{buttonElement}</span>;
};

export default Button;
