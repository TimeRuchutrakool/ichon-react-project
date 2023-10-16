import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;
  &::file-selector-button {
    font: inherit;
    font-weight: var(--font-weight-bold);
    padding: 0.8rem 1.2rem;
    margin-right: 3rem;
    border: none;
    color: var(--color-black-900);
    background-color: var(--color-yellow-600);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: var(--color-yellow-300);
    }
  }
`;

export default FileInput;
