import axios from "axios";
import { IProductResponse } from "../external/interfaces";

// fetch products list from API
export const getProducts = async () => {
  try {
    /* TODO : Configure setting endpoint + configuration for start project */
    const res = await axios.get("http://localhost:4001/houseofpizza/pizza/products");
    //const res = await axios.get("http://98.80.215.91:4001/houseofpizza/pizza/products");
    // const res = await axios.get("/json/products.json");
    const data = res.data as IProductResponse;
    if (data == null || data.content == null)
      throw new Error("missing product info");
    return data.content;
  } catch (err) {
    if (err instanceof Error)
      throw new Error("Error in fetching products: " + err.message);
    return [];
  }
};
