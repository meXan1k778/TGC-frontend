import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ToTopButton from '../ToTopButton';
import Main from '../Main';

function App() {
  return (
    <div>
     <Header />
     <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Redirect to="/404" />
    </Switch>
     <Footer />
     <ToTopButton />
    </div>
  );
}

export default App;
