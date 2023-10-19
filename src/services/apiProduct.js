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

export const createProduct = async (info) => {
  const res = await axios.post("/api/product", info);
  return res.data;
};

export const getAllProducts = async () => {
  const res = await axios.get("/api/product/admin");
  return res.data;
};

export const editProduct = async (data) => {
  const res = await axios.patch("/api/product/admin", data);
  return res.data;
};

export const deleteProduct = async (productId) => {
  const res = await axios.delete(`/api/product/admin?productId=${productId}`);
  return res.data;
};
