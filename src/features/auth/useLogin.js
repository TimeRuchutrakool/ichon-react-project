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
      toast.success("Login successfully.");
      dispatch({ type: "close" });
    },
    onError: () => {
      toast.error("Provided email or password are incorrect.");
    },
  });
  return { isLoading, login };
}
