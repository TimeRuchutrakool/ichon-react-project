import styled from "styled-components";
import CategoryMenuButton from "./CategoryMenuButton";
import Logo from "./Logo";
import Input from "./Input";
import SearchButton from "../features/search/SearchButton";
import IconButton from "./IconButton";
import { useState } from "react";
import CategoryMenu from "./CategoryMenu/CategoryMenu";
import { useModal } from "../hooks/useModal";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";
import { useNavigate } from "react-router-dom";
import { useUser } from "../features/auth/useUser";
import { useLogout } from "../features/auth/useLogout";

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
  const [showDropdown, setShowDropdown] = useState(false);
  const [isOpenCategoryMenu, setIsOpenCategoryMenu] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");

  const navigate = useNavigate();
  const { user } = useUser();
  const { logout } = useLogout();
  const { dispatch } = useModal();

  return (
    <HeaderStyled>
      <SectionHeaderStyled>
        <CategoryMenuButton
          isOpenCategoryMenu={isOpenCategoryMenu}
          setIsOpenCategoryMenu={setIsOpenCategoryMenu}
        />
        <Logo disabled={false} />
      </SectionHeaderStyled>

      <SectionHeaderStyled>
        <Input
          placeholder="ค้นหาสินค้าที่นี่"
          type="text"
          onChange={(e) => setSearchTitle(e.target.value)}
          value={searchTitle}
        />
        <SearchButton
          onClick={() => {
            if (!searchTitle) return;
            navigate(`/search/${searchTitle}?sortBy=general&page=1`);
            setSearchTitle("");
          }}
        />
      </SectionHeaderStyled>

      <SectionHeaderStyled>
        {user ? (
          <Dropdown
            trigger={
              <IconButton iconLabel={user.data.firstName} onClick={() => {}} />
            }
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          >
            <DropdownItem
              onClick={() => {
                setShowDropdown(false);
                navigate("/user");
              }}
            >
              บัญชี
            </DropdownItem>
            <DropdownItem onClick={logout}>ออกจากระบบ</DropdownItem>
          </Dropdown>
        ) : (
          <IconButton
            Icon={<span className="material-symbols-outlined">person</span>}
            iconLabel="เข้าสู่ระบบ"
            onClick={() => dispatch({ type: "login" })}
          />
        )}
        <VerticalLineStyled />
        <IconButton
          Icon={
            <span className="material-symbols-outlined">shopping_cart</span>
          }
          onClick={() => navigate("/cart")}
        />
      </SectionHeaderStyled>
      {isOpenCategoryMenu && <CategoryMenu />}
    </HeaderStyled>
  );
}

export default Header;
