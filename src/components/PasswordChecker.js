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

import {pwnedPassword, RATE_LIMIT_MS} from '../pwned';

class PasswordChecker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: '',
            hasResult: false,
            loading: false,
            pwnedCount: null,
            rateLimited: false
        };

        this.handlePasswordSubmission = this.handlePasswordSubmission.bind(
            this
        );
    }

    async handlePasswordSubmission(e) {
        if (this.state.rateLimited) {
            return;
        }

        const password = e.target.password.value;

        let error = '';
        if (!password) {
            error = 'Please enter a password.';
        } else if (!password.trim()) {
            error = 'Password cannot be all whitespace.';
        }

        this.setState({
            error,
            hasResult: false,
            loading: !error,
            pwnedCount: null,
            rateLimited: !error
        });

        if (error) {
            return;
        }

        try {
            this.setState({
                hasResult: true,
                loading: false,
                pwnedCount: await pwnedPassword(password)
            });
        } catch (error) {
            this.setState({
                error: 'There was an unexpected error.',
                loading: false
            });
        }

        setTimeout(() => {
            this.setState({
                rateLimited: false
            });
        }, RATE_LIMIT_MS);
    }

    render() {
        const pwned = Boolean(this.state.pwnedCount);

        const header = pwned
            ? `This password is compromised.`
            : `As far as we know, this password has not been compromised.`;

        let count = this.state.pwnedCount;
        try {
            if (count) {
                count = new Intl.NumberFormat().format(count);
            }
        } catch (error) {
            // eslint-disable-line no-empty
        }

        const message = pwned
            ? `It has appeared at least ${count} times in breaches. It should never be used again.`
            : `That's good news, but it could still be a bad password to use if it's too easy to guess.`;

        return (
            <Segment attached color="blue" textAlign="center">
                <Header as="h3" content="Check a password" />

                <Container text textAlign="left">
                    <p>
                        This will check if a password is in{' '}
                        <a href="https://haveibeenpwned.com/">
                            Have I Been Pwned
                        </a>'s list of passwords that have been publicly
                        exposed. The password will not be sent to us, but do not
                        submit a password that you actually use. Use this to
                        better understand the point that many passwords are no
                        longer safe to use. Once a password has been exposed, it
                        should not be used again because hackers will try known
                        passwords to break into other services.
                    </p>
                </Container>

                <Divider hidden />

                <Form onSubmit={this.handlePasswordSubmission}>
                    <Form.Input
                        style={{maxWidth: '30em'}}
                        name="password"
                        placeholder="Password"
                        type="password"
                    />

                    <Button
                        color="green"
                        disabled={this.state.rateLimited}
                        loading={this.state.loading}
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
                        positive={!pwned}
                        negative={pwned}
                        header={header}
                        content={message}
                    />
                ) : null}
            </Segment>
        );
    }
}

export default PasswordChecker;
