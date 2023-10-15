import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { setAccessToken } from "../../utils/token";
import { useModal } from "../../hooks/useModal";

export function useLogin() {
  const { dispatch } = useModal();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: (credential) => loginApi(credential),
    onSuccess: (accessToken) => {
      setAccessToken(accessToken);
      toast.success("เข้าสู่ระบบสำเร็จ");
      dispatch({ type: "close" });
    },
    onError: () => {
      toast.error("อีเมล หรือรหัสผ่านไม่ถูกต้อง");
    },
  });
  return { isLoading, login };
}
