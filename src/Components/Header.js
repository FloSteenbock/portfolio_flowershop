import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import FuzzySearch from "fuzzy-search";

function Header() {
  const [{ basket, user, searchResults }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const [searchText, setSearchText] = useState("");
  const jsonArticles = require("../article.json");
  const searcher = new FuzzySearch(jsonArticles, ["title"], {
    caseSensitive: false,
    sort: true,
  });
  const result = searcher.search(searchText);

  const changeSearchText = (e) => {
    dispatch({
      type: "SEARCH_ARTICLES",
      result: result,
    });

    setSearchText(e.target.value);
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://i.ibb.co/k2BTpw7/Flos-Flowers.png"
        />
      </Link>

      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          value={searchText}
          onChange={changeSearchText}
        />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_option_lineOne">
              Hallo {user ? user?.displayName : "Gast"}
            </span>
            <span className="header_option_lineTwo">
              {user ? "Logout" : "Login"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_option">
            <span className="header_option">Bestellungen</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header_option_basket">
            <ShoppingBasketIcon />
            <span className="header_option_lineTwo header_basket_count">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
