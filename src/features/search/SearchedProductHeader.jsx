import styled from "styled-components";
import Dropdown from "../../components/Dropdown";
import DropdownItem from "../../components/DropdownItem";

const SearchedProductHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: self-start;
`;

const SortStyled = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
`;

const SearchedProductTitle = styled.h1`
  font-size: var(--font-size-m);
  font-weight: var(--font-weight-medium);
`;
const SmallLabelStyled = styled.span`
  font-size: var(--font-size-xsm);
  font-weight: var(--font-weight-light);
  color: var(--color-gray-800);
`;

function SearchedProductHeader({ showDropdown, setShowDropdown }) {
  return (
    <SearchedProductHeaderStyled>
      <div>
        <SearchedProductTitle>iPad</SearchedProductTitle>
        <SmallLabelStyled>4 รายการ</SmallLabelStyled>
      </div>

      <SortStyled>
        <SmallLabelStyled>เรียงตาม:</SmallLabelStyled>
        <Dropdown
          trigger={<button>Dropdown</button>}
          showDropdown={showDropdown}
          setShowDropdown={setShowDropdown}
        >
          <DropdownItem>A</DropdownItem>
          <DropdownItem>B</DropdownItem>
          <DropdownItem>C</DropdownItem>
        </Dropdown>
      </SortStyled>
    </SearchedProductHeaderStyled>
  );
}

export default SearchedProductHeader;
