import { useMutation } from "@tanstack/react-query";
import { createOrder as createOrderApi } from "../../services/apiOrder";
import toast from "react-hot-toast";
import { useModal } from "../../hooks/useModal";
import { useNavigate } from "react-router-dom";

export function useCreateOrder() {
  const { dispatch } = useModal();
  const navigate = useNavigate();
  const { mutate: createOrder, isLoading } = useMutation({
    mutationFn: (image) => createOrderApi(image),
    onSuccess: () => {
      toast.success("สั่งสินค้าสำเร็จ");
      dispatch({ type: "close" });
      navigate("/user");
    },
    onError: () => {
      toast.error("สั่งสินค้าล้มเหลวกรุณาสั่งสินค้าใหม่");
    },
  });
  return { createOrder, isLoading };
}
