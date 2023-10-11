import styled from "styled-components";
import ProductImageWithTitle from "../../components/ProductImageWithTitle";
import PriceLabel from "../../components/PriceLabel";
import ActionButton from "../../components/ActionButton";
import IconButton from "../../components/IconButton";
import { cutOffWord } from "../../utils/helper";

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
  return (
    <WishlistListItemStyled>
      <ProductImageWithTitle
        img={product.productImage}
        title={cutOffWord(product.productTitle, 100)}
      />
      <OrderFooter>
        <PriceLabel price={product.productPrice} />
        <ActionButton
          type="outlined"
          text="หยิบลงตะกร้า"
          small={true}
          width="fit-content"
        />
        <IconButton
          color="var(--color-gray-700)"
          Icon={<span className="material-symbols-outlined">delete</span>}
        />
      </OrderFooter>
    </WishlistListItemStyled>
  );
}

export default WishlistListItem;
