import { Container, Row, Col } from 'reactstrap';
import AboutMainImg from '../app/img/brit-and-jake.jpg';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import ContactForm from '../components/ContactForm';

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
        <Row>
            <h2 className='text-center mt-2'>Contact</h2>
        </Row>
        <hr />
        <Row>
            <p>Whether it is to book a session or inquire about purchasing an image, I would love to hear from you! Please fill out the form to get in touch.</p>
        </Row>
        <hr />
        <ContactForm />
    </Container>
  )
}

export default AboutPage;