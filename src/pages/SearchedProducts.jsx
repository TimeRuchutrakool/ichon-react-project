import { useState } from "react";
import SearchedProductHeader from "../features/search/SearchedProductHeader";

function SearchedProducts() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <SearchedProductHeader
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
      />
    </>
  );
}

export default SearchedProducts;
