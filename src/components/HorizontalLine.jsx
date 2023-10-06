import styled from "styled-components";

const HorizontalLineStyled = styled.hr`
  display: block;
  height: 0.1rem;
  border: 0;
  border-top: 0.1rem solid var(--color-gray-500);
  margin: 1rem 0;
  width: 70%;
`;

function HorizontalLine() {
  return <HorizontalLineStyled />;
}

export default HorizontalLine;
