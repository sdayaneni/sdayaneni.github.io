import './App.css';
import Navigation from './components/Navigation';
import Home from "./pages/Home";
import Carousel from './components/Carousel'
import { ProjectData } from './components/ProjectData';
import About from './pages/About'
import Experience from './pages/Experience';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      {/* <About/> */}
      {/* <Experience/> */}
      <Carousel projects = {ProjectData}/>


    </div>
  );
}

export default App;
