import { Container, Row, Col } from 'reactstrap';
import AboutMainImg from '../app/img/brit-and-jake.jpg';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const AboutPage = () => {
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
    <Container>
        <Row>
            <h1 className='text-center'>AboutMe</h1>          
        </Row>
        <Row>
            <animated.div style={animatedStyle}>
                <img width='100%' src={AboutMainImg}/>              
            </animated.div>

        </Row>
        <div style={{color: 'blue', backgroundColor: 'pink', padding: '5px', margin: '5px'}}>ADD A CONTACT FORM HERE USING FORMIK. AND DELETE THIS DIV.</div>
    </Container>
  )
}

export default AboutPage;