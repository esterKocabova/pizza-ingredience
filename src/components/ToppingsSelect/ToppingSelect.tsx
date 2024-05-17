import { useState } from 'react';
import ITopping from "../../models/Topping";
import Topping from "../Topping/Topping";
import './ToppingSelect.css';

interface IToppingsSelectProps {
  toppings: ITopping[];
}

const ToppingsSelect: React.FC<IToppingsSelectProps> = ({ toppings }) => {
  const [toppingsItem, setToppingsItem] = useState<ITopping[]>(toppings);
  // const [checked, setChecked] = useState<boolean>(false);

  const handleCheckedChange = (index: number, checked: boolean) => {
    const newTopping = [...toppingsItem];
    newTopping[index].selected = checked;
    setToppingsItem(newTopping);
  }

  const countSelected = toppingsItem.filter(topping => topping.selected).length;
  const selectedToppings = toppingsItem.filter(topping => topping.selected);

  // let toppingsTotalPrice = 0;
  // selectedToppings.forEach((product) => toppingsTotalPrice += product.price);

  // redux
  const toppingsTotalPrice = selectedToppings.map(topping => topping.price).reduce((prev, cur) => prev + cur, 0)

  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: {countSelected}, total price: {toppingsTotalPrice.toFixed(2)} Euro</p>

      <div className="toppings">
        {toppings.map((topping, index: number) => (
          <Topping
            topping={topping}
            key={topping.name}
            checked={topping.selected}
            onCheckedChange={(checked) => handleCheckedChange(index, checked)}
          />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;