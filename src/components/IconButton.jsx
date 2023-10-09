import styled from "styled-components";

const IconButtonStyled = styled.button`
  width: auto;
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
  iconLabel,
  color = "var(--color-black-900)",
  onClick,
}) {
  return (
    <IconButtonStyled $color={color} onClick={onClick}>
      {Icon}
      {iconLabel && <IconLabel>{iconLabel}</IconLabel>}
    </IconButtonStyled>
  );
}

export default IconButton;
