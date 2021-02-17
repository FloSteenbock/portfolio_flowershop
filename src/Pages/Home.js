import React from "react";
import "./Home.css";
import Product from "../Components/Product";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../Components/CheckoutProduct";

function Home() {
  const [{ searchResults }, dispatch] = useStateValue();
  const jsonArticles = require("../article.json");

  if (
    searchResults[0].result.id == "" ||
    searchResults[0].result.length == jsonArticles.length
  ) {
    return (
      <div className="home">
        <div className="home_container">
          <div className="logo-container">
            <img src="https://i.ibb.co/k2BTpw7/Flos-Flowers.png" />
          </div>
          <div className="home_row">
            <Product
              id={jsonArticles[0].id}
              title={jsonArticles[0].title}
              price={jsonArticles[0].price}
              rating={jsonArticles[0].rating}
              image={jsonArticles[0].image}
            />
            <Product
              id={jsonArticles[1].id}
              title={jsonArticles[1].title}
              price={jsonArticles[1].price}
              rating={jsonArticles[1].rating}
              image={jsonArticles[1].image}
            />
          </div>
          <div className="home_row">
            <Product
              id={jsonArticles[2].id}
              title={jsonArticles[2].title}
              price={jsonArticles[2].price}
              rating={jsonArticles[2].rating}
              image={jsonArticles[2].image}
            />
            <Product
              id={jsonArticles[3].id}
              title={jsonArticles[3].title}
              price={jsonArticles[3].price}
              rating={jsonArticles[3].rating}
              image={jsonArticles[3].image}
            />
            <Product
              id={jsonArticles[4].id}
              title={jsonArticles[4].title}
              price={jsonArticles[4].price}
              rating={jsonArticles[4].rating}
              image={jsonArticles[4].image}
            />
          </div>
          <div className="home_row">
            <Product
              id={jsonArticles[5].id}
              title={jsonArticles[5].title}
              price={jsonArticles[5].price}
              rating={jsonArticles[5].rating}
              image={jsonArticles[5].image}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="home">
        <div className="home_container">
          <img
            className="home_image"
            src="https://i.ibb.co/k2BTpw7/Flos-Flowers.png"
            alt="Banner"
          />
          <h2 className="searchHeader">Deine Suche</h2>
          {searchResults[0].result.map((result) => (
            <div className="searchResult">
              <Product
                id={result.id}
                title={result.title}
                price={result.price}
                rating={result.rating}
                image={result.image}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
