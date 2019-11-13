import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Pages
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SplashPage from './pages/SplashPage';
import Docs from './pages/Docs';
import Profile from './pages/Profile'

// Components
import Navbar from './components/Navbar';
import SplashNav from './components/SplashNav';

// Utils
import API from './utils/API';

class App extends React.Component {
  state = {

    user: '',
    loggedIn: false,

  }

  componentDidMount() {
    API.getUser()
      .then(res => {
        console.log(res.data)
        if (res.data.loggedIn) {
          this.setState({
            user: res.data.user,
            loggedIn: res.data.loggedIn,
          })
        } else {
          this.setState({
            user: res.data.user,
            loggedIn: res.data.loggedIn,
          })
        }
      })
  }

  logout() {
    console.log("Logout")
    API.logout()
      .then(res => {
        // window.location.href = '/'
      })
  }

  render() {

    if (this.state.loggedIn === false) {
      return (

        <div>
          <Router>
            <SplashNav />
            <Switch>
              <Route path='/' exact component={SplashPage} />
              <Route path='/login' exact component={Login} />
              <Route path='/signup' exact component={Signup} />
              <Route path='/docs' exact component={Docs} />
            </Switch>
          </Router>

        </div >
      );

    } else {
      return (
        <div>
          <Router>
            <Navbar
              login={this.state.loggedIn}
              logout={this.logout}
            />
            <Switch>
              <Route path='/' exact component={() => <Main user={this.state.user} />} />
              <Route path='/profile' exact component={() => <Profile user={this.state.user} />} />

            </Switch>
          </Router>
        </div>
      )

    }
  }

}

export default App;
