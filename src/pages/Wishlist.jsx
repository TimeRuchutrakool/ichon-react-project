import styled from "styled-components";
import Heading from "../components/Heading";
import WishlistList from "../features/wishlist/WishlistList";
import { useGetWishlist } from "../features/wishlist/useGetWishlist";

const WishListStyled = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
function Wishlist() {
  const { wishlist } = useGetWishlist();
  
  return (
    <WishListStyled>
      <Heading as="h1">รายการอยากได้({wishlist?.data?.wishes.length})</Heading>
      <WishlistList wishlist={wishlist?.data?.wishes} />
    </WishListStyled>
  );
}

export default Wishlist;
