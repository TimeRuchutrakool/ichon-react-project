import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart as addToCartApi } from "../../services/apiCart";
import toast from "react-hot-toast";

export function useAddCart() {
  const queryClient = useQueryClient();
  const {
    isLoading,
    mutate: addToCart,
    isSuccess,
  } = useMutation({
    mutationFn: async ({ productId, quantity }) =>
      await addToCartApi(productId, quantity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("เพิ่มสินค้าลงไปในตะกร้าสำเร็จ");
    },
    onError: () => {
      toast.error("เพิ่มสินค้าลงไปในตะกร้าไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    },
  });

  return { isLoading, addToCart, isSuccess };
}
