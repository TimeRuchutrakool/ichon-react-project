import styled from "styled-components";

const Label = styled.span`
  font-size: var(--font-size-l);
`;
const YellowLabel = styled.span`
  color: var(--color-yellow-600);
`;

function Logo() {
  return (
    <Label>
      IC<YellowLabel>H</YellowLabel>ON
    </Label>
  );
}

export default Logo;
