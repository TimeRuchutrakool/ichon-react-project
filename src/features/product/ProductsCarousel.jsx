import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, useSwiper } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";

import styled from "styled-components";

const PaginationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--color-gray-500);
  opacity: 0.5;
  cursor: pointer;
  padding: 2rem 0;
  & span {
    color: var(--color-black-900);
    font-size: var(--font-size-l);
  }
`;

const NextButtonStyled = styled(PaginationButton)`
  right: 0;
`;
const PreviousButtonStyled = styled(PaginationButton)`
  left: 0;
`;

function NextButton({ children }) {
  const swiper = useSwiper();
  return (
    <NextButtonStyled onClick={() => swiper.slideNext()}>
      {children}
    </NextButtonStyled>
  );
}
function PreviousButton({ children }) {
  const swiper = useSwiper();
  return (
    <PreviousButtonStyled onClick={() => swiper.slidePrev()}>
      {children}
    </PreviousButtonStyled>
  );
}

function ProductsCarousel({
  products,
  render,
  slidesPerView,
  showButton = true,
}) {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      centeredSlides={false}
      freeMode={true}
      mousewheel={true}
      rewind={true}
      modules={[FreeMode, Mousewheel]}
      className="swiper"
    >
      {products?.map(render)}
      {showButton && (
        <>
          <NextButton>
            <span className="material-symbols-outlined">chevron_right</span>
          </NextButton>
          <PreviousButton>
            <span className="material-symbols-outlined">chevron_left</span>
          </PreviousButton>
        </>
      )}
    </Swiper>
  );
}

export default ProductsCarousel;
