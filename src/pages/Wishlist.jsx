import styled from "styled-components";
import Heading from "../components/Heading";
import WishlistList from "../features/wishlist/WishlistList";
import { useGetWishlist } from "../features/wishlist/useGetWishlist";
import Spinner from "../components/Spinner";
import { useCart } from "../features/cart/useCart";

const WishListStyled = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
function Wishlist() {
  const { wishlist, isLoading } = useGetWishlist();
  const { cart } = useCart();
  if (!cart) return <Spinner />;
  if (isLoading || !wishlist || !cart) return <Spinner />;
  return (
    <WishListStyled>
      <Heading as="h1">รายการอยากได้({wishlist.length})</Heading>
      <WishlistList wishlist={wishlist} cart={cart.cart} />
    </WishListStyled>
  );
}

export default Wishlist;
