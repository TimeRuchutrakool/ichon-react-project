import styled from "styled-components";

const ProductCardStyled = styled.div`
  width: 20rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white-0);
  padding: 2rem;
  box-shadow: var(--shadow-light);
  border-radius: 1rem;
  margin: 1rem;
`;

function ProductCard({product}) {
  return <ProductCardStyled>{product}</ProductCardStyled>;
}

export default ProductCard;
