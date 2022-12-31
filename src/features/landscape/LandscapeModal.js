const LandscapeModal = ({ clickedImage, handleRotationRight, setClickedImage, handleRotationLeft }) => {
    const handleClick = (e) => {
        if (e.target.classList.contains('dismiss')) {
            setClickedImage(null);
        }
    }

    return (
        <div className='overlay dismiss' onClick={handleClick}>
            <img src={clickedImage} alt={Image.description} />
            <span className='dismiss' onClick={handleClick}>X</span>
            <div onClick={handleRotationRight} className='overlay-arrows_right'>
                {' '}
                <div className='modalArrow'>⮕</div>
            </div>
            <div onClick={handleRotationLeft} className='overlay-arrows_left'>                    
                <div className='modalArrow'>⬅</div>
            </div>
        </div>
    )
}

<i class="fa-light fa-circle-arrow-right"></i>

export default LandscapeModal;
// import { selectAllLandscapes } from "./landscapeSlice";
// import {
//     Modal,
//     ModalHeader,
//     ModalBody,
//     FormGroup,
//     Label,
//     Button
// } from 'reactstrap';
// import beachPic from '../../app/img/beach-log.jpg';
// import LandscapeCarousel from "./LandscapeCarousel";

// const LandscapeModal = () => {
//   return (
//     <Modal>
//         <ModalHeader></ModalHeader>
//         <ModalBody>
//             <LandscapeCarousel />
//         </ModalBody>
//     </Modal>
//   )
// }

// const thisModal = document.getElementById('modal');
// const LandscapeModal = () => {

//     const openModal = () => {
//         const thisModal = document.getElementById('modal');

//         if (thisModal) {
//             thisModal.showModal()
//         } else {
//             console.log('No modals to shower.')
//         }
//     };

//     const closeModal = () => {
//         const thisModal = document.getElementById('modal');
//         thisModal.close();
//     }

//     return (
//         <>
//             <dialog className='landscapeModal' id='modal'>
//                 <LandscapeCarousel />
{/* <LandscapeCarousel /> */ }
{/* <Carousel>
            {
                landscapes.map((landscape) => {
                    <CarouselItem key={landscape.id}>
                        <img 
                            src={landscape.image}
                        />
                    </CarouselItem>
                })
        }
        </Carousel> */}
{/* <button onClick={closeModal}>X</button>
            </dialog>
            <button onClick={openModal}>Open the Modal</button>
        </>
    ) */}
{/* // const openModal = document.getElementById('modal').show(); */ }



// export default LandscapeModal