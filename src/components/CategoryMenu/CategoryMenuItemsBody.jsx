import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CategoryMenuItemsBodyStyled = styled.div`
  display: flex;
  gap: 3rem;
`;

function CategoryMenuItemsBody({ category, setIsOpenCategoryMenu }) {
  const navigate = useNavigate();
  return (
    <CategoryMenuItemsBodyStyled>
      {category?.Product.map((product) => (
        <p
          key={product.id}
          style={{ cursor: "pointer" }}
          onClick={() => {
            setIsOpenCategoryMenu((open) => !open);
            navigate(`/search/${product.brand.name}?sortBy=general&page=1`);
          }}
        >
          {product.brand.name}
        </p>
      ))}
    </CategoryMenuItemsBodyStyled>
  );
}

export default CategoryMenuItemsBody;
