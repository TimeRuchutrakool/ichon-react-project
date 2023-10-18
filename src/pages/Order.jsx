import styled from "styled-components";
import ActionButton from "../components/ActionButton";
import OrderProgress from "../features/orders/OrderProgress";
import OrderedProducts from "../features/orders/OrderedProducts";
import AddressControls from "../features/orders/AddressControls";
import { useCart } from "../features/cart/useCart";
import { useUser } from "../features/auth/useUser";
import { useModal } from "../hooks/useModal";

const OrderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OrderContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 2rem;
  margin: 5rem 0;
`;

function Order() {
  const { cart } = useCart();
  const { user } = useUser();
  const { dispatch, setIsPaying } = useModal();
  const isAbleToPay = user.address ? false : true;
  return (
    <OrderStyled>
      <OrderContainer>
        <OrderProgress />
        <OrderedProducts cart={cart?.data.cart} total={cart?.data.total} />
        <AddressControls user={user} />
        <ActionButton
          text="จ่ายเงิน"
          width="15rem"
          disabled={isAbleToPay}
          onClick={() => {
            setIsPaying((pay) => !pay);
            dispatch({ type: "pay" });
          }}
        />
      </OrderContainer>
    </OrderStyled>
  );
}

export default Order;
