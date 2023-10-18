import styled from "styled-components";

const SlipImageStyled = styled.img`
  width: 40rem;
`;

function SlipImage({src}) {
  return <SlipImageStyled src={src} />;
}

export default SlipImage;
