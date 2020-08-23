import React from 'react';

import { RequestFeedbackPhotoBox } from '../../components/requestFeedbackPhotoBox';

export const RequestFeedbackPage = () => {
    const onUpload = () => {
        console.log('upload clicked!');
    };

    return (
        <>
            <RequestFeedbackPhotoBox onUpload={onUpload} />
        </>
    );
};
