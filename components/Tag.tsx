import React from 'react';

interface TagProps {
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ children, onClick, isActive, className }) => {
  const baseStyles = "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-all duration-300 ease-out focus-outline active:scale-[0.98] group";
  const defaultStyles = "border-border bg-surface/60 text-text/80 hover:bg-border/60 hover:border-primary/40 hover:text-primary hover:shadow-sm hover:-translate-y-0.5";
  const activeStyles = "border-primary/40 bg-primary/15 text-primary hover:bg-primary/20 hover:shadow-sm hover:-translate-y-0.5";

  return (
    <button
      className={`${baseStyles} ${isActive ? activeStyles : defaultStyles} ${className || ''}`}
      onClick={onClick}
      aria-pressed={isActive}
    >
      {children}
    </button>
  );
};

export default Tag;
