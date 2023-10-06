import styled from "styled-components";

const ProductsViewHeaderStyled = styled.h1`
  font-size: var(--font-size-m);
`;

function ProductsHeader({ headerTitle }) {
  return <ProductsViewHeaderStyled>{headerTitle}</ProductsViewHeaderStyled>;
}

export default ProductsHeader;
