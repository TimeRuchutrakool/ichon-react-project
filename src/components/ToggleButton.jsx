import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  gap: 1rem;
  background-color: transparent;
`;

const ToggleButtonStyled = styled.button`
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-family: "Prompt", sans-serif;
  font-size: var(--font-size-xsm);
  font-weight: var(--font-weight-medium);
  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.$isActive ? "var(--color-gray-400)" : "transparent"};
  transition: all 0.3s;
`;

function ToggleButton({ toggleMenu }) {
  const [searchedParams, setSearchParams] = useSearchParams();

  return (
    <ToggleContainer>
      {toggleMenu.map((menu, index) => (
        <ToggleButtonStyled
          key={index}
          onClick={() => {
            searchedParams.set("status", menu.toLowerCase());
            setSearchParams(searchedParams);
          }}
          $isActive={searchedParams.get("status") === menu.toLowerCase()}
        >
          {menu}
        </ToggleButtonStyled>
      ))}
    </ToggleContainer>
  );
}

export default ToggleButton;
