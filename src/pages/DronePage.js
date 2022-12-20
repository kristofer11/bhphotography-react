import { Container } from 'reactstrap';
import FeaturedVideo from '../components/FeaturedVideo';
import MainDroneVideo from '../app/video/drone-page-main-vid.mp4'
import DronePagePoster from '../app/img/mountain-drone-poster.png'

const DronePage = () => {
  return (
    <Container>
        <h1>Drone Video</h1>
        <FeaturedVideo video={MainDroneVideo} poster={DronePagePoster}/>
    </Container>
  )
}

export default DronePage