import React, { useEffect, useState } from "react";
import "../styles/products.css";
import { IProduct } from "../external/product";
import { getProducts } from "../external/product";
import Product from "./product";
import { isJSDocUnknownTag } from "typescript";

export default function Products() {
  
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    // fetch products from mock API
    (async () => {
      const products = await getProducts();
      setProducts(products);
    })();
  }, []);

  return (
    <div className="products" data-testid="products">
      <div className="header">Menu</div>
        <div className="product-list scroller">
          {products.map((item) => {
            return (
              <Product data={item} />
            )
          })}
        </div>
    </div>
  );
}
