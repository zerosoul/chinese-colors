import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import SharePage from './pages/share';

// const App = () => {
//   return <Home />;
// };
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={`/`}>
          <Route index element={<Home />} />
          <Route path={`share/:id`} element={<SharePage />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
