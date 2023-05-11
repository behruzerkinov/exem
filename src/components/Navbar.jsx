import React, { useState } from "react";
import "./Navbar.css";
import Cart from "./assets/cart.svg";
import Menu from "./assets/menu.svg";
import Axios from "axios";

function Navbar() {
  const [massive, setMassive] = useState([]);
  const [value, setValue] = useState("");

  Axios.get("https://api.npoint.io/6ac0330294a630ba100b")
    .then((response) => {
      setMassive(response.data);
      
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <div>
      <nav>
        <div className="container">
          <div className="menu-icon__wrapper">
            <img src={Menu} alt="menu" className="menu-icon" />
          </div>
          <div className="search-box__wrapper">
            <input
              type="search"
              className="search-box"
              placeholder="Search products"
              onChange={(e) => {
                setValue(e.target.value);
                console.log(value);
              }}
            />
          </div>
          <div className="cart-icon__wrapper">
            <img src={Cart} alt="cart" className="cart-icon" />
          </div>
        </div>
      </nav>
      <section>
        <div className="container">
          <div className="row my-5">
            {massive.map((item, index) => {
              return (
                <div key={index} className="col-2 slider-img">
                  <img src={item.src} alt="item name" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
