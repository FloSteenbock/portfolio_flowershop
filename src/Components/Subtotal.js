import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Gesamtbetrag ({basket?.length} Artikel):{" "}
              <strong>{value},00</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              Bestellung enthält ein Geschenk
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={false}
        prefix={"€ "}
      />
      <button onClick={(e) => history.push("/payment")}>zur Kasse</button>
    </div>
  );
}

export default Subtotal;
