import React from "react";
import { Route, Routes } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Product";
import "../../../css/products.css";
import { CartItem } from "../../../lib/types/search";

interface ProductsPageProps {
  onAdd: (item: CartItem) => void;
}

export default function ProductsPage(props: ProductsPageProps) {
  const { onAdd } = props;

  return (
    <div className={"products-page"}>
      <Routes>
        <Route path=":productId" element={<ChosenProduct onAdd={onAdd} />} />
        <Route index element={<Products onAdd={onAdd} />} />
      </Routes>
    </div>
  );
}
