import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

import CartNotification from "../CartNotification";

import styles from "./SearchBar.module.scss";

const SearchBar = ({ input: incomingInput, autoFocus }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (incomingInput) setInput(incomingInput);
  }, []);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!input) return;
    Router.push({ pathname: "/items", query: { search: input } });
  };

  const goToIndex = (e) => {
    e.preventDefault();
    Router.push({ pathname: "/"});
  };

  return (
    <div className={styles.searchBar}>
      <div>
        
          
            <img onClick={goToIndex} src={"/meli-isologo.png"} alt="Mercado Libre" />
        

        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder={"Buscar productos, marcas y más..."}
            value={input}
            onChange={handleInputChange}
            autoFocus={autoFocus}
          />
          <button>
            <img src="/search.svg" alt="Buscar" />
          </button>
        </form>

        <CartNotification />
      </div>
    </div>
  );
};

export default SearchBar;
