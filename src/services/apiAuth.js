import axios from "../config/axios";
import { removeAccessToken } from "../utils/token";

export const getCurrentUser = async () => {
  const res = await axios.get("/api/auth/me");
  return res.data;
};

export const login = async (credential) => {
  const res = await axios.post("/api/auth/login", credential);
  return res.data.data.accessToken;
};

export const signup =async (info)=>{
  const res = await axios.post('/api/auth/signup',info)
  return res.data.data.accessToken
}

export const logout = () => {
  removeAccessToken();
};
