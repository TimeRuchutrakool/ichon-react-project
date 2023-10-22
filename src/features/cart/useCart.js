import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";
import { useUser } from "../auth/useUser";

export function useCart() {
  const { user } = useUser();
  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: user ? getCart : () => {return null},
  });
  return { cart: cart?.data, isLoading };
}
