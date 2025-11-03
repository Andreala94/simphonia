import './App.css';
import NavBar from './Components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Components/Post.jsx';
import Foto from './Components/Foto.jsx';
import LogoInferiore from './Components/LogoInferiore.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Foto />
      <Post />
      <LogoInferiore />
      <Footer />
    </>
  );
}

export default App;
