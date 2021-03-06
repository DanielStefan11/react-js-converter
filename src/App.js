import React from "react";
// Style
import "./App.scss";
// Pages
import Home from "./pages/home/Home";
import LengthConverter from "./pages/lengthConverter/LengthConverter";
import DegreesConverter from "./pages/degreesConverter/DegreesConverter";
import WeightConverter from "./pages/weightConverter/WeightConverter";
// React Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/length-converter" component={LengthConverter} />
        <Route path="/weight-converter" component={WeightConverter} />
        <Route path="/degrees-converter" component={DegreesConverter} />
      </Switch>
    </main>
  );
}

export default App;
