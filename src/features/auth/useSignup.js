import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { setAccessToken } from "../../utils/token";
import toast from "react-hot-toast";
import { useModal } from "../../hooks/useModal";

export function useSignup() {
  const { dispatch } = useModal();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: (info) => signupApi(info),
    onSuccess: (accessToken) => {
      setAccessToken(accessToken);
      toast.success("ลงทะเบียนสำเร็จ");
      dispatch({ type: "close" });
    },
    onError: () => {
      toast.error("เกิดปัญหาในการลงทะเบียน กรุณาลองใหม่อีกครั้ง");
    },
  });

  return { signup, isLoading };
}
