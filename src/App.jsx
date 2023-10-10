import { ModalContextProvider } from "./context/ModalContext";
import Routes from "./routes/Routes";

function App() {
  return (
    <ModalContextProvider>
      <Routes />;
    </ModalContextProvider>
  );
}

export default App;
