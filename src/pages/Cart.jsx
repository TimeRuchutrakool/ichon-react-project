import styled from "styled-components";
import Heading from "../components/Heading";
import CartPurchase from "../features/cart/CartPurchase";
import CartProductsList from "../features/cart/CartProductsList";

const CartStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 5rem 10rem 0;
`;

const CartDetail = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

function Cart() {
  return (
    <CartStyled>
      <Heading as="h2">ตะกร้าสินค้า (2)</Heading>
      <CartDetail>
        <CartProductsList />
        <CartPurchase />
      </CartDetail>
    </CartStyled>
  );
}

export default Cart;
