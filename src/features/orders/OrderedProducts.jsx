import styled from "styled-components";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import ProductImageWithTitle from "../../components/ProductImageWithTitle";
import { formatCurrency } from "../../utils/helper";

const OrderedProductsStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const OrderedProductsList = styled.ul`
  list-style: none;
  width: 100%;

  background-color: var(--color-white-0);
`;

const OrderedProductRow = styled.li`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  text-align: center;
  margin: 0.5rem;
  & {
    border-bottom: 0.1rem solid var(--color-gray-300);
  }
  &:first-child,
  &:last-child {
    border-bottom: none;
  }
  &:first-child {
    margin-top: 2rem;
  }
  &:nth-last-child(2) {
    border-bottom: none;
  }
  &:last-child {
    background-color: var(--color-gray-400);
    margin: 0;
    padding: 1.5rem 0;
  }
`;
const NumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function OrderedProducts({ cart }) {
  return (
    <OrderedProductsStyled>
      <Heading as="h4" $small={true}>
        คำสั่งซื้อ
      </Heading>
      <OrderedProductsList>
        <OrderedProductRow>
          <div></div>
          <Paragraph $subheader={true} $small={true}>
            ราคาต่อหน่วย
          </Paragraph>
          <Paragraph $subheader={true} $small={true}>
            จำนวน
          </Paragraph>
          <Paragraph $subheader={true} $small={true}>
            รายการย่อย
          </Paragraph>
        </OrderedProductRow>
        {cart.cart.map((product) => (
          <OrderedProductRow key={product.id}>
            <ProductImageWithTitle
              img={product.imageUrl}
              title={product.name}
            />
            <NumberContainer>
              <Paragraph $subheader={false} $small={true}>
                {formatCurrency(product.price)}
              </Paragraph>
            </NumberContainer>
            <NumberContainer>
              <Paragraph $subheader={false} $small={true}>
                {product.quantity}
              </Paragraph>
            </NumberContainer>
            <NumberContainer>
              <Paragraph $subheader={false} $small={true}>
                {formatCurrency(
                  Number(product.price) * product.quantity
                )}
              </Paragraph>
            </NumberContainer>
          </OrderedProductRow>
        ))}

        <OrderedProductRow>
          <div></div>
          <div></div>
          <Paragraph $subheader={false} $small={true}>
            ยอดสั่งซื้อทั้งหมด
          </Paragraph>
          <Paragraph $subheader={false} $small={true}>
            {formatCurrency(cart.total)}
          </Paragraph>
        </OrderedProductRow>
      </OrderedProductsList>
    </OrderedProductsStyled>
  );
}

export default OrderedProducts;
