import styled, { css } from "styled-components";

const Heading = styled.h1`
  font-size: ${(props) =>
    props.$small ? "var(--font-size-sm)" : "var(--font-size-m)"};
  ${(props) =>
    props.as === "h1" &&
    css`
      font-weight: var(--font-weight-bold);
      letter-spacing: 0.2rem;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-weight: var(--font-weight-light);
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-weight: var(--font-weight-bold);
    `}
`;

export default Heading;
