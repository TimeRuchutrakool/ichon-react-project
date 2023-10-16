import styled from "styled-components";

const NullHandlingStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
function NullHandling({ children }) {
  return <NullHandlingStyled>{children}</NullHandlingStyled>;
}

export default NullHandling;
