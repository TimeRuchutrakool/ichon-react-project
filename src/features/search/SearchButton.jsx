import styled from "styled-components";

const SearchButtonStyled = styled.button`
  width: 7rem;
  border: none;
  background-color: var(--color-yellow-600);
  border-radius: 0.5rem;
  height: 3.5rem;
  cursor: pointer;
`;

function SearchButton({ onClick }) {
  return (
    <SearchButtonStyled onClick={onClick}>
      <span className="material-symbols-outlined">search</span>
    </SearchButtonStyled>
  );
}

export default SearchButton;
