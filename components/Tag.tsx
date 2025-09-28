import React from 'react';

interface TagProps {
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
  variant?: 'default' | 'secondary' | 'primary' | 'success' | 'warning' | 'tech';
}

const Tag: React.FC<TagProps> = ({
  children,
  onClick,
  isActive,
  className,
  variant = 'default'
}) => {
  const baseStyles = "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200 ease-out-expo active:scale-[0.98] focus-outline";
  const defaultStyles = "border-border bg-surface/60 text-text/80 hover:bg-border/60 hover:-translate-y-0.5";
  const activeStyles = "border-primary/40 bg-primary/15 text-primary hover:-translate-y-0.5";
  const secondaryStyles = "border-border bg-surface/60 text-text/70 hover:-translate-y-0.5";
  const primaryVariantStyles = "border-primary/40 bg-primary/15 text-primary hover:-translate-y-0.5";
  const successVariantStyles = "border-green-400/40 bg-green-400/15 text-green-700 hover:-translate-y-0.5";
  const warningVariantStyles = "border-yellow-400/40 bg-yellow-400/15 text-yellow-700 hover:-translate-y-0.5";
  const techVariantStyles = "border-border bg-surface/60 text-text/70 hover:-translate-y-0.5";

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return primaryVariantStyles;
      case 'success':
        return successVariantStyles;
      case 'warning':
        return warningVariantStyles;
      case 'secondary':
        return secondaryStyles;
      case 'tech':
        return techVariantStyles;
      default:
        return isActive ? activeStyles : defaultStyles;
    }
  };

  return (
    <button
      className={`${baseStyles} ${getVariantStyles()} ${className || ''}`}
      onClick={onClick}
      aria-pressed={isActive}
    >
      {children}
    </button>
  );
};

export default Tag;
