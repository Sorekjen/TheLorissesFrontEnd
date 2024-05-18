import React from 'react';
import Button from '@mui/material/Button';

const BackButton = ({onClick}) => {

    return (
        <Button variant="contained" onClick={onClick}>
            Back
        </Button>
    );
};

export default BackButton;