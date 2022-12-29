import { Row, Col } from 'reactstrap';
import { selectAllLandscapes } from './landscapeSlice';

const landscapes = selectAllLandscapes();

const LandscapeList = () => {
  return (
    <Row className='align-items-center'>
        {
            landscapes.map((landscape) => {
                return (
                    <Col
                        key={landscape.id}
                        sm='6'
                        lg='3'
                    >
                        <img 
                            className='galleryImg w-100' 
                            src={landscape.image} 
                            alt={landscape.description}
                        />
                    </Col>
                )
            })
        }
    </Row>
  )
}

export default LandscapeList