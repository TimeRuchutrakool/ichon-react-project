import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct as createProductApi } from "../../services/apiProduct";
import toast from "react-hot-toast";
import { useModal } from "../useModal";

export function useCreateProduct() {
  const queryClient = useQueryClient()
  const { dispatch } = useModal();
  const { mutate: createProduct, isLoading } = useMutation({
    mutationFn: async (data) => {
      await createProductApi(data);
    },
    onSuccess: () => {
      toast.success("เพิ่มสินค้าใหม่สำเร็จ");
      dispatch({ type: "close" });
      queryClient.invalidateQueries({queryKey:['products']})
    },
    onError: () => {
      toast.error("เพิ่มสินค้าใหม่ไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    },
  });

  return { createProduct, isLoading };
}
