import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Keyboard } from "swiper/modules";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const ProductsCarouselContainer = styled.div`
  width: 100%;
`;

const PaginationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  border: none;
  border-radius: 0.5rem;
  background-color: var(--color-gray-500);
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

function ProductsCarousel({products}) {

  return (
    <ProductsCarouselContainer>
      <Swiper
        slidesPerView={5}
        centeredSlides={false}
        keyboard={{
          enabled: true,
        }}
        modules={[Keyboard]}
        className="swiper"
      >
        {products.map((value) => (
          <SwiperSlide key={value}>
            <ProductCard product={value} />
          </SwiperSlide>
        ))}
        <NextButton>
          <span className="material-symbols-outlined">chevron_right</span>
        </NextButton>
        <PreviousButton>
          <span className="material-symbols-outlined">chevron_left</span>
        </PreviousButton>
      </Swiper>
    </ProductsCarouselContainer>
  );
}

export default ProductsCarousel;
