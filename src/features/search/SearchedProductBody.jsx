import styled from "styled-components";
import ProductCard from "../../features/product/ProductCard";
import { mockProductsCarousel } from "../../data/mockData";

const SearchedProductBodyStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ProductsContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(30rem,1fr));
`;

const ProductCardContainer = styled.div`
  width: 30rem;
`;

function SearchedProductBody() {
  const products = mockProductsCarousel;
  return (
    <SearchedProductBodyStyled>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCardContainer key={product.productId}>
            <ProductCard product={product} />
          </ProductCardContainer>
        ))}
      </ProductsContainer>
    </SearchedProductBodyStyled>
  );
}

export default SearchedProductBody;
