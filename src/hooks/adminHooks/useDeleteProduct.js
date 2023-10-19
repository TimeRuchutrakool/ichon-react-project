import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct as deleteProductApi } from "../../services/apiProduct";
import toast from "react-hot-toast";

export function useDeleteProduct() {
  const queryClient = useQueryClient();
  const { mutate: deleteProduct } = useMutation({
    mutationFn: (productId) => deleteProductApi(productId),
    onSuccess: () => {
      toast.success("ลบสินค้าสำเร็จ");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => {
      toast.error("ลบสินค้าไม่สำเร็จสำเร็จ กรุณาลองใหม่อีกครั้ง");
    },
  });
  return { deleteProduct };
}
