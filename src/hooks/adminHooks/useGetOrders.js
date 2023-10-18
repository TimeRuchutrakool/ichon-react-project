import { useQuery } from "@tanstack/react-query";
import { getOrdersForAdmin } from "../../services/apiOrder";

export function useGetOrders(statusId) {
  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders-admin"],
    queryFn: () => getOrdersForAdmin(statusId),
  });
  return { orders: orders?.data, isLoading };
}
