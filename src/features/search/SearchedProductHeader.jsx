import styled from "styled-components";
import Dropdown from "../../components/Dropdown";
import DropdownItem from "../../components/DropdownItem";
import { useState } from "react";
import { useSort } from "../../hooks/useSort";
import { sortOptions } from "../../utils/constant";
import { useSearchParams } from "react-router-dom";

const SearchedProductHeaderStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4rem 0;
`;
const HeaderContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const SortStyled = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  font-size: var(--font-size-xsm);
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

const DropdownBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 12rem;
`;

function SearchedProductHeader() {
  const [searchParams, setSearchedParams] = useSearchParams();
  const [showDropdown, setShowDropdown] = useState(false);
  const { selected, setSelected } = useSort();
  return (
    <SearchedProductHeaderStyled>
      <HeaderContainer>
        <div>
          <SearchedProductTitle>iPad</SearchedProductTitle>
          <SmallLabelStyled>4 รายการ</SmallLabelStyled>
        </div>

        <SortStyled>
          <SmallLabelStyled>เรียงตาม:</SmallLabelStyled>
          <Dropdown
            trigger={
              <DropdownBox>
                <span>{sortOptions[selected].label}</span>
                {showDropdown ? (
                  <span className="material-symbols-outlined">expand_less</span>
                ) : (
                  <span className="material-symbols-outlined">expand_more</span>
                )}
              </DropdownBox>
            }
            showDropdown={showDropdown}
            setShowDropdown={setShowDropdown}
          >
            {sortOptions.map((option, index) => (
              <DropdownItem
                key={option.value}
                onClick={() => {
                  searchParams.set("sortBy", sortOptions[selected].value);
                  setSearchedParams(searchParams);
                  setSelected(index);
                }}
              >
                {option.label}
              </DropdownItem>
            ))}
          </Dropdown>
        </SortStyled>
      </HeaderContainer>
    </SearchedProductHeaderStyled>
  );
}

export default SearchedProductHeader;
