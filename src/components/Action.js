import React from 'react';
import {Container, Header, Image, List, Segment} from 'semantic-ui-react';

const TWO_FACTOR_LINKS = [
    {
        service: 'Amazon',
        link:
            'https://amazon.com/gp/help/customer/display.html?nodeId=201962420'
    },
    {service: 'Apple', link: 'https://support.apple.com/en-us/HT204915'},
    {
        service: 'Dropbox',
        link:
            'https://www.dropbox.com/help/security/enable-two-step-verification'
    },
    {
        service: 'Facebook',
        link: 'https://www.facebook.com/help/148233965247823'
    },
    {
        service: 'Google / Gmail',
        link: 'https://www.google.com/landing/2step/'
    },
    {
        service: 'LinkedIn',
        link:
            'https://www.linkedin.com/help/linkedin/answer/544/turning-two-step-verification-on-and-off'
    },
    {
        service: 'Microsoft',
        link:
            'https://support.microsoft.com/en-us/help/12408/microsoft-account-about-two-step-verification'
    },
    {
        service: 'Twitter',
        link: 'https://support.twitter.com/articles/20170388'
    },
    {service: 'Yahoo', link: 'https://help.yahoo.com/kb/SLN5013.html'}
];

const PASSWORD_MANAGERS = [
    {service: '1Password', link: 'https://1password.com/'},
    {service: 'Bitwarden', link: 'https://bitwarden.com/'},
    {service: 'Dashlane', link: 'https://www.dashlane.com/'},
    {service: 'Lastpass', link: 'https://www.lastpass.com/'}
];

const UBLOCK_ORIGIN_LINKS = [
    {
        browser: 'Chrome',
        link:
            'https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm'
    },
    {
        browser: 'Edge',
        link: 'https://www.microsoft.com/en-US/store/p/app/9nblggh444l4'
    },
    {
        browser: 'Firefox',
        link: 'https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/'
    },
    {
        browser: 'Safari',
        link: 'https://github.com/el1t/uBlock-Safari/tree/safari/dist#install'
    }
];

const FIREFOX_FOCUS_LINKS = [
    {
        platform: 'Android',
        link: 'https://play.google.com/store/apps/details?id=org.mozilla.focus'
    },
    {platform: 'iOS', link: 'https://itunes.apple.com/app/id1055677337'}
];

