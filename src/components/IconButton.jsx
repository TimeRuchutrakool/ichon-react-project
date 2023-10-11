import styled from "styled-components";

const IconButtonStyled = styled.button`
  width: ${props=>props.$widthSize};
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  font-size: var(--font-size-sm);
  font-family: "Prompt", sans-serif;
  color: ${(props) => props.$color};
`;
const IconLabel = styled.span``;

function IconButton({
  Icon = undefined,
  iconLabel=undefined,
  color = "var(--color-black-900)",
  onClick,
  width='auto',
  disabled=false
}) {
  return (
    <IconButtonStyled $color={color} onClick={onClick} $widthSize={width} disabled={disabled}>
      {Icon}
      {iconLabel && <IconLabel>{iconLabel}</IconLabel>}
    </IconButtonStyled>
  );
}

export default IconButton;
