import { useMutation } from "@tanstack/react-query";
import { createProduct as createProductApi } from "../../services/apiProduct";
import toast from "react-hot-toast";

export function useCreateProduct() {
  const {
    mutate: createProduct,
    isLoading,
    isSuccess,
  } = useMutation({
    mutationFn: (data) => {
      createProductApi(data);
    },
    onSuccess: () => {
      toast.success("เพิ่มสินค้าใหม่สำเร็จ");
    },
    onError: (e) => {
      toast.error("เพิ่มสินค้าใหม่ไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
      console.log(e);
    },
  });

  return { createProduct, isLoading, isSuccess };
}
