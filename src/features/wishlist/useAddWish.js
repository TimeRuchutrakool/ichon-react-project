import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addWish as addWishApi } from "../../services/apiWish";
import toast from "react-hot-toast";

export function useAddWish() {
  const queryClient = useQueryClient();
  const { mutate: addWish, isLoading } = useMutation({
    mutationFn: (productId) => addWishApi(productId),
    onSuccess: () => {
      toast.success("เพิ่มลงในรายการโปรดสำเร็จ");
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
    onError: () => {
      toast.error("เพอ่มลงในรายการโปรดไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    },
  });
  return { addWish, isLoading };
}
