import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'immutable';
import { RequestFeedback } from '.';
import { UploadedPhotoList } from '../../components/uploadedPhotoList';

describe('Given RequestFeedback component', () => {
    const photo1 = {
        id: 1,
        name: 'Serkan kankam',
    };

    const photo2 = {
        id: 2,
        name: 'Serkana satcam mac',
    };

    const photos = List([photo1, photo2]);

    const onRemoveMock = jest.fn();
    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(<RequestFeedback onRemove={onRemoveMock} />);
    });

    describe('when rendering', () => {
        it('should pass down photos as props', () => {
            const actual = wrapper.find(UploadedPhotoList).props().photos;
            expect(actual).toEqual(photos);
        });
    });

    describe('when onRemove is called', () => {
        it('should log to console', () => {
            wrapper.find(UploadedPhotoList).props().onRemove(1);
            expect(onRemoveMock).toHaveBeenCalledWith(1);
        });
    });
});
