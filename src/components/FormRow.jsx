import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 0.5rem 0;
`;
const Error = styled.span`
  font-size: 1.2rem;
  color: var(--color-red-500);
`;

function FormRow({ error, children }) {
  return (
    <StyledFormRow>
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
