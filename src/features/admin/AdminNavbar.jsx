import styled from "styled-components";
import Paragraph from "../../components/Paragraph";
import IconButton from "../../components/IconButton";

const AdminNavbarStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5rem;

  padding-right: 3rem;
  height: 5vh;
`;

function AdminNavbar() {
  return (
    <AdminNavbarStyled>
      <Paragraph $small={false} $subheader={false}>
        Time Ruchutrakool
      </Paragraph>
      <IconButton
        Icon={<span className="material-symbols-outlined">logout</span>}
      />
    </AdminNavbarStyled>
  );
}

export default AdminNavbar;
