import "../styles/home.css";
import Products from "../components/products";
import Navbar from "../components/navbar";
import Cart from "../components/cart";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <div className="products-container">
          <Products />
        </div>
        <div style={{flex: 4}}>
          <Cart />
        </div>
      </div>
    </div>
  );
}
