import axios from "../config/axios";

export const getCart = async () => {
  const res = await axios.get("/api/cart");
  return res.data;
};

export const addToCart = async (productId, quantity) => {
  const res = await axios.patch(`/api/cart/add/${productId}/${quantity}`);
  return res.data;
};

export const removeFromCart = async (productId, quantity) => {
  const res = await axios.patch(`/api/cart/remove/${productId}/${quantity}`);
  return res.data;
};

export const deleteCart = async (productId) => {
  const res = await axios.delete(`/api/cart/delete/${productId}`);
  return res.data;
};

