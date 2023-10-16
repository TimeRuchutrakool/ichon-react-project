import { useMutation } from "@tanstack/react-query";
import { removeFromCart as removeFromCartApi } from "../../services/apiCart";
import toast from "react-hot-toast";
export function useRemoveCart() {
  const { mutate: removeFromCart, isLoading } = useMutation({
    mutationFn: ({ productId, quantity }) =>
      removeFromCartApi(productId, quantity),
    onSuccess: () => {
      toast.success("ลดสินค้าในตะกร้าสำเร็จ");
    },
    onError: () => {
      toast.error("ลดสินค้าในตะกร้าไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    },
  });
  return { removeFromCart, isLoading };
}
