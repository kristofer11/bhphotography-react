import Slider from 'react-touch-drag-slider'
import { selectAllLandscapes } from './landscapeSlice'
// import { Container } from 'reactstrap';
// import {
//     Carousel,
//     CarouselItem,
//     CarouselControl,
//     CarouselIndicators,
//     CarouselCaption
//   } from 'reactstrap';

const images = selectAllLandscapes();

const LandscapeCarousel = () => {
  return (
    <Slider
    onSlideComplete={(i) => {
      console.log('finished dragging, current slide is', i)
    }}
    onSlideStart={(i) => {
      console.log('started dragging on slide', i)
    }}
    activeIndex={0}
    threshHold={100}
    transition={0.5}
    scaleOnDrag={true}
  >
    {images.map(({ image, description }, id) => (
      <img src={image} key={id} alt={description} height='100%' />
    ))}
  </Slider>
  )
}

export default LandscapeCarousel