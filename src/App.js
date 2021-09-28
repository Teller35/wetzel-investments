import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import LandingPage from "./pages/LandingPage";
import ContactForm from "./pages/Contact";
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/contact" component={ContactForm}/>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
