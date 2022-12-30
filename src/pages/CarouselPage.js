import LandscapeCarousel from "../features/landscape/LandscapeCarousel";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const CarouselPage = () => {
  return (
    <Modal open>
        <ModalBody>
            <LandscapeCarousel />
        </ModalBody>
    </Modal>

    )
}

export default CarouselPage