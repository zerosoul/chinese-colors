import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/index';
import SharePage from './pages/share';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={`/`} exact component={Home} />
        <Route path={`/share/:id`} component={SharePage} />
      </Switch>
    </Router>
  );
};
export default App;
