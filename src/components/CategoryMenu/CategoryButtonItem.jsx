import styled from "styled-components";

const CategoryButtonStyled = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-xsm);
  padding: 1rem 1rem;
  border: none;
  border-radius: 1rem;
  background-color: ${(props) =>
    props.$isSelectCategory ? "var(--color-yellow-600)" : "transparent"};
  cursor: pointer;
  &:hover {
    background-color: var(--color-gray-300);
  }
`;

function CategoryButtonItem({
  category,
  selectedCategory,
  setSelectedCategory,
}) {
  const isSelectCategory = selectedCategory?.id === category?.id;

  const handleSelectedCategory = () => {
    setSelectedCategory(category);
  };

  return (
    <CategoryButtonStyled
      onClick={handleSelectedCategory}
      $isSelectCategory={isSelectCategory}
    >
      <span>{category?.name}</span>
      <span className="material-symbols-outlined">navigate_next</span>
    </CategoryButtonStyled>
  );
}

export default CategoryButtonItem;
