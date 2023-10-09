import styled from "styled-components";
import Pagination from "../../components/Pagination";


const SearchedProductBodyStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const PaginationContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: end;
`

function SearchedProductFooter() {
  return (
    <SearchedProductBodyStyled>
        <PaginationContainer>

      <Pagination count={40}/>
        </PaginationContainer>
    </SearchedProductBodyStyled>
  );
}

export default SearchedProductFooter;
