import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrder";

export function useOrders() {
  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });
  return { orders: orders?.data, isLoading };
}
