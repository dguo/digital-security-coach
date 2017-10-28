import React from 'react';
import {Container, Header, List, Segment} from 'semantic-ui-react';

const TWO_FACTOR_LINKS = [
    {service: 'Amazon', link: 'https://amazon.com/gp/help/customer/display.html?nodeId=201962420'},
    {service: 'Apple', link: 'https://support.apple.com/en-us/HT204915'},
    {service: 'Dropbox', link: 'https://www.dropbox.com/help/security/enable-two-step-verification'},
    {service: 'Facebook', link: 'https://www.facebook.com/help/148233965247823'},
    {service: 'Google / Gmail', link: 'https://www.google.com/landing/2step/'},
    {service: 'LinkedIn', link: 'https://www.linkedin.com/help/linkedin/answer/544/turning-two-step-verification-on-and-off'},
    {service: 'Microsoft', link: 'https://support.microsoft.com/en-us/help/12408/microsoft-account-about-two-step-verification'},
    {service: 'Twitter', link: 'https://support.twitter.com/articles/20170388'},
    {service: 'Yahoo', link: 'https://help.yahoo.com/kb/SLN5013.html'}
];

const PASSWORD_MANAGERS = [
    {service: '1Password', link: 'https://1password.com/'},
    {service: 'Bitwarden', link: 'https://bitwarden.com/'},
    {service: 'Dashlane', link: 'https://www.dashlane.com/'},
    {service: 'Lastpass', link: 'https://www.lastpass.com/'}
];

const Action = () => {
    return [
        <Segment attached>
            <Container text textAlign="left">
                <p>
                    There's no such thing as perfect security, but there are
                    steps you can take to make it less likely that your data
                    will be compromised. Remember that you don't have to do
                    all of them. The goal here is to improve your security,
                    and every bit helps.
                </p>
           </Container>
        </Segment>,
        <Segment attached color="blue">
            <Header as="h3" content="Don't give out your info in the first place" textAlign="center" />
            <Container text textAlign="left">
                <p>
                    Hackers can't steal what doesn't exist. Be reluctant to
                    give websites personal information, and you'll keep your
                    potential exposure to a minimum.
                </p>
            </Container>
        </Segment>,
        <Segment attached color="blue">
            <Header as="h3" content="Be skeptical in general" textAlign="center" />
            <Container text textAlign="left">
                <p>
                    Learn how to spot phishing attacks.
                </p>
            </Container>
        </Segment>,
        <Segment attached color="blue">
            <Header as="h3" content="Keep your software updated" textAlign="center" />
            <Container text textAlign="left">
                <p>
                    Updates frequently include security fixes. By not
                    updating your software, you're leaving yourself exposed to
                    known vulnerabilities.
                </p>
            </Container>
        </Segment>,
        <Segment attached color="blue">
            <Header as="h3" content="Sign up for Have I been pwned?" textAlign="center" />
            <Container text textAlign="left">
                <p>
                    <a href="https://haveibeenpwned.com/NotifyMe">Sign up</a> so
                    that you can be alerted when your email address shows up in
                    future data breaches.
                </p>
            </Container>
        </Segment>,
        <Segment attached color="blue">
            <Header as="h3" content="Visit websites through HTTPS" textAlign="center" />
            <Container text textAlign="left">
                <p>
                    You can also install <a href="https://www.eff.org/https-everywhere">HTTPS Everywhere</a>,
                    which is a free browser extension that will try to make as
                    much of your web activity go through HTTPS as possible.
                </p>
            </Container>
        </Segment>,
        <Segment attached color="blue">
            <Header as="h3" content="Use two-step authentication" textAlign="center" />
            <Container text textAlign="left">
                <p>
                    Two-step authentication means that when you log in to a
                    service, you have to verify your identity in more than one
                    way. Here are instructions for setting it up on some
                    popular services:
                </p>

                <List bulleted>
                    {TWO_FACTOR_LINKS.map(({service, link}) =>
                        <List.Item key={service}>
                            <a href={link}>{service}</a>
                        </List.Item>
                    )}
                </List>
            </Container>
        </Segment>,
        <Segment attached color="blue">
            <Header as="h3" content="Use a password manager" textAlign="center" />
            <Container text textAlign="left">
                <p>
                    Password managers are services that generate and store your
                    passwords for you. Here are some options:
                </p>

                <List bulleted>
                    {PASSWORD_MANAGERS.map(({service, link}) =>
                        <List.Item key={service}>
                            <a href={link}>{service}</a>
                        </List.Item>
                    )}
                </List>
            </Container>
        </Segment>,
        <Segment attached color="blue">
            <Header as="h3" content="Use an ad blocker" textAlign="center" />
            <Container text textAlign="left">
                <p>
                    Password managers are services that generate and store your
                    passwords for you. Here are some options:
                </p>

                <List bulleted>
                    {PASSWORD_MANAGERS.map(({service, link}) =>
                        <List.Item key={service}>
                            <a href={link}>{service}</a>
                        </List.Item>
                    )}
                </List>
            </Container>
        </Segment>
    ];
};

export default Action;
