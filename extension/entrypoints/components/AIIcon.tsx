// entrypoints/components/AIIcon.tsx
import React from 'react';

interface AIIconProps {
  onClick: () => void;
}

const AIIcon: React.FC<AIIconProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-5 right-5 cursor-pointer" onClick={onClick}>
      <img src="/AI_Icon.jpg" alt="AI Icon" className="w-12 h-12" />
    </div>
  );
};

export default AIIcon;
