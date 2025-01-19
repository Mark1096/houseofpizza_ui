import { createContext } from "react";

import { useState } from "react";
import { ICartItemsContext, ICartItem } from "../external/interfaces";

export const CartItemsContext = createContext<ICartItemsContext>({
  cartItems: [],
  setCartItems: () => {},
});

export const CartItemsProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartItemsContext.Provider>
  );
};
