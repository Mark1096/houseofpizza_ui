import { RefObject } from "react";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface IProductResponse {
  content: IProduct[];
}

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartItemsContext {
  cartItems: ICartItem[];
  setCartItems: (cartItems: ICartItem[]) => void;
}

export interface IOrderStatus {
  id: number;
  version: number;
  product: IProduct;
  status: string;
}

export interface IOrderStatusResponse {
  content: IOrderStatus[];
}

export interface IErrorFallback {
  errorMessage: String;
}

export interface SecondComponentProps {
  targetRef: RefObject<HTMLDivElement>;
}
