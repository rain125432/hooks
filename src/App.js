import "./App.css";
import { useState } from "react";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(800000);
  const [product2, setProduct2] = useState(2000000);
  const [product3, setProduct3] = useState(1300000);

  return (
    <div className="App">
      <div>
        <h3>จำนวนสินค้าในตะกร้า {totalItems}</h3>
        <h3>ราคาสินค้าทั้งหมด {totalPrice} USD</h3>
      </div>
      <div>
        <img scr="Ducati-899.jpg" alt="Ducati-899" width="15%" />
        <br />
        Ducati-899 {product1} USD
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product1);
        }}
      >
        Add to cart
      </button>
      <button
        onClick={() => {
          setTotalItems(totalItems - 1);
          setTotalPrice(totalPrice - product1);
        }}
      >
        Remove from cart
      </button>
      <div>
        <img scr="Panigale-V4.jpg" alt="Panigale-V4" width="15%" />
        <br />
        Panigale-V4 {product2} USD
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product1);
        }}
      >
        Add to cart
      </button>
      <button
        onClick={() => {
          setTotalItems(totalItems - 1);
          setTotalPrice(totalPrice - product1);
        }}
      >
        Remove from cart
      </button>
      <div>
        <img scr="RSV4.jpg" alt="RSV4" width="15%" />
        <br />
        RSV4 {product3} USD
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product1);
        }}
      >
        Add to cart
      </button>
      <button
        onClick={() => {
          setTotalItems(totalItems - 1);
          setTotalPrice(totalPrice - product1);
        }}
      >
        Remove from cart
      </button>
    </div>
  );
}

export default App;
