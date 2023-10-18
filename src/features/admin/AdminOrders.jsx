import { useSearchParams } from "react-router-dom";
import Heading from "../../components/Heading";
import ToggleButton from "../../components/ToggleButton";
import { ContentArea, ContentContainer } from "./AdminStyled";
import UnconfirmedList from "./UnconfirmedList";
import ConfirmedList from "./ConfirmedList";
import CancelledList from "./CancelledList";

function AdminOrders() {
  const [searchedParams] = useSearchParams();

  return (
    <ContentContainer>
      <Heading $small={false} as="h1" className="header">
        Orders
      </Heading>
      <ToggleButton toggleMenu={["ยังไม่ยืนยัน", "ยืนยัน", "ยกเลิก"]} />
      <ContentArea>
        {searchedParams.get("status") === "ยังไม่ยืนยัน" ? (
          <UnconfirmedList />
        ) : searchedParams.get("status") === "ยืนยัน" ? (
          <ConfirmedList />
        ) : (
          <CancelledList />
        )}
      </ContentArea>
    </ContentContainer>
  );
}

export default AdminOrders;
