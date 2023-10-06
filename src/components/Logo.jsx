import styled from "styled-components";

const LabelStyled = styled.span`
  font-size: var(--font-size-l);
`;
const YellowLabelStyled = styled.span`
  color: var(--color-yellow-600);
`;

function Logo() {
  return (
    <LabelStyled>
      IC<YellowLabelStyled>H</YellowLabelStyled>ON
    </LabelStyled>
  );
}

export default Logo;
