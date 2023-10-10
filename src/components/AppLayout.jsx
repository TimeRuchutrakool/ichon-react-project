import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import Modal from "./Modal";
import { useModal } from "../hooks/useModal";

const OutletStyled = styled.section`
  min-height: 78vh;
  background-color: var(--color-gray-200);
`;

const BlurBackgroundStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000033;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 150;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

function AppLayout() {
  const { formModal } = useModal();

  return (
    <>
      {formModal.form && (
        <BlurBackgroundStyled>
          <Modal>{formModal.form}</Modal>
        </BlurBackgroundStyled>
      )}
      <Header />
      <OutletStyled>
        <Outlet />
      </OutletStyled>
      <Footer />
    </>
  );
}

export default AppLayout;
