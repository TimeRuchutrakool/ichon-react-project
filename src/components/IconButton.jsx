import styled from "styled-components";

const IconButtonStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  font-size: var(--font-size-xsm);
`;

function IconButton({ Icon = undefined, iconLabel = "" }) {
  return (
    <IconButtonStyled>
      {Icon}
      {iconLabel}
    </IconButtonStyled>
  );
}

export default IconButton;
