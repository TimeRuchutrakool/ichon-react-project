import SearchedProductHeader from "../features/search/SearchedProductHeader";
import SearchedProductBody from "../features/search/SearchedProductBody";
import SearchedProductFooter from "../features/search/SearchedProductFooter";
import { useSearch } from "../features/search/useSearch";
import Spinner from "../components/Spinner";

function SearchedProducts() {
  const { isLoading, products } = useSearch();
  console.log(products?.data);
  if (isLoading) return <Spinner />;
  return (
    <>
      <SearchedProductHeader count={products?.data.count} />
      <SearchedProductBody products={products?.data.products}/>
      <SearchedProductFooter count={products?.data.count}/>
    </>
  );
}

export default SearchedProducts;
