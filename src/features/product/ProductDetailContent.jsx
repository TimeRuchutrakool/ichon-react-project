import styled from "styled-components";
import PriceLabel from "../../components/PriceLabel";
import Counter from "../../components/Counter";
import ActionButton from "../../components/ActionButton";
import IconButton from "../../components/IconButton";

const ProductTitleStyles = styled.h1`
  font-size: var(--font-size-sm);
`;
const BrandTitleStyles = styled.p`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-light);
  color: var(--color-gray-700);
`;
const ProductDescStyles = styled.p`
  font-size: var(--font-size-xsm);
`;
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
      <ProductTitleStyles>
        คีย์บอร์ดไร้สาย Anitech Bluetooth Rechageable (P505) White (TH/EN)
      </ProductTitleStyles>
      <BrandTitleStyles>แบรนด์: ANITECH</BrandTitleStyles>
      <ProductDescStyles>
        Anitech Dual Function 2.4G+BT Rechargeable Keyboard P505
        มาพร้อมการเชื่อมต่อ แบบ 2 ฟังก์ชั่นด้วยสัญญาน 2.4G และ Bluetooth 5.0
        สะดวกสบายเชื่อมต่อได้ทั้ง โน๊ตบุ๊ค หรือ iPad ได้ในเวลาเดียวกัน
        สามารถชาร์ทไฟได้ ความจุแบต 400 mAh LI-Battery 100 key + Multimedia
        ปิด-เปิด เชื่อมต่อไปไกลถึง 10 เมตร
      </ProductDescStyles>
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
