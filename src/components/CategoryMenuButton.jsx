import styled from "styled-components";

const CategoryMenuButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

function CategoryMenuButton({ onOpen }) {
  return (
    <CategoryMenuButtonStyled onClick={onOpen}>
      <span className="material-symbols-outlined">menu</span>
    </CategoryMenuButtonStyled>
  );
}

export default CategoryMenuButton;
