import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import LandingPage from "./pages/LandingPage";
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={LandingPage}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
