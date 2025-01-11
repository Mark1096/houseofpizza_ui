import { ICartItem } from "./interfaces";
import axios from "axios";

export const orderCreation = async (items: ICartItem[]) => {
  
  let productList = {
    products: [{}]
  }
  productList.products.pop();

  for(var item of items) {
    let tmp = {
      id: -1,
      quantity: -1
    }
    tmp.id = item.product.id;
    tmp.quantity = item.quantity;
    productList.products.push(tmp);
  }
  
  axios.post("http://localhost:4001/houseofpizza/pizza/order/creation", productList)
      .then(response => console.log("Response to order creation: \n", response))
      .catch(error => { console.error("Error to order creation: \n", error) });
} 
