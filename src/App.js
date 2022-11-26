import './App.css';
import Navigation from './components/Navigation';
import Home from "./Home";
import Carousel from './components/Carousel'
import { ProjectData } from './components/ProjectData';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <Carousel projects = {ProjectData}/>


    </div>
  );
}

export default App;
