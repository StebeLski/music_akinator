import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Theme } from './Theme';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Theme>
     <App />
    </Theme>,
  </Provider>,
  document.getElementById('root')
);
