import React from 'react';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';

const CategoryButton = ({ onClick, text }) => {
    const handleClick = () => {
        onClick(); // Call the method passed in props
    };

    return (
        <Button
            variant="contained"
            onClick={handleClick}
            color='success'
            startIcon={<AddIcon />}
        >
            {text}
        </Button>
    );
};

export default CategoryButton;