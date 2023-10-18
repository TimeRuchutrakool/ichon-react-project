import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import { GrayButton, OrderTableList, OrderTableRow } from "./AdminStyled";

function ConfirmedList() {
  return (
    <OrderTableList>
      <OrderTableRow>
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
      </OrderTableRow>
      <OrderTableRow>
        <Paragraph $small={true}>1</Paragraph>
        <Paragraph $small={true}>20/03/2023</Paragraph>
        <GrayButton>Preview</GrayButton>
      </OrderTableRow>
      <OrderTableRow>
        <Paragraph $small={true}>1</Paragraph>
        <Paragraph $small={true}>20/03/2023</Paragraph>
        <GrayButton>Preview</GrayButton>
      </OrderTableRow>
    </OrderTableList>
  );
}

export default ConfirmedList;
