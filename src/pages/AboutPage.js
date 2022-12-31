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
            <h1 className='text-center pageTitle'>AboutMe</h1>          
        </Row>
        <Row className='justify-content-center'>
          <Col md='8' lg='6'>
            <animated.div style={animatedStyle}>
                <img width='100%' className='mainAboutImg' src={AboutMainImg}/>              
            </animated.div>          
          </Col>
        <Row>
          <Col>
            <h2 className='text-center my-3 greeting'>Meet <em><strong className='britName'>Brittany</strong></em></h2>
            <p className='textContent'>Brittany has the Pacific Northwest home all her life. Spoiled by the majestic scenery, she spends as much time as she can experiencing and documenting all the region has to offer. On any given weekend you will find her exploring a mountain or beach with her husband, Jake, and two dogs, Genesis and Lola. Peruse her instagram and you will see her passion for landscape photography on display. Take in some of her YouTube videos and you will get a sense of her longing to know what there is to explore that can't be done from the ground.</p>
            <p className='textContent'>Fill out the form below to get in touch with Brittany or inquire about purchasing some of her work! She would love to hear from you.</p>
          </Col>
        </Row>
        </Row>
        <Row>
            <h2 className='text-center mt-2'>Contact</h2>
        </Row>
        <hr />
        <Row>
            <p className='textContent'>Whether it is to book a session or inquire about purchasing an image, I would love to hear from you! Please fill out the form to get in touch.</p>
        </Row>
        <hr />
        <ContactForm />
    </Container>
  )
}

export default AboutPage;