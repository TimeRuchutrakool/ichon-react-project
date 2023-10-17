import axios from "../config/axios";

export const createOrder = async (image) => {
  const res = await axios.post("/api/order/create", image);
  return res.data;
};
