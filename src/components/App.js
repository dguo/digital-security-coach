import React from 'react';

import Header from './Header';
import Introduction from './Introduction';
import Step from './Step';
import Awareness from './Awareness';
import EmailChecker from './EmailChecker';
import Action from './Action';
import Share from './Share';
import Footer from './Footer';
import {checkForBreaches, checkPassword, checkForPastes} from '../pwned';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        // const bad = await checkPassword('password');
        // console.log('bad:', bad);

        // await checkForPastes('test@example.com');

        // await checkForBreaches('dannyguo91@gmail.com');
    }

    render() {
        return (
            <div id="content">
                <Header />

                <Introduction />

                <Step color="blue" title="Step 1. Understand the problem" />
                <Awareness />

                <EmailChecker />

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
