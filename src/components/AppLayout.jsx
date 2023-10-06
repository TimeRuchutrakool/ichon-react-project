import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

const OutletStyled = styled.section`
  min-height: 70vh;
  background-color: var(--color-gray-200);
`;

function AppLayout() {
  return (
    <>
      <Header />
      <OutletStyled>
        <Outlet />
      </OutletStyled>
      <Footer />
    </>
  );
}

export default AppLayout;
