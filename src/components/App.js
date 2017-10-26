import React from 'react';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <p>Hi world</p>
                <Footer />
            </div>
        );
    }
}

export default App;
