//components
import Nav from "./components/Nav.js";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
//video
import video from "./videos/video.mp4";
import Poster from "./images/poster.png";
function App() {
  return (
    <div className="App">
      <video
        playsInline
        autoPlay
        loop
        muted
        src={video}
        type="video/mp4"
        poster={Poster}
      />
      <GlobalStyles />
      <Nav />
      <Home />
    </div>
  );
}

export default App;
