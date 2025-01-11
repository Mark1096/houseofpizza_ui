import React, { useRef } from "react";
import Home from "./pages/home";
import { CartItemsProvider } from "./context/cartItems";

function App() {
  const ordersRef = useRef<HTMLDivElement>(null); // Crea un ref per il componente Orders

  return (
    <CartItemsProvider>
      <div className="App" data-testid="app">
        <Home targetRef={ordersRef} />
      </div>
    </CartItemsProvider>
  );
}

export default App;
