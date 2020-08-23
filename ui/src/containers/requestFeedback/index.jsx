import React from 'react';
import { List } from 'immutable';
import { UploadedPhotoList } from '../../components/uploadedPhotoList';

const photo1 = {
    id: 1,
    name: 'Serkan kankam',
};

const photo2 = {
    id: 2,
    name: 'Serkana satcam mac',
};

const photos = List([photo1, photo2]);

const RequestFeedback = ({ onRemove }) => {
    const handleRemove = (id) => {
        console.log('Added', id);
        onRemove && onRemove(1);
    };

    return <UploadedPhotoList photos={photos} onRemove={handleRemove} />;
};

export { RequestFeedback };
