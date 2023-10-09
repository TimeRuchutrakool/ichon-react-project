import styled from "styled-components";

const DropdownListStyled = styled.ul`
  list-style: none;
  position: absolute;
`;

function Dropdown({ children, trigger, showDropdown, setShowDropdown }) {
  return (
    <span onClick={() => setShowDropdown((show) => !show)}>
      {trigger}
      {showDropdown && <DropdownListStyled>{children}</DropdownListStyled>}
    </span>
  );
}

export default Dropdown;
