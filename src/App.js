import React from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './header/header';
import Footer from './footer/footer';
import Products from './products/products';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <main>
          <Header/>
          <Switch>
            <Route exact path={`/`} component={Products} />
          </Switch>
          <Footer/>
        </main>
      </div>
    );
  }
}

export default App;
