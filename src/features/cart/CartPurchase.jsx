import styled from "styled-components";
import Paragraph from "../../components/Paragraph";
import { formatCurrency } from "../../utils/helper";
import Heading from "../../components/Heading";
import ActionButton from "../../components/ActionButton";
import { useNavigate } from "react-router-dom";

const TotalPurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 2rem;
`;

const TotalNumberRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

function CartPurchase() {
  const navigate = useNavigate();
  return (
    <TotalPurchaseContainer>
      <TotalNumberRow>
        <Paragraph $subheader={false} $small={false}>
          ยอดรวม
        </Paragraph>
        <Paragraph $subheader={false} $small={false}>
          {formatCurrency(33800)}
        </Paragraph>
      </TotalNumberRow>
      <TotalNumberRow>
        <Paragraph $subheader={false} $small={false}>
          ส่วนลด
        </Paragraph>
        <Paragraph $subheader={false} $small={false}>
          -{formatCurrency(0)}
        </Paragraph>
      </TotalNumberRow>
      <TotalNumberRow>
        <Heading as="h4" $small={true}>
          ยอดรวมสุทธิ
        </Heading>
        <Heading as="h4" $small={true}>
          {formatCurrency(33800)}
        </Heading>
      </TotalNumberRow>
      <ActionButton
        text="ดำเนินการสั่งซื้อ"
        onClick={() => navigate("/order")}
      />
    </TotalPurchaseContainer>
  );
}

export default CartPurchase;
