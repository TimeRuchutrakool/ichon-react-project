import styled from "styled-components";
import useClickOutside from "../hooks/useClickOutside";

const DropdownListStyled = styled.ul`
  list-style: none;
  position: absolute;
`;

function Dropdown({ children, trigger, showDropdown, setShowDropdown }) {
  const dropRef = useClickOutside(()=>setShowDropdown(false))
  return (
    <span onClick={() => setShowDropdown((show) => !show)} ref={dropRef}>
      {trigger}
      {showDropdown && <DropdownListStyled>{children}</DropdownListStyled>}
    </span>
  );
}

export default Dropdown;
