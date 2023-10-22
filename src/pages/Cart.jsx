import styled from "styled-components";
import Heading from "../components/Heading";
import CartPurchase from "../features/cart/CartPurchase";
import CartProductsList from "../features/cart/CartProductsList";
import { useCart } from "../features/cart/useCart";
import NullHandling from "../components/NullHandling";
import Spinner from "../components/Spinner";

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
  const { cart, isLoading } = useCart();

  if (isLoading || !cart) return <Spinner />;
  if (cart.cart.length === 0)
    return <NullHandling>ยังไม่มีสินค้าในตะกร้า</NullHandling>;
  return (
    <CartStyled>
      <Heading as="h2">ตะกร้าสินค้า ({cart.cart.length})</Heading>
      <CartDetail>
        <CartProductsList cart={cart.cart} />
        <CartPurchase total={cart.total} />
      </CartDetail>
    </CartStyled>
  );
}

export default Cart;
