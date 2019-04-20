import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './infrastructure/styles/global.css';
import Home from './features/home/components/Home';
import { bootstrap } from './infrastructure/bootstrap';

window.onload = async () => {
  await bootstrap();
  // TODO render a smart loader here: when boostrap is done,
  // it will render the app
  ReactDOM.render(<Home />, document.getElementById('root'));
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
