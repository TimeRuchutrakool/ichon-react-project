import styled from "styled-components";
import Heading from "../components/Heading";
// import OrdersList from "../features/orders/OrdersList";
import { useOrders } from "../features/orders/useOrders";

const OrdersStyled = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function Orders() {
  const { orders } = useOrders();
  console.log(orders?.data?.orders);
  return (
    <OrdersStyled>
      <Heading as="h1">รายการคำสั่งซื้อ</Heading>
      {/* <OrdersList orders={orders?.data?.orders} /> */}
    </OrdersStyled>
  );
}

export default Orders;
