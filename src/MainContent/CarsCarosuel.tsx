import Carousel, { CarouselItem } from "../Carosuel";
import Car from '../image/Car.png'

export default function CarCarousel() {
    return (
        <div className=" ">
            <Carousel>

                <CarouselItem>



                    <img src={Car} alt="car" />
                </CarouselItem>
                <CarouselItem>



                    <img src={Car} alt="car" />
                </CarouselItem>
                <CarouselItem>



                    <img src={Car} alt="car" />
                </CarouselItem>
                <CarouselItem>



                    <img src={Car} alt="car" />
                </CarouselItem>
            </Carousel>
        </div>
    );
}
