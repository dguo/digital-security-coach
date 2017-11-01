import React from 'react';
import {Button, Container, Icon, Segment} from 'semantic-ui-react';

const Share = () => {
    return (
        <Segment id="share" attached textAlign="center">
            <Container text>
                <p>
                    If you found this guide helpful, please consider sharing it.
                </p>

                <Button
                    as="a"
                    color="black"
                    compact
                    href="mailto:?subject=Digital Security Coach&body=Check out this crash course on digital security: https://digitalsecuritycoach.com"
                >
                    <Icon name="mail" /> Email
                </Button>
                <Button
                    as="a"
                    color="facebook"
                    compact
                    href="https://facebook.com/sharer.php?u=https://digitalsecuritycoach.com"
                >
                    <Icon name="facebook" /> Facebook
                </Button>
                <Button
                    as="a"
                    color="twitter"
                    compact
                    href="https://twitter.com/share?url=https://digitalsecuritycoach.com&text=Check out this crash course on digital security"
                >
                    <Icon name="twitter" /> Twitter
                </Button>
                <Button
                    as="a"
                    color="linkedin"
                    compact
                    href="https://www.linkedin.com/shareArticle?url=https://digitalsecuritycoach.com&title=Digital Security Coach
    &summary=Digital security crash course"
                >
                    <Icon name="linkedin" /> LinkedIn
                </Button>
                <Button
                    as="a"
                    color="google plus"
                    compact
                    href="https://plus.google.com/share?url=https://digitalsecuritycoach.com"
                >
                    <Icon name="google plus" /> Google Plus
                </Button>

                <p id="feedback">
                    You can also contact me through{' '}
                    <a href="https://twitter.com/dannyguo">Twitter</a> or{' '}
                    <a href="mailto:dannyguo91@gmail.com">email</a> with any
                    feedback or suggestions.
                </p>
            </Container>
        </Segment>
    );
};

export default Share;
