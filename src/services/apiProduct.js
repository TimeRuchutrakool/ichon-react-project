import axios from "../config/axios";

export const searchProduct = async (searchedTitle, sortBy, page) => {
  const res = await axios.get(
    `/api/product/searchedTitle/${searchedTitle}?sortBy=${sortBy}&page=${page}`
  );
  return res.data;
};

export const getProduct = async (productId) => {
  const res = await axios.get(`/api/product/productId/${productId}`);
  return res.data;
};
