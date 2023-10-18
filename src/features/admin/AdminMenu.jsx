import styled from "styled-components";
import Logo from "../../components/Logo";
import { useNavigate } from "react-router-dom";

const AdminMenuStyled = styled.div`
  width: 100%;
  height: 100dvh;
  background-color: var(--color-white-0);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  gap: 3rem;
`;

const MenuList = styled.ul`
  list-style: none;
`;
const MenuListItem = styled.li`
  display: flex;
  gap: 2rem;
  margin: 1rem 0;
  padding: 1rem 0;
  padding-left: 1rem;
  width: 15rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const adminMenu = [
  {
    icon: <span className="material-symbols-outlined">home</span>,
    title: "Home",
    path: "/admin/home",
  },
  {
    icon: <span className="material-symbols-outlined">order_approve</span>,
    title: "Orders",
    path: "/admin/orders?status=ยังไม่ยืนยัน",
  },
  {
    icon: <span className="material-symbols-outlined">devices</span>,
    title: "Products",
    path: "/admin/products",
  },
  {
    icon: <span className="material-symbols-outlined">group</span>,
    title: "Users",
    path: "/admin/users",
  },
];

function AdminMenu() {
  const navigate = useNavigate();
  return (
    <AdminMenuStyled>
      <Logo disabled={true} />
      <MenuList>
        {adminMenu.map((menu, index) => (
          <MenuListItem
            key={index}
            onClick={() => {
              navigate(menu.path);
            }}
          >
            {menu.icon}
            <span>{menu.title}</span>
          </MenuListItem>
        ))}
      </MenuList>
    </AdminMenuStyled>
  );
}

export default AdminMenu;
