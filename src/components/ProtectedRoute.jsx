import { useEffect } from "react";
import { useUser } from "../features/auth/useUser";
import { useModal } from "../hooks/useModal";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { dispatch } = useModal();
  const { isLogin, user } = useUser();
  console.log(isLogin);
  console.log(user?.data);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/");
      dispatch({ type: "login" });
    }
  }, [dispatch, navigate, isLogin]);
  return children;
}

export default ProtectedRoute;
