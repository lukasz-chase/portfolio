//components
import Nav from "./components/Nav.js";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Contact from "./components/Contact";
import GlobalStyles from "./components/GlobalStyles";
//router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path="/about-me">
        <AboutMe />
      </Route>
      <Route path="/project1">
        <Project />
      </Route>
      <Route path="/Contact">
        <Contact />
      </Route>
    </div>
  );
}

export default App;
