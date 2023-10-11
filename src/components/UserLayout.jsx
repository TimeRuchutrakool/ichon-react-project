import styled from "styled-components";
import UserMenu from "../features/user/UserMenu";
import { Outlet } from "react-router-dom";

const UserLayoutStyled = styled.div`
  width: 100%;
  height: 78vh;
  display: grid;
  grid-template-columns: 1fr 5fr;
  column-gap: 2rem;
  padding: 5rem;
  overflow: hidden;
`;

function UserLayout() {
  return (
    <UserLayoutStyled>
      <UserMenu />
      <Outlet />
    </UserLayoutStyled>
  );
}

export default UserLayout;
