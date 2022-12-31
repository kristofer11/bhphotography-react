import { Row, Col } from 'reactstrap';
import { selectAllLandscapes } from './landscapeSlice';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import LandscapeModal from './LandscapeModal'

const landscapes = selectAllLandscapes();

const LandscapeList = () => {
    const [clickedImage, setClickedImage] = useState(null);
    const [currentId, setCurrentId] = useState(null)

    const handleClick = (item) => {
        setCurrentId(item.id);
        setClickedImage(item.image);
    };

    const handleRotationRight = () => {
        const totalLength = landscapes.length;
        if (currentId + 1 >= totalLength) {
            setCurrentId(0);
            const newImage = landscapes[0].image;
            setClickedImage(newImage);
            return;
        }
        const newId = currentId + 1;
        const newImage = landscapes.filter((item) => {
            return landscapes.indexOf(newId);
        });
        const newItem = newImage[newId].image;
        setClickedImage(newItem);
        setCurrentId(newId);
    }

    const handleRotationLeft = () => {
        const totalLength = landscapes.length;
        if (currentId === 0) {
            setCurrentId(totalLength - 1);
            const newImage = landscapes[totalLength - 1].image;
            setClickedImage(newImage);
        }
        const newId = currentId - 1;
        const newImage = landscapes.filter((item) => {
            return landscapes.indexOf(newId);
        });
        const newItem = newImage[newId].image;
        setClickedImage(newItem);
        setCurrentId(newId);
    }

    return (
        <>
            <Row className='align-items-center galleryRow'>
                {
                    landscapes.map((item, id) => {
                        return (
                            // <NavLink to={'/carousel'}>
                            <Col
                                key={item.id}
                                sm='6'
                                lg='3'
                            >
                                <img
                                    className='galleryImg w-100'
                                    src={item.image}
                                    alt={item.description}
                                    onClick={() => handleClick(item, id)}
                                />
                            </Col>
                            // </NavLink>
                        )
                    })
                }
            </Row>
            {clickedImage && (
                <LandscapeModal
                    clickedImage={clickedImage}
                    handleRotationRight={handleRotationRight}
                    setClickedImage={setClickedImage}
                    handleRotationLeft={handleRotationLeft}
                />
            )}
        </>

    )
}

export default LandscapeList