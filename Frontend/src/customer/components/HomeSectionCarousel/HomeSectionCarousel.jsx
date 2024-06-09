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
        0: {
            items: 1.5,
            itemsFit: "contain",
          },
          568: {
            items: 2.5,
            itemsFit: "contain",
          },
          820: {
            items: 4,
            itemsFit: "contain",
          },
          1024: {
            items: 5.5,
            itemsFit: "contain",
          },
    };

    const getVisibleItemsCount = () => {
        const width = window.innerWidth;
        if (width >= 1024) return 5.5;
        if (width >= 820) return 4;
        if (width >= 568) return 2.5;
        return 2;
    }

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
                    disabled={activeIndex >= items.length - getVisibleItemsCount()}
                >
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
                </Button>
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
