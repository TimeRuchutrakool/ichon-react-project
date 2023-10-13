import axios from "../config/axios";

export const getCurrentUser = async () => {
  const res = await axios.get("/api/auth/me");
  return res.data;
};

export const login = async (credential) => {
  const res = await axios.post("/api/auth/login", credential);
  return res.data.data.accessToken;
};
