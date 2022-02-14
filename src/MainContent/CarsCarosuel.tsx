import Carousel, { CarouselItem } from "../Carosuel";

export default function CarCarousel() {
    return (
        <div className="App">
            <Carousel>
                <CarouselItem>Item 1</CarouselItem>
                <CarouselItem>Item 2</CarouselItem>
                <CarouselItem>Item 3</CarouselItem>
            </Carousel>
        </div>
    );
}
