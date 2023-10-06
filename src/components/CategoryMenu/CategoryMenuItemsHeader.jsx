import styled from "styled-components";

const CategoryMenuItemsHeaderStyled = styled.header`
  color: var(--color-yellow-600);
  font-size: var(--font-size-xsm);
  margin-bottom: 1rem;
`;
function CategoryMenuItemsHeader({ title }) {
  return (
    <CategoryMenuItemsHeaderStyled>All {title}</CategoryMenuItemsHeaderStyled>
  );
}

export default CategoryMenuItemsHeader;
