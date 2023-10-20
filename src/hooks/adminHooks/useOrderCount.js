import { useQuery } from "@tanstack/react-query";
import { getOrderCount } from "../../services/apiOrder";

export function useOrderCount() {
  const { data: orderCount, isLoading } = useQuery({
    queryKey: ["orderCount"],
    queryFn: getOrderCount,
  });
  return { orderCount, isLoading };
}
