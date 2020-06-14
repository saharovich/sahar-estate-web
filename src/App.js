import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Header from './components/header/header';
import Home from './components/home/home';
import GalleryAndFilter from './components/galleryAndSearch/galleryAndFilter';
import singleApartment from './components/singleApartment/singleApartment';
import PageNotFound from './components/notFound/pageNotFound';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/gallery" component={GalleryAndFilter} />
          <Route path="/apartment/:id" component={singleApartment} />
          <Route path='/404' component={PageNotFound} />
          <Redirect from='*' to='/404' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
