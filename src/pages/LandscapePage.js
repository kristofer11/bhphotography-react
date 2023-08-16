import { Container, Row, Col } from 'reactstrap';
import LandscapeList from '../features/landscape/LandscapeList';
import LandscapeMainImg from '../app/img/sunny-lake.jpg';
import { useSpring, animated } from 'react-spring';
import { useState, useEffect } from 'react';


const LandscapePage = () => {
    const [toggle, setToggle] = useState(false);

    const animatedStyle = useSpring({
        opacity: toggle ? 1 : 0,
        transform: toggle ? 'scale(1,1)' : 'scale(0.9,0.9)',
        config: { duration: 400 }
      });

      useEffect(() => {
        setToggle(true);
      }, [])

  return (
      <Container>
        <h1 className='text-center pageTitle'>Landscape</h1>
        <Row className='justify-content-center'>
          <Col className="text-center">
            <animated.div style={animatedStyle}>
                 <img className='landscapeMain' src={LandscapeMainImg} />                 
            </animated.div>
            
          </Col>
        </Row>
        <br />
        <hr />
        <Row className='text-center'>
          <p className='textContent'>
          Images may only be used with permission. Please fill out the <a href='#'>contact form</a> to inquire about purchase.          
          </p>
        </Row>
        <LandscapeList />
        {/* <button onClick={toggleModalDisplay()}></button> */}
      </Container>  
  )
}

export default LandscapePage;