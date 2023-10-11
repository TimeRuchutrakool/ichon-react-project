import styled from "styled-components";
import Paragraph from "../../components/Paragraph";
import IconButton from "../../components/IconButton";
import { useLocation, useNavigate } from "react-router-dom";

const UserMenuStyled = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;
`;

const MenuContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.$isActive ? "var(--color-yellow-600)" : "transparent"};

  &:hover {
    background-color: var(--color-gray-300);
  }
`;

const menus = [
  {
    menuIcon: <span className="material-symbols-outlined">local_mall</span>,
    menuTitle: "คำสั่งซื้อ",
    path: "orders",
  },
  {
    menuIcon: <span className="material-symbols-outlined">favorite</span>,
    menuTitle: "รายการอยากได้",
    path: "wishlist",
  },
];

function UserMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname.split("/")[2];

  const handleNavigate = (path) => navigate(`/user/${path}`);

  return (
    <UserMenuStyled>
      <Paragraph $subheader={false}>ธาม ฤชุตระกูล</Paragraph>
      <MenuContainer>
        {menus.map((menu, index) => (
          <ButtonContainer key={index} $isActive={menu.path === isActive}>
            <IconButton
              Icon={menu.menuIcon}
              iconLabel={menu.menuTitle}
              width="100%"
              onClick={handleNavigate.bind(null, menu.path)}
              disabled={menu.path === isActive}
            />
          </ButtonContainer>
        ))}
        <ButtonContainer>
          <IconButton
            Icon={
              <span className="material-symbols-outlined">exit_to_app</span>
            }
            iconLabel="ออกจากระบบ"
          />
        </ButtonContainer>
      </MenuContainer>
    </UserMenuStyled>
  );
}

export default UserMenu;
