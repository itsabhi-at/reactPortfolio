// import pages
import { Route, Switch } from "react-router-dom";
// import AboutSection from "./components/AboutSection";
import Navbar from "./components/navbar";
// import ServicesSection from "./components/ServicesSection";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import "./styles/Style.scss";
// global style

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/portfolio">
          <Navbar />
          <Portfolio />
        </Route>
        <Route path="/">
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
