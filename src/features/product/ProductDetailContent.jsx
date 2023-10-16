import styled from "styled-components";
import PriceLabel from "../../components/PriceLabel";
import Counter from "../../components/Counter";
import ActionButton from "../../components/ActionButton";
import IconButton from "../../components/IconButton";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import { useAddCart } from "../cart/useAddCart";
import { useState } from "react";

const DetailFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 7rem;
  padding-bottom: 1.5rem;
  border-bottom: 0.1rem solid var(--color-gray-400);
`;

function ProductDetailContent({ product }) {
  const { addToCart } = useAddCart();
  const [count, setCount] = useState(1);
  return (
    <>
      <Heading as="h4">{product.name}</Heading>
      <Paragraph $subheader={true} $small={false}>
        แบรนด์: {product.brand.name}
      </Paragraph>
      <Paragraph $subheader={false} $small={true}>
        {product.description}
      </Paragraph>
      <PriceLabel price={product.price} />
      <Counter count={count} setCount={setCount} isAutoAddAndRemove={false}>
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
        <ActionButton
          type="outlined"
          text="หยิบลงตะกร้า"
          onClick={() => addToCart({ productId: product.id, quantity: count })}
        />
        <ActionButton text="ซื้อเลย" />
      </DetailFooterStyled>
    </>
  );
}

export default ProductDetailContent;
