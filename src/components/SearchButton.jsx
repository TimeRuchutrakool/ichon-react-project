import styled from "styled-components";

const Button = styled.button`
  width: 7rem;
  border: none;
  background-color: var(--color-yellow-600);
  border-radius: 0.5rem;
`;

function SearchButton() {
  return (
    <Button>
      <span class="material-symbols-outlined">search</span>
    </Button>
  );
}

export default SearchButton;
