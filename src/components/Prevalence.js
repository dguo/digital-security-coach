import React from 'react';
import {
    Container,
    Header,
    List,
    Reveal,
    Segment,
    Statistic
} from 'semantic-ui-react';

const Prevalence = () => {
    return (
        <Segment attached color="blue">
            <Container text>
                <Header as="h3" content="Prevalence" textAlign="center" />
                <p>
                    Digital security is a really hard problem. Individuals and
                    organizations are hacked frequently, and you probably don't
                    even know about it most of the time. As we put more and more
                    information online and in digital systems, hackers have an
                    ever greater incentive to break in.
                </p>

                <p>
                    In 2017, a{' '}
                    <a href="https://www.forbes.com/sites/samanthadrake1/2017/02/03/chances-are-your-startup-is-going-to-get-hacked-heres-what-to-do/">
                        survey
                    </a>{' '}
                    of small and medium sized business found that more than half
                    reported being attacked in the past year. Guess how much
                    money each company lost on average (damage to or theft of
                    digital assets and disruption of operations):
                </p>

                <p>
                    <Reveal animated="move left">
                        <Reveal.Content visible>
                            <p className="reveal-message">
                                Hover or press to reveal
                            </p>
                        </Reveal.Content>
                        <Reveal.Content hidden>
                            <Statistic
                                color="red"
                                className="reveal-statistic"
                                horizontal
                                value="$1,835,011"
                                size="mini"
                            />
                        </Reveal.Content>
                    </Reveal>
                </p>

                <p>
                    You might think that large, well-known companies have the
                    expertise and resources to fend off hackers, but the truth
                    is that they are not immune. Here are just a few cases:
                </p>

                <List bulleted>
                    <List.Item>
                        <a href="http://money.cnn.com/2017/10/03/technology/business/yahoo-breach-3-billion-accounts/index.html">
                            Yahoo was hacked in 2013
                        </a>, leaking names, email addresses, and passwords for
                        about 3 billion accounts across its various websites.
                    </List.Item>
                    <List.Item>
                        Equifax, one of the three major credit reporting
                        agencies, was{' '}
                        <a href="https://www.consumer.ftc.gov/blog/2017/09/equifax-data-breach-what-do">
                            hacked in 2017
                        </a>, leaking personal information for about 143 million
                        people. Some of the information included names, Social
                        Security numbers, addresses, birth dates, and driver's
                        license numbers.
                    </List.Item>
                    <List.Item>
                        <a href="https://www.washingtonpost.com/news/the-switch/wp/2014/05/21/ebay-asks-145-million-users-to-change-passwords-after-data-breach/">
                            eBay was hacked in 2014
                        </a>, leaking names, email addresses, addresses, phone
                        numbers and birth dates for up to 145 million users.
                    </List.Item>
                    <List.Item>
                        <a href="https://www.usatoday.com/story/money/business/2014/11/06/home-depot-hackers-stolen-data/18613167/">
                            Home Depot was hacked in 2014
                        </a>, leaking information for 56 million credit and
                        debit cards.
                    </List.Item>
                </List>
            </Container>
        </Segment>
    );
};

export default Prevalence;
