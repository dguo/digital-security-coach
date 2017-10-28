import 'babel-polyfill';
import 'whatwg-fetch';
import 'autotrack/lib/plugins/outbound-link-tracker';

import './styles.css';

ga('create', 'UA-108740218-1', 'auto');
ga('require', 'outboundLinkTracker');
ga('send', 'pageview');
