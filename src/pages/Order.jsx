import styled from "styled-components";
import ActionButton from "../components/ActionButton";
import OrderProgress from "../features/orders/OrderProgress";
import OrderedProducts from "../features/orders/OrderedProducts";
import AddressControls from "../features/orders/AddressControls";

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
  return (
    <OrderStyled>
      <OrderContainer>
        <OrderProgress />
        <OrderedProducts />
        <AddressControls />
        <ActionButton text="จ่ายเงิน" width="15rem" />
      </OrderContainer>
    </OrderStyled>
  );
}

export default Order;
