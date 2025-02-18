import "../styles/home.css";
import Products from "../components/products";
import Navbar from "../components/navbar";
import Cart from "../components/cart";
import Orders from "../components/orders";
import { RefObject } from "react";

interface SecondComponentProps {
  targetRef: RefObject<HTMLDivElement>;
}

const Home: React.FC<SecondComponentProps> = ({ targetRef }) => {
  return (
    <div className="App">
      <Navbar />
      <div className="background">
        <div className="content">
          <div className="products-container">
            <Products />
          </div>
          <div style={{ flex: 4 }}>
            <Cart />
          </div>
        </div>
        <div className="content">
          <div className="products-container">
            <Orders targetRef={targetRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;