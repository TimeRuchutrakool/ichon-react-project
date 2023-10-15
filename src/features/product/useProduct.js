import { useSearchParams } from "react-router-dom";

export function useProduct() {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("productId");
  return productId
}
