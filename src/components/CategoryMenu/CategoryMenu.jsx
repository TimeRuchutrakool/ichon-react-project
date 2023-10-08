import styled from "styled-components";
import CategoryButtonItem from "./CategoryButtonItem";
import { useState } from "react";
import { mockCategories } from "../../data/mockData";
import CategoryMenuItemsHeader from "./CategoryMenuItemsHeader";
import CategoryMenuItemsBody from "./CategoryMenuItemsBody";

const CategoryMenuStyled = styled.div`
  width: 100%;
  height: 20rem;
  background-color: var(--color-yellow-200);
  position: absolute;
  top: 10vh;
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-bottom: 0.1rem solid var(--color-gray-300);
`;

const CategoryMenuListStyled = styled.aside`
  border-right: 0.1rem solid var(--color-gray-300);

  padding: 1.5rem;
  overflow: scroll;
`;
const CategoryMenuItemsStyled = styled.aside`
  padding: 1.5rem;
  overflow: scroll;
`;

function CategoryMenu() {
  const [selectedCategory, setSelectedCategory] = useState(mockCategories[0]);
  return (
    <CategoryMenuStyled>
      <CategoryMenuListStyled>
        {mockCategories.map((category) => (
          <CategoryButtonItem
            category={category}
            key={category.categoryId}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </CategoryMenuListStyled>
      <CategoryMenuItemsStyled>
        <CategoryMenuItemsHeader title={selectedCategory.categoryTitle} />
        <CategoryMenuItemsBody category={selectedCategory} />
      </CategoryMenuItemsStyled>
    </CategoryMenuStyled>
  );
}

export default CategoryMenu;
