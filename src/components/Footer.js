import React from 'react';
import {Segment} from 'semantic-ui-react';

const Footer = () => {
    return (
        <Segment attached color="green" secondary textAlign="center">
            <p>
                Made by <a href="https://dannyguo.com">Danny Guo</a>.
                Hosted on <a href="https://github.com/dguo/digital-security-coach">GitHub</a> with a <a href="https://github.com/dguo/digital-security-coach/blob/master/LICENSE">
                    MIT license
                </a>.
                Powered by <a href="https://haveibeenpwned.com/">Have I been pwned?</a> and <a href="https://netlify.com">Netlify</a>.
                Logos provided by <a href="https://clearbit.com/">Clearbit</a>.
            </p>
        </Segment>
    );
};

export default Footer;
