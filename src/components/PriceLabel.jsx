import styled from "styled-components";
import { formatCurrency } from "../utils/helper";

const PriceLabelStyles = styled.h3`
  color: var(--color-red-500);
  font-size: var(--font-size-sm);
`;
function PriceLabel({price}) {
  return <PriceLabelStyles>{formatCurrency(price)}</PriceLabelStyles>;
}

export default PriceLabel;
