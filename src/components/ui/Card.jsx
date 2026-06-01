import React from 'react';

const Card = ({
  children,
  variant = 'default',
  color = 'blue',
  className = '',
  hoverable = true,
  ...props
}) => {
  const baseClasses = 'p-5 rounded-lg border transition-all duration-300';

  const variantClasses = {
    default: 'bg-(--card) border-(--border)',
    gradient: 'bg-(--card) border-(--border)',
    glass: 'glass',
    fun: 'bg-(--card) border-(--border)',
    hover: 'bg-(--card) border-(--border) hover:shadow-lg hover:border-(--primary)'
  };

  const colorClasses = {
    pink: 'bg-pink-50/40',
    blue: 'bg-blue-50/40',
    purple: 'bg-purple-50/40',
    green: 'bg-green-50/40',
    orange: 'bg-orange-50/40',
    yellow: 'bg-amber-50/40',
    rainbow: 'bg-(--bg-alt)'
  };

  let combinedClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.default}`;

  if (variant === 'fun' || variant === 'gradient') {
    combinedClasses += ` ${colorClasses[color] || colorClasses.blue}`;
  }

  if (hoverable && variant !== 'hover') {
    combinedClasses += ' hover:shadow-md hover:border-(--primary)';
  }

  combinedClasses += ` ${className}`;

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
};

// Sub-components for structured cards
Card.Header = ({ children, className = '', ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
);

Card.Title = ({ children, className = '', emoji, ...props }) => (
  <h3 className={`text-xl sm:text-2xl font-bold text-(--text) flex items-center gap-2 ${className}`} {...props}>
    {emoji && <span className="text-xl text-(--primary)">{emoji}</span>}
    {children}
  </h3>
);

Card.Description = ({ children, className = '', ...props }) => (
  <p className={`text-sm text-(--muted) ${className}`} {...props}>
    {children}
  </p>
);

Card.Content = ({ children, className = '', ...props }) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '', ...props }) => (
  <div className={`mt-4 pt-4 border-t border-(--border) ${className}`} {...props}>
    {children}
  </div>
);

// Icon Card - Perfect for features or facilities
export const IconCard = ({ icon, title, description, color = 'blue', ...props }) => {
  const iconColors = {
    blue: 'bg-blue-100 text-blue-700',
    pink: 'bg-pink-100 text-pink-700',
    purple: 'bg-purple-100 text-purple-700',
    green: 'bg-green-100 text-green-700',
    orange: 'bg-orange-100 text-orange-700',
    red: 'bg-red-100 text-red-700'
  };

  return (
    <Card variant="hover" {...props}>
      <div className={`w-16 h-16 rounded-lg ${iconColors[color]} flex items-center justify-center mx-auto mb-4 transition-all duration-300`}>
        {icon}
      </div>
      <h4 className="text-center text-base font-bold text-(--text) mb-2">{title}</h4>
      {description && (
        <p className="text-center text-sm text-(--muted)">{description}</p>
      )}
    </Card>
  );
};

export default Card;
