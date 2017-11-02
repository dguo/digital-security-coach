import React from 'react';
import {mount} from 'enzyme';

import PasswordChecker from './PasswordChecker';

describe('PasswordChecker', () => {
    it('should render', () => {
        mount(<PasswordChecker />);
        // checker.find('input').instance().value = 'password';
        // checker.find('button').simulate('submit');
        // checker.find('form').simulate('submit');
    });
});
