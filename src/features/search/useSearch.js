import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { searchProduct } from "../../services/apiProduct";

export function useSearch() {
  const { searchedTitle } = useParams();
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const page = searchParams.get("page");

  const { isLoading, data: products } = useQuery({
    queryKey: ["products", sortBy, page, searchedTitle],
    queryFn: () => searchProduct(searchedTitle, sortBy, page),
  });

  return { isLoading, products };
}
