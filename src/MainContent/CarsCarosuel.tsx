import Carousel, { CarouselItem } from "../Carosuel";
import Car from '../image/Car.png'

export default function CarCarousel() {
    return (
        <div className=" flex-1">
            <Carousel>
                <CarouselItem>Item 1</CarouselItem>
                <CarouselItem>Item 2</CarouselItem>
                <CarouselItem>Item 3</CarouselItem>
            </Carousel>
        </div>
    );
}
