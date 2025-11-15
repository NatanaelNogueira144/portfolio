import { Button, CarouselContainer, Dot, Image, ImageWrapper, Indicators } from "./styles";
import { useState } from "react";

interface CarouselProps {
    images: string[];
}

export default function Carousel({ images }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);

    const goToNext = () => setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);;

    return (
        <CarouselContainer>
            <Button left onClick={goToPrevious}>◀</Button>
            <ImageWrapper>
                <Image src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} />
            </ImageWrapper>
            <Button onClick={goToNext}>▶</Button>
            <Indicators>
                {images.map((_, index) => (
                    <Dot
                        key={index}
                        active={index === currentIndex}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </Indicators>
        </CarouselContainer>
    );
};