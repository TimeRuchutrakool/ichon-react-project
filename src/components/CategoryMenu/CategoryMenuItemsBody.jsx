import styled from "styled-components";
import BrandMenuItem from "./BrandMenuItem";

const CategoryMenuItemsBodyStyled = styled.ul`
  list-style: none;
`;

function CategoryMenuItemsBody({ category }) {
  return (
    <CategoryMenuItemsBodyStyled>
      {category.brands.map((brand) => (
        <BrandMenuItem key={brand.brandId} brand={brand} />
      ))}
    </CategoryMenuItemsBodyStyled>
  );
}

export default CategoryMenuItemsBody;
