import styled from "styled-components";
import { formatCurrency } from "../utils/helper";

const PriceLabelStyles = styled.h3`
  color: ${(props) => props.$fontColor};
  font-size: ${(props) => props.$fontSize};
  font-weight: var(--font-weight-medium);
`;
function PriceLabel({
  price,
  color = "var(--color-red-500)",
  fontSize = "var(--font-size-sm)",
}) {
  return (
    <PriceLabelStyles $fontColor={color} $fontSize={fontSize}>
      {formatCurrency(price)}
    </PriceLabelStyles>
  );
}

export default PriceLabel;
