import { Container, Row, Col } from "reactstrap";

const FeaturedVideo = ({ video, poster }) => {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xl='9'>
                <video className='mt-2' src={video} width='100%' height='100%' autoPlay muted playsInline loop poster={poster}></video>
        </Col>
      </Row>
    </Container>   
  )
}

export default FeaturedVideo


