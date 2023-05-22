import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Home = () => {
  return (
    <div>Home
      <Carousel
      infiniteLoop
      autoPlay
      showStatus={false}
      interval={2000}
      showThumbs={false}
      >
        

      </Carousel>
    </div>
  )
}
