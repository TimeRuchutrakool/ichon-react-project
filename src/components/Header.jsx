import styled from "styled-components";
import CategoryMenuButton from "./CategoryMenuButton";
import Logo from "./Logo";
import InputBox from "./InputBox";
import SearchButton from "../features/search/SearchButton";
import IconButton from "./IconButton";
import { useState } from "react";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import { useModal } from "../hooks/useModal";

const HeaderStyled = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
  position: sticky;
  top: 0;
  background-color: var(--color-white-0);
  z-index: 100;
`;

const SectionHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const VerticalLineStyled = styled.div`
  display: inline-block;
  width: 0.1rem;
  height: 3.5rem;
  background-color: var(--color-gray-700);
  margin: 0 1.5rem;
`;

function Header() {
  const [isOpenCategoryMenu, setIsOpenCategoryMenu] = useState(false);
  const { dispatch } = useModal();
  const handleClickCategoryMenu = () => {
    setIsOpenCategoryMenu((isOpen) => !isOpen);
  };
  return (
    <HeaderStyled>
      <SectionHeaderStyled>
        <CategoryMenuButton onOpen={handleClickCategoryMenu} />
        <Logo disabled={false} />
      </SectionHeaderStyled>

      <SectionHeaderStyled>
        <InputBox placeholder="ค้นหาสินค้าที่นี่" />
        <SearchButton />
      </SectionHeaderStyled>

      <SectionHeaderStyled>
        <IconButton
          Icon={<span className="material-symbols-outlined">person</span>}
          iconLabel="เข้าสู่ระบบ"
          onClick={() => dispatch({ type: "login" })}
        />
        <VerticalLineStyled />
        <IconButton
          Icon={
            <span className="material-symbols-outlined">shopping_cart</span>
          }
        />
      </SectionHeaderStyled>
      {isOpenCategoryMenu && <CategoryMenu />}
    </HeaderStyled>
  );
}

export default Header;
