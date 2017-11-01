import React from 'react';
import {Container, Segment} from 'semantic-ui-react';

const Awareness = () => {
    return (
        <Segment attached color="blue">
            <Container text>
                <p>
                    Understanding the problem is half the battle. You’ve
                    probably heard news stories about people and companies
                    getting hacked, but knowing the facts and how these attacks
                    can end up affecting you should make the problem less
                    abstract.
                </p>
            </Container>
        </Segment>
    );
};

export default Awareness;
