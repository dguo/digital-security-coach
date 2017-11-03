import React from 'react';
import {Container, Segment} from 'semantic-ui-react';

const Awareness = () => {
    return (
        <Segment attached color="blue">
            <Container text>
                <p>
                    Understanding the problem is half the battle. You’ve
                    probably heard news stories about people and companies
                    getting hacked, but knowing the facts and being aware of how
                    these attacks can hurt you should make you more motivated to
                    protect yourself.
                </p>
            </Container>
        </Segment>
    );
};

export default Awareness;
