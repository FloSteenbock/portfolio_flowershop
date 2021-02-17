import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Order.css";
import moment from "moment";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Bestellung</h2>
      <p>{moment.unix(order.data.created).format(" DD.MM.YYYY, HH:mm")} Uhr</p>
      <p className="order_id">
        <b>Bestellung: </b>
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order_total">Gesamtbetrag: {value},00</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={false}
        prefix={"€ "}
      />
    </div>
  );
}

export default Order;
