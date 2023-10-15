import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { PAGE_SIZE } from "../utils/constant";

const PaginationStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-size-xsm);
  gap: 1rem;
`;

const PaginationButton = styled.button`
  background-color: transparent;
  color: var(--color-black-900);
  border: none;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s;
  cursor: pointer;
  &:hover:not(:disabled) {
    background-color: var(--color-yellow-600);
  }
  &:disabled{
    color:var(--color-gray-500)
  }
`;

const P = styled.p`
  background-color: var(--color-yellow-300);
  padding: 1rem;
  border-radius: 0.5rem;
`;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page") ? 1 : +searchParams.get("page");
  const pageCount = Math.ceil(count / PAGE_SIZE);
  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }
  return (
    <PaginationStyled>
      <PaginationButton disabled={currentPage === 1} onClick={prevPage}>
        <span className="material-symbols-outlined">chevron_left</span>
        <span>Previous</span>
      </PaginationButton>
      <P>{currentPage}</P>
      <PaginationButton disabled={currentPage === pageCount} onClick={nextPage}>
        <span>Next</span>
        <span className="material-symbols-outlined">chevron_right</span>
      </PaginationButton>
    </PaginationStyled>
  );
}

export default Pagination;
