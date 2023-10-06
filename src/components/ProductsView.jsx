// import { useState } from "react";
import styled from "styled-components";
import ProductsHeader from "./ProductsHeader";
import ProductsCarousel from "./ProductsCarousel";
import { mockProductsForCarousel } from "../data/mockData";
const ProductsViewStyled = styled.div`
  margin: 3rem 3rem 0;
`;

function ProductsView({ view }) {
  //
  // TODO เดี๋ยวให้ View มันรับเอา api ที่จะยิงไปหา path backend แบบ top-sales แล้วก็ new-arrival ต่างกันที่ตรงนี้ตรงอื่นเหมือนเดิม
  // const [page,setPage] = useState(0)

  const products = mockProductsForCarousel;

  return (
    <ProductsViewStyled>
      <ProductsHeader headerTitle={view.headerTitle} />
      <ProductsCarousel products={products} />
    </ProductsViewStyled>
  );
}

export default ProductsView;
