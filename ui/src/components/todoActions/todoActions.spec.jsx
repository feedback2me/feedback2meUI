import React from 'react';
import { shallow } from 'enzyme';
import TodoActions from '.';

describe('Given Footer', () => {
    const wrapper = shallow(<TodoActions />);

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
