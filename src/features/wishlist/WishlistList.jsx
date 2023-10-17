import styled from "styled-components";
import WishlistListItem from "./WishlistListItem";
import Paragraph from "../../components/Paragraph";

const WishlistListStyled = styled.ul`
  list-style: none;
  height: 65vh;
  overflow: scroll;
`;

function WishlistList({ wishlist }) {
  if (wishlist?.length === 0)
    return (
      <Paragraph $small={false} $subheader={true}>
        ยังไม่มีสินค้าในรายการโปรด
      </Paragraph>
    );
  return (
    <WishlistListStyled>
      {wishlist?.map((product) => (
        <WishlistListItem key={product.id} product={product?.product} />
      ))}
    </WishlistListStyled>
  );
}

export default WishlistList;
