import styled from "styled-components";
import Heading from "../components/Heading";
import WishlistList from "../features/wishlist/WishlistList";
import { mockWishList } from "../data/mockData";

const WishListStyled = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
function Wishlist() {
  const wishlist = mockWishList
  return (
    <WishListStyled>
      <Heading as="h1">รายการอยากได้(2)</Heading>
      <WishlistList wishlist={wishlist}/>
    </WishListStyled>
  );
}

export default Wishlist;
