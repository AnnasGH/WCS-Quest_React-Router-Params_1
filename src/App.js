import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/About';
import Users from './components/Users';
import Home from './components/Home';
import PostList from './components/PostList';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/2019/09">September 2019</Link>
            </li>
            <li>
              <Link to="/2019/10">October 2019</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/:year/:month" component={PostList} />

          {/*Writing with component={PostList} is an alternative to calling <PostList /> within the <Route> tag.*/}

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
