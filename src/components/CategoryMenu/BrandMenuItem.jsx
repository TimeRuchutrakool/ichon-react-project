import styled from "styled-components";
import BrandTitle from "./BrandTitle";
import ProductItem from "./ProductItem";

const BrandMenuItemStyled = styled.li`
  display: flex;
  gap: 3rem;
  padding: 1rem 0;
  border-bottom: 0.1rem solid var(--color-gray-300);
`;

const ProductListStyled = styled.aside`
  width: 100%;
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
`;

function BrandMenuItem({ brand }) {
  return (
    <BrandMenuItemStyled>
      <BrandTitle brandTitle={brand.brandTitle} />
      <ProductListStyled>
        {brand.products.map((product) => (
          <ProductItem
            key={product.productId}
            productTitle={product.productTitle}
          />
        ))}
      </ProductListStyled>
    </BrandMenuItemStyled>
  );
}

export default BrandMenuItem;
