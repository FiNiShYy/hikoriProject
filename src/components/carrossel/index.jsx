import React, { useState } from "react";
import { CarouselContainer, Slide, Image, Button } from "./styles";

const Carousel = ({ images }) => {
  const [index, setIndex] = useState(0);

  const maxIndex = images.length - 1; // agora é imagem por imagem

  const prev = () => {
    setIndex(i => (i === 0 ? maxIndex : i - 1));
  };

  const next = () => {
    setIndex(i => (i === maxIndex ? 0 : i + 1));
  };

  return (
    <CarouselContainer>
      <Slide index={index}>
        {images.map((img, i) => (
          <Image src={img} alt={`slide-${i}`} key={i} draggable={false} />
        ))}
      </Slide>
      <Button onClick={prev}>&lt;</Button>
      <Button right onClick={next}>&gt;</Button>
    </CarouselContainer>
  );
};

export default Carousel;
