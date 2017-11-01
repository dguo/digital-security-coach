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
                    Here are some ways that you can be negatively impacted.
                </p>

                <Header as="h4" color="red" content="Identity theft" />

                <p>
                    Your personal information can end up being distributed or
                    sold, and one of the main things people do with that
                    information is to commit identity theft. Armed with your
                    information, someone else can open accounts in your name,
                    apply for credit cards, and even file tax returns to try to
                    steal your refunds.
                </p>

                <Header
                    as="h4"
                    color="red"
                    content="Hacked web cams and microphones"
                />

                <p>
                    Compromised devices can be used to activate your web cam
                    without you knowing (the virus can turn off the indicator
                    light while keeping the web cam on). Hackers can then
                    collect pictures and videos of you, which they can then use
                    to extort you.
                </p>

                <Header as="h4" color="red" content="Ransomware" />

                <p>
                    Ransomware refers to viruses that lock your device or files
                    until you pay money to the hackers. Sometimes there will be
                    a deadline, at which point the files are permanently
                    deleted.
                </p>
            </Container>
        </Segment>
    );
};

export default Consequences;
