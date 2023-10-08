import styled from "styled-components";

import { createContext, useContext, useState } from "react";

const CounterStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
const HeaderStyled = styled.p`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-light);
  color: var(--color-gray-700);
`;

const CountInputStyled = styled.input`
  font-size: var(--font-size-xsm);
  font-weight: var(--font-weight-bold);
  padding: 0.5rem 0;
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

function Counter({ children }) {
  const [count, setCount] = useState(1);
  const increase = () => setCount((count) => count + 1);
  const decrease = () => setCount((count) => count - 1);

  return (
    <CounterContext.Provider value={{ count, increase, decrease, setCount }}>
      <CounterStyled>{children}</CounterStyled>
    </CounterContext.Provider>
  );
}

function CountHeader({ title }) {
  return <HeaderStyled>{title}</HeaderStyled>;
}

function CountInput() {
  const { count, setCount } = useContext(CounterContext);
  return (
    <CountInputStyled
      type="number"
      value={count}
      min='1'
      readOnly={true}
      onChange={(e) => setCount(+e.target.value)}
    />
  );
}

function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <Button onClick={increase}>{icon}</Button>;
}

function Decrease({ icon }) {
  const { count, decrease } = useContext(CounterContext);
  return (
    <Button onClick={decrease} disabled={count <= 1}>
      {icon}
    </Button>
  );
}

Counter.CountHeader = CountHeader;
Counter.CountInput = CountInput;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
