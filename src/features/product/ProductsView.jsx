import styled from "styled-components";
import ProductsHeader from "./ProductsHeader";
import ProductsCarousel from "./ProductsCarousel";

import { SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import { mockProductsCarousel } from "../../data/mockData";
const ProductsViewStyled = styled.div`
  margin: 10rem 3rem;
`;

function ProductsView({ view }) {
  //
  // TODO เดี๋ยวให้ View มันรับเอา api ที่จะยิงไปหา path backend แบบ top-sales แล้วก็ new-arrival ต่างกันที่ตรงนี้ตรงอื่นเหมือนเดิม
  // const [page,setPage] = useState(0)

  const products = mockProductsCarousel;

  return (
    <ProductsViewStyled>
      <ProductsHeader headerTitle={view.headerTitle} />
      <ProductsCarousel
        products={products}
        slidesPerView={5}
        render={(product) => (
          <SwiperSlide
            key={product.productId}
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
