import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './Global.style';

import { unregister } from './registerServiceWorker';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);

unregister();
