import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom" ;
import Login from './components/Login';
import SignUp from './components/SignUp';
import WallNotes from './components/WallNotes';
import PageNotFound from './components/PageNotFound';
import Modal from './components/Modal';

function App() {
  return (
    <Router>
      <div className="Container">
      <Switch>
      <Route path="/signup" component={SignUp}/>
      <Route exact path="/wallnotes" component={WallNotes}/>
      <Route exact path="/modal" component={Modal}/>
      <Route exact path="/" component={Login}/>
      <Route component={PageNotFound}/>
      </Switch>
    </div>       
    </Router>
  );
}

export default App;
