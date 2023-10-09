import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { useState } from "react";
import Modal from "./Modal";
import LoginForm from "../features/auth/LoginForm";
import SignUpForm from "../features/auth/SignUpForm";

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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [toSignUp, setToSignUp] = useState(false);

  return (
    <>
      {isOpenModal && (
        <BlurBackgroundStyled>
          <Modal setIsOpenModal={setIsOpenModal}>
            {!toSignUp && <LoginForm setToSignUp={setToSignUp} />}
            {toSignUp && <SignUpForm setToSignUp={setToSignUp} />}
          </Modal>
        </BlurBackgroundStyled>
      )}
      <Header setIsOpenModal={setIsOpenModal} />
      <OutletStyled>
        <Outlet />
      </OutletStyled>
      <Footer />
    </>
  );
}

export default AppLayout;
