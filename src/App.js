import './App.css';
import Welcome from './welcome/Welcome';
import Login from './login/Login';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';

const App =() => {
  return(
    <Router>
        <div>
          <div className="link">
            <ul>
                <Link className="linkLonin" to="/Login">Login</Link>
                <Link className="linkLonWelcome" to="/Welcome">Welcome</Link>
            </ul>
          </div>
          <Switch>  
            <Route path="/Welcome" component={Welcome} />
            <Route path="/" component={Login} />
          </Switch>
        </div>
    </Router>

  )
}

export default App;