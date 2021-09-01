import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/a-propos" exact component={About} />
      <Route path="/galerie-photos" exact component={Gallery} />
      <Route path="/nous-contacter" exact component={Contact} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
};

export default App;