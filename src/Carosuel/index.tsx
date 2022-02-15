import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { GrNext, GrPrevious } from "react-icons/gr";
import Prev from '../image/prev.svg'
import Next from '../image/next.svg'


import "./Carousel.css";



type MyComponentProps = React.PropsWithChildren<{
    children: any,
    width: any
}>;

export const CarouselItem = ({ children, width }: MyComponentProps) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = ({ children }: MyComponentProps) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex: any) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 3000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1)
    });

    return (
        <div
            {...handlers}
            className="carousel p-3"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
           
        >


            <div className="controls flex justify-around">

                <div className="">
                    <h1 className="text-black text-5xl">
                        Infiniti Renault
                        <sup className="text-xl mt-10">
                            TM
                        </sup>
                    </h1>


                </div>

                <div className="indicators mb-10 flex space-x-5">
                    <button
                        onClick={() => {
                            updateIndex(activeIndex - 1);
                        }}

                        className="bg-[#FEFEFF] shadow-zinc-500 flex items-center justify-center  text-[#9BA6B2] text-xl shadow-2xl  w-14 h-14 p-3 rounded-xl "
                    >
                        {/* <GrPrevious  />
                        
                        */}

                        <img src={Prev} alt="logo" />

                        {/* &#60; */}
                    </button>

                    <button
                        onClick={() => {
                            updateIndex(activeIndex + 1);
                        }}
                        className="bg-[#FEFEFF] shadow-zinc-500 shadow-2xl flex items-center justify-center w-14 h-14 p-3 rounded-xl  "

                    >
                        {/* <GrNext className="text-[#9BA6B2] icon " /> */}


                        {/* &#62; */}


                        <img src={Next} alt="logo" />
                    </button>
                </div>

            </div>



            <div
                className="inner"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>

        </div>
    );
};

export default Carousel;
