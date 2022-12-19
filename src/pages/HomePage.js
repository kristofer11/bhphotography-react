import { Container } from 'reactstrap';
import HomeVid from '../app/video/home-vid.mp4';
import Poster from '../app/img/coast-looking-in16x9.JPG'

const HomePage = () => {
  return (
    <>
      <Container>
        {/* Should I make a "main video" component that can be used on "landscapes" and "drone" that would use a prop to grab the specific video? */}
          <video className='mt-2' src={HomeVid} width='100%' autoPlay muted playsInline loop poster='Poster'></video>
      </Container>
      <Container>
        <h1>Brittany Herzog Photography</h1>
        <p><em><strong>Welcome to the official home of Brittany Herzog Photography</strong></em>. </p>    
        <p>
        Brittany specializes in capturing the natural beauty of the Pacific Northwest through both landscape photography and drone footage. From the Oregon Coast to the Cascade Mountains, she is always seeking out the next breathtaking view. To be safe, she is usually accompanied by two terrifying guard dogs and her ruggedly-handsome husband, Jake.
        </p>
        
      </Container>  
    </>
  )
}

// GIT IS NOT INITIALIZED! DO THAT FIRST NEXT TIME YOU WORK ON THIS! 

export default HomePage;