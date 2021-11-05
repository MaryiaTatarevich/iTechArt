import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CinemaStore from './store/CinemaStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)


ReactDOM.render(
  <Context.Provider value = {{
    user: new UserStore(),
    cinema: new CinemaStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);


