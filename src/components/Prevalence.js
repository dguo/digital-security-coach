import React from 'react';
import {Container, Header, List, Segment} from 'semantic-ui-react';

const Prevalence = () => {
    return (
        <Segment attached color="blue">
            <Container text>
                <Header as="h3" content="Prevalence" textAlign="center" />
                <p>
                    Digital security is really hard. Organizations and
                    individuals are hacked frequently, and you probably don't
                    even know about it most of the time, even though some cases
                    do make national headlines.
                </p>

                <p>
                    Large, well-known companies are not immune to being hacked.
                    Here are some cases:
                </p>

                <List bulleted>
                    <List.Item>
                        <a href="http://money.cnn.com/2017/10/03/technology/business/yahoo-breach-3-billion-accounts/index.html">Yahoo was hacked in 2013</a>, leaking
                        names, email addresses, and passwords for about three billion
                        accounts across its various websites.
                    </List.Item>
                    <List.Item>
                        Equifax, one of the three major credit reporting agencies, was <a href="https://www.consumer.ftc.gov/blog/2017/09/equifax-data-breach-what-do">hacked in mid-2017</a>, leaking personal information for about 143 million
                        people. Some of the information included names, Social Security numbers, addresses, birth dates, and driver's license numbers.
                    </List.Item>
                    <List.Item>
                        <a href="https://www.washingtonpost.com/news/the-switch/wp/2014/05/21/ebay-asks-145-million-users-to-change-passwords-after-data-breach/">eBay was hacked in 2014</a>, leaking names, email addresses, addresses, phone numbers and birth dates for up to 145 million users.
                    </List.Item>
                </List>
           </Container>
        </Segment>
    );
};

export default Prevalence;
