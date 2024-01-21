import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-3xl font-bold">Cart</h1>
      {cartItems.length > 0 && (
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClear}
        >
          Clear
        </button>
      )}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
      {cartItems.length === 0 && <h1 className="text-3xl">Cart is empty ☹️</h1>}
    </div>
  );
};

export default Cart;
