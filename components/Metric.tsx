import React from 'react';

interface MetricProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

const Metric: React.FC<MetricProps> = ({ value, label, icon, className }) => {
  return (
    <div className={`text-center p-4 rounded-[var(--radius)] bg-white/50 backdrop-blur-sm border border-border/50 ${className || ''}`}>
      {icon && (
        <div className="text-2xl mb-2 flex justify-center">
          {icon}
        </div>
      )}
      <div className="text-2xl font-bold mb-1" style={{ color: 'var(--text)' }}>
        {value}
      </div>
      <div className="text-sm" style={{ color: 'var(--text)', opacity: '0.7' }}>
        {label}
      </div>
    </div>
  );
};

export default Metric;
