import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Card, CardImg, CardImgOverlay, CardTitle, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

//Currently overriding bootstrap styling for this card by using an id. Obviously not proper since all instances of this component have the same id. Must figure out how to do this another way. Adding a className wasn't working, but id worked...

const AnimatedHomePageLink = ({ alt, img, title, path }) => {
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0.5,0.5)',
        config: { duration: 300 }
    });

    useEffect(() => {
        setToggle(true);
    }, [])

    return (
        <>
            <animated.div className='col' style={animatedStyle}>
                <NavLink to={path}>
                    <Card
                        inverse
                        id='homeCard'
                    >
                        <CardImg
                            alt={alt}
                            src={img}
                        />
                        <CardImgOverlay className='homeCardImgOverlay'>
                            <CardTitle tag='h3' id='homeCardTitle'>
                                {title}
                            </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </NavLink>
            </animated.div>
        </>
    )
}

export default AnimatedHomePageLink