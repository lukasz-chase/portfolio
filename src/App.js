//components
import Nav from "./components/Nav.js";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Home />
    </div>
  );
}

export default App;
