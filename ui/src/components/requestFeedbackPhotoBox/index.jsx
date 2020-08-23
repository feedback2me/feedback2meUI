import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style';
import { RequestFeedback } from '../../containers/requestFeedback';

const UploadButton = ({ onUpload }) => (
    <a href="#" onClick={onUpload}>
        Upload
    </a>
);

const RequestFeedbackPhotoBox = ({ onUpload }) => {
    return (
        <div>
            <div>
                <Styled.PhotoBox
                    title="Uploaded photos"
                    extra={<UploadButton onUpload={onUpload} />}
                >
                    <RequestFeedback />
                </Styled.PhotoBox>
            </div>
        </div>
    );
};

RequestFeedbackPhotoBox.propTypes = {
    onUpload: PropTypes.func.isRequired,
};

export { RequestFeedbackPhotoBox };
