import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Category from "./components/Category";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Category />
      <Cards />
    </div>
  );
}

export default App;
