import axios from "../config/axios";

export const getCart = async () => {
  const res = await axios.get("/api/cart");
  return res.data;
};

export const addToCart = async (productId, quantity) => {
  const path = quantity
    ? `/api/cart/add?productId=${productId}&quantity=${quantity}`
    : `/api/cart/add?productId=${productId}`;
  const res = await axios.patch(path);
  return res.data;
};

export const removeFromCart = async (productId) => {
  const res = await axios.patch(`/api/cart/remove?productId=${productId}`);
  return res.data;
};

export const deleteCart = async (productId) => {
  const res = await axios.delete(`/api/cart/delete/${productId}`);
  return res.data;
};
