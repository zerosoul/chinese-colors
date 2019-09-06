import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './Global.style';

import register from './registerServiceWorker';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);

register();
