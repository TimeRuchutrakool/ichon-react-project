import axios from "../config/axios";

export const createOrder = async (image) => {
  const res = await axios.post("/api/order/create", image);
  return res.data;
};

export const getOrders = async () => {
  const res = await axios.get("/api/order");
  return res.data;
};
