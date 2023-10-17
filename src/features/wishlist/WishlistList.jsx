import styled from "styled-components";
import WishlistListItem from "./WishlistListItem";

const WishlistListStyled = styled.ul`
  list-style: none;
  height: 65vh;
  overflow: scroll;
`;

function WishlistList({ wishlist }) {
  return (
    <WishlistListStyled>
      {wishlist?.map((product) => (
        <WishlistListItem key={product.id} product={product?.product} />
      ))}
    </WishlistListStyled>
  );
}

export default WishlistList;
