import styled from "styled-components";
import PriceLabel from "../../components/PriceLabel";
import Counter from "../../components/Counter";
import ActionButton from "../../components/ActionButton";
import IconButton from "../../components/IconButton";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import { useAddCart } from "../cart/useAddCart";
import { useState } from "react";
import { useAddWish } from "../wishlist/useaddWish";
import { useRemoveWish } from "../wishlist/useRemoveWish";
import { useUser } from "../auth/useUser";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const DetailFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 7rem;
  padding-bottom: 1.5rem;
  border-bottom: 0.1rem solid var(--color-gray-400);
`;

function ProductDetailContent({ product, cart }) {
  const { addToCart } = useAddCart();
  const { addWish } = useAddWish();
  const { removeWish } = useRemoveWish();
  const [count, setCount] = useState(1);
  const { user } = useUser();
  const navigate = useNavigate();
  const quantity =
    cart.find((productInCart) => productInCart.id === product.id)?.quantity ??
    0;
  return (
    <>
      <Heading as="h4">{product.name}</Heading>
      <Paragraph $subheader={true} $small={false}>
        แบรนด์: {product.brand}
      </Paragraph>
      <Paragraph $subheader={false} $small={true}>
        {product.description}
      </Paragraph>
      <PriceLabel price={product.price} />
      <div style={{ display: "flex", gap: "4rem", alignItems: "center" }}>
        <Counter count={count} setCount={setCount} isAutoAddAndRemove={false}>
          <Counter.CountHeader title="Quantity" />
          <Counter.Decrease
            icon={<span className="material-symbols-outlined">remove</span>}
          />
          <Counter.CountLabel />
          <Counter.Increase
            icon={<span className="material-symbols-outlined">add</span>}
            disabled={count >= product.stock}
          />
        </Counter>
        {product.stock <= 10 && (
          <span
            style={{
              color: "var(--color-red-500)",
              fontSize: "var(--font-size-xsm)",
            }}
          >
            * เหลือสินค้าอีก {product.stock} ชิ้น
          </span>
        )}
      </div>
      <DetailFooterStyled>
        {user && (
          <IconButton
            color="var(--color-gray-700)"
            Icon={
              <span
                className={`material-symbols-outlined ${
                  product.wish.length === 0 ? "outlined" : "filled"
                }`}
              >
                favorite
              </span>
            }
            onClick={() => {
              product.wish.length === 0
                ? addWish(product.id)
                : removeWish(product.id);
            }}
          />
        )}
        <ActionButton
          type="outlined"
          text="หยิบลงตะกร้า"
          onClick={() => {
            if (count + quantity > product.stock) return toast.error("จำนวนสินค้าไม่เพียงพอ");
            addToCart({ productId: product.id, quantity: count });
          }}
          disabled={count > product.stock}
        />
        <ActionButton
          text="ซื้อเลย"
          onClick={() => {
            addToCart({ productId: product.id, quantity: count });
            navigate("/order");
          }}
          disabled={count > product.stock}
        />
      </DetailFooterStyled>
    </>
  );
}

export default ProductDetailContent;
