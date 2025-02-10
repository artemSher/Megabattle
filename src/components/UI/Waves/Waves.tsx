import React from 'react';
import './Waves.scss';

interface WavesProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Waves: React.FC<WavesProps> = ({ className = '', children, onClick }) => {
  return (
    <div className={`waves-container ${className}`} onClick={onClick}>
      <div className="waves-content">{children}</div>
      <svg 
        className="waves" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
      >
        {[...Array(7)].map((_, index) => (
          <path
            key={index}
            className="wave"
            d="M0,100 C200,20 300,180 500,100 C700,20 800,180 1000,100"
            transform={`translate(0, ${index * 12})`}
          />
        ))}
      </svg>
    </div>
  );
};

export default Waves;
