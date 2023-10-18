import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";
import { getAccessToken } from "../../utils/token";

export function useUser() {
  const token = getAccessToken();
  const { isLoading, data: user } = useQuery({
    queryKey: ["user", token],
    queryFn: () => getCurrentUser(token),
    retry: false,
  });

  return {
    isLoading,
    user: user?.data,
  };
}
