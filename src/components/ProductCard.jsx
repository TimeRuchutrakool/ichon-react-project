import styled from "styled-components";
import { cutOffWord, formatCurrency } from "../utils/helper";

const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 45rem;
  background-color: var(--color-white-0);
  border-radius: 1rem;
  margin: 1rem 2rem;
  padding: 2rem;
  cursor: pointer;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: var(--shadow-light);
  }
`;

const BrandLabel = styled.h3`
  color: var(--color-gray-800);
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-xsm);
`;

const TextContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
`;

const ProductImage = styled.img`
  min-height: 100%;
`;

const ProductName = styled.p`
  font-weight: var(--font-weight-light);
  font-size: var(--font-size-xsm);
`;
const ProductDesc = styled.p`
  color: var(--color-gray-700);
  font-weight: var(--font-weight-extralight);
  font-size: var(--font-size-xxsm);
  text-align: justify;
`;
const PriceLabel = styled.h3`
  color: var(--color-red-500);
  font-size: var(--font-size-sm);
`;

function ProductCard({ product }) {
  return (
    <ProductCardStyled>
      <BrandLabel>{product.brandTitle}</BrandLabel>
      <ProductImage src={product.productImage} alt={product.productTitle} />
      <TextContentStyled>
        <ProductName>{cutOffWord(product.productTitle, 70)}</ProductName>
        <ProductDesc>{cutOffWord(product.productDesc, 80)}</ProductDesc>
        <PriceLabel>{formatCurrency(product.productPrice)}</PriceLabel>
      </TextContentStyled>
    </ProductCardStyled>
  );
}

export default ProductCard;
