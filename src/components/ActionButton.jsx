import styled from "styled-components";

const ButtonStyled = styled.button`
  width: ${(props) => props.$width};
  border: ${(props) =>
    props.$isOutlined ? "0.2rem solid var(--color-yellow-600)" : "none"};
  background-color: ${(props) =>
    props.$isOutlined ? "var(--color-yellow-300)" : "var(--color-yellow-600)"};
  box-shadow: ${(props) =>
    props.$isOutlined ? "none" : "0.1rem 0.1rem 0.1rem var(--color-gray-500)"};
  border-radius: 0.5rem;
  padding: 1rem;
  font-family: "Prompt", sans-serif;
  font-size: ${(props) =>
    props.$small ? "var(--font-size-xxsm)" : "var(--font-size-sm)"};
  cursor: pointer;
`;

function ActionButton({
  type = "regular",
  text,
  width = "100%",
  small = false,
  onClick = () => {},
  disabled = false,
}) {
  const isOutlined = type === "outlined";
  return (
    <ButtonStyled
      $isOutlined={isOutlined}
      $width={width}
      $small={small}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </ButtonStyled>
  );
}

export default ActionButton;
