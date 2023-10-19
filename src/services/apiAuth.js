import axios from "../config/axios";
import { removeAccessToken } from "../utils/token";

export const getCurrentUser = async (token) => {
  if (token) {
    const res = await axios.get("/api/auth/me");
    return res.data;
  }
  return null;
};

export const login = async (credential) => {
  const res = await axios.post("/api/auth/login", credential);
  return res.data.data.accessToken;
};

export const signup = async (info) => {
  const res = await axios.post(`/api/auth/signup`, info);
  return res.data.data.accessToken;
};
export const signupForAdmin = async (info) => {
  const res = await axios.post(`/api/auth/signupAdmin`, info);
  return res.data.data.accessToken;
};

export const logout = () => {
  removeAccessToken();
};

export const editUser = async (infoToBeUpdated) => {
  const res = await axios.patch("/api/auth/edit", infoToBeUpdated);
  return res.data;
};

export const adminSignup = async (data) => {
  const res = await axios.post("/api/admin/signup", data);
  return res.data;
};
