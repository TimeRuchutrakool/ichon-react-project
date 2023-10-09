import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const LabelStyled = styled.span`
  font-size: var(--font-size-l);
  cursor: ${(props) => (props.$disabled ? "auto" : "pointer")};
`;
const YellowLabelStyled = styled.span`
  color: var(--color-yellow-600);
`;

function Logo({ disabled = false }) {
  const navigate = useNavigate();
  return (
    <LabelStyled
      onClick={() => {
        if (disabled) return;
        navigate("/");
      }}
      $disabled={disabled}
    >
      IC<YellowLabelStyled>H</YellowLabelStyled>ON
    </LabelStyled>
  );
}

export default Logo;
