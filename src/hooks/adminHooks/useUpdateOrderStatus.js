import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrderForAdmin } from "../../services/apiOrder";
import toast from "react-hot-toast";

export function useUpdateOrderStatus() {
  const queryClient = useQueryClient();
  const { mutate: updateStatus, isLoading } = useMutation({
    mutationFn: ({ statusId, orderId }) =>
      updateOrderForAdmin({ statusId, orderId }),
    onSuccess: () => {
      toast.success("ยืนยันคำสั่งซื้อสำเร็จ");
      queryClient.invalidateQueries({ queryKey: ["orders-admin"] });
    },
    onError: () => {
      toast.error("ยืนยันคำสั่งซื้อไม่สำเร็จ กรุณาลองอีกครั้ง");
    },
  });
  return { updateStatus, isLoading };
}
