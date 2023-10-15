import styled from "styled-components";
import { cutOffWord } from "../../utils/helper";
import { Link } from "react-router-dom";
import PriceLabel from "../../components/PriceLabel";

const ProductCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-white-0);
  border-radius: 1rem;
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

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product?.brand?.name}/${product?.id}`}>
      <div style={{ padding: "1rem" }}>
        <ProductCardStyled>
          <BrandLabel>{product?.brand?.name}</BrandLabel>
          <ProductImage src={product?.productImage} alt={product?.name} />
          <TextContentStyled>
            <ProductName>{cutOffWord(product?.name, 70)}</ProductName>
            <ProductDesc>{cutOffWord(product?.description, 90)}</ProductDesc>
            <PriceLabel price={product?.price} />
          </TextContentStyled>
        </ProductCardStyled>
      </div>
    </Link>
  );
}

export default ProductCard;
