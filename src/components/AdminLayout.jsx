import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AdminMenu from "../features/admin/AdminMenu";
import AdminNavbar from "../features/admin/AdminNavbar";
import { useModal } from "../hooks/useModal";
import { BlurBackgroundStyled } from "../features/admin/AdminStyled";
import  Modal  from "./Modal";

const AdminLayoutStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: var(--color-gray-300);
`;
const OutletStyled = styled.div`
  width: 100%;
  height: 95vh;
  padding: 0rem 5rem;
`;
const ContentLayout = styled.div`
  height: 100vh;
`;

function AdminLayout() {
  const {formModal} = useModal()
  return (
    <>
    {formModal.form && (
        <BlurBackgroundStyled>
          <Modal>{formModal.form}</Modal>
        </BlurBackgroundStyled>
      )}
    <AdminLayoutStyled>
      <AdminMenu />
      <ContentLayout>
        <AdminNavbar />
        <OutletStyled>
          <Outlet />
        </OutletStyled>
      </ContentLayout>
    </AdminLayoutStyled>
    </>
  );
}

export default AdminLayout;
