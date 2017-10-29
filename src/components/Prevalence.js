import React from 'react';
import {Container, Header, Segment} from 'semantic-ui-react';

const Prevalence = () => {
    return (
        <Segment attached color="blue">
            <Container text>
                <Header as="h3" content="Prevalence" textAlign="center" />
                <p>
                    Digital security is really hard. Company are hacked
                    frequently, and you probably don't even know about it most
                    of the time, even though some do make national headlines. So
                    let's start by talking about some of the facts regarding
                    hacks.
                </p>
           </Container>
        </Segment>
    );
};

export default Prevalence;
