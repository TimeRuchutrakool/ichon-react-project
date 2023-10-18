import SearchedProductHeader from "../features/search/SearchedProductHeader";
import SearchedProductBody from "../features/search/SearchedProductBody";
import SearchedProductFooter from "../features/search/SearchedProductFooter";
import { useSearch } from "../features/search/useSearch";
import Spinner from "../components/Spinner";
import NullHandling from "../components/NullHandling";

function SearchedProducts() {
  const { isLoading, products } = useSearch();
  if (isLoading) return <Spinner />;
  if (products?.data.count === 0)
    return <NullHandling>ไม่พบผลลัพธ์ที่ท่านค้นหา</NullHandling>;
  return (
    <>
      <SearchedProductHeader count={products?.data.count} />
      <SearchedProductBody products={products?.data.products} />
      <SearchedProductFooter count={products?.data.count} />
    </>
  );
}

export default SearchedProducts;
