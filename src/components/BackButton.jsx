import React from 'react';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';

const BackButton = ({onClick}) => {

    return (
        <Button variant="contained" onClick={onClick}>
            Back
        </Button>
    );
};

export default BackButton;