const Action = () => {
    return [
        <Segment attached>
            <Container text textAlign="left">
                <p>
                    There is no such thing as perfect security, but there are
                    steps you can take to make it less likely that your data
                    will be compromised. Do whatever you feel comfortable with.
                    The goal is to make you more secure, and every bit helps.
                </p>
            </Container>
        </Segment>,
        <Segment attached color="blue">
            <Header
                as="h3"
                content="Don't give out your info in the first place"
                textAlign="center"
            />
            <Container text textAlign="left">
                <p>
                    Hackers can't steal what doesn't exist. Be reluctant to give
                    websites personal information, and you'll keep your
                    potential exposure to a minimum.
                </p>
            </Container>
        </Segment>,
        <Segment attached color="blue">
            <Header
                as="h3"
                content="Keep your software updated"
                textAlign="center"
            />
            <Container text textAlign="left">
                <p>
                    Updates frequently include security fixes. By not updating
                    your software, you're leaving yourself exposed to known
                    vulnerabilities.
                </p>
            </Container>
        </Segment>,
        <Segment attached color="blue">
            <Header
                as="h3"
                content="Sign up for Have I been pwned?"
                textAlign="center"
            />
            <Container text textAlign="left">
                <p>
                    <a href="https://haveibeenpwned.com/NotifyMe">Sign up</a> so
                    that you can be alerted when your email address shows up in
                    future data breaches.
                </p>
            </Container>
        </Segment>,
        <Segment attached color="blue">
            <Header
                as="h3"
                content="Visit websites through HTTPS"
                textAlign="center"
            />
            <Container text>
                <p>
                    Have you ever seen something like this in your browser's URL
                    bar and wondered what it means?
                </p>

                <Image
                    bordered
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e5/HTTPS_icon.png"
                    size="small"
                />

                <p>
                    HTTP is a standard for how data is transmitted on the
                    internet. HTTPS is a secure (hence the 'S' at the end)
                    version of this standard. With HTTPS, the information that
                    is transmitted between you and the website is concealed.
                    With plain HTTP, a hacker in the middle can view whatever
                    you send and receive.
                </p>

                <p>
                    Whenever you are doing anything sensitive, like logging in
                    or providing credit card information, it should be done over
                    HTTPS. A website that allows these activities over HTTP is
                    not secure. Take care to double check.
                </p>

                <p>
                    You can also install{' '}
                    <a href="https://www.eff.org/https-everywhere">
                        HTTPS Everywhere
                    </a>, which is a free browser extension that will try to
                    make as much of your web activity go through HTTPS as
                    possible.
                </p>
            </Container>
        </Segment>,
        <Segment attached color="blue">
            <Header
                as="h3"
                content="Use two-step authentication"
                textAlign="center"
            />
            <Container text textAlign="left">
                <p>
                    Two-step authentication means that when you log in to a
                    service, you have to verify your identity in more than one
                    way, making it harder for hackers to break into your account
                    because they need more than just your password. For example,
                    you might have to enter a code that is texted to you. This
                    may seem annoying, but you should at least use it for
                    particularly important accounts, like your email account.
                    Here are instructions for setting up two-step authentication
                    on some popular services:
                </p>

                <List bulleted>
                    {TWO_FACTOR_LINKS.map(({service, link}) => (
                        <List.Item key={service}>
                            <a href={link}>{service}</a>
                        </List.Item>
                    ))}
                </List>
            </Container>
        </Segment>,
        <Segment attached color="blue">
            <Header
                as="h3"
                content="Use a password manager"
                textAlign="center"
            />
            <Container text>
                <p>
                    Password managers are services that generate and store your
                    passwords for you. They can generate very secure passwords
                    and relieve you of the burden of remembering them. They can
                    also autofill your information to make logging in easy, even
                    on mobile devices. Here are some options:
                </p>

                <List bulleted>
                    {PASSWORD_MANAGERS.map(({service, link}) => (
                        <List.Item key={service}>
                            <a href={link}>{service}</a>
                        </List.Item>
                    ))}
                </List>
            </Container>
        </Segment>,
        <Segment attached color="blue">
            <Header as="h3" content="Use an ad blocker" textAlign="center" />
            <Container text>
                <p>
                    Ad blockers are programs that stop ads and trackers from
                    loading. Companies use trackers to collect data on your
                    browsing activity in order to serve targeted ads. That's how
                    you can view a product on one website and then see ads for
                    the same product on a totally different website days later.
                </p>

                <p>
                    Blocking ads is good for security because ads can be used to
                    deliver viruses and other malicious software. This technique
                    is called{' '}
                    <a href="https://en.wikipedia.org/wiki/Malvertising">
                        malvertising
                    </a>.
                </p>

                <p>
                    Keep in mind that many content creators depend on
                    advertising for funding. If you do decide to use an ad
                    blocker, consider finding another way to support them, such
                    as purchasing a subscription. You can also disable the ad
                    blocker on a per-site basis.
                </p>

                <Header as="h4" content="Desktop" />

                <p>
                    You can install the free{' '}
                    <a href="https://github.com/gorhill/uBlock#ublock-origin">
                        uBlock Origin
                    </a>{' '}
                    browser extension.
                </p>

                <List bulleted>
                    {UBLOCK_ORIGIN_LINKS.map(({browser, link}) => (
                        <List.Item key={browser}>
                            <a href={link}>{browser}</a>
                        </List.Item>
                    ))}
                </List>

                <Header as="h4" content="Mobile" />

                <p>
                    You can use the free{' '}
                    <a href="https://www.mozilla.org/en-US/firefox/focus/">
                        Firefox Focus
                    </a>{' '}
                    browser.
                </p>

                <List bulleted>
                    {FIREFOX_FOCUS_LINKS.map(({platform, link}) => (
                        <List.Item key={platform}>
                            <a href={link}>{platform}</a>
                        </List.Item>
                    ))}
                </List>
            </Container>
        </Segment>
    ];
};

export default Action;
