import styled from "styled-components";
import ProductImageWithTitle from "../../components/ProductImageWithTitle";
import PriceLabel from "../../components/PriceLabel";
import Counter from "../../components/Counter";
import IconButton from "../../components/IconButton";

const CartProductCardStyled = styled.li`
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  &:not(:last-child) {
    border-bottom: 0.1rem solid var(--color-gray-300);
  }
`;

const CartProductCardFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: space-between;
  align-items: start;
`;

const ProductControls = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3rem;
`;

function CartProductCard() {
  return (
    <CartProductCardStyled>
      <ProductImageWithTitle
        img="https://media-cdn.bnn.in.th/277229/Samsung-Smartphone-Galaxy-A14-1-square_medium.jpg"
        title="สมาร์ทโฟน Samsung Galaxy A14 (4+128GB) Silver"
      />
      <CartProductCardFooterContainer>
        <PriceLabel price={16900} />
        <ProductControls>
          <Counter>
            <Counter.Decrease
              icon={<span className="material-symbols-outlined">remove</span>}
            />
            <Counter.CountLabel />
            <Counter.Increase
              icon={<span className="material-symbols-outlined">add</span>}
            />
          </Counter>
          <IconButton
            Icon={<span className="material-symbols-outlined">delete</span>}
            color="var(--color-gray-700)"
          />
        </ProductControls>
      </CartProductCardFooterContainer>
    </CartProductCardStyled>
  );
}

export default CartProductCard;
