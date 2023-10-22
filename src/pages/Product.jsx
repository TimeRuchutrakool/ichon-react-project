import styled from "styled-components";

import ProductDetailContent from "../features/product/ProductDetailContent";
import ProductDetailImages from "../features/product/ProductDetailImages";
import { useProduct } from "../features/product/useProduct";
import Spinner from "../components/Spinner";
import { useCart } from "../features/cart/useCart";

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Product() {
  const { isProductLoading, product } = useProduct();
  const { cart } = useCart();
  if (isProductLoading || !product)
    return <Spinner />;

  if (isProductLoading || !product) return <Spinner />;
  return (
    <ProductContainerStyled>
      <ImageContainer>
        <ProductDetailImages images={product.images} />
      </ImageContainer>
      <ContentContainer>
        <ProductDetailContent product={product} cart={cart?.cart}/>
      </ContentContainer>
    </ProductContainerStyled>
  );
}

export default Product;
