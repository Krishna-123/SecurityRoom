import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import SecurityRoom from './components/SecurityRoom';
import registerServiceWorker from './registerServiceWorker';

window.onload = () => {
  ReactDOM.render(<SecurityRoom />, document.getElementById('root'));

};

registerServiceWorker();
