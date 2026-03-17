import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart, setCart } = useContext(CartContext);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <p>Qty: {item.quantity}</p>

            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;