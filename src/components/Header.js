import React from 'react';
import {Header as SUIHeader, Segment} from 'semantic-ui-react';

const Header = () => {
    return (
        <Segment attached color="green" inverted textAlign="center">
            <SUIHeader
                as="h1"
                style={{margin: '0 auto', display: 'initial'}}
                icon="shield"
                content="Digital Security Coach"
                size="huge"
            />
        </Segment>
    );
};

export default Header;
