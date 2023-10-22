import SearchedProductHeader from "../features/search/SearchedProductHeader";
import SearchedProductBody from "../features/search/SearchedProductBody";
import SearchedProductFooter from "../features/search/SearchedProductFooter";
import { useSearch } from "../features/search/useSearch";
import Spinner from "../components/Spinner";
import NullHandling from "../components/NullHandling";

function SearchedProducts() {
  const { isLoading, products } = useSearch();
  if (isLoading || !products) return <Spinner />;
  if (products.count === 0)
    return <NullHandling>ไม่พบผลลัพธ์ที่ท่านค้นหา</NullHandling>;
  return (
    <>
      <SearchedProductHeader count={products.count} />
      <SearchedProductBody products={products.products} />
      <SearchedProductFooter count={products.count} />
    </>
  );
}

export default SearchedProducts;
