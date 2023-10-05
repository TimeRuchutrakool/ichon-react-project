import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-right: 2rem;
`;

function CategoryMenuButton() {
  return (
    <Button>
      <span className="material-symbols-outlined">menu</span>
    </Button>
  );
}

export default CategoryMenuButton;
