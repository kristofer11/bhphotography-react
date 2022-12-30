import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import LandscapePage from './pages/LandscapePage';
import DronePage from './pages/DronePage';
import AboutPage from './pages/AboutPage';
import CarouselPage from './pages/CarouselPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<HomePage/>}/>   
          <Route path='/landscape' element={<LandscapePage/>}/>
          <Route path='/drone' element={<DronePage/>}/>  
          <Route path='/about' element={<AboutPage/>}/> 
          <Route path='/carousel' element={<CarouselPage/>}/>         
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
