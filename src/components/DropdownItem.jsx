import styled from "styled-components";

const DropdownItemStyled = styled.li``;

function DropdownItem({ children }) {
  return <DropdownItemStyled>{children}</DropdownItemStyled>;
}

export default DropdownItem;
