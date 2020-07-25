import React from 'react';
import { shallow } from 'enzyme';
import { RequestFeedbackPhotoBox } from '.';

describe('Given RequestFeedbackPhotoBox component', () => {
    describe('when rendering', () => {
        const onUpload = jest.fn();
        const wrapper = shallow(
            <RequestFeedbackPhotoBox onUpload={onUpload} />,
        );

        it('should match with snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });
    });
});
