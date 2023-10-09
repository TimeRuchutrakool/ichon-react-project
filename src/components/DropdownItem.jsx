import styled from "styled-components";

const DropdownItemStyled = styled.li`
  cursor: pointer;
  padding: 1rem;
  background-color: var(--color-white-0);
  border-radius: 0.5rem;
  &:hover {
    background-color: var(--color-yellow-600);
  }
`;

function DropdownItem({ children, onClick }) {
  return (
    <DropdownItemStyled
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </DropdownItemStyled>
  );
}

export default DropdownItem;
