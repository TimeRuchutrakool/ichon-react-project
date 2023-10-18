import { useUser } from "../features/auth/useUser";
import { useNavigate } from "react-router-dom";
import { useModal } from "../hooks/useModal";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { user } = useUser();
  const { dispatch } = useModal();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
      dispatch({ type: "login" });
    } else if (user.role === "ADMIN") {
      navigate("/admin/home");
    }
  }, [dispatch, navigate, user]);

  if (user) return children;
}

export default ProtectedRoute;
