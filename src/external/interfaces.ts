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
