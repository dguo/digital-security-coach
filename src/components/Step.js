import React from 'react';
import {Header as SUIHeader, Segment} from 'semantic-ui-react';

const Step = (props) => {
    return (
        <Segment attached color={props.color} inverted textAlign="center">
            <SUIHeader as="h2" content={props.title} size="large" />
        </Segment>
    );
};

export default Step;
