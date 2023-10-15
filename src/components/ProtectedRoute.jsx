import { useUser } from "../features/auth/useUser";
import { useNavigate } from "react-router-dom";
import { useModal } from "../hooks/useModal";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { user } = useUser();
  const { dispatch } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.data) {
      navigate("/");
      dispatch({ type: "login" });
    } else if (user?.data.role === "ADMIN") {
      navigate("/admin", { replace: false });
    }
  }, [dispatch, navigate, user?.data]);
  if (user?.data) return children;
}

export default ProtectedRoute;
