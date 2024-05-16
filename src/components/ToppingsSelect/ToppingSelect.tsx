import ITopping from "../../models/Topping";
import Topping from "../Topping/Topping";
import './ToppingSelect.css';

interface IToppingsSelectProps {
  toppings: ITopping[]
}

const ToppingsSelect: React.FC<IToppingsSelectProps> = ({ toppings }) => {
  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: 0, total price: 0 Euro</p>

      <div className="toppings">
        {toppings.map((topping) => (
          <Topping topping={topping} key={topping.name} />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
