import axios from "axios";

export const addWish = async (productId) => {
  const res = await axios.post(`/api/wish/add?productId=${productId}`);
  return res.data;
};
export const removeWish = async (productId) => {
  const res = await axios.delete(`/api/wish/remove?productId=${productId}`);
  return res.data;
};
export const getWishlist = async () => {
  const res = await axios.get("/api/wish");
  return res.data;
};
