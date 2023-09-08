import React from "react";
import styled from "styled-components";
import FilterSection from "./Product/FilterSection";
import ProductList from "./ProductList";
import { FilterContextProvider } from "../context/FilterContext";


const Products = () => {
  return  <Wrapper>
  <div className="container grid grid-filter-column">
    <div>
      <FilterSection />
    </div>

    <section className="product-view--sort">
    
      <div className="main-product">
        <FilterContextProvider>
        <ProductList />
        </FilterContextProvider>
        
      </div>
    </section>
  </div>
</Wrapper>
}

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;