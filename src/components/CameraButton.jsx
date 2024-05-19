import React from 'react';
import Button from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const CameraButton = ({ onClick }) => {
    return (
        <Button variant="contained" color={green[300]} onClick={onClick}>
            <CameraAltIcon />
        </Button>
    );
};

export default CameraButton;