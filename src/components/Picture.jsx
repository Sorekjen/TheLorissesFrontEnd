import React from 'react';
import { Card, CardMedia } from '@mui/material';

const Picture = ({ isVisible, src }) => {
    return (
        <div>
            {isVisible && (
                <Card>
                    <CardMedia component="img" src={src} alt="A picture" style={{ width: 400, height: 200 }} />
                </Card>
            )}
        </div>
    );
};

export default Picture;