
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux'
import { fetchUser } from './store/action'




function App(props) {



              useEffect(() => {
                 props.fetchUser()
                         }, []) // eslint-disable-line

  console.log("userData", props.userData)

                                            return (
                       <Router>
                                    <div>
                                            <nav>
                                  <ul>
                                    <li>
                                 <Link to="/">Homes</Link>
                        </li>
                        <li>
                                                    <Link to="/about">About</Link>
                         </li>
            <li>
                                      <Link to="/users">Users</Link>
            </li>
                      </ul>
        </nav>


        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function mapStateToProps(state) {

  const { userData } = state.user
  return {

    userData
  }
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(App);



function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
