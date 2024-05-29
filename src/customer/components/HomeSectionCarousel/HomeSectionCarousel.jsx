import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const HomeSectionCarousel = ({data,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);
    const items = data.slice(0, 10).map((item) => <HomeSectionCard key={item.id} product={item} />);

    const responsive = {
        0: { items: 1 },
        400: { items: 2 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    return (
        <div className="relative px-4 lg:px-8">
            <h2 className="text-2xl text-gray-00 font-bold text-center py-5">{sectionName}</h2>
            <div className="relative p-5 border">
                <Button
                    variant="contained"
                    className="z-50"
                    onClick={slidePrev}
                    sx={{ position: 'absolute', top: "8rem", left: "-4rem", transform: "translateX(50%) rotate(90deg)" }}
                    aria-label="previous"
                    disabled={activeIndex === 0}
                >
                    <KeyboardArrowRightIcon sx={{ transform: "rotate(90deg)" }} />
                </Button>
                <AliceCarousel
                    ref={carouselRef}
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    infinite={false}
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                <Button
                    variant="contained"
                    className="z-50"
                    onClick={slideNext}
                    sx={{ position: 'absolute', top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)" }}
                    aria-label="next"
                    disabled={activeIndex >= items.length - 5}
                >
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
                </Button>
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
