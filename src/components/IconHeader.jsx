import styled from "styled-components";

const IconHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.$textColor};
`;

function IconHeader({ Icon, text, color }) {
  return (
    <IconHeaderStyled $textColor={color}>
      {Icon}
      <span>{text}</span>
    </IconHeaderStyled>
  );
}

export default IconHeader;
