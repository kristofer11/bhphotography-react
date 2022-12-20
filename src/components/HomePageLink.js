import { Card, CardImg, CardImgOverlay, CardTitle, Row, Col } from 'reactstrap';

//FIGURE OUT HOW TO LINK TO OTHER PAGES WITHOUT RELOADING USING ROUTER AND NOT HREF....

const HomePageLink = ({ alt, img, title, path }) => {
    return (
        <>
            <Col md='4'>
                <a href={path}>
                    <Card
                        inverse
                        id='homeCard'
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
                </a>
            </Col>


        </>
    )
}

export default HomePageLink