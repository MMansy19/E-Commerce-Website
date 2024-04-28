/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";
import CartItem from "../components/Cart/CartItem";
import WhiteButton from "../components/common/WhiteButton";
import RedButton from "../components/common/RedButton";
const Cart = () => {
  const { cartItems } = useCart();

  // Calculate subtotal of all cart items
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-screen-lg mx-auto mt-48 flex flex-col gap-10">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      <div className="flex flex-row justify-between items-center py-6 px-14 shadow rounded">
        <h2 className="text-base ">Product</h2>
        <h2 className="text-base ">Price</h2>
        <h2 className="text-base ">Quantity</h2>
        <h2 className="text-base ">Subtotal</h2>
      </div>

      {cartItems.map((item, index) => (
        <CartItem
          key={item.title}
          item={item}
          index={index}
          stars={item.stars}
          rates={item.rates}
        />
      ))}
      {/* Buttons for returning to shop, applying coupon, and proceeding to checkout */}
      <div className="flex justify-between items-center mt-2">
        <WhiteButton name="Return To Shop" />
        <WhiteButton name="Update Cart" />
      </div>

      <div className="flex items-center mt-4 flex-row justify-between">
        <div className="flex items-center mt-4 space-x-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border border-gray-900 rounded-md p-3 md:w-[300px] "
          />
          <RedButton name="Apply Coupon" />
        </div>

        <div className="flex justify-between flex-col gap-6  border py-8 px-6 w-[470px]">
          <p className="text-xl font-semibold">Cart Total</p>
          <div className="flex justify-between mt-4 border-b">
            <p className="text-xl">Subtotal:</p>
            <p className="text-xl">${subtotal}</p>
          </div>
          <div className="flex justify-between mt-4 border-b">
            <p className="text-xl">Shipping:</p>
            <p className="text-xl">Free</p>
          </div>
          <div className="flex justify-between mt-4 border-b">
            <p className="text-xl">Total:</p>
            <p className="text-xl">${subtotal}</p>
          </div>
          <RedButton name="Process to checkout" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
