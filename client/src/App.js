import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './pages/Main';

class App extends React.Component{
  state={

  }
  render(){
    return (
      <div>

        <Router>
          <Switch>
            <Route path='/' exact component = {Main} />
          </Switch>
        </Router>
      </div>
    );
  }
}



export default App;
