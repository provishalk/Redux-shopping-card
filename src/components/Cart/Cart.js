import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const products = useSelector((state) => state.products.list);
  const visible = useSelector((state) => state.products.visibility);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {products.map(({ id, title, quantity, total, price }) => (
          <CartItem key={id} item={{ title, quantity, total, price, id }} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
