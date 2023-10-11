import styled from "styled-components";

const CategoryMenuButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  & div {
    width: 100%;
    height: 0.3rem;
    border-radius: 2rem;
    background-color: var(--color-black-900);
    transition: all 0.5s;
  }
  & div:nth-child(1) {
    transform-origin: center left;
    transform: ${(props) =>
      props.$isOpen ? "rotateZ(45deg)" : "rotateZ(0deg)"};
    background-color: ${(props) =>
      props.$isOpen ? "var(--color-yellow-600)" : "var(--color-black-900)"};
  }
  & div:nth-child(2) {
    opacity: ${(props) => (props.$isOpen ? 0 : 1)};
  }
  & div:nth-child(3) {
    transform-origin: center left;
    transform: ${(props) =>
      props.$isOpen ? "rotateZ(-45deg)" : "rotateZ(0deg)"};
    background-color: ${(props) =>
      props.$isOpen ? "var(--color-yellow-600)" : "var(--color-black-900)"};
  }
`;

function CategoryMenuButton({ isOpenCategoryMenu, setIsOpenCategoryMenu }) {
  const handleClickCategoryMenu = () => {
    setIsOpenCategoryMenu((isOpen) => !isOpen);
  };
  return (
    <CategoryMenuButtonStyled
      onClick={handleClickCategoryMenu}
      $isOpen={isOpenCategoryMenu}
    >
      <div></div>
      <div></div>
      <div></div>
    </CategoryMenuButtonStyled>
  );
}

export default CategoryMenuButton;
