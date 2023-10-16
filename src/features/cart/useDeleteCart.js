import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCart as deleteCartApi } from "../../services/apiCart";
import toast from "react-hot-toast";

export function useDeleteCart() {
  const queryClient = useQueryClient();
  const { mutate: deleteCart, isLoading } = useMutation({
    mutationFn: (productId) => deleteCartApi(productId),
    onSuccess: () => {
      toast.success("ลบสินค้าออกจากตะกร้าสำเร็จ");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: () => {
      toast.error("ลบสินค้าออกจากตะกร้าไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    },
  });

  return { deleteCart, isLoading };
}
