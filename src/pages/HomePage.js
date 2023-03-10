import { Container, Row, Col } from 'reactstrap';
import FeaturedVideo from '../components/FeaturedVideo';
import HomeVid from '../app/video/home-vid.mp4';
import HomePagePoster from '../app/img/coast-looking-in16x9.JPG'
import HomePageLink from '../components/HomePageLink';
import CanonBeachSq from '../app/img/haystack-sq.jpg';
import LookingAtLake from '../app/img/bh-looking-at-lake.jpg';
import IndianBeach from '../app/img/indian-beach-vid-sq.png';
import AnimatedHomePageLink from '../components/AnimatedHomePageLink';

const HomePage = () => {
  return (
    <>
      <FeaturedVideo video={HomeVid} poster={HomePagePoster} />
      <Container className='mt-3'>
        <h1 className='text-center pageTitle'>Brittany Herzog Photography</h1>
        <hr />
        <p className='text-center textContent'><em><strong>Welcome to the official home of Brittany Herzog Photography</strong></em>. </p>
        <p className='text-center textContent'>
          Brittany specializes in capturing the natural beauty of the Pacific Northwest through both landscape photography and drone footage. From the Oregon Coast to the Cascade Mountains, she is always seeking out the next breathtaking view. To be safe, she is usually accompanied by two terrifying guard dogs and her ruggedly-handsome husband, Jake.
        </p>
        <Row>
          <Col md='4'>
              <AnimatedHomePageLink
                alt='Canon beach photo'
                title='Landscapes'
                img={CanonBeachSq}
                path='/landscape'
              />          
          </Col>
          <Col md='4'>
              <AnimatedHomePageLink
                alt='Brittany looking out over lake'
                title='About Me'
                img={LookingAtLake}
                path='/about'
              />          
          </Col>
          <Col md='4'>
              <AnimatedHomePageLink
                alt='Canon beach photo'
                title='Landscapes'
                img={IndianBeach}
                path='/landscape'
              />          
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomePage;