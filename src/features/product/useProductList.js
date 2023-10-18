import { useQuery } from "@tanstack/react-query";
import { getProductList } from "../../services/apiProduct";

export function useProductList(path) {
  const { data: products, isLoading } = useQuery({
    queryFn: () => getProductList(path),
    queryKey: [`${path}`],
  });

  return { products: products?.data, isLoading };
}
