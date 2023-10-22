import styled from "styled-components";
import Heading from "../components/Heading";
import OrdersList from "../features/orders/OrdersList";
import { useOrders } from "../features/orders/useOrders";
import Spinner from "../components/Spinner";

const OrdersStyled = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function Orders() {
  const { orders, isLoading } = useOrders();
  if (isLoading || !orders) return <Spinner />;
  return (
    <OrdersStyled>
      <Heading as="h1">รายการคำสั่งซื้อ</Heading>
      <OrdersList orders={orders} />
    </OrdersStyled>
  );
}

export default Orders;
