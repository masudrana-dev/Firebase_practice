import ParticleEffectButton from 'react-particle-effect-button';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import GalleryReact from './components/GalleryReact/GalleryReact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
function App() {

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
      </Routes>
    </div>
  );
}

export default App;
