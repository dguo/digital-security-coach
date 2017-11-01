import React from 'react';
import PropTypes from 'prop-types';
import {Header as SUIHeader, Segment} from 'semantic-ui-react';

const Step = props => {
    return (
        <Segment attached color={props.color} inverted textAlign="center">
            <SUIHeader as="h2" content={props.title} size="large" />
        </Segment>
    );
};

Step.propTypes = {
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Step;
