import React from 'react';
import Button from '@mui/material/Button';

const BackButton = ({onClick}) => {

    return (
        <Button color={green[300]} variant="contained" onClick={onClick}>
            Back
        </Button>
    );
};

export default BackButton;