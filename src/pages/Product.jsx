import styled from "styled-components";

import ProductDetailContent from "../features/product/ProductDetailContent";
import ProductDetailImages from "../features/product/ProductDetailImages";
import { useUser } from "../features/auth/useUser";

const ProductContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  gap: 2rem;
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
  const { user } = useUser();
  console.log(user)
  return (
    <ProductContainerStyled>
      <ImageContainer>
        <ProductDetailImages />
      </ImageContainer>
      <ContentContainer>
        <ProductDetailContent />
      </ContentContainer>
    </ProductContainerStyled>
  );
}

export default Product;
