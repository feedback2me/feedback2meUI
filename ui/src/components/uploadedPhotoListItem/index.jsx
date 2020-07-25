import React from 'react';
import PropTypes from 'prop-types';
import { DeleteOutlined } from '@ant-design/icons';
import * as Styled from './style';

const UploadedPhotoListItem = ({ onClick, onRemove, photoName, photo }) => (
    <li onClick={onClick}>
        <Styled.Text>{photoName}</Styled.Text>
        <DeleteOutlined onClick={onRemove} />
    </li>
);

UploadedPhotoListItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    photoName: PropTypes.string.isRequired,
};

export default UploadedPhotoListItem;
