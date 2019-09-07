import React from 'react';

import Header from './Header';
import Introduction from './Introduction';
import Step from './Step';
import Awareness from './Awareness';
import Prevalence from './Prevalence';
import PasswordChecker from './PasswordChecker';
import Consequences from './Consequences';
import Action from './Action';
import Share from './Share';
import Footer from './Footer';

class App extends React.Component {
    render() {
        return (
            <div id="content">
                <Header />

                <Introduction />

                <Step color="blue" title="Step 1. Understand the problem" />
                <Awareness />

                <Prevalence />

                <PasswordChecker />

                <Consequences />

                <Step color="blue" title="Step 2. Take action" />
                <Action />

                <Step color="blue" title="Step 3. Share the knowledge" />
                <Share />

                <Footer />
            </div>
        );
    }
}

export default App;
