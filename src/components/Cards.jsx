import React, { useState } from "react";
import Axios from "axios";
import "./Cards.css";

function Cards() {
  const [cards, setCards] = useState([]);
  Axios.get("https://api.npoint.io/98792f12dbae96b6a9ff").then((response) => {
    setCards(response.data);
  });
  return (
    <div className="container">
      <div className="row">
        {cards.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card">
                <div className="card-img__wrapper">
                  <img
                    src={item.url}
                    className="card-img-top"
                    alt={item.name}
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title">${item.narxi}</h3>
                  <h2>{item.name}</h2>
                  <button className="btn btn-success">Add to cart</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
