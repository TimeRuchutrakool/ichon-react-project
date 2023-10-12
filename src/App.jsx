import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MockUserContextProvider } from "./context/MockUserContext";
import { ModalContextProvider } from "./context/ModalContext";
import Routes from "./routes/Routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0 } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <MockUserContextProvider>
        <ModalContextProvider>
          <Routes />
        </ModalContextProvider>
      </MockUserContextProvider>
    </QueryClientProvider>
  );
}

export default App;
