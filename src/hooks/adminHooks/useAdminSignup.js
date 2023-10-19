import { useMutation } from "@tanstack/react-query";
import { signupForAdmin as signupForAdminApi } from "../../services/apiAuth";
import { setAccessToken } from "../../utils/token";
import toast from "react-hot-toast";
import { useModal } from "../../hooks/useModal";

export function useAdminSignup() {
  const { dispatch } = useModal();
  const { mutate: adminSignup, isLoading } = useMutation({
    mutationFn: (info) => signupForAdminApi(info),
    onSuccess: (accessToken) => {
      setAccessToken(accessToken);
      toast.success("ลงทะเบียนสำเร็จ");
      dispatch({ type: "close" });
    },
    onError: () => {
      toast.error("เกิดปัญหาในการลงทะเบียน กรุณาลองใหม่อีกครั้ง");
    },
  });

  return { adminSignup, isLoading };
}
