import styled from "styled-components";
import CategoryMenuButton from "./CategoryMenuButton";
import Logo from "./Logo";
import InputBox from "./InputBox";
import SearchButton from "./SearchButton";
import IconButton from "./IconButton";

const HeaderStyled = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
  position: fixed;
  top: 0;
  background-color: var(--color-white-0);
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const VerticalLine = styled.div`
  display: inline-block;
  width: 0.1rem;
  height: 3.5rem;
  background-color: var(--color-gray-700);
  margin: 0 1.5rem;
`;

function Header({ setIsOpenCategoryMenu }) {
  const handleClickCategoryMenu = () => {
    setIsOpenCategoryMenu((isOpen) => !isOpen);
  };
  return (
    <HeaderStyled>
      <SectionHeader>
        <CategoryMenuButton onOpen={handleClickCategoryMenu} />
        <Logo />
      </SectionHeader>

      <SectionHeader>
        <InputBox placeholder="ค้นหาสินค้าที่นี่" />
        <SearchButton />
      </SectionHeader>

      <SectionHeader>
        <IconButton
          Icon={<span className="material-symbols-outlined">person</span>}
          iconLabel="เข้าสู่ระบบ"
        />
        <VerticalLine />
        <IconButton
          Icon={
            <span className="material-symbols-outlined">shopping_cart</span>
          }
        />
      </SectionHeader>
    </HeaderStyled>
  );
}

export default Header;
