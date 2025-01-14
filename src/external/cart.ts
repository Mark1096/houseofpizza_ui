import { ICartItem } from "./interfaces";
import axios from "axios";

export const orderCreation = async (items: ICartItem[]) => {
  let productList = {
    products: [{}]
  };
  productList.products.pop();

  for (var item of items) {
    let tmp = {
      id: -1,
      quantity: -1
    };
    tmp.id = item.product.id;
    tmp.quantity = item.quantity;
    productList.products.push(tmp);
  }

  const res = await axios.post("http://localhost:4001/houseofpizza/pizza/order/creation", productList);
  const data = res.data;

  if (data == null)
    throw new Error("missing order response");
  return data;
};
