import { SwiperSlide } from "swiper/react";
import ProductsCarousel from "./ProductsCarousel";

import { useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  cursor: pointer;
  max-width: 10rem;
  margin: 0.5rem;
  border: ${(props) =>
    props.$isSelected ? "0.2rem solid var(--color-yellow-600)" : null};
`;

const SelectedImage = styled.img`
  width: 70%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

function ProductDetailImages({images}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const handleSelectImage = (index) => {
    setSelectedImage(index);
  };
  return (
    <>
      <SelectedImage src={images[selectedImage].imageUrl} />
      <ProductsCarousel
        products={images}
        slidesPerView={4}
        showButton={false}
        render={(image, index) => (
          <SwiperSlide key={index} className="swiper-slide-product-image">
            <Image
              src={image.imageUrl}
              onClick={handleSelectImage.bind(null, index)}
              $isSelected={selectedImage === index}
            />
          </SwiperSlide>
        )}
      />
    </>
  );
}

export default ProductDetailImages;
