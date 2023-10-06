import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { useState } from "react";

const OutletStyled = styled.div`
  min-height: 70vh;
  margin-top: 10vh;
  background-color: var(--color-gray-200);
`;

function AppLayout() {
  const [isOpenCategoryMenu, setIsOpenCategoryMenu] = useState(false);
  return (
    <>
      <Header setIsOpenCategoryMenu={setIsOpenCategoryMenu}/>
      <OutletStyled>
        <Outlet />
      </OutletStyled>
      <Footer />
    </>
  );
}

export default AppLayout;
