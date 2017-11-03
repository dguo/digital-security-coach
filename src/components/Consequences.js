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
                    Here are some ways:
                </p>

                <Header as="h4" color="red" content="Identity theft" />

                <p>
                    Your personal information can end up being distributed or
                    sold, and one of the main things people do with that
                    information is to commit identity theft. Armed with your
                    information, someone else can open accounts in your name,
                    apply for credit cards, and even{' '}
                    <a href="https://www.cnbc.com/2017/09/18/your-next-worry-after-the-equifax-breach-fake-tax-returns.html">
                        file tax returns
                    </a>{' '}
                    to try to steal your refunds.
                </p>

                <Header
                    as="h4"
                    color="red"
                    content="Hacked webcams and microphones"
                />

                <p>
                    Viruses can be programmed to activate your webcam without
                    you knowing (they can turn off the indicator light while
                    keeping the webcam on). Hackers can then collect pictures
                    and videos of you, which they can use to extort you.{' '}
                    <a href="http://www.bbc.com/news/uk-22967622">
                        One hacker said in 2013
                    </a>{' '}
                    that access to a woman's webcam could be bought for about $1
                    on an online black market. You may want to{' '}
                    <a href="http://www.slate.com/blogs/future_tense/2016/09/15/the_best_ways_to_cover_a_webcam.html">
                        cover your webcam
                    </a>{' '}
                    with a sticker or tape since it's very hard to guarantee
                    that you will never get such a virus.
                </p>

                <Header as="h4" color="red" content="Ransomware" />

                <p>
                    Ransomware refers to viruses that lock your device or files
                    until you pay money to the hackers. Sometimes there will be
                    a deadline, at which point the files are permanently
                    deleted. In 2017, a{' '}
                    <a href="http://www.npr.org/sections/thetwo-way/2017/05/12/528119808/large-cyber-attack-hits-englands-nhs-hospital-system-ransoms-demanded">
                        global ransomware attack
                    </a>{' '}
                    affected computers worldwide, including those in at least 16
                    hospitals in England, locking patients' records.
                </p>

                <Header as="h4" color="red" content="Physical harm" />

                <p>
                    As more of our physical world becomes digitally connected,
                    we also face greater threats from digital breaches. In 2017,
                    the U.S. Food and Drug Administration had to{' '}
                    <a href="http://www.abc.net.au/news/2017-08-31/pacemakers-recall-hacking-risk-australians-could-have-them/8860368">
                        recall certain pacemakers
                    </a>{' '}
                    because "hackers could remotely cause the batteries to
                    rapidly go flat or force the pacemakers to run at
                    potentially deadly speeds." This doesn't mean the benefits
                    of going digital aren't worth it, but it does mean that we
                    should account for these new vulnerabilities.
                </p>

                <Header as="h4" color="red" content="Doxing" />

                <p>
                    <a href="https://en.wikipedia.org/wiki/Doxing">
                        Doxing
                    </a>{' '}
                    refers to the practice of finding personal information about
                    an individual and making it public. Sometimes the
                    information is already public (like on a social media
                    website), but sometimes it is obtained through hacking. The
                    goal could be to extort, shame, or harass the target.
                </p>
            </Container>
        </Segment>
    );
};

export default Consequences;
