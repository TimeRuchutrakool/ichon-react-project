import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/apiProduct";

export function useProduct() {
  const { productId } = useParams();
  const { isLoading, data: product } = useQuery({
    queryKey: ["product"],
    queryFn: () => getProduct(productId),
  });
  return { isLoading, product: product?.data };
}
