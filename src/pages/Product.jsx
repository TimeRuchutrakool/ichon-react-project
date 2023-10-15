import styled from "styled-components";

import ProductDetailContent from "../features/product/ProductDetailContent";
import ProductDetailImages from "../features/product/ProductDetailImages";
import { useProduct } from "../features/product/useProduct";
import Spinner from "../components/Spinner";

const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  gap: 7rem;
  top: 5rem;
`;

const ImageContainer = styled.aside`
  width: 30%;
`;

const ContentContainer = styled.aside`
  width: 50%;
  /* background-color: #c2c2ff; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Product() {
  const { isLoading, product } = useProduct();
  if (isLoading) return <Spinner />;
  return (
    <ProductContainerStyled>
      <ImageContainer>
        <ProductDetailImages images={product.data.product.productImages} />
      </ImageContainer>
      <ContentContainer>
        <ProductDetailContent product={product.data.product}/>
      </ContentContainer>
    </ProductContainerStyled>
  );
}

export default Product;
