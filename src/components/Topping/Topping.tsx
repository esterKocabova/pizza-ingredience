import React, { useState } from 'react';
import Check from '../Check/Check';
import ITopping from '../../models/Topping';
import './Topping.css';

interface IToppingProps {
  topping: ITopping;
}

const Topping : React.FC<IToppingProps> = ({ topping }) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="topping">
      <Check checked={checked} onChange={setChecked} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
