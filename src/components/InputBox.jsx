import styled from "styled-components";

const InputBoxStyled = styled.input`
  width: ${(props) => props.$widthSize};
  border: none;
  border-bottom: 0.1rem solid var(--color-gray-800);
  padding: 1rem;
  font-family: "Prompt", sans-serif;
  font-size: var(--font-size-xsm);

  &:focus {
    outline: none;
    border-bottom: 0.2rem solid var(--color-yellow-600);
  }
`;

function InputBox({ type = "text", placeholder, width = "30rem" }) {
  return (
    <InputBoxStyled type={type} placeholder={placeholder} $widthSize={width} />
  );
}

export default InputBox;
