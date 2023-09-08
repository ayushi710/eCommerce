import React from "react";
import { useFilterContext } from "../context/FilterContext";
import GridView from "./GridView";
import ListView from "./ListView";
import { useProductContext } from "../context/ProductContext";

const ProductList = () => {
  const { filter_products = [], grid_view = true } = useFilterContext();
  const  { products=[]} = useProductContext();

  if (grid_view === true) {
    return <GridView products={products} />;
  }

  if (grid_view === false) {
    return <ListView products={products} />;
  }
};

export default ProductList;