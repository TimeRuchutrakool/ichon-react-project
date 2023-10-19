import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../../services/apiProduct";

export function useAdminProduct() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  return { products: products?.data, isLoading };
}
