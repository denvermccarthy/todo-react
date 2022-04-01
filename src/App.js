import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { getUser } from './services/users';
import Auth from './views/Auth/Auth';
import Home from './views/Home/Home';
import { Redirect } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path={'/todos'}>{user ? <Home /> : <Redirect to={'/'} />}</Route>
          <Route exact path={'/'}>
            <Auth {...{ setUser }} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
