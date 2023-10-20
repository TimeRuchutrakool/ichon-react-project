import styled from "styled-components";

const SlipImageStyled = styled.img`
  height: 80vh;
`;

function SlipImage({ src }) {
  return <SlipImageStyled src={src} />;
}

export default SlipImage;
