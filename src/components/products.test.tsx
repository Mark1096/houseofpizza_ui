import { render, screen } from "@testing-library/react";
import Products from "./products";

test("render shopping cart correctly", () => {
  render(<Products />);
  screen.getByTestId("products");
});

test("show product item correctly", () => {
  render(<Products />);
  // get product item with product ID = 1 (i.e. Biancaneve)
  const pizzaItem = screen.getByTestId("product-1");
  expect(pizzaItem).toBeInTheDocument();
});

test("show product item name correctly", () => {
  render(<Products />);
  // get product item with product ID = 1 (i.e. Biancaneve)
  const pizzaItem = screen.getByTestId("product-name-1");
  expect(pizzaItem).toHaveTextContent("Biancaneve");
});

test("show product item price correctly", () => {
  render(<Products />);
  // get product item with product ID = 1 (i.e. Biancaneve)
  const pizzaItem = screen.getByTestId("product-price-1");
  expect(pizzaItem).toHaveTextContent("5€");
});
