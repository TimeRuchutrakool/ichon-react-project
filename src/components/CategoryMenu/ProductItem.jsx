import styled from "styled-components";

const ProductStyle = styled.button`
  border: none;
  background-color: transparent;
  font-size: var(--font-size-xsm);
  font-weight: var(--font-weight-light);
  cursor: pointer;
`;
function ProductItem({ productTitle }) {
  return <ProductStyle>{productTitle}</ProductStyle>;
}

export default ProductItem;
