// import { useState } from "react";
import styled from "styled-components";
import ProductsHeader from "./ProductsHeader";
import ProductsCarousel from "./ProductsCarousel";
const ProductsViewStyled = styled.div`
  margin: 3rem 3rem 1rem;
`;

function ProductsView({ view }) {
  //
  // TODO เดี๋ยวให้ View มันรับเอา api ที่จะยิงไปหา path backend แบบ top-sales แล้วก็ new-arrival ต่างกันที่ตรงนี้ตรงอื่นเหมือนเดิม
  // const [page,setPage] = useState(0)

  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <ProductsViewStyled>
      <ProductsHeader headerTitle={view.headerTitle} />
      <ProductsCarousel products={products} />
    </ProductsViewStyled>
  );
}

export default ProductsView;
