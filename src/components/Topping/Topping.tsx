import React from 'react';
import Check from '../Check/Check';
import ITopping from '../../models/Topping';
import './Topping.css';

interface IToppingProps {
  topping: ITopping;
}

const Topping : React.FC<IToppingProps> = ({ topping }) => {
  return (
    <div className="topping">
      <Check />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
