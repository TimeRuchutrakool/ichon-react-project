import SearchedProductHeader from "../features/search/SearchedProductHeader";
import { SortContextProvider } from "../context/SortContext";
import SearchedProductBody from "../features/search/SearchedProductBody";
import SearchedProductFooter from "../features/search/SearchedProductFooter";

function SearchedProducts() {
  return (
    <>
      <SortContextProvider>
        <SearchedProductHeader />
        <SearchedProductBody />
        <SearchedProductFooter />
      </SortContextProvider>
    </>
  );
}

export default SearchedProducts;
