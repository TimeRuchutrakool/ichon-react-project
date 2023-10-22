import { useQuery } from "@tanstack/react-query";
import { getWishlist } from "../../services/apiWish";

export function useGetWishlist() {
  const { data: wishlist, isLoading } = useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
  });
  return { wishlist: wishlist?.data, isLoading };
}
