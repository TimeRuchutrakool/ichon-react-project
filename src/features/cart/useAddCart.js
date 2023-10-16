import { useMutation } from "@tanstack/react-query";
import { addToCart as addToCartApi } from "../../services/apiCart";
import toast from "react-hot-toast";

export function useAddCart() {
  const { isLoading, mutate: addToCart } = useMutation({
    mutationFn: ({ productId, quantity }) => addToCartApi(productId, quantity),
    onSuccess: () => {
      toast.success("เพิ่มสินค้าลงไปในตะกร้าสำเร็จ");
    },
    onError: () => {
      toast.error("เพิ่มสินค้าลงไปในตะกร้าไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    },
  });

  return { isLoading, addToCart };
}
