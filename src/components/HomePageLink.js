import { Card, CardImg, CardImgOverlay, CardTitle, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

//Currently overriding bootstrap styling for this card by using an id. Obviously not proper since all instances of this component have the same id. Must figure out how to do this another way. Adding a className wasn't working, but id worked...
//Need to figure out why no matter what the card div still has id='homeCard' in browser...

const HomePageLink = ({ alt, img, title, path }) => {
    return (
        <>
            <Col md='4' >
                <NavLink to={path}>
                    <Card
                        inverse
                        className='homeCard'
                    >
                        <CardImg
                            alt={alt}
                            src={img}
                        />
                        <CardImgOverlay className='homeCardImgOverlay'>
                            <CardTitle tag='h3'>
                                {title}
                            </CardTitle>
                        </CardImgOverlay>

                    </Card>
                </NavLink>
            </Col>


        </>
    )
}

export default HomePageLink