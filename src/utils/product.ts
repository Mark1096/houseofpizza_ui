import { IProduct } from "../external/interfaces";

export const findProductById = (id: number, products: IProduct[]) => {
  return products.find((item) => item.id === id);
};
