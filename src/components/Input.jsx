import styled from "styled-components";

const Input = styled.input`
  width: ${(props) => (props.$width ? props.$width : "30rem")};
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

export default Input;
