import axios from "../config/axios";
import { PAGE_SIZE } from "../utils/constant";

export const searchProduct = async (searchedTitle, sortBy, page) => {
  const res = await axios.get(
    `/api/product/searchedTitle/${searchedTitle}?productPerPage=${PAGE_SIZE}&sortBy=${sortBy}&page=${page}`
  );
  return res.data;
};

export const getProduct = async (productId) => {
  const res = await axios.get(`/api/product/productId/${productId}`);
  return res.data;
};

export const getCategories = async () => {
  const res = await axios.get("/api/product/categories");
  return res.data;
};

export const getProductList = async (path) => {
  const res = await axios.get(`/api/product/${path}`);
  return res.data;
};
