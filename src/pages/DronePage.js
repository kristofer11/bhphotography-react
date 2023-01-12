import { Container, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { useState } from 'react';
import FeaturedVideo from '../components/FeaturedVideo';
import MainDroneVideo from '../app/video/drone-page-main-vid.mp4';
import DronePagePoster from '../app/img/mountain-drone-poster.png';
import DroneThumbnail from '../components/DroneThumbnail';
import { DRONE_VIDEOS } from '../app/shared/DRONE_VIDEOS';
import IndianBeachThumbnail from '../app/img/indian-beach-vid.png';
import PacificThumbnail from '../app/img/pacific-vid.png';
import FallThumbnail from '../app/img/fall-vid.png';
import BarclayThumbnail from '../app/img/barclay-vid.png';
import SkykomishThumbnail from '../app/img/skykomish-vid.png';
import SpringThumbnail from '../app/img/spring-vid.png';

const DronePage = (id) => {
  const videos = DRONE_VIDEOS;

  const [currentVideoId, setCurrentVideoId] = useState(null);
  const [modalVideo, setModalVideo] = useState(null);

  const handleModalOpen = (id) => {
    setCurrentVideoId(id);
    console.log(currentVideoId);
    setModalVideo(videos[id].source);
  }

  const handleClose = () => setCurrentVideoId(null);

  return (
    <Container className='droneContainer'>
      <h1 className='text-center pageTitle'>Drone Video</h1>
      <Row>
        <Col>
          <FeaturedVideo className='drone-main-vid' id='0' video={MainDroneVideo} poster={DronePagePoster} />
        </Col>
      </Row>
      <hr />
      <p className='textContent'>Choose a video below or visit <a href='https://www.youtube.com/channel/UCVhJ3Q_sspghQcEg1dQxMag'>Brittany's YouTube Channel</a>.</p>
      <Row>
        <Col md='6' lg='4' className='mt-2' id='0' onClick={() => handleModalOpen(0)}>
          <DroneThumbnail thumbnail={IndianBeachThumbnail} />
        </Col>
        <Col md='6' lg='4' className='mt-2' onClick={() => handleModalOpen(1)}>
          <DroneThumbnail thumbnail={PacificThumbnail} />

        </Col>
        <Col md='6' lg='4' className='mt-2' onClick={() => handleModalOpen(2)}>
          <DroneThumbnail thumbnail={FallThumbnail} />

        </Col>
        <Col md='6' lg='4' className='mt-2' onClick={() => handleModalOpen(3)}>
          <DroneThumbnail thumbnail={BarclayThumbnail} />

        </Col>
        <Col md='6' lg='4' className='mt-2' onClick={() => handleModalOpen(4)}>
          <DroneThumbnail thumbnail={SkykomishThumbnail} />
        </Col>
        <Col md='6' lg='4' className='mt-2' onClick={() => handleModalOpen(5)}>
          <DroneThumbnail thumbnail={SpringThumbnail} />
        </Col>
      </Row>
      <div className='modalDiv' onClick={() => handleClose()}>
        {(currentVideoId != null) && (
          <Modal isOpen='true' className='droneModal' backdrop={true} >     
            <div className='closeButtonDiv'><span className='modalCloseButton' onClick={() => handleClose()}>🆇</span> </div>
            <ModalBody className='droneModalBody'>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  // width='560'
                  // height='315'
                  className='modalVideo'
                  src={modalVideo} title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                >
                </iframe>
              </div>
            </ModalBody>
          </Modal>
        )}
      </div>

    </Container>
  )
}

export default DronePage