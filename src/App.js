import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footers from './components/Footers';
import ImageGallery from './components/ImageGallery';
const App = () => {
  return (
    <Router>
    <Navbar/>

<div>
  <main>
    <Routes>
      <Route path="/" element={<Carousel/>}/>
      <Route path="/Image" element={<ImageGallery/>}/>
    </Routes>
  </main>
</div>
<Footers />
</Router>
  );

}
export default App;
