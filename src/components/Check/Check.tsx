import React from 'react';
import './Check.css';

interface CheckProps {
  checked: boolean;
  onChange: (value: boolean) => void;
}

const Check: React.FC<CheckProps> = ({ checked, onChange }) => {

  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <button
      className="check"
      onClick={handleClick}
    >
      {checked ? '✓' : ''}
    </button>
  )
};

export default Check;
