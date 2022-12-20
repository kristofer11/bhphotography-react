import { Container } from "reactstrap";

const FeaturedVideo = ({ video, poster }) => {
  return (
    <Container>
        <video className='mt-2' src={video} width='100%' autoPlay muted playsInline loop poster={poster}></video>
    </Container>   
  )
}

export default FeaturedVideo


