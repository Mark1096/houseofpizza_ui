import axios from "axios";
import { IProduct } from "./product";

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export const orderCreation = async (items: ICartItem[]) => {
    axios.post("http://localhost:4001/houseofpizza/pizza/order/creation", items)
        .then(response => console.log("Response to order creation: \n", response))
        .catch(error => { console.error("Error to order creation: \n", error) });
} 
