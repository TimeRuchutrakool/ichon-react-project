import styled from "styled-components";
import PriceLabel from "../../components/PriceLabel";
import Counter from "../../components/Counter";
import ActionButton from "../../components/ActionButton";
import IconButton from "../../components/IconButton";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

const DetailFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 7rem;
  padding-bottom: 1.5rem;
  border-bottom: 0.1rem solid var(--color-gray-400);
`;

function ProductDetailContent() {
  return (
    <>
      <Heading as="h4">
        คีย์บอร์ดไร้สาย Anitech Bluetooth Rechageable (P505) White (TH/EN)
      </Heading>
      <Paragraph $subheader={true} $small={false}>
        แบรนด์: ANITECH
      </Paragraph>
      <Paragraph $subheader={false} $small={true}>
        Anitech Dual Function 2.4G+BT Rechargeable Keyboard P505
        มาพร้อมการเชื่อมต่อ แบบ 2 ฟังก์ชั่นด้วยสัญญาน 2.4G และ Bluetooth 5.0
        สะดวกสบายเชื่อมต่อได้ทั้ง โน๊ตบุ๊ค หรือ iPad ได้ในเวลาเดียวกัน
        สามารถชาร์ทไฟได้ ความจุแบต 400 mAh LI-Battery 100 key + Multimedia
        ปิด-เปิด เชื่อมต่อไปไกลถึง 10 เมตร
      </Paragraph>
      <PriceLabel price={699} />
      <Counter>
        <Counter.CountHeader title="Quantity" />
        <Counter.Decrease
          icon={<span className="material-symbols-outlined">remove</span>}
        />
        <Counter.CountLabel />
        <Counter.Increase
          icon={<span className="material-symbols-outlined">add</span>}
        />
      </Counter>
      <DetailFooterStyled>
        <IconButton
          color="var(--color-gray-700)"
          iconLabel="wishlist"
          Icon={<span className="material-symbols-outlined">favorite</span>}
        />
        <ActionButton type="outlined" text="หยิบลงตะกร้า" />
        <ActionButton text="ซื้อเลย" />
      </DetailFooterStyled>
    </>
  );
}

export default ProductDetailContent;
