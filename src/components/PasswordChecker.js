import React from 'react';
import {
    Button,
    Container,
    Divider,
    Form,
    Header,
    Message,
    Segment
} from 'semantic-ui-react';

import {pwnedPassword} from '../pwned';

class PasswordChecker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            hasResult: false,
            loading: false,
            pwned: false
        };
    }

    handlePasswordSubmission = async e => {
        const password = e.target.password.value;

        this.setState({
            error: password ? '' : 'Please enter a password.',
            hasResult: false,
            loading: Boolean(password),
            pwned: false
        });

        if (!password) {
            return;
        }

        try {
            this.setState({
                hasResult: true,
                loading: false,
                pwned: await pwnedPassword(password)
            });
        } catch (error) {
            this.setState({
                error: 'There was an unexpected error.',
                loading: false
            });
        }
    }

    render() {
        return (
            <Segment attached color="blue" padded textAlign="center">
                <Header as="h3" content="Check a password" />

                <Container text textAlign="left">
                    <p>
                        This will check if a password is
                        in <a href="https://haveibeenpwned.com/">Have I been pwned?</a>'s list of passwords that have been exposed publicly. The password will not be sent to us, but do not submit a password that you actually use.
                    </p>
                    <p>
                        Once a password has been exposed, it should not be used
                        again because hackers will try known passwords to break
                        into other services.
                    </p>
                </Container>

                <Divider hidden />

                <Form onSubmit={this.handlePasswordSubmission}>
                    <Form.Input style={{maxWidth: '30em'}} name="password"
                        placeholder="Password" type="password" />

                    <Button color="green" loading={this.state.loading}
                        type="submit"
                    >
                        Submit
                    </Button>
                </Form>

                {this.state.error ? (
                    <Message compact header={this.state.error} negative />
                ) : null}

                {this.state.hasResult ? (
                    <Message
                        compact
                        positive={!this.state.pwned}
                        negative={this.state.pwned}
                        header={`This password has ${this.state.pwned ? '' : 'not'} been compromised`}
                        content={
                            this.state.pwned
                                ? 'It should never be used again.'
                                : `That's good news, but keep in mind it doesn't prove that this is a good password to use.`
                        }
                    />
                ) : null}
            </Segment>
        );
    }
}

export default PasswordChecker;
