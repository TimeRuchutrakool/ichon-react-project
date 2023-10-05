import styled from "styled-components";
import CategoryMenuButton from "./CategoryMenuButton";
import Logo from "./Logo";
import InputBox from "./InputBox";
import SearchButton from "./SearchButton";
import IconButton from "./IconButton";

const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 0;
`;

const SectionHeader = styled.div`
  background-color: red;
  display: flex;
`;

function Header() {
  return (
    <HeaderStyled>
      <SectionHeader>
        <CategoryMenuButton />
        <Logo />
      </SectionHeader>

      <SectionHeader>
        <InputBox placeholder="ค้นหาสินค้าที่นี่" />
        <SearchButton />
      </SectionHeader>

      <SectionHeader>
        <IconButton />
        <IconButton />
      </SectionHeader>
    </HeaderStyled>
  );
}

export default Header;
