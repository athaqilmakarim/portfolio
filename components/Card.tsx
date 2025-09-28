import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ children, className, style }) => {
  return (
    <div
      className={`rounded-[var(--radius)] border border-border bg-white/70 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out group ${className || ''}`}
      style={style}
    >
      <div className="p-5 md:p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;
