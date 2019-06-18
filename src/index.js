import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Pacifico web:300,400,700', 'cursive']
    }
  });




ReactDOM.render (
<Provider store={createStore(reducers)}>
    <App />
</Provider>,
document.querySelector('#root')
);














