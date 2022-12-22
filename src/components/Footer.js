import { NavLink } from "react-router-dom"
import { Row, Col, Container } from 'reactstrap';
import IgLogo from '../app/img/icons8-instagram-old-48.png'
import YoutubeLogo from '../app/img/icons8-youtube-logo-48.png'

//mt-auto not working, need to figure out how to keep it at bottom

const Footer = () => {
  return (
        <footer className='site-footer'>
            <Container>
                <Row className='text-center mt-3 justify-content-between'>
                    <Col className='mt-4'>
                        <a className='mx-2' href='https://www.instagram.com/brittanymarie818/?hl=en' target='_blank'>
                            <img src={IgLogo} alt="Instagram Logo" />
                        </a>            
                        <a className='mx-2' href='https://www.youtube.com/channel/UCVhJ3Q_sspghQcEg1dQxMag' target='_blank'>
                            <img src={YoutubeLogo} alt="Instagram Logo" />
                        </a>                 
                    </Col>
                </Row>    
                <Row className='text-center'>
                    <Col>
                        icons by <a target="_blank" href="https://icons8.com">Icons8</a>                   
                    </Col>
                </Row>        
            </Container>            
        </footer>
  )
}

export default Footer