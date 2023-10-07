import styled from "styled-components";

const ProductsViewHeaderStyled = styled.h1`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.2rem;
  margin-bottom: 1rem;
`;

function ProductsHeader({ headerTitle }) {
  return <ProductsViewHeaderStyled>{headerTitle}</ProductsViewHeaderStyled>;
}

export default ProductsHeader;
