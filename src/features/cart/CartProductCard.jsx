import styled from "styled-components";
import ProductImageWithTitle from "../../components/ProductImageWithTitle";
import PriceLabel from "../../components/PriceLabel";
import Counter from "../../components/Counter";
import IconButton from "../../components/IconButton";
import { useState } from "react";
import { useDeleteCart } from "./useDeleteCart";

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

function CartProductCard({ product }) {
  const [count, setCount] = useState(() => product.quantity);
  const { deleteCart } = useDeleteCart();
  return (
    <CartProductCardStyled>
      <ProductImageWithTitle img={product.imageUrl} title={product.name} />
      <CartProductCardFooterContainer>
        <PriceLabel price={product.price} />
        <ProductControls>
          <Counter
            count={count}
            setCount={setCount}
            isAutoAddAndRemove={true}
            productId={product.id}
          >
            <Counter.Decrease
              icon={<span className="material-symbols-outlined">remove</span>}
            />
            <Counter.CountLabel />
            <Counter.Increase
              icon={<span className="material-symbols-outlined">add</span>}
              disabled={count >= product.stock}
            />
          </Counter>
          <IconButton
            Icon={<span className="material-symbols-outlined">delete</span>}
            color="var(--color-gray-700)"
            onClick={() => deleteCart(product.id)}
          />
        </ProductControls>
      </CartProductCardFooterContainer>
    </CartProductCardStyled>
  );
}

export default CartProductCard;
