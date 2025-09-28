import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  eyebrow?: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, eyebrow, className }) => {
  return (
    <section className={`space-y-3 md:space-y-4 mb-10 md:mb-14 ${className || ''}`}>
      {eyebrow && (
        <p className="uppercase tracking-wider text-xs text-text/60">
          {eyebrow}
        </p>
      )}
      {children}
    </section>
  );
};

export default Section;
