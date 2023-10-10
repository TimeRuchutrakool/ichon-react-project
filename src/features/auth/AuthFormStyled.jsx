import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 2rem;
  /* margin */
`;

export const Text = styled.p`
  font-size: var(--font-size-xsm);
  font-weight: ${(props) =>
    props.$isBold ? "var(--font-weight-bold)" : "var(--font-weight-light)"};
`;

export const InputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0;
`;

export const AccountButtonStyled = styled.div`
  font-size: var(--font-size-xxsm);
`;

export const AccountButton = styled.button`
  color: var(--color-yellow-600);
  border: none;
  background-color: transparent;
  font-family: "Prompt", sans-serif;
  cursor: pointer;
`;
