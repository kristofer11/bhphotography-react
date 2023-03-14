import { Container, Row, Col } from "reactstrap";

const FeaturedVideo = ({ video, poster }) => {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xl='9'>
                <video className='my-2 featuredVideo' src={video} width='100%' height='100%' autoPlay  playsInline muted loop poster={poster}></video>
        </Col>
      </Row>
    </Container>   
  )
}

export default FeaturedVideo


