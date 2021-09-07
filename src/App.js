import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import { bureau, licencier, reglement } from './pages/Votreclub';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/bureau" exact component={bureau} />
      <Route path="/reglement" exact component={reglement} />
      <Route path="/licencier" exact component={licencier} />
      <Route path="/galerie-photos" exact component={Gallery} />
      <Route path="/nous-contacter" exact component={Contact} />
      <Redirect to="/" />
    </Switch>
    </BrowserRouter>
  );
};

export default App;