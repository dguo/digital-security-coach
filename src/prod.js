import './setup';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.hydrate(<App />, document.getElementById('main'));
