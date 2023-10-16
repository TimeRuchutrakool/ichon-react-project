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
  const { formModal, dispatch, setIsPaying } = useModal();
  const dropRef = useClickOutside(() => {
    if (formModal.form.type.name === "PayForm") setIsPaying((pay) => !pay);
    dispatch({ type: "close" });
  });
  return (
    <ModalStyled ref={dropRef}>
      <CloseButtonStyled>
        <IconButton
          Icon={<span className="material-symbols-outlined">close</span>}
          onClick={() => {
            if (formModal.form.type.name === "PayForm")
              setIsPaying((pay) => !pay);
            dispatch({ type: "close" });
          }}
        ></IconButton>
      </CloseButtonStyled>
      {children}
    </ModalStyled>
  );
}

export default Modal;
