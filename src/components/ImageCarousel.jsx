import styled from "styled-components";

import { useState } from "react";

const ImageCarouselStyled = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  
`;

const ImageContainer = styled.div`
  width: ${(props) => props.$imageLength * 100}vw;
  display: inline-block;
`;

const Image = styled.img`
  width: 100vw;
  position: relative;
  transition: all 0.5s;
  transform: ${(props) => `translateX(${-props.$currentImage * 100}%)`};
`;

const ImageButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  border-radius: 0.5rem;
  background-color: transparent;
  cursor: pointer;
  & span {
    color: var(--color-black-900);
    font-size: var(--font-size-xl);
  }
`;
const NextButton = styled(ImageButton)`
  right: 0;
`;
const PreviousButton = styled(ImageButton)`
  left: 0;
`;

function ImageCarousel({ contents }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((cur) => (cur + 1) % contents.length);
  };

  const handlePreviousImage = () => {
    setCurrentImage((cur) => (cur - 1 + contents.length) % contents.length);
  };

  return (
    <ImageCarouselStyled>
      <ImageContainer $imageLength={contents.length}>
        {contents.map((content) => (
          <Image
            key={content.id}
            src={content.imageUrl}
            $currentImage={currentImage}
            alt="promotion"
          />
        ))}
      </ImageContainer>

      <PreviousButton onClick={handlePreviousImage}>
        <span className="material-symbols-outlined">chevron_left</span>
      </PreviousButton>

      <NextButton onClick={handleNextImage}>
        <span className="material-symbols-outlined">chevron_right</span>
      </NextButton>
    </ImageCarouselStyled>
  );
}

export default ImageCarousel;
