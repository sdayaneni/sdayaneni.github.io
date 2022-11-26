import './App.css';
import Navigation from './components/Navigation';
import Home from "./pages/Home";
import Carousel from './components/Carousel'
import { ProjectData } from './components/ProjectData';
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <About/>
      <Carousel projects = {ProjectData}/>


    </div>
  );
}

export default App;
