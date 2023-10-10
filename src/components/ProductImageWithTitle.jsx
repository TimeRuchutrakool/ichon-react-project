import styled from "styled-components";
import Paragraph from "./Paragraph";

const ProductImageWithTitleStyled = styled.div`
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  height: 10rem;
`;

function ProductImageWithTitle({ img, title }) {
  return (
    <ProductImageWithTitleStyled>
      <Img src={img} alt={title} />
      <Paragraph $subheader={false} $small={true}>
        {title}
      </Paragraph>
    </ProductImageWithTitleStyled>
  );
}

export default ProductImageWithTitle;
