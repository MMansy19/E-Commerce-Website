import i18n from "../components/common/components/LangConfig";
/* eslint-disable react/prop-types */
import { useCart } from "../context/CartContext";
import CartItem from "../components/Cart/CartItem";
import WhiteButton from "../components/common/components/WhiteButton";
import RedButton from "../components/common/components/RedButton";
import ActiveLastBreadcrumb from "../components/common/components/Link";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useCart();

  // Calculate subtotal of all cart items
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-screen-lg mx-auto mt-48 flex flex-col gap-10">
      <ActiveLastBreadcrumb path="Home/Cart" />
      <div className="flex flex-row justify-between items-center py-6 px-2 md:px-14 shadow rounded md:gap-24  ">
        <h2 className="text-base">{i18n.t("cart.header.product")}</h2>
        <h2 className="text-base ml-10">{i18n.t("cart.header.price")}</h2>
        <h2 className="text-base ">{i18n.t("cart.header.quantity")}</h2>
        <h2 className="text-base hidden md:flex">
          {i18n.t("cart.header.subtotal")}
        </h2>
      </div>
      {cartItems.map((item, index) => (
        <CartItem
          key={item.title}
          item={item}
          index={index}
          stars={item.stars}
          rates={item.rates}
        />
      ))}{" "}
      {/* Buttons for returning to shop, applying coupon, and proceeding to checkout */}
      <div className="flex justify-between items-center mt-2">
        <Link to="..">
          <WhiteButton name={i18n.t("whiteButtons.returnToShop")} />
        </Link>

        <WhiteButton name={i18n.t("whiteButtons.updateCart")} />
      </div>
      <div className="flex items-center mt-4 md:flex-row gap-8 flex-col justify-between ">
        <div className="flex items-center md:justify-between justify-center mt-4 gap-2 ">
          <input
            type="text"
            placeholder={i18n.t("checkOut.couponCode")}
            className="border border-gray-900 rounded-md p-3 w-[160px] lg:w-[260px] text-sm md:text-base"
          />
          <RedButton name={i18n.t("redButtons.applyCoupon")} />
        </div>

        <div className="flex justify-between flex-col gap-6  border py-8 px-6 md:w-[470px]">
          <p className="text-xl font-semibold">{i18n.t("cart.cartTotal")}</p>
          <div className="flex justify-between mt-4 border-b">
            <p className="text-xl">{i18n.t("cart.total")}:</p>
            <p className="text-xl">${subtotal}</p>
          </div>
          <div className="flex justify-between mt-4 border-b">
            <p className="text-xl">{i18n.t("cart.subtotal")}:</p>
            <p className="text-xl">${total}</p>
          </div>
          <div className="flex justify-between mt-4 border-b">
            <p className="text-xl">{i18n.t("cart.shipping")}:</p>
            <p className="text-xl">{i18n.t("cart.free")}</p>
          </div>{" "}
          <div className="mx-10">
            <Link to="/checkout">
              <RedButton name={i18n.t("redButtons.processToCheckout")} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
