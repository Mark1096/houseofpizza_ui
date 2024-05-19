import axios from "axios";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  links: [];
}

interface IProductResponse {
  links: [];
  content: IProduct[];
}

// fetch products list from mock API
export const getProducts = async () => {

  try {
    const res = await axios.get("/json/products.json");   // modificare questa istruzione, intercettando la chiamata fatta a backend, nella quale verrà passato il file json, inserendo "/pizza/ordering"
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
