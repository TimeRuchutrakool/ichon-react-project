import styled from "styled-components";
import CartProductCard from "./CartProductCard";

const CartProductsListStyled = styled.ul`
  height: fit-content;
  list-style: none;
  background-color: var(--color-white-0);
  margin-right: 2rem;
`;

function CartProductsList() {
  return (
    <CartProductsListStyled>
      <CartProductCard />
      <CartProductCard />
      <CartProductCard />
    </CartProductsListStyled>
  );
}

export default CartProductsList;
