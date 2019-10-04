import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './Global.style';

import register from './registerServiceWorker';

if (process.env.NODE_ENV !== 'production') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React);
}
ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);

register();
