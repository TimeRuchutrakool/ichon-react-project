import styled from "styled-components";
import OrderListItem from "./OrderListItem";
import Paragraph from "../../components/Paragraph";

const OrdersListStyled = styled.ul`
  list-style: none;
  height: 65vh;
  overflow: scroll;
`;

function OrdersList({ orders }) {
  if (orders?.length === 0)
    return <Paragraph $small={false} $subheader={true}>ยังไม่มีรายการคำสั่งซื้อ</Paragraph>;
  return (
    <OrdersListStyled>
      {orders.map((order) => (
        <OrderListItem key={order.id} order={order} />
      ))}
    </OrdersListStyled>
  );
}

export default OrdersList;
