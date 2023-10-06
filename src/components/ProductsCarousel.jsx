import styled from "styled-components";
import ProductCard from "./ProductCard";

const ProductsCarouselStyled = styled.div`
  display: flex;
  gap: 1rem;
`;

function ProductsCarousel() {
  return (
    <ProductsCarouselStyled>
      <ProductCard />
      <ProductCard />
    </ProductsCarouselStyled>
  );
}

export default ProductsCarousel;
