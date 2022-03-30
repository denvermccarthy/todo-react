import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path={'/todos'}>
            <Home />
          </Route>
          <Route exact path={'/'}>
            <Auth />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
