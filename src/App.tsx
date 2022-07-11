import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import DatasetsPage from './pages/Datasetspage';
import PublicationsPage from './pages/Publicationspage';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/datasets/:datasetIdsUrl" component={DatasetsPage} />
          <Route path="/publications" component={PublicationsPage} />
        </Switch>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
