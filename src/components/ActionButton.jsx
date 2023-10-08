import styled from "styled-components";

const ButtonStyled = styled.button`
  width: 100%;
  border: ${(props) =>
    props.$isOutlined ? "0.2rem solid var(--color-yellow-600)" : "none"};
  background-color: ${(props) =>
    props.$isOutlined ? "var(--color-yellow-300)" : "var(--color-yellow-600)"};
  box-shadow: ${(props) =>
    props.$isOutlined ? "none" : "0.2rem 0.2rem 0.1rem var(--color-gray-700)"};
  border-radius: 0.5rem;
  padding: 1rem;
  font-family: "Prompt", sans-serif;
  font-size: var(--font-size-sm);
  cursor: pointer;
`;

function ActionButton({ type = "regular", text }) {
  const isOutlined = type === "outlined";
  return <ButtonStyled $isOutlined={isOutlined}>{text}</ButtonStyled>;
}

export default ActionButton;
