import styled from "styled-components";
import CategoryButtonItem from "./CategoryButtonItem";
import { useEffect, useState } from "react";
import CategoryMenuItemsHeader from "./CategoryMenuItemsHeader";
import CategoryMenuItemsBody from "./CategoryMenuItemsBody";
import { useCategories } from "../../features/product/useCategories";

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

function CategoryMenu({setIsOpenCategoryMenu}) {
  const { categories, isLoading } = useCategories();
  const [selectedCategory, setSelectedCategory] = useState(null);
  useEffect(() => {
    setSelectedCategory(() =>
    categories ? categories[0] : null
    );
  }, [categories]);
  return (
    <CategoryMenuStyled>
      {!isLoading && (
        <>
          <CategoryMenuListStyled>
            {categories?.map((category) => (
              <CategoryButtonItem
                category={category}
                key={category.id}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            ))}
          </CategoryMenuListStyled>
          <CategoryMenuItemsStyled>
            <CategoryMenuItemsHeader title={selectedCategory?.name} />
            <CategoryMenuItemsBody category={selectedCategory} setIsOpenCategoryMenu={setIsOpenCategoryMenu}/>
          </CategoryMenuItemsStyled>
        </>
      )}
    </CategoryMenuStyled>
  );
}

export default CategoryMenu;

