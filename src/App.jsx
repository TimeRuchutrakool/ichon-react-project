import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalContextProvider } from "./context/ModalContext";
import Routes from "./routes/Routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 0 } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ModalContextProvider>
        <Routes />
      </ModalContextProvider>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-gray-200)",
            zIndex: 200,
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
