import Check from '../Check/Check';
import ITopping from '../../models/Topping';
import './Topping.css';

interface IToppingProps {
  topping: ITopping;
  checked: boolean;
  onCheckedChange: (value: boolean) => void;
}

const Topping : React.FC<IToppingProps> = ({ topping, checked, onCheckedChange }) => {

  return (
    <div className="topping">
      <Check checked={checked} onChange={onCheckedChange} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
