import styled from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
  height: 100%;
  & .header {
    align-self: flex-start;
  }
`;

export const ContentArea = styled.div`
  width: 100%;
  height: 85%;
  background-color: white;
  /* padding: 3rem 0; */
  overflow: scroll;
`;

export const TableList = styled.ul`
  list-style: none;
`;
export const TableRow = styled.li`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 2rem 0;
  justify-items: center;
  align-items: center;
`;

export const GrayButton = styled.button`
  border: none;
  background-color: var(--color-gray-500);
  cursor: pointer;
  font-family: "Prompt", sans-serif;
  font-size: var(--font-size-xsm);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
`;

export const BlurBackgroundStyled = styled.div`
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

export const EditOperation = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

export const CancelButton = styled(GrayButton)`
  background-color: var(--color-red-500);
  color: var(--color-white-0);
`;
