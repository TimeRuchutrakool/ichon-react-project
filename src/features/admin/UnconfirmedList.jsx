import ActionButton from "../../components/ActionButton";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Spinner from "../../components/Spinner";
import { useGetOrders } from "../../hooks/adminHooks/useGetOrders";
import { useUpdateOrderStatus } from "../../hooks/adminHooks/useUpdateOrderStatus";
import { useModal } from "../../hooks/useModal";
import { formatDate } from "../../utils/helper";
import {
  CancelButton,
  EditOperation,
  GrayButton,
  TableList,
  TableRow,
} from "./AdminStyled";

function UnconfirmedList() {
  const { dispatch } = useModal();
  const { orders, isLoading } = useGetOrders(1);
  const { updateStatus } = useUpdateOrderStatus();
  if (isLoading) return <Spinner />;
  return (
    <TableList>
      <TableRow>
        <Heading as="h4" $small={true}>
          ORDER ID
        </Heading>
        <Heading as="h4" $small={true}>
          ORDER AT
        </Heading>
        <Heading as="h4" $small={true}>
          E-SLIP
        </Heading>
        <div></div>
      </TableRow>

      {orders?.map((order) => (
        <TableRow key={order.id}>
          <Paragraph $small={true}>{order.id}</Paragraph>
          <Paragraph $small={true}>{formatDate(order.createdAt)}</Paragraph>
          <GrayButton
            onClick={() =>
              dispatch({
                type: "slipPreview",
                payload: order.slipUrl,
              })
            }
          >
            Preview
          </GrayButton>
          <EditOperation>
            <CancelButton
              onClick={() => updateStatus({ statusId: 3, orderId: order.id })}
            >
              ยกเลิก
            </CancelButton>
            <ActionButton
              text="สินค้าที่สั่ง"
              width="fit-content"
              small={true}
              onClick={() =>
                dispatch({ type: "seeOrderedProductd", payload: order })
              }
            />
            <ActionButton
              width="fit-content"
              text="ยืนยัน"
              small={true}
              onClick={() => updateStatus({ statusId: 2, orderId: order.id })}
            />
          </EditOperation>
        </TableRow>
      ))}
    </TableList>
  );
}

export default UnconfirmedList;
