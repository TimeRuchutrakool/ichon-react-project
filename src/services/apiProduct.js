import axios from "../config/axios";

export const searchProduct = async (searchedTitle, sortBy, page) => {
  const res = await axios.get(
    `/api/product/${searchedTitle}?sortBy=${sortBy}&page=${page}`
  );
  return res.data
};
