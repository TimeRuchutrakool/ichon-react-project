import styled from "styled-components";

import { createContext, useContext } from "react";
import Paragraph from "./Paragraph";
import { useAddCart } from "../features/cart/useAddCart";
import { useRemoveCart } from "../features/cart/useRemoveCart";

const CounterStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const CountInputStyled = styled.p`
  font-size: var(--font-size-xsm);
  font-weight: var(--font-weight-bold);
  background-color: var(--color-white-0);
  width: 5rem;
  padding: 0.5rem 0rem;
  text-align: center;
  border: 0.1rem solid var(--color-gray-500);
  border-radius: 0.5rem;
`;

const Button = styled.button`
  background-color: transparent;
  font-size: var(--font-size-sm);
  border: none;
`;

const CounterContext = createContext();

function Counter({ children, count, setCount, isAutoAddAndRemove, productId }) {
  return (
    <CounterContext.Provider
      value={{ count, setCount, isAutoAddAndRemove, productId }}
    >
      <CounterStyled>{children}</CounterStyled>
    </CounterContext.Provider>
  );
}

function CountHeader({ title }) {
  return (
    <Paragraph $subheader={true} $small={false}>
      {title}
    </Paragraph>
  );
}

function CountLabel() {
  const { count } = useContext(CounterContext);
  return <CountInputStyled>{count}</CountInputStyled>;
}

function Increase({ icon }) {
  const { addToCart, isLoading } = useAddCart();
  const { setCount, isAutoAddAndRemove, productId } =
    useContext(CounterContext);
  const increase = () => {
    setCount((count) => count + 1);
    if (isAutoAddAndRemove) {
      addToCart({ productId, quantity: undefined });
    }
  };
  return (
    <Button onClick={increase} disabled={isLoading}>
      {icon}
    </Button>
  );
}

function Decrease({ icon }) {
  const { removeFromCart, isLoading } = useRemoveCart();
  const { count, setCount, isAutoAddAndRemove, productId } =
    useContext(CounterContext);

  const decrease = () => {
    setCount((count) => count - 1);
    if (isAutoAddAndRemove) {
      removeFromCart({ productId });
    }
  };

  return (
    <Button onClick={decrease} disabled={count <= 1 || isLoading}>
      {icon}
    </Button>
  );
}

Counter.CountHeader = CountHeader;
Counter.CountLabel = CountLabel;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
