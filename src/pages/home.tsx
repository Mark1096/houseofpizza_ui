import "../styles/home.css";
import Products from "../components/products";
import Navbar from "../components/navbar";
import Cart from "../components/cart";
import Order from "../components/order";
import { useRef } from 'react';

export default function Home() {

  const targetRef = useRef(null);

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="products-container">
          <Products />
        </div>
        <div style={{flex: 4}}>
          <Cart targetRef={targetRef} />
        </div>
      </div>
      <div className="content">
        <div className="order-container">
          <Order targetRef={targetRef} />
        </div>
      </div>  
    </div>
  );
}
