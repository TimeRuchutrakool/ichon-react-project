import { MockUserContextProvider } from "./context/MockUserContext";
import { ModalContextProvider } from "./context/ModalContext";
import Routes from "./routes/Routes";

function App() {
  return (
    <MockUserContextProvider>
      <ModalContextProvider>
        <Routes />
      </ModalContextProvider>
    </MockUserContextProvider>
  );
}

export default App;
