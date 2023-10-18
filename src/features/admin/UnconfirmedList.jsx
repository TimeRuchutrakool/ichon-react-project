import ActionButton from "../../components/ActionButton";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import { slipImage } from "../../data/mockData";
import { useModal } from "../../hooks/useModal";
import { GrayButton, TableList, TableRow } from "./AdminStyled";

function UnconfirmedList() {
  const { dispatch } = useModal();
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
      <TableRow>
        <Paragraph $small={true}>1</Paragraph>
        <Paragraph $small={true}>20/03/2023</Paragraph>
        <GrayButton
          onClick={() =>
            dispatch({
              type: "slipPreview",
              payload: slipImage,
            })
          }
        >
          Preview
        </GrayButton>
        <ActionButton
          width="fit-content"
          text="ยืนยันคำสั่งซื้อ"
          small={true}
        />
      </TableRow>
      <TableRow>
        <Paragraph $small={true}>1</Paragraph>
        <Paragraph $small={true}>20/03/2023</Paragraph>
        <GrayButton
          onClick={() =>
            dispatch({
              type: "slipPreview",
              payload:slipImage,
            })
          }
        >
          Preview
        </GrayButton>
        <ActionButton
          width="fit-content"
          text="ยืนยันคำสั่งซื้อ"
          small={true}
        />
      </TableRow>
    </TableList>
  );
}

export default UnconfirmedList;
