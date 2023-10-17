import styled from "styled-components";
import OrderListItem from "./OrderListItem";

const OrdersListStyled = styled.ul`
  list-style: none;
  height: 65vh;
  overflow: scroll;
`;

function OrdersList({ orders }) {
  return (
    <OrdersListStyled>
      {orders?.map((order) => (
        <OrderListItem key={order.id} order={order} />
      ))}
    </OrdersListStyled>
  );
}

export default OrdersList;
