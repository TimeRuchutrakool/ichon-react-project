import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeWish as removeWishApi } from "../../services/apiWish";
import toast from "react-hot-toast";

export function useRemoveWish() {
  const queryClient = useQueryClient();
  const { mutate: removeWish, isLoading } = useMutation({
    mutationFn: (productId) => removeWishApi(productId),
    onSuccess: () => {
      toast.success("นำออกจากรายการโปรดสำเร็จ");
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
    onError: () => {
      toast.error("นำออกจากรายการโปรดไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    },
  });
  return { removeWish, isLoading };
}
