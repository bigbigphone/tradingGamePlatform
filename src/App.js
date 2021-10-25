import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AddGame from "./pages/AddGame";
import Game from "./pages/Game";
import Console from "./pages/Console";


function App() {

  return (
    <Router>
      <Navbar/>
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/console/:filter">
          <Console />
        </Route>
        <Route exact path="/add">
          <AddGame/>
        </Route>
        <Route path="/game/:id">
          <Game />
        </Route>
        

      </Switch>
    </Router>
  );
}

export default App;
