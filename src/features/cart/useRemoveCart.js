import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromCart as removeFromCartApi } from "../../services/apiCart";
import toast from "react-hot-toast";
export function useRemoveCart() {
  const queryClient = useQueryClient();
  const { mutate: removeFromCart, isLoading } = useMutation({
    mutationFn: ({ productId }) => removeFromCartApi(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("ลดสินค้าในตะกร้าสำเร็จ");
    },
    onError: () => {
      toast.error("ลดสินค้าในตะกร้าไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    },
  });
  return { removeFromCart, isLoading };
}
