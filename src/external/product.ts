import axiosInstance from "../external/axiosInstance";

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

export const getProducts = async () => {
  try {
    const res = await axiosInstance.get("/houseofpizza/products");
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
