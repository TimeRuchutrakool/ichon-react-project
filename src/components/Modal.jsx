import styled from "styled-components";
import IconButton from "./IconButton";
import { useModal } from "../hooks/useModal";
import useClickOutside from "../hooks/useClickOutside";

const ModalStyled = styled.div`
  background-color: var(--color-white-0);
  border-radius: 1rem;
  box-shadow: var(--shadow-hard);
  padding: 2rem;
`;
const CloseButtonStyled = styled.div`
  display: flex;
  justify-content: end;
`;

function Modal({ children }) {
  const { dispatch } = useModal();
  const dropRef = useClickOutside(() => dispatch({ type: "close" }));
  return (
    <ModalStyled ref={dropRef}>
      <CloseButtonStyled>
        <IconButton
          Icon={<span className="material-symbols-outlined">close</span>}
          onClick={() => dispatch({ type: "close" })}
        ></IconButton>
      </CloseButtonStyled>
      {children}
    </ModalStyled>
  );
}

export default Modal;
