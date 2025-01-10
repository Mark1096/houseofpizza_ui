import { IProduct } from "./product";
import axios from "axios";

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export const orderCreation = async (items: ICartItem[]) => {
  
  let obj = {
    products: [{}]
  }
  obj.products.pop();

  for(var item of items) {
    let tmp = {
      id: -1,
      quantity: -1
    }
    tmp.id = item.product.id;
    tmp.quantity = item.quantity;
    obj.products.push(tmp);
  }

  console.log("Obj: \n" + obj.products);
  
  axios.post("http://localhost:4001/houseofpizza/pizza/order/creation", obj)
      .then(response => console.log("Response to order creation: \n", response))
      .catch(error => { console.error("Error to order creation: \n", error) });
} 
