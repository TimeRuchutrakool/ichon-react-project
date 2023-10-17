import styled from "styled-components";
import ProductImageWithTitle from "../../components/ProductImageWithTitle";
import PriceLabel from "../../components/PriceLabel";
import ActionButton from "../../components/ActionButton";
import IconButton from "../../components/IconButton";
import { cutOffWord } from "../../utils/helper";
import { useAddCart } from "../cart/useAddCart";
import { useRemoveWish } from "./useRemoveWish";

const WishlistListItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-white-0);
  margin: 2rem 0;
`;

const OrderFooter = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-right: 2rem;
`;

function WishlistListItem({ product }) {
  const { addToCart } = useAddCart();
  const { removeWish } = useRemoveWish();
  return (
    <WishlistListItemStyled>
      <ProductImageWithTitle
        img={product.ProductImage[0].imageUrl}
        title={cutOffWord(product?.name, 100)}
      />
      <OrderFooter>
        <PriceLabel price={product.price} />
        <ActionButton
          type="outlined"
          text="หยิบลงตะกร้า"
          small={true}
          width="fit-content"
          onClick={() => addToCart({ productId: product.id, quantity: 1 })}
        />
        <IconButton
          color="var(--color-gray-700)"
          Icon={<span className="material-symbols-outlined">delete</span>}
          onClick={() => removeWish(product.id)}
        />
      </OrderFooter>
    </WishlistListItemStyled>
  );
}

export default WishlistListItem;
