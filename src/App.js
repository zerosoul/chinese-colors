import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/index';
import SharePage from './pages/share';

const basePath = process.env.NODE_ENV === 'production' ? '/chinese-colors' : '';
const App = () => {
  return (
    <Router basename={basePath}>
      <Switch>
        <Route path={`${basePath}/`} exact component={Home} />
        <Route path={`${basePath}/share/:id`} component={SharePage} />
      </Switch>
    </Router>
  );
};
export default App;
