import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import {mainCarouselData} from "./MainCarouselData";
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
    const items = mainCarouselData.map((item) => <img className="cursor-pointer object-cover object-top" role ="presentation" src = {item.image} alt=""/>)

  return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        animationType='fadeout'
        infinite
    />
  )
}

export default MainCarousel