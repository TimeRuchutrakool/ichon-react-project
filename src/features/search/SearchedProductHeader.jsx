import styled from "styled-components";
import Dropdown from "../../components/Dropdown";
import DropdownItem from "../../components/DropdownItem";
import { useState } from "react";
import { sortOptions } from "../../utils/constant";
import { useParams, useSearchParams } from "react-router-dom";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import { useSort } from "../../hooks/useSort";

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

const DropdownBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 12rem;
`;

function SearchedProductHeader({ count }) {
  const sorts = sortOptions;
  const [showDropdown, setShowDropdown] = useState(false);
  const { searchedTitle } = useParams();
  const [searchParams, setSearchedParams] = useSearchParams();
  const { sortIndex, setSortIndex } = useSort();

  return (
    <SearchedProductHeaderStyled>
      <HeaderContainer>
        <div>
          <Heading as="h4">{searchedTitle}</Heading>
          <Paragraph $subheader={true} $small={true}>
            {count} รายการ
          </Paragraph>
        </div>

        <SortStyled>
          <Paragraph $subheader={true} $small={true}>
            เรียงตาม:
          </Paragraph>
          <Dropdown
            trigger={
              <DropdownBox>
                <span>{sorts[sortIndex].label}</span>
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
            {sorts.map((option) => (
              <DropdownItem
                key={option.id}
                onClick={() => {
                  setSortIndex(option.id);
                  searchParams.set("sortBy", option.value);
                  setSearchedParams(searchParams);
                }}
              >
                <span>{option.label}</span>
              </DropdownItem>
            ))}
          </Dropdown>
        </SortStyled>
      </HeaderContainer>
    </SearchedProductHeaderStyled>
  );
}

export default SearchedProductHeader;
