import { Container, Row, Col } from 'reactstrap';
import LandscapeList from '../features/landscape/LandscapeList';
import LandscapeMainImg from '../app/img/sunny-lake.jpg';

const LandscapePage = () => {
  return (
      <Container>
        <h1 className='text-center pageTitle'>Landscape</h1>
        <Row className='justify-content-center'>
          <Col className="text-center">
             <img className='landscapeMain' src={LandscapeMainImg} />             
          </Col>
        </Row>
        <br />
        <hr />
        <Row className='text-center'>
          <p className='textContent'>
          Images may only be used with permission. Please fill out the <a href='#'>contact form</a> to inquire about purchase.          
          </p>
        </Row>
        <LandscapeList />
        {/* <button onClick={toggleModalDisplay()}></button> */}
      </Container>  
  )
}

export default LandscapePage;