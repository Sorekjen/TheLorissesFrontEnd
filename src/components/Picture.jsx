import React from 'react';
import { Card, CardMedia } from '@mui/material';

const Picture = ({ isVisible, src }) => {
    return (
        <div>
            {isVisible && (
                <Card>
                    <CardMedia component="img" src={src} alt="A picture" />
                </Card>
            )}
        </div>
    );
};

export default Picture;