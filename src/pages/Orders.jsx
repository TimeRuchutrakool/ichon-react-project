import styled from "styled-components";
import Heading from "../components/Heading";
import OrdersList from "../features/orders/OrdersList";
import { mockOrders } from "../data/mockData";

const OrdersStyled = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function Orders() {
  const orders = mockOrders;
  return (
    <OrdersStyled>
      <Heading as="h1">รายการคำสั่งซื้อ</Heading>
      <OrdersList orders={orders} />
    </OrdersStyled>
  );
}

export default Orders;
