import styled from "styled-components";
import CartProductCard from "./CartProductCard";

const CartProductsListStyled = styled.ul`
  height: fit-content;
  list-style: none;
  background-color: var(--color-white-0);
  margin-right: 2rem;
`;

function CartProductsList({ cart }) {
  return (
    <CartProductsListStyled>
      {cart.map((product) => (
        <CartProductCard key={product.id} product={product} />
      ))}
    </CartProductsListStyled>
  );
}

export default CartProductsList;
