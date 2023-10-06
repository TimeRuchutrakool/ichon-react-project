import styled from "styled-components";

import { mockImagesCarousel } from "../data/mockData";
import { useState } from "react";

const ImageCarouselStyled = styled.div`
  width: 100%;
  overflow: hidden;
  /* เอา flex ออกจัด layout ใหม่ */
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
  position: relative;
  transition: all 0.5s;
  transform-origin: top left;
  transform: ${(props) =>
    `translateX(${(props.$index - props.$currentImage) * 100}%)`};
`;

const ImageButton = styled.button`
  position: absolute;
`;
const NextButton = styled(ImageButton)`
  right: 0;
`;
const PreviousButton = styled(ImageButton)`
  left: 0;
`;

function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = mockImagesCarousel;

  const handleNextImage = () => {
    if (currentImage >= images.length) return;
    setCurrentImage((cur) => cur + 1);
  };

  const handlePreviousImage = () => {
    if (currentImage === 0) return;
    setCurrentImage((cur) => cur - 1);
  };

  return (
    <ImageCarouselStyled>
      {images.map((image, index) => {
        // console.log(index);
        return (
          <Image
            key={image.id}
            src={image.src}
            $index={index}
            $currentImage={currentImage}
            alt="promotion"
          />
        );
      })}
      {currentImage > 0 && (
        <PreviousButton onClick={handlePreviousImage}>
          <span className="material-symbols-outlined">chevron_left</span>
        </PreviousButton>
      )}

      <NextButton onClick={handleNextImage}>
        <span className="material-symbols-outlined">chevron_right</span>
      </NextButton>
    </ImageCarouselStyled>
  );
}

export default ImageCarousel;
