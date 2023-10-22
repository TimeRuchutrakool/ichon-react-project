import styled from "styled-components";
import ProductsCarousel from "./ProductsCarousel";

import { SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import Heading from "../../components/Heading";
import { useProductList } from "./useProductList";
const ProductsViewStyled = styled.div`
  margin: 10rem 3rem;
`;

function ProductsView({ view }) {
  const { products } = useProductList(view.view);

  return (
    <ProductsViewStyled>
      <Heading as="h1">{view.headerTitle}</Heading>
      <ProductsCarousel
        products={products}
        slidesPerView={5}
        render={(product) => (
          <SwiperSlide
            key={product.id}
            className="swiper-slide-products"
          >
            <ProductCard product={product} />
          </SwiperSlide>
        )}
      />
    </ProductsViewStyled>
  );
}

export default ProductsView;
