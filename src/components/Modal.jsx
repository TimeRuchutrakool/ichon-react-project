import styled from "styled-components";
import IconButton from "./IconButton";

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

function Modal({ children, setIsOpenModal }) {
  return (
    <ModalStyled>
      <CloseButtonStyled>
        <IconButton
          Icon={<span className="material-symbols-outlined">close</span>}
          onClick={() => setIsOpenModal(false)}
        ></IconButton>
      </CloseButtonStyled>
      {children}
    </ModalStyled>
  );
}

export default Modal;
