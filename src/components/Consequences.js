import React from 'react';
import {Container, Header, Segment} from 'semantic-ui-react';

const Consequences = () => {
    return (
        <Segment attached color="blue">
            <Container text>
                <Header as="h3" content="Consequences" textAlign="center" />
                <p>
                    If you've never been impacted by a digital security breach,
                    you may not be very aware of just how harmful it can be.
                    Here are some ways that it compromised security can
                    negatively impact you. The goal isn't to spread unnecesary
                    fear. Rather, the goal is to give you a realistic
                    understanding of what's possible. These consequences are
                    ones that affect people every day.
                </p>

                <Header as="h4" color="red" content="Identity theft" />

                <p>Your information can end up being sold on the dark web.</p>

                <Header as="h4" color="red" content="Credit card theft" />

                <Header as="h4" color="red" content="Tax return theft" />

                <Header as="h4" color="red"
                    content="Hacked web cams and microphones" />

                <Header as="h4" color="red" content="Catfishing" />

                <Header as="h4" color="red" content="Ransomware" />
           </Container>
        </Segment>
    );
};

export default Consequences;
