import styled, { css } from "styled-components";

const Paragraph = styled.p`
  ${(props) =>
    props.$small
      ? css`
          font-size: var(--font-size-xsm);
        `
      : css`
          font-size: var(--font-size-sm);
        `}
  ${(props) =>
    props.$subheader
      ? css`
          color: var(--color-gray-700);
        `
      : css`
          color: var(--color-black-900);
        `}
`;

export default Paragraph;
