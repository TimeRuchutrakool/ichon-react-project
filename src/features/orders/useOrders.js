import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrder";

export function useOrders() {
  const {
    data: orders,
    isLoading,
    refetch: refetchOrders,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });
  return { orders, isLoading, refetchOrders };
}
