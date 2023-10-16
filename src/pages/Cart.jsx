import styled from "styled-components";
import Heading from "../components/Heading";
import CartPurchase from "../features/cart/CartPurchase";
import CartProductsList from "../features/cart/CartProductsList";
import { useCart } from "../features/cart/useCart";

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
  const { cart } = useCart();

  return (
    <CartStyled>
      <Heading as="h2">ตะกร้าสินค้า ({cart?.data.cart.length})</Heading>
      <CartDetail>
        <CartProductsList cart={cart?.data.cart} />
        <CartPurchase total={cart?.data.total} />
      </CartDetail>
    </CartStyled>
  );
}

export default Cart;
