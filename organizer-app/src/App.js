import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from '.components//Navbar';
import Footer from '.components//Footer';
import Home from '.components//Home';
import Contact from '.components//Contact';
import Dev from '.components//Dev';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contacto" component={Contact} />
        <Route path="/dev" component={Dev} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

