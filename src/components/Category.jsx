import React, { useState } from "react";
import "./Category.css";
import Axios from "axios";
function Category() {
  const [category, setCategory] = useState([]);
  Axios.get("https://api.npoint.io/a21e442ac0df5a481243").then((response) => {
    setCategory(response.data);
  });
  return (
    <div className="container">
      <div>
        <h1>Categories</h1>
      </div>
      <div className="tiles-wrapper row g-3">
        {category.map((item, index) => {
          return (
            <p className="col-md-4 tile" key={index}>
              {item.category}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
