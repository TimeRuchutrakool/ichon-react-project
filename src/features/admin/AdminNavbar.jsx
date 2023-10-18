import styled from "styled-components";
import Paragraph from "../../components/Paragraph";
import IconButton from "../../components/IconButton";
import { useUser } from "../auth/useUser";
import { useLogout } from "../auth/useLogout";

const AdminNavbarStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5rem;

  padding-right: 3rem;
  height: 5vh;
`;

function AdminNavbar() {
  const { user } = useUser();
  const { logout } = useLogout();
  return (
    <AdminNavbarStyled>
      <Paragraph $small={false} $subheader={false}>
        {user.firstName} {user.lastName}
      </Paragraph>
      <IconButton
        Icon={<span className="material-symbols-outlined">logout</span>}
        onClick={logout}
      />
    </AdminNavbarStyled>
  );
}

export default AdminNavbar;
