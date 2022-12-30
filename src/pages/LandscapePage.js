import { Container, Row, Col } from 'reactstrap';
import LandscapeList from '../features/landscape/LandscapeList';
import LandscapeMainImg from '../app/img/sunny-lake.jpg';
import LandscapeModal from '../features/landscape/LandscapeModal';
import { toggleModalDisplay } from '../features/landscape/landscapeSlice';
import LandscapeCarousel from '../features/landscape/LandscapeCarousel';

const LandscapePage = () => {
  return (
      <Container>
        <h1 className='text-center'>Landscape</h1>
        <Row>
          <img src={LandscapeMainImg} />
        </Row>
        <Row className='text-center'>
          <p>
          Images may only be used with permission. Please fill out the <a href='#'>contact form</a> to inquire about purchase.          
          </p>
        </Row>
        <LandscapeList />
        {/* <button onClick={toggleModalDisplay()}></button> */}
      </Container>  
  )
}

export default LandscapePage;