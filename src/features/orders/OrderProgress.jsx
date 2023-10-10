import styled from "styled-components";
import Paragraph from "../../components/Paragraph";

const OrderProgressStyled = styled.div`
  width: fit-content;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Progress = styled.div`
  width: 20rem;
  height: 0.3rem;
  background-color: var(--color-gray-400);
  position: relative;
  &::before {
    content: "";
    width: 3rem;
    height: 3rem;
    background-color: var(--color-yellow-600);
    padding: 1rem;
    position: absolute;
    left: 0;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
  &::after {
    content: "";
    width: 3rem;
    height: 3rem;
    background-color: var(--color-gray-400);
    padding: 1rem;
    position: absolute;
    right: 0;
    border-radius: 50%;
    transform: translate(50%, -50%);
  }
`;
const ProgressLabel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

function OrderProgress() {
  return (
    <OrderProgressStyled>
      <Progress />
      <ProgressLabel>
        <Paragraph
          $small={true}
          $subheader={false}
          style={{ transform: "translateX(-50%)" }}
        >
          คำสั่งซื้อ
        </Paragraph>
        <Paragraph
          $small={true}
          $subheader={true}
          style={{ transform: "translateX(50%)" }}
        >
          จ่ายเงิน
        </Paragraph>
      </ProgressLabel>
    </OrderProgressStyled>
  );
}

export default OrderProgress;
