import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import UploadedPhotoListItem from '../uploadedPhotoListItem';
import * as Styled from './style';

const UploadedPhotoList = ({ photos, onRemove }) => (
    <Styled.ListWrapper>
        {photos.map((photo) => (
            <UploadedPhotoListItem
                key={photo.id}
                photoName={photo.name}
                onClick={() => onRemove(photo.id)}
                onRemove={() => onRemove(photo.id)}
            />
        ))}
    </Styled.ListWrapper>
);

UploadedPhotoList.propTypes = {
    photos: PropTypes.instanceOf(List),
    onRemove: PropTypes.func.isRequired,
};

export { UploadedPhotoList };
