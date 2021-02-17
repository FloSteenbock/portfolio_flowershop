import React from "react";
import "./Checkout.css";
import CheckoutProduct from "../Components/CheckoutProduct";
import Subtotal from "../Components/Subtotal";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://i.ibb.co/SnSHphH/flowers-long.jpg"
        />
        <div>
          <h3>
            Hallo{" "}
            {user?.displayName
              ? user?.displayName
              : user
              ? user?.email
              : "Gast"}
          </h3>

          <h2 className="checkout_title">Dein Warenkorb</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
