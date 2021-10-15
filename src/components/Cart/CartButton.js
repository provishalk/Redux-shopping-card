import { useDispatch, useSelector } from "react-redux";
import { toggleCardVisibility } from "../../redux/Ducks/products";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const noOfItems = useSelector((state) => state.products.list.length);
  const dispatch = useDispatch();
  return (
    <button
      className={classes.button}
      onClick={() => {
        dispatch(toggleCardVisibility());
      }}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{noOfItems}</span>
    </button>
  );
};

export default CartButton;
