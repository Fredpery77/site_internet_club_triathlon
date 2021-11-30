import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Bureau from './pages/Bureau';
import Licencier from './pages/Licencier';
import Agenda from './pages/Agenda';
import Resultats from './pages/Resultats';


const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/bureau" exact component={Bureau} />
      <Route path="/agenda" exact component={Agenda} />
      <Route path="/resultats" exact component={Resultats}/>
      <Route path="/licencier" exact component={Licencier} />
      <Route path="/galerie-photos" exact component={Gallery} />
      <Route path="/nous-contacter" exact component={Contact} />
      <Redirect to="/" />
    </Switch>
    </BrowserRouter>
  );
};

export default App;