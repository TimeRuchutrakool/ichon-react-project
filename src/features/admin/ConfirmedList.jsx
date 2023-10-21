import ActionButton from "../../components/ActionButton";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Spinner from "../../components/Spinner";
import { useGetOrders } from "../../hooks/adminHooks/useGetOrders";
import { useModal } from "../../hooks/useModal";
import { formatDate } from "../../utils/helper";
import { GrayButton, TableList, TableRow } from "./AdminStyled";

function ConfirmedList() {
  const { dispatch } = useModal();
  const { orders, isLoading } = useGetOrders(2);
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
          <ActionButton
            text="สินค้าที่สั่ง"
            width="fit-content"
            small={true}
            onClick={() =>
              dispatch({ type: "seeOrderedProductd", payload: order })
            }
          />
        </TableRow>
      ))}
    </TableList>
  );
}

export default ConfirmedList;
