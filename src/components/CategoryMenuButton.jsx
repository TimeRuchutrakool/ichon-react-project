import styled from "styled-components";


const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

`;

function CategoryMenuButton({onOpen}) {
  return (
    <Button onClick={onOpen}>
      <span className="material-symbols-outlined">menu</span>
    </Button>
  );
}

export default CategoryMenuButton;
