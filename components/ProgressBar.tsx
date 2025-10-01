import React from 'react';

interface ProgressBarProps {
  label: string;
  percentage: number;
  color?: 'primary' | 'success' | 'warning' | 'accent';
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  label, 
  percentage, 
  color = 'primary',
  className 
}) => {
  const colorStyles = {
    primary: 'bg-primary',
    success: 'bg-success',
    warning: 'bg-warning',
    accent: 'bg-accent'
  };

  return (
    <div className={`space-y-2 ${className || ''}`}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{label}</span>
        <span className="text-sm" style={{ color: 'var(--text)', opacity: '0.7' }}>{percentage}%</span>
      </div>
      <div className="progress-bar">
        <div 
          className={`progress-fill ${colorStyles[color]}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
