import styled from "styled-components";
import WishlistListItem from "./WishlistListItem";
import Paragraph from "../../components/Paragraph";

const WishlistListStyled = styled.ul`
  list-style: none;
  height: 65vh;
  overflow: scroll;
`;

function WishlistList({ wishlist, cart }) {
  console.log(cart);
  if (wishlist.length === 0)
    return (
      <Paragraph $small={false} $subheader={true}>
        ยังไม่มีสินค้าในรายการโปรด
      </Paragraph>
    );
  return (
    <WishlistListStyled>
      {wishlist.map((product) => (
        <WishlistListItem
          key={product.id}
          product={product}
          isAbleToAdd={
            (cart.find((cartItem) => cartItem.id === product.id)?.quantity ??
              0) < product.stock-1
          }
        />
      ))}
    </WishlistListStyled>
  );
}

export default WishlistList;
