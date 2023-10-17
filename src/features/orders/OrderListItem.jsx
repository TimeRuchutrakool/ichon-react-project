import styled from "styled-components";
import ProductImageWithTitle from "../../components/ProductImageWithTitle";
import PriceLabel from "../../components/PriceLabel";
import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";
import { formatDate } from "../../utils/helper";

const OrderListItemStyled = styled.li`
  background-color: var(--color-white-0);
  padding: 1rem 2rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SpaceLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProductLayout = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductsList = styled.ul``;

const Total = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const orderStatusMap = [
  "var(--color-blue-700)",
  "var(--color-green-400)",
  "var(--color-red-500)",
];

function OrderListItem({ order }) {
  const total = order.OrderItem.reduce((acc, cur) => {
    return acc + Number(cur.product.price) * cur.quantity;
  }, 0);
  return (
    <OrderListItemStyled>
      <SpaceLayout>
        <Heading as="h4" $small={true}>
          หมายเลขคำสั่งซื้อ: {order.id}
        </Heading>
        <Paragraph $subheader={true} $small={true}>
          {formatDate(order.createdAt)}
        </Paragraph>
      </SpaceLayout>
      <ProductsList>
        {order.OrderItem.map((product) => (
          <ProductLayout key={product.id}>
            <ProductImageWithTitle
              img={product.product.ProductImage[0].imageUrl}
              title={product.product.name}
            />
            <span>
              <Paragraph $subheader={false} $small={true}>
                x{product.quantity}
              </Paragraph>

              <PriceLabel
                price={product.product.price}
                color="var(--color-black-900)"
                fontSize="var(--font-size-xsm)"
              />
            </span>
          </ProductLayout>
        ))}
      </ProductsList>
      <SpaceLayout>
        <Paragraph $subheader={false} $small={true}>
          สถานะ:{" "}
          <span style={{ color: `${orderStatusMap[order.statusId - 1]}` }}>
            {order.status.name}
          </span>
        </Paragraph>
        <Total>
          <Paragraph $subheader={false} $small={true}>
            รวมสุทธิ
          </Paragraph>
          <PriceLabel price={total} fontSize="var(--font-size-xsm)" />
        </Total>
      </SpaceLayout>
    </OrderListItemStyled>
  );
}

export default OrderListItem;
