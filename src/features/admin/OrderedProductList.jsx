import styled from "styled-components";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import { formatCurrency } from "../../utils/helper";

const OrderedProductListStyled = styled.div`
  min-width: 60vw;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow: scroll;
`;

const PersonalInfo = styled.div`
  font-size: var(--font-size-xsm);
  font-weight: var(--font-weight-semibold);
  display: flex;
  gap: 3rem;
`;

const ProductTable = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const ProductTableList = styled.li`
  font-size: var(--font-size-xsm);
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
`;

function OrderedProductList({ order }) {
  return (
    <OrderedProductListStyled>
      <Heading as="h4" $small={true}>
        ข้อมูลคำสั่งซื้อ
      </Heading>
      <PersonalInfo>
        <span>
          {order.user.firstName} {order.user.lastName}
        </span>
        <span>{order.user.phone}</span>
        <span>{order.user.email}</span>
      </PersonalInfo>
      <Paragraph $small={true} $subheader={false}>
        {order.user.address}
      </Paragraph>
      <Heading as="h4" $small={true}>
        รายการสินค้า
      </Heading>
      <ProductTable>
        <ProductTableList>
          <span>ชื่อ</span>
          <span>จำนวน</span>
          <span>ราคาสินค้าต่อหน่วย</span>
        </ProductTableList>
        {order.products.map((product) => (
          <ProductTableList key={product.id}>
            <span>{product.name}</span>
            <span>{product.quantity}</span>
            <span>{formatCurrency(product.price)}</span>
          </ProductTableList>
        ))}
        <ProductTableList>
          <div></div>
          <span>ราคารวม</span>
          <span>{formatCurrency(order.total)}</span>
        </ProductTableList>
      </ProductTable>
    </OrderedProductListStyled>
  );
}

export default OrderedProductList;
