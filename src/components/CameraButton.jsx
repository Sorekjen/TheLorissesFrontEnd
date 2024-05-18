import React from 'react';
import Button from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const CameraButton = ({ onClick }) => {
    return (
        <Button variant="contained" color="primary" onClick={onClick}>
            <CameraAltIcon />
        </Button>
    );
};

export default CameraButton;