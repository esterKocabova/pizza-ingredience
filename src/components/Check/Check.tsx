import React, { useState } from 'react';
import './Check.css';

const Check : React.FC = ()  => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
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
