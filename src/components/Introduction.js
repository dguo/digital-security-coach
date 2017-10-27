import React from 'react';
import {Header as SUIHeader, List, Segment} from 'semantic-ui-react';

const SELLING_POINTS = [
    {point: "Free", description: "We aren't here to sell you anything."},
    {point: "Quick", description: "We explain things with as little jargon and as few unnecessary details as possible, making this a quick read."},
    {point: "Easy", description: "We recommend solutions that are practical for the average person."}
];

const Introduction = () => {
    return (
        <Segment attached padded>
            <SUIHeader as="h2"
                color="green"
                content="Take a crash course on digital security."
                subheader="Learn how your digital life can be endangered and what you can do to protect yourself."
                textAlign="center" />

            <List id="selling-points" relaxed size="large">
                {SELLING_POINTS.map(({point, description}) =>
                    <List.Item key={point}>
                        <List.Icon className="green" name="thumbs up" />
                        <List.Content>
                            <List.Header>{point}</List.Header>
                            <List.Description>{description}</List.Description>
                        </List.Content>
                    </List.Item>
                )}
            </List>
        </Segment>
    );
};

export default Introduction;
