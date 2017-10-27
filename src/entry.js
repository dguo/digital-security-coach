import 'babel-polyfill';
import 'whatwg-fetch';
import 'autotrack/lib/plugins/outbound-link-tracker';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import './styles.css';
import App from './components/App';

ga('create', 'UA-108740218-1', 'auto');
ga('require', 'outboundLinkTracker');
ga('send', 'pageview');

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('main')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NewApp = require('./components/App').default;
        render(NewApp);
    });
}
