import React, { useState } from "react";
import "./AdressInput.css";
import { useStateValue } from "../../StateProvider";

function AdressInput() {
  const [{ adress, basket }, dispatch] = useStateValue();

  const [deliveryName, setDeliveryName] = useState("");
  const [deliveryStreet, setDeliveryStreet] = useState("");
  const [deliveryHouse, setDeliveryHouse] = useState("");
  const [deliveryCity, setDeliveryCity] = useState("");
  const [deliveryZip, setDeliveryZip] = useState("");
  const [adressComplete, setAdressComplete] = useState(false);

  console.log(adress);

  const addToAdress = () => {
    dispatch({
      type: "CHANGE_ADRESS",
      item: {
        deliveryName: deliveryName,
        deliveryStreet: deliveryStreet,
        deliveryHouse: deliveryHouse,
        deliveryCity: deliveryCity,
        deliveryZip: deliveryZip,
      },
    });
    setAdressComplete(true);
  };

  const changeAdress = () => {
    setAdressComplete(false);
  };

  if (!adressComplete) {
    return (
      <div className="adressInput">
        <form>
          <div className="adressInput_formInput adressInput_name">
            <h5>Name</h5>
            <input
              type="text"
              required
              value={deliveryName}
              onChange={(e) => setDeliveryName(e.target.value)}
            />
          </div>

          <div className="adressInput_formInput adressInput_street">
            <h5>Straße</h5>
            <input
              type="text"
              required
              value={deliveryStreet}
              onChange={(e) => setDeliveryStreet(e.target.value)}
            />
          </div>

          <div className="adressInput_formInput adressInput_house">
            <h5>Hausnummer</h5>
            <input
              type="text"
              required
              value={deliveryHouse}
              onChange={(e) => setDeliveryHouse(e.target.value)}
            />
          </div>

          <div className="adressInput_formInput adressInput_zip">
            <h5>PLZ</h5>
            <input
              type="text"
              required
              value={deliveryZip}
              onChange={(e) => setDeliveryZip(e.target.value)}
            />
          </div>

          <div className="adressInput_formInput adressInput_city">
            <h5>Stadt</h5>
            <input
              type="text"
              required
              value={deliveryCity}
              onChange={(e) => setDeliveryCity(e.target.value)}
            />
          </div>

          <button type="button" onClick={addToAdress}>
            Lieferadresse bestätigen
          </button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="adress">
        <h3>{deliveryName}</h3>
        <p>
          {deliveryStreet} {deliveryHouse}
        </p>
        <p>
          {deliveryZip} {deliveryCity}
        </p>
        <button type="button" onClick={changeAdress}>
          Lieferadresse ändern
        </button>
      </div>
    );
  }
}

export default AdressInput;
