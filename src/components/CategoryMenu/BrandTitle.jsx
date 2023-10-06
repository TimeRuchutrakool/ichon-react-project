import styled from "styled-components";

const BrandTitleStyled = styled.h1`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xsm);
`;

function BrandTitle({ brandTitle }) {
  return <BrandTitleStyled>{brandTitle}</BrandTitleStyled>;
}

export default BrandTitle;
