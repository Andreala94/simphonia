import './App.css';
import NavBar from './Components/NavBar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Components/Post.jsx';
import Foto from './Components/Foto.jsx';

function App() {
  return (
    <>
      <NavBar />
      <Foto />
      <Post />
    </>
  );
}

export default App;
