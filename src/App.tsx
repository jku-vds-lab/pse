import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import DatasetsPage from './pages/Datasetspage';
import PublicationsPage from './pages/Publicationspage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/datasets" component={DatasetsPage} />
          <Route path="/publications" component={PublicationsPage} />
        </Switch>
        <div className="b-example-divider"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
