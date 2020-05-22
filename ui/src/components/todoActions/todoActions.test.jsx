import React from 'react';
import { shallow } from 'enzyme';
import Footer from '.';

describe('Given Footer', () => {
    const wrapper = shallow(<Footer />);
    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
