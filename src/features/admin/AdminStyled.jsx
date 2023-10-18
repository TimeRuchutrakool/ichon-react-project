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
`;

export const OrderTableList = styled.ul`
  list-style: none;
`;
export const OrderTableRow = styled.li`
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
