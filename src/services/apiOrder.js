import axios from "../config/axios";

export const createOrder = async (image) => {
  const res = await axios.post("/api/order/create", image);
  return res.data;
};

export const getOrders = async () => {
  const res = await axios.get("/api/order");
  return res.data;
};

export const getOrdersForAdmin = async (statusId) => {
  const res = await axios.get(`/api/order/admin?statusId=${statusId}`);
  return res.data;
};

export const updateOrderForAdmin = async ({ statusId, orderId }) => {
  const res = await axios.patch("/api/order/admin", { statusId, orderId });
  return res.data;
};
