import { Link } from "react-router-dom";
import styled from "styled-components";

const LabelStyled = styled.span`
  font-size: var(--font-size-l);
  cursor: pointer;
`;
const YellowLabelStyled = styled.span`
  color: var(--color-yellow-600);
`;

function Logo() {
  return (
    <Link to="/">
      <LabelStyled>
        IC<YellowLabelStyled>H</YellowLabelStyled>ON
      </LabelStyled>
    </Link>
  );
}

export default Logo;
