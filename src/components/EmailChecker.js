import React from 'react';
import MediaQuery from 'react-responsive';
import {
    Button,
    Container,
    Divider,
    Form,
    Header,
    Image,
    Item,
    Message,
    Responsive,
    Segment,
    Statistic,
    Table
} from 'semantic-ui-react';

import {
    checkForBreaches,
    checkForPastes,
    getPasteUrl,
    RATE_LIMIT_MS
} from '../pwned';

function getFileCell(source, id, title) {
    const url = getPasteUrl(source, id);
    return url ? (
        <a href={url}>
            {title || 'No name'}
        </a>
    ) : (
        title || 'No name'
    );
}

function formatLeakedInfo(dataClasses) {
    return `Leaked data: ${dataClasses.join(', ')}`;
}

class EmailChecker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            breaches: [],
            error: '',
            hasResults: false,
            loading: false,
            pastes: [],
            rateLimited: false
        };
    }

    handleEmailSubmission = async e => {
        if (this.state.rateLimited) {
            return;
        }

        let email = e.target.email.value;
        email = email.trim();

        this.setState({
            breaches: [],
            error: email ? '' : 'Please enter your email address.',
            hasResults: false,
            loading: Boolean(email),
            pastes: [],
            rateLimited: Boolean(email)
        });

        if (!email) {
            return;
        }

        try {
            const pastes = await checkForPastes(email);
            const breaches = await checkForBreaches(email);

            this.setState({
                breaches,
                hasResults: true,
                loading: false,
                pastes
            });
        } catch (error) {
            this.setState({
                error: 'There was an unexpected error.',
                loading: false,
            });
        }

        setTimeout(() => {
            this.setState({
                rateLimited: false
            });
        }, RATE_LIMIT_MS);
    }

    render() {
        const breaches = this.state.breaches.length ? [
            <Divider hidden />,
            <Container text textAlign="left">
                <Item.Group divided>
                    {this.state.breaches.map(breach =>
                        <Item>
                            <Item.Image shape="rounded" size='tiny'
                                src={`//logo.clearbit.com/${breach.Domain}`}
                            />

                            <Item.Content>
                                <Item.Header>{breach.Title}</Item.Header>
                                <Item.Meta>
                                    {breach.BreachDate.slice(0, 10)}
                                </Item.Meta>
                                <Item.Description>
                                    {formatLeakedInfo(breach.DataClasses)}
                                </Item.Description>
                                <Item.Extra>
                                    <Statistic color="red"
                                        horizontal
                                        label="Accounts"
                                        value={breach.PwnCount.toLocaleString()}
                                        size="mini" />
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    )}
                </Item.Group>
            </Container>
        ] : null;

        const pastes = this.state.pastes.length ? [
            <Divider hidden />,
            <Table celled color="blue" style={{
                margin: '0 auto',
                maxWidth: '30em'
            }}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>File</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <MediaQuery
                            minWidth={Responsive.onlyTablet.minWidth}
                        >
                            <Table.HeaderCell textAlign="right">
                                Emails
                            </Table.HeaderCell>
                        </MediaQuery>
                        <MediaQuery
                            maxWidth={Responsive.onlyMobile.maxWidth}
                        >
                            <Table.HeaderCell>
                                Emails
                            </Table.HeaderCell>
                        </MediaQuery>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.state.pastes.map(paste =>
                        <Table.Row key={`${paste.Source}/${paste.Id}`}>
                            <Table.Cell>
                                {getFileCell(
                                    paste.Source,
                                    paste.Id,
                                    paste.Title
                                )}
                            </Table.Cell>
                            <Table.Cell collapsing>
                                {paste.Date
                                    ?  paste.Date.slice(0, 10)
                                    : 'Unknown'}
                            </Table.Cell>
                            <MediaQuery
                                minWidth={Responsive.onlyTablet.minWidth}
                            >
                                <Table.Cell collapsing negative
                                    textAlign="right"
                                >
                                    {paste.EmailCount.toLocaleString()}
                                </Table.Cell>
                            </MediaQuery>
                            <MediaQuery
                                maxWidth={Responsive.onlyMobile.maxWidth}
                            >
                                <Table.Cell collapsing negative>
                                    {paste.EmailCount.toLocaleString()}
                                </Table.Cell>
                            </MediaQuery>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        ] : null;

        const breachResults = this.state.hasResults ? [
            <Divider hidden />,
            <Container text textAlign="left">
                <p>
                    {'Your email address was found in '}
                    <span
                        className={this.state.breaches.length ? 'red' : 'green'}
                    >
                        {`${this.state.breaches.length}
                          breach${this.state.breaches.length === 1 ? '' : 'es'}.  `}
                    </span>
                    {`${this.state.breaches.length === 0 ? "That's good!" : ''}
                      Keep in mind that there may be breaches that the service
                      doesn't know about, so your actual exposure may be
                      greater.`}
                </p>
            </Container>
        ] : null;

        const pasteResults = this.state.hasResults ? [
            <Container text textAlign="left">
                <Divider section />
                <p>
                    {'Your email address was found in '}
                    <span
                        className={this.state.pastes.length ? 'red' : 'green'}
                    >
                        {`${this.state.pastes.length}
                          paste${this.state.pastes.length === 1 ? '' : 's'}. `}
                    </span>
                    A paste is a file that is posted online. Hackers regularly
                    post public pastes containing personal information. For
                    more details regarding how pastes work, read
                    the Have I been pwned? <a href="https://haveibeenpwned.com/Pastes">explanation</a>.
                </p>
            </Container>
        ] : null;

        return (
            <Segment attached color="blue" textAlign="center">
                <Header as="h3" content="Check your email address" />

                <Container text textAlign="left">
                    <p>
                        This will check your email address
                        with <a href="https://haveibeenpwned.com/">Have I been pwned?</a>,
                        which is a public service that collects information regarding data breaches to help people better understand their exposure. Your email address will not be sent to us.
                    </p>
                </Container>

                <Divider hidden />

                <Form onSubmit={this.handleEmailSubmission}>
                    <Form.Input style={{maxWidth: '30em'}} name="email"
                        placeholder="Email address" type="email" />

                    <Button color="green"
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

                {breachResults}
                {breaches}
                {pasteResults}
                {pastes}
            </Segment>
        );
    }
}

export default EmailChecker;
