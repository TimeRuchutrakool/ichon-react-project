import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editUser as editUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useEditProfile() {
  const queryClient = useQueryClient();
  const { mutate: editUser, isLoading } = useMutation({
    mutationFn: (info) => editUserApi(info),
    onSuccess: () => {
      toast.success("แก้ไขข้อมูลสำเร็จ");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: () => {
      toast.error("แก้ไขข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    },
  });

  return { editUser, isLoading };
}
