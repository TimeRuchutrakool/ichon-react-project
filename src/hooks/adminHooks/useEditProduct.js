import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProduct as editProductApi } from "../../services/apiProduct";
import toast from "react-hot-toast";

export function useEditProduct() {
  const queryClient = useQueryClient();
  const { mutate: editProduct, isLoading } = useMutation({
    mutationFn: async (data) => await editProductApi(data),
    onSuccess: () => {
      toast.success("แก้ไขข้อมูลสินค้าสำเร็จ");
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: () => {
      toast.error("แก้ไขข้อมูลสินค้าไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    },
  });

  return { editProduct, isLoading };
}
