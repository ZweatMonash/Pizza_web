import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/projects" component={ProjectsPage} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;